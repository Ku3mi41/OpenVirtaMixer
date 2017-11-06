angular
  .module('app')
  .component('welcomeBlock', {
    templateUrl: 'app/components/welcomeBlock/welcomeBlock.html',
    controller: welcomeBlockController,
    bindings: {
      showManufactureCalc: '&'
    }
  });

function welcomeBlockController(dataService) {
  let vm = this;

  /**
   * Get dataService selected product
   * @returns {*}
   */
  vm.selectedProduct = function () {
    return dataService.manufactures[0];
  }
}
