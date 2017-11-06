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
  vm.filterRecipes = function(recipes, ingredientIndex) {
    return recipes.filter(function(recipe) {
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
  vm.setBonus = function(newBonus) {
    vm.manufacture.bonus = newBonus;
    vm.doCalc();
  };

  /**
   * Call calc cycle for requested manufacture
   */
  vm.doCalc = function() {
    dataService.doCalc(vm.manufacture);
    $('[data-toggle="tooltip"]').tooltip();
  };

  /**
   * Show all existing manufactures and recipes for requested index
   * @param ingredientIndex
   * @param ingQuantity
   * @param ingId
   */
  vm.addSource = function(ingredientIndex, ingQuantity, ingId) {
    let availableRecipes = vm.filterRecipes(PRODUCTS, ingredientIndex);
    let availableManufactures = vm.filterRecipes(dataService.manufactures, ingredientIndex);

    if (availableManufactures.length) {
      // if manufactures with ingredient exist
      availableRecipes = availableRecipes.concat(availableManufactures);
    }

    if (availableRecipes.length === 1) {
      // if only source -> add manufacture
      dataService.addManufacture(availableRecipes[0], ingQuantity, vm.manufacture.mnfId, ingId);
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
  vm.updateCalc = function() {
    vm.manufacture = dataService.selectedManufacture;
    vm.doCalc();
  };

  dataService.registerObserverCallback(vm.updateCalc);

  /**
   * Go to another manufacture
   * @param mnfId
   */
  vm.changeManufacture = function(mnfId) {
    dataService.selectedManufacture = dataService.manufactures[mnfId];
    vm.updateCalc();
  };

  /**
   * Generate color by string hash
   * @param str
   * @returns {string}
   */
  vm.getColorByString = function(str) {
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
