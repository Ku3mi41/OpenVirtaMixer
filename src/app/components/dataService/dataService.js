angular
  .module('app')
  .service('dataService', dataService);

function dataService($rootScope, $filter) {
  let service = this;

  service.selectorProducts = PRODUCTS;
  service.globalProfitByWorker = 0;

  service.map = {
    nodes: [],
    links: []
  };

  service.manufactures = [];
  service.observerCallbacks = [];

  /**
   * Register observer
   * @param callback
   */
  service.registerObserverCallback = function(callback) {
    service.observerCallbacks.push(callback);
  };

  /**
   * Notify all observers
   */
  service.notifyObservers = function() {
    angular.forEach(service.observerCallbacks, function(callback) {
      callback();
    });
  };

  /**
   * Calculate mine difficult coefficient
   * @param mineDifficult
   * @returns {number}
   */
  service.calculateDiffCoefficient = function(mineDifficult) {
    return Math.pow(1.4, Math.abs(3 - mineDifficult));
  };

  /**
   * Calculate new workers quantity for requested product number
   * @param quantity
   * @param manufacture
   * @param pbq
   * @returns {*}
   */
  service.reverseCalcWorkersQuantity = function(quantity, manufacture, pbq) {
    quantity /= (manufacture.efficiency / 100);
    quantity /= Math.pow(1.05, manufacture.technology - 1);
    quantity /= pbq;

    switch (manufacture.e.sym) {
      case 'tractor':
        // farm
        return quantity * 52;
      case 'drill':
        // mine
        if (manufacture.mineDifficult >= 3) {
          return quantity * service.calculateDiffCoefficient(manufacture.mineDifficult);
        } else {
          return quantity /= service.calculateDiffCoefficient(manufacture.mineDifficult);
        }
    }
    return quantity;
  };

  /**
   * Calculate requested workers quantity
   * @param manufacture
   * @returns {*}
   */
  service.calculateWorkersQuantity = function(manufacture) {
    let i = 0;
    let resultWorkersQuantity = [];

    /**
     * Calculate requested workers quantity for product at this manufacture
     * @param result
     * @returns {number}
     */
    let calculateWorkersQuantity = function(result) {
      let neededQuantity = 0;
      service.manufactures.filter(n => n).forEach(function(serviceManufacture) {
        serviceManufacture.ip.forEach(function(serviceManufactureIngredient) {
          if (serviceManufactureIngredient.pi === result.pi && serviceManufactureIngredient.sourceMnf === manufacture.mnfId) {
            neededQuantity += serviceManufactureIngredient.quantity;
          }
        });
      });

      return Math.ceil(service.reverseCalcWorkersQuantity(neededQuantity, manufacture, result.pbq));
    };

    manufacture.rp.forEach(function(result) {
      resultWorkersQuantity[i++] = calculateWorkersQuantity(result);
    });

    return Math.max.apply(null, resultWorkersQuantity);
  };

  /**
   * Add new manufacture
   * @param recipe
   * @param targetId
   * @param ingId
   */
  service.addManufacture = function(recipe, targetId, ingId) {
    if (!recipe.mnfId) {
      recipe = angular.copy(recipe);
      // set default values
      recipe.bonus = 0;
      recipe.technology = 1;
      recipe.efficiency = 100;
      recipe.workersSalary = 100;
      recipe.mnfId = service.manufactures.length;
      recipe.rp[recipe.targetProductIndex].targetMnfId = targetId;
      recipe.rp[recipe.targetProductIndex].targetMnfIngId = ingId;
      recipe.ip.forEach(function(ingredient) {
        ingredient.quality = ingredient.mq || 1;
        ingredient.price = 1;
      });

      // mine / plant
      if (recipe.e.sym === 'tractor' || recipe.e.sym === 'saw') {
        recipe.baseQuality = 3;
      }

      // mine
      if (recipe.e.sym === 'drill') {
        recipe.mineDifficult = 1;
        recipe.baseQuality = 3;
      }

      // calc workersQuantity
      recipe.workersQuantity = service.calculateWorkersQuantity(recipe);

      // add new recipe
      service.manufactures.push(recipe);
    }

    // set source
    service.selectedManufacture.ip[ingId].sourceMnf = recipe.mnfId;
    service.selectedManufacture = recipe;
    // show new recipe in calc
    service.notifyObservers();
  };

  /**
   * All factory calculations
   * @param manufacture
   * @param automaticUpdate
   */
  service.doCalc = function(manufacture, automaticUpdate = false) {
    // set default values
    if (!manufacture.efficiency) {
      manufacture.efficiency = 100;
    }
    if (!manufacture.profitByWorker) {
      manufacture.profitByWorker = 0;
    }
    manufacture.bonus = manufacture.bonus | 0;

    if (manufacture.mnfId !== 0) {
      manufacture.workersQuantity = service.calculateWorkersQuantity(manufacture);
    }

    manufacture.workersQualification = Math.pow(manufacture.technology, 0.8);

    if (manufacture.e.pc !== 'Животные') {
      manufacture.machinesQuality = Math.pow(manufacture.technology, 1.2);
    } else {
      // farms
      manufacture.recommendedAnimals = Math.pow(manufacture.technology, 1.2);
    }

    let ingredientsSumQuality = 0;
    let ingredientsSumQuantity = 0;
    let totalIngredientsPrice = 0;

    manufacture.ip.forEach(function(ingredient) {

      let oldQuantity = ingredient.quantity;

      if (manufacture.e.pc === 'Животные') {
        ingredient.quantity = ingredient.q * manufacture.epw; // ing.quan * eqip per worker
        ingredient.quantity *= manufacture.workersQuantity;   // multiply by workers quantity
      } else {
        ingredient.quantity = ingredient.q / manufacture.rp[0].rq;         // ing.quantity / num of products by 1 product unit
        ingredient.quantity *= manufacture.rp[0].pbq;                      // multiply by num of products by 1 worker
        ingredient.quantity *= manufacture.workersQuantity;                // multiply by workers quantity
        ingredient.quantity *= Math.pow(1.05, manufacture.technology - 1); // multiply by technology coefficient
        ingredient.quantity *= (manufacture.efficiency / 100);             // multiply by efficiency
        ingredient.quantity = Math.ceil(ingredient.quantity);
      }

      // update source if exist
      if (ingredient.sourceMnf !== angular.undefined && ingredient.quantity && (ingredient.quantity !== oldQuantity)) {
        let sourceManufacture = service.manufactures[ingredient.sourceMnf];

        // we need go deeper... doCalc source manufacture
        service.doCalc(sourceManufacture, true);
      }

      ingredient.totalPrice = ingredient.quantity * ingredient.price;

      totalIngredientsPrice += ingredient.totalPrice;

      ingredientsSumQuality += ingredient.quality * ingredient.q;
      ingredientsSumQuantity += ingredient.q;
    });

    manufacture.totalIngredientsPrice = totalIngredientsPrice;

    let ingredientsTotalQuality = 0;
    if (manufacture.e.pc === 'Животные') {
      ingredientsTotalQuality = (manufacture.ip[0].quality * 0.3 + manufacture.machinesQuality * 0.7) * (manufacture.efficiency / 100);
    } else {
      ingredientsTotalQuality = ingredientsSumQuality / ingredientsSumQuantity * (manufacture.efficiency / 100);
    }

    let totalSalary = manufacture.workersSalary * manufacture.workersQuantity;
    let expenses = totalIngredientsPrice + totalSalary * 1.1;

    let totalProfit = 0;

    manufacture.rp.forEach(function(product) {
      let oldProductPrice = product.price;
      let oldProductQuantity = product.quantity;

      // QUANTITY
      product.quantity = manufacture.workersQuantity * product.pbq;   // prod.quantity * num of products by 1 worker
      product.quantity *= Math.pow(1.05, manufacture.technology - 1); // multiply by technology coefficient
      product.quantity *= (manufacture.efficiency / 100);             // multiply by efficiency

      if (manufacture.e.sym === 'drill') {
        // mine
        if (manufacture.mineDifficult >= 3) {
          product.quantity /= service.calculateDiffCoefficient(manufacture.mineDifficult);
        } else {
          product.quantity *= service.calculateDiffCoefficient(manufacture.mineDifficult);
        }
      }

      product.quantity = Math.floor(product.quantity);

      // QUALITY
      if (manufacture.e.sym === 'tractor' || manufacture.e.sym === 'saw') {
        // plant
        product.quality = Math.pow(manufacture.baseQuality, 0.5) * Math.pow(manufacture.technology, 0.65);
      } else if (manufacture.e.sym === 'drill') {
        // mine
        let mineQuality = 0.277202073 * Math.pow(manufacture.baseQuality, 1.2975); //TODO: wtf is 0.277202073?
        product.quality = mineQuality * Math.pow(manufacture.technology, 0.65);
      } else {
        // factory or farm
        product.quality = Math.pow(ingredientsTotalQuality, 0.5) * Math.pow(manufacture.technology, 0.65);
      }

      // limit quality by tech lvl
      if (product.quality > Math.pow(manufacture.technology, 1.3)) {
        product.quality = Math.pow(manufacture.technology, 1.3);
      } else if (product.quality < 1) {
        product.quality = 1;
      }

      product.quality = product.quality * (1 + (manufacture.bonus + product.qbp) / 100);

      // TEXES & PROFIT
      if (manufacture.incomeTaxCoefficient === angular.undefined) {
        manufacture.incomeTaxCoefficient = 20; // 20% by default
      }
      let incomeTaxCoefficient = manufacture.incomeTaxCoefficient / 100;
      let envdCoefficient = ENVD[product.name] ? (ENVD[product.name] / 100) : 1;

      product.netCost = expenses / product.quantity / manufacture.rp.length;
      product.netCost = parseFloat(product.netCost.toFixed(2));

      if (manufacture.e.sym === 'tractor') {
        // farm
        product.netCost *= 52;
      }

      // ENVD
      product.envdTax = product.netCost * incomeTaxCoefficient * envdCoefficient;
      product.changeTaxPoint = product.netCost * (1 + envdCoefficient);

      if (!product.price || automaticUpdate || service.globalProfitByWorker) {
        // automatic default price
        let numberOfProducts = manufacture.rp.length;
        let workersProfit = (service.globalProfitByWorker || manufacture.profitByWorker) * manufacture.workersQuantity / numberOfProducts;
        let profitByUnit = workersProfit / product.quantity;
        let newPrice = product.netCost + profitByUnit;

        if (newPrice > product.changeTaxPoint) {
          // INCOME TAX
          product.price = parseFloat((product.netCost + profitByUnit / (1 - incomeTaxCoefficient)).toFixed(2));
        } else {
          // ENVD
          product.price = parseFloat((newPrice + product.envdTax).toFixed(2));
        }
      }

      // INCOME TAX
      product.incomeTax = (product.price - product.netCost) * incomeTaxCoefficient;

      if (product.incomeTax < product.envdTax) {
        product.totalCost = product.netCost + product.envdTax;
      } else {
        product.totalCost = product.netCost + product.incomeTax;
      }

      // PROFIT
      product.profit = product.quantity * (product.price - product.totalCost);
      totalProfit += product.profit;

      // update target if exist
      if (product.targetMnfId !== angular.undefined && product.price && product.quantity &&
        (oldProductPrice !== product.price || oldProductQuantity !== product.quantity)) {

        // search all targets
        service.manufactures.filter(n => n).forEach(function(targetManufacture) {
          for (let i = 0; i < targetManufacture.ip.length; i++) {
            if (targetManufacture.ip[i].sourceMnf === manufacture.mnfId) {
              targetManufacture.ip[i].price = parseFloat(product.price.toFixed(2));
              targetManufacture.ip[i].quality = parseFloat(product.quality.toFixed(2));

              // we need go deeper... doCalc target manufacture
              service.doCalc(service.manufactures[targetManufacture.mnfId], true);
            }
          }
        });
      }

      // update map
      service.buildMap();
    });

    manufacture.profitByWorker = parseFloat((totalProfit / manufacture.workersQuantity).toFixed(2));
  };

  service.mapType = 'scheme';

  /**
   * Build new sankey map
   */
  service.buildMap = function() {
    let nodes = [];
    let links = [];

    service.manufactures.filter(n => n).forEach(function(manufacture) {
      let products = [];

      manufacture.rp.forEach(function(product) {
        products.push({
          img: product.img,
          quantity: product.quantity,
          quality: product.quality,
          price: product.price
        });
      });

      manufacture.ip.forEach(function(product) {
        if (product.sourceMnf !== angular.undefined) {
          let value = 0;

          switch (service.mapType) {
            case 'scheme':
              value = 1;
              break;
            case 'value':
              value = product.quantity;
              break;
            case 'cost':
              value = product.quantity * product.price;
              break;
          }

          links.push({
            source: product.sourceMnf,
            target: manufacture.mnfId,
            value
          });
        }
      });

      nodes.push({
        node: manufacture.mnfId,
        name: manufacture.s,
        products: products
      });
    });

    service.map = {
      nodes: nodes,
      links: links
    };

    $rootScope.$emit('dataService:mapUpdated');
  };
}
