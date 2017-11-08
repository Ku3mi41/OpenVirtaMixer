angular
  .module('app')
  .component('app', {
    templateUrl: 'app/containers/App.html',
    controller: App
  });

function App($scope, $rootScope, $window, dataService) {
  let vm = this;

  let headHeight = document.querySelectorAll('.jumbotron')[0].clientHeight + 50;

  vm.globalProfitByWorker = dataService.globalProfitByWorker;

  /**
   * Set global profit by worker
   */
  vm.setGlobalProfitByWorker = function() {
    dataService.globalProfitByWorker = vm.globalProfitByWorker;
    dataService.manufactures.filter(n => n).forEach(function(manufacture) {
      dataService.doCalc(manufacture, true);
    })
  };

  // map options
  vm.data = dataService.map;
  vm.options = {
    width: $window.innerWidth - 30,
    height: $window.innerHeight - headHeight,
    margin: {
      top: 1,
      right: 1,
      bottom: 6,
      left: 1
    },
    node: {
      width: 15,
      padding: 10,
      showValue: false
    },
    value: {
      format: ',.0f',
      unit: ''
    },
    dynamicLinkColor: true,
    trafficInLinks: false
  };

  /**
   * Show requested factory calc
   * @param index
   */
  vm.showManufactureCalc = function(index) {
    dataService.selectedManufacture = dataService.manufactures[index];
    dataService.notifyObservers();
    $('#factoryCalc').modal('show');
    $('[data-toggle="tooltip"]').tooltip('hide');
  };

  vm.mapType = dataService.mapType;

  /**
   * Change type of the map
   */
  vm.changeMapType = function() {
    dataService.mapType = vm.mapType;
    dataService.buildMap();
  };

  /**
   * Listener for map updates
   */
  let updateDestroyer = $rootScope.$on('dataService:mapUpdated', function() {
    vm.data = dataService.map;
  });

  /**
   * Map updater destroyer
   */
  $scope.$on('destroy', function() {
    updateDestroyer();
  });
}
