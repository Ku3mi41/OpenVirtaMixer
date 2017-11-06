angular
  .module('app')
  .component('productSelector', {
    templateUrl: 'app/components/productSelector/productSelector.html',
    controller: productSelectorController
  });

function productSelectorController(dataService, $scope, $rootScope) {
  let vm = this;
  let firstSelect = true;

  vm.products = dataService.selectorProducts;

  /**
   * Function for search box
   */
  vm.searchProducts = function() {
    if (vm.search) {
      vm.products = dataService.selectorProducts.filter(function(product) {
        return product.s.toLowerCase().search(vm.search.toLowerCase()) > -1;
      });
    } else {
      vm.products = dataService.selectorProducts;
    }
  };

  /**
   * Set first product or add new to service
   * @param product
   */
  vm.selectProduct = function(product) {
    if (firstSelect) {
      dataService.manufactures = [product];
      dataService.manufactures[0].mnfId = 0;
    } else {
      dataService.addManufacture(product, vm.newManufacture.ingQuantity, vm.newManufacture.targetMnfId, vm.newManufacture.ingId);
    }
    $('#productSelector').modal('hide');
  };

  /**
   * Update collection of products
   */
  let updateDestroyer = $rootScope.$on('factoryCalc:productsUpdated', function(event, ingQuantity, targetMnfId, ingId) {
    vm.newManufacture = {
      ingQuantity,
      targetMnfId,
      ingId
    };
    vm.products = dataService.selectorProducts;
    firstSelect = false;
  });

  /**
   * Updater destroyer
   */
  $scope.$on('destroy', function() {
    updateDestroyer();
  });
}
