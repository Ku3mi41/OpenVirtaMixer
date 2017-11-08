angular
  .module('app')
  .component('factoryCalc', {
    templateUrl: 'app/components/factoryCalc/factoryCalc.html',
    controller: factoryCalcController
  });

function factoryCalcController($rootScope, dataService) {
  let vm = this;

  /**
   * Search products with requested index
   * @param recipes
   * @param ingredientIndex
   */
  vm.filterRecipes = function (recipes, ingredientIndex) {
    return recipes.filter(n => n).filter(function (recipe) {
      for (let i = 0; i < recipe.rp.length; i++) {
        if (recipe.rp[i].pi === ingredientIndex) {
          recipe.targetProductIndex = i;
          return true;
        }
      }
    });
  };

  /**
   * Set new bonus amount
   * @param newBonus
   */
  vm.setBonus = function (newBonus) {
    vm.manufacture.bonus = newBonus;
    vm.doCalc();
  };

  /**
   * Call calc cycle for requested manufacture
   */
  vm.doCalc = function () {
    dataService.doCalc(vm.manufacture);
    $('[data-toggle="tooltip"]').tooltip();
  };

  /**
   * Call calc cycle with calculation new price
   */
  vm.doAutoCalc = function () {
    dataService.doCalc(vm.manufacture, true);
  };

  /**
   * Calculate new workers quantity for requested product number
   * @param quantity
   * @param pbq
   */
  vm.calculateNewWorkersQuantity = function(quantity, pbq) {
    vm.manufacture.workersQuantity = Math.ceil(dataService.reverseCalcWorkersQuantity(quantity, vm.manufacture, pbq));
    dataService.doCalc(vm.manufacture, true);
  };

  /**
   * Get global profit by worker
   * @returns {*}
   */
  vm.getGlobalProfitByWorker = function () {
    return dataService.globalProfitByWorker;
  };

  /**
   * Remove ingredient source
   * @param ingredient
   */
  vm.removeSource = function (ingredient) {
    let consumersCount = 0;
    dataService.manufactures.filter(n => n).forEach(function (manufacture) {
      manufacture.ip.forEach(function (manufactureIngredient) {
        if (manufactureIngredient.sourceMnf === ingredient.sourceMnf) {
          consumersCount++;
        }
      })
    });

    if (consumersCount === 1) {
      for (let i = 1; i < dataService.manufactures.length; i++) {
        if (dataService.manufactures[i]) {
          if (dataService.manufactures[i].mnfId === ingredient.sourceMnf) {
            // dataService.manufactures.splice(i, 1);
            delete  dataService.manufactures[i];
          }
        }
      }
    }

    delete ingredient.sourceMnf;
    dataService.notifyObservers();
  };

  /**
   * Show all existing manufactures and recipes for requested index
   * @param ingredientIndex
   * @param ingQuantity
   * @param ingId
   */
  vm.addSource = function (ingredientIndex, ingQuantity, ingId) {
    let availableRecipes = vm.filterRecipes(PRODUCTS, ingredientIndex);
    let availableManufactures = vm.filterRecipes(dataService.manufactures, ingredientIndex);

    if (availableManufactures.length) {
      // if manufactures with ingredient exist
      availableRecipes = availableRecipes.concat(availableManufactures);
    }

    if (availableRecipes.length === 1) {
      // if only source -> add manufacture
      dataService.addManufacture(availableRecipes[0], vm.manufacture.mnfId, ingId);
    } else {
      // many sources -> show manufacture selector
      dataService.selectorProducts = availableRecipes;
      $rootScope.$emit('factoryCalc:productsUpdated', ingQuantity, vm.manufacture.mnfId, ingId);
      $('#productSelector').modal('show');
      $('.modal-backdrop:last').css('z-index', 1050);
    }
  };

  /**
   * Function for callback subscription
   */
  vm.updateCalc = function () {
    vm.manufacture = dataService.selectedManufacture;
    vm.doCalc();
  };

  dataService.registerObserverCallback(vm.updateCalc);

  /**
   * Go to another manufacture
   * @param mnfId
   */
  vm.changeManufacture = function (mnfId) {
    dataService.selectedManufacture = dataService.manufactures[mnfId];
    vm.updateCalc();
  };

  /**
   * Generate color by string hash
   * @param str
   * @returns {string}
   */
  vm.getColorByString = function (str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    let colour = '#';
    for (let i = 0; i < 3; i++) {
      let value = (hash >> (i * 8)) & 0xFF;
      colour += ('00' + value.toString(16)).substr(-2);
    }
    return colour;
  };

  /**
   * Calculate ingredient proportion
   * @param ingredient
   * @returns {number}
   */
  vm.calculateIngredientPercent = function (ingredient) {
    return ingredient.totalPrice / vm.manufacture.totalIngredientsPrice * 100
  }
}
