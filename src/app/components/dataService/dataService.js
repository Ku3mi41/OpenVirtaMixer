angular
  .module('app')
  .service('dataService', dataService);

function dataService($rootScope, $filter) {
  let service = this;

  service.selectorProducts = PRODUCTS;

  service.map = {
    nodes: [],
    links: []
  };

  service.manufactures = [{
    'i': '123',
    's': 'Яхта',
    'e': {
      'pc': 'Промышленные товары',
      'pci': '1527',
      's': '/img/products/machine.gif',
      'i': '1529',
      'c': 'Станок',
      'sym': 'machine'
    },
    'epw': 4,
    'ip': [{
      'pi': '130',
      'q': 1,
      'mq': 0,
      'img': 'ship_body',
      'name': 'Корпус яхты',
      'quantity': 2,
      'totalPrice': 231848.34,
      'quality': 1,
      'price': 115924.17,
      'sourceMnf': 1
    }, {
      'pi': '131',
      'q': 1,
      'mq': 0,
      'img': 'yacht_equipment',
      'name': 'Оснащение яхты',
      'quantity': 2,
      'totalPrice': 237753.46,
      'quality': 1,
      'price': 118876.73,
      'sourceMnf': 4
    }, {
      'pi': '132',
      'q': 1,
      'mq': 0,
      'img': 'yacht_interior',
      'name': 'Интерьер яхты',
      'quantity': 2,
      'totalPrice': 71839.48,
      'quality': 1,
      'price': 35919.74,
      'sourceMnf': 11
    }],
    'rp': [{
      'pi': '133',
      'pbq': 0.001,
      'rq': 1,
      'qbp': 0,
      'img': 'yacht',
      'name': 'Яхта',
      'quantity': 2,
      'quality': 5.02883990520017,
      'profit': 0.003999999957159162,
      'netCost': 325720.64,
      'envdTax': 65144.128000000004,
      'price': 390864.77,
      'incomeTax': 13028.826000000001,
      'totalCost': 390864.76800000004
    }],
    'mnfId': 0,
    'workersQuantity': 1000,
    'efficiency': 100,
    'bonus': 0,
    'totalIngredientsPrice': 541441.28,
    'workersQualification': 7.30037210271847,
    'machinesQuality': 19.725021954206706,
    'img': 'yacht',
    'workersSalary': 100,
    'technology': 12
  }, {
    'i': '123',
    's': 'Корпус яхты',
    'e': {
      'pc': 'Промышленные товары',
      'pci': '1527',
      's': '/img/products/machine.gif',
      'i': '1529',
      'c': 'Станок',
      'sym': 'machine'
    },
    'epw': 4,
    'ip': [{
      'pi': '1476',
      'q': 40,
      'mq': 0,
      'quality': 1,
      'price': 8.12,
      'img': 'paint',
      'name': 'Краска',
      'quantity': 80,
      'totalPrice': 649.5999999999999,
      'sourceMnf': 2
    }, {
      'pi': '1463',
      'q': 300,
      'mq': 0,
      'quality': 1,
      'price': 2.92,
      'img': 'wood',
      'name': 'Древесина',
      'quantity': 600,
      'totalPrice': 1752,
      'sourceMnf': 6
    }, {
      'pi': '1477',
      'q': 50,
      'mq': 0,
      'quality': 1,
      'price': 1,
      'img': 'plastics',
      'name': 'Пластмасса',
      'quantity': 100,
      'totalPrice': 100,
      'sourceMnf': 5
    }, {
      'pi': '1480',
      'q': 50,
      'mq': 0,
      'quality': 1,
      'price': 1,
      'img': 'steel',
      'name': 'Сталь',
      'quantity': 100,
      'totalPrice': 100,
      'sourceMnf': 7
    }, {
      'pi': '1481',
      'q': 25,
      'mq': 0,
      'quality': 1,
      'price': 6.59,
      'img': 'glass',
      'name': 'Стекло',
      'quantity': 50,
      'totalPrice': 329.5,
      'sourceMnf': 18
    }],
    'rp': [{
      'pi': '130',
      'pbq': 0.001,
      'rq': 1,
      'qbp': 0,
      'targetMnfId': 0,
      'targetMnfIngId': 0,
      'img': 'ship_body',
      'name': 'Корпус яхты',
      'quantity': 2,
      'quality': 1,
      'netCost': 111465.55,
      'envdTax': 4458.622,
      'price': 115924.17,
      'incomeTax': 891.7239999999991,
      'totalCost': 115924.172,
      'profit': -0.0040000000153668225
    }],
    'targetProductIndex': 0,
    'img': 'ship_body',
    'bonus': 0,
    'technology': 1,
    'efficiency': 100,
    'workersSalary': 100,
    'mnfId': 1,
    'workersQuantity': 2000,
    'totalIngredientsPrice': 2931.1,
    'workersQualification': 1,
    'machinesQuality': 1
  }, {
    'i': '2404',
    's': 'Краска',
    'e': {
      'pc': 'Промышленные товары',
      'pci': '1527',
      's': '/img/products/machine.gif',
      'i': '1529',
      'c': 'Станок',
      'sym': 'machine'
    },
    'epw': 4,
    'ip': [{
      'pi': '1467',
      'q': 1,
      'mq': 0,
      'quality': 1,
      'price': 0.67,
      'img': 'oil',
      'name': 'Нефть',
      'quantity': 80,
      'totalPrice': 53.6,
      'sourceMnf': 3
    }, {
      'pi': '1483',
      'q': 0.5,
      'mq': 0,
      'quality': 1,
      'price': 1,
      'img': 'chemicals',
      'name': 'Химикаты',
      'quantity': 40,
      'totalPrice': 40,
      'sourceMnf': 28
    }],
    'rp': [{
      'pi': '1476',
      'pbq': 16,
      'rq': 1,
      'qbp': 0,
      'targetMnfId': 1,
      'targetMnfIngId': 0,
      'img': 'paint',
      'name': 'Краска',
      'quantity': 80,
      'quality': 1,
      'netCost': 8.04,
      'envdTax': 0.0804,
      'price': 8.12,
      'incomeTax': 0.016000000000000014,
      'totalCost': 8.120399999999998,
      'profit': -0.03199999999992542
    }],
    'targetProductIndex': 0,
    'img': 'paint',
    'bonus': 0,
    'technology': 1,
    'efficiency': 100,
    'workersSalary': 100,
    'mnfId': 2,
    'workersQuantity': 5,
    'totalIngredientsPrice': 93.6,
    'workersQualification': 1,
    'machinesQuality': 1
  }, {
    'i': '2395',
    's': 'Добыча нефти',
    'e': {
      'pc': 'Промышленные товары',
      'pci': '1527',
      's': '/img/products/drill.gif',
      'i': '12097',
      'c': 'Горно-шахтное оборудование',
      'sym': 'drill'
    },
    'epw': 5,
    'ip': [],
    'rp': [{
      'pi': '1467',
      'pbq': 100,
      'rq': 1,
      'qbp': 0,
      'targetMnfId': 2,
      'targetMnfIngId': 0,
      'img': 'oil',
      'name': 'Нефть',
      'quantity': 196,
      'quality': 1,
      'netCost': 0.56,
      'envdTax': 0.11200000000000002,
      'price': 0.67,
      'incomeTax': 0.022,
      'totalCost': 0.672,
      'profit': -0.39200000000000035
    }],
    'targetProductIndex': 0,
    'img': 'oil',
    'bonus': 0,
    'technology': 1,
    'efficiency': 100,
    'workersSalary': 100,
    'mnfId': 3,
    'mineDifficult': 1,
    'baseQuality': 1,
    'workersQuantity': 1,
    'totalIngredientsPrice': 0,
    'workersQualification': 1,
    'machinesQuality': 1
  }, {
    'i': '123',
    's': 'Оснащение яхты',
    'e': {
      'pc': 'Промышленные товары',
      'pci': '1527',
      's': '/img/products/machine.gif',
      'i': '1529',
      'c': 'Станок',
      'sym': 'machine'
    },
    'epw': 4,
    'ip': [{
      'pi': '1463',
      'q': 50,
      'mq': 0,
      'quality': 1,
      'price': 1,
      'img': 'wood',
      'name': 'Древесина',
      'quantity': 100,
      'totalPrice': 100,
      'sourceMnf': 6
    }, {
      'pi': '1477',
      'q': 25,
      'mq': 0,
      'quality': 1,
      'price': 8.14,
      'img': 'plastics',
      'name': 'Пластмасса',
      'quantity': 50,
      'totalPrice': 407,
      'sourceMnf': 5
    }, {
      'pi': '1480',
      'q': 25,
      'mq': 0,
      'quality': 1,
      'price': 9.66,
      'img': 'steel',
      'name': 'Сталь',
      'quantity': 50,
      'totalPrice': 483,
      'sourceMnf': 7
    }, {
      'pi': '1479',
      'q': 300,
      'mq': 0,
      'quality': 1,
      'price': 9.72,
      'img': 'syntheticfabric',
      'name': 'Синтетическая ткань',
      'quantity': 600,
      'totalPrice': 5832,
      'sourceMnf': 27
    }, {
      'pi': '1473',
      'q': 5,
      'mq': 0,
      'quality': 1,
      'price': 158.71,
      'img': 'engine',
      'name': 'Двигатель',
      'quantity': 10,
      'totalPrice': 1587.1000000000001,
      'sourceMnf': 15
    }, {
      'pi': '1475',
      'q': 100,
      'mq': 0,
      'quality': 1,
      'price': 1,
      'img': 'components',
      'name': 'Комплектующие',
      'quantity': 200,
      'totalPrice': 200,
      'sourceMnf': 16
    }],
    'rp': [{
      'pi': '131',
      'pbq': 0.001,
      'rq': 1,
      'qbp': 0,
      'targetMnfId': 0,
      'targetMnfIngId': 1,
      'img': 'yacht_equipment',
      'name': 'Оснащение яхты',
      'quantity': 2,
      'quality': 1,
      'netCost': 114304.55,
      'envdTax': 4572.182000000001,
      'price': 118876.73,
      'incomeTax': 914.4359999999987,
      'totalCost': 118876.732,
      'profit': -0.0040000000153668225
    }],
    'targetProductIndex': 0,
    'img': 'yacht_equipment',
    'bonus': 0,
    'technology': 1,
    'efficiency': 100,
    'workersSalary': 100,
    'mnfId': 4,
    'workersQuantity': 2000,
    'totalIngredientsPrice': 8609.1,
    'workersQualification': 1,
    'machinesQuality': 1
  }, {
    'i': '2405',
    's': 'Пластмасса',
    'e': {
      'pc': 'Промышленные товары',
      'pci': '1527',
      's': '/img/products/machine.gif',
      'i': '1529',
      'c': 'Станок',
      'sym': 'machine'
    },
    'epw': 4,
    'ip': [{
      'pi': '1467',
      'q': 1,
      'mq': 0,
      'quality': 1,
      'price': 1,
      'img': 'oil',
      'name': 'Нефть',
      'quantity': 64,
      'totalPrice': 64,
      'sourceMnf': 3
    }, {
      'pi': '1476',
      'q': 0.1,
      'mq': 0,
      'quality': 1,
      'price': 1,
      'img': 'paint',
      'name': 'Краска',
      'quantity': 7,
      'totalPrice': 7,
      'sourceMnf': 2
    }],
    'rp': [{
      'pi': '1477',
      'pbq': 16,
      'rq': 1,
      'qbp': 0,
      'targetMnfId': 4,
      'targetMnfIngId': 1,
      'img': 'plastics',
      'name': 'Пластмасса',
      'quantity': 64,
      'quality': 1,
      'netCost': 7.98,
      'envdTax': 0.15960000000000002,
      'price': 8.14,
      'incomeTax': 0.03200000000000003,
      'totalCost': 8.1396,
      'profit': 0.025600000000054024
    }],
    'targetProductIndex': 0,
    'bonus': 0,
    'technology': 1,
    'efficiency': 100,
    'workersSalary': 100,
    'mnfId': 5,
    'workersQuantity': 4,
    'totalIngredientsPrice': 71,
    'workersQualification': 1,
    'machinesQuality': 1,
    'img': 'plastics'
  }, {
    'i': '2071',
    's': 'Заготовка леса',
    'e': {
      'pc': 'Промышленные товары',
      'pci': '1527',
      's': '/img/products/saw.gif',
      'i': '10717',
      'c': 'Пилорама',
      'sym': 'saw'
    },
    'epw': 2,
    'ip': [],
    'rp': [{
      'pi': '1463',
      'pbq': 40,
      'rq': 1,
      'qbp': 0,
      'targetMnfId': 1,
      'targetMnfIngId': 1,
      'img': 'wood',
      'name': 'Древесина',
      'quantity': 600,
      'quality': 1,
      'netCost': 2.75,
      'envdTax': 0.165,
      'price': 2.92,
      'incomeTax': 0.03399999999999999,
      'totalCost': 2.915,
      'profit': 2.999999999999936
    }],
    'targetProductIndex': 0,
    'img': 'wood',
    'bonus': 0,
    'technology': 1,
    'efficiency': 100,
    'workersSalary': 100,
    'mnfId': 6,
    'baseQuality': 1,
    'workersQuantity': 15,
    'totalIngredientsPrice': 0,
    'workersQualification': 1,
    'machinesQuality': 1
  }, {
    'i': '2403',
    's': 'Легированная сталь (Г)',
    'e': {
      'pc': 'Промышленные товары',
      'pci': '1527',
      's': '/img/products/machine.gif',
      'i': '1529',
      'c': 'Станок',
      'sym': 'machine'
    },
    'epw': 4,
    'ip': [{
      'pi': '1464',
      'q': 1,
      'mq': 0,
      'quality': 1,
      'price': 1.12,
      'img': 'ironore',
      'name': 'Железная руда',
      'quantity': 50,
      'totalPrice': 56.00000000000001,
      'sourceMnf': 8
    }, {
      'pi': '1469',
      'q': 1,
      'mq': 0,
      'quality': 1,
      'price': 0.74,
      'img': 'coal',
      'name': 'Уголь',
      'quantity': 50,
      'totalPrice': 37,
      'sourceMnf': 9
    }, {
      'pi': '7089',
      'q': 0.5,
      'mq': 0,
      'quality': 1,
      'price': 1.67,
      'img': 'mn',
      'name': 'Марганец',
      'quantity': 25,
      'totalPrice': 41.75,
      'sourceMnf': 10
    }],
    'rp': [{
      'pi': '1480',
      'pbq': 16.666666666666668,
      'rq': 1,
      'qbp': 10,
      'targetMnfId': 4,
      'targetMnfIngId': 2,
      'img': 'steel',
      'name': 'Сталь',
      'quantity': 50,
      'quality': 1,
      'netCost': 9.29,
      'envdTax': 0.3716,
      'price': 9.66,
      'incomeTax': 0.0740000000000002,
      'totalCost': 9.6616,
      'profit': -0.07999999999999119
    }],
    'targetProductIndex': 0,
    'bonus': 0,
    'technology': 1,
    'efficiency': 100,
    'workersSalary': 100,
    'mnfId': 7,
    'workersQuantity': 3,
    'totalIngredientsPrice': 134.75,
    'workersQualification': 1,
    'machinesQuality': 1,
    'img': 'steel'
  }, {
    'i': '2397',
    's': 'Добыча руды',
    'e': {
      'pc': 'Промышленные товары',
      'pci': '1527',
      's': '/img/products/drill.gif',
      'i': '12097',
      'c': 'Горно-шахтное оборудование',
      'sym': 'drill'
    },
    'epw': 2,
    'ip': [],
    'rp': [{
      'pi': '1464',
      'pbq': 60,
      'rq': 1,
      'qbp': 0,
      'targetMnfId': 7,
      'targetMnfIngId': 0,
      'img': 'ironore',
      'name': 'Железная руда',
      'quantity': 118,
      'quality': 1,
      'netCost': 0.93,
      'envdTax': 0.18600000000000003,
      'price': 1.12,
      'incomeTax': 0.03800000000000001,
      'totalCost': 1.116,
      'profit': 0.4720000000000004
    }],
    'targetProductIndex': 0,
    'img': 'ironore',
    'bonus': 0,
    'technology': 1,
    'efficiency': 100,
    'workersSalary': 100,
    'mnfId': 8,
    'mineDifficult': 1,
    'baseQuality': 1,
    'workersQuantity': 1,
    'totalIngredientsPrice': 0,
    'workersQualification': 1,
    'machinesQuality': 1
  }, {
    'i': '2400',
    's': 'Добыча угля',
    'e': {
      'pc': 'Промышленные товары',
      'pci': '1527',
      's': '/img/products/drill.gif',
      'i': '12097',
      'c': 'Горно-шахтное оборудование',
      'sym': 'drill'
    },
    'epw': 2,
    'ip': [],
    'rp': [{
      'pi': '1469',
      'pbq': 90,
      'rq': 1,
      'qbp': 0,
      'targetMnfId': 7,
      'targetMnfIngId': 1,
      'img': 'coal',
      'name': 'Уголь',
      'quantity': 177,
      'quality': 1,
      'netCost': 0.62,
      'envdTax': 0.124,
      'price': 0.74,
      'incomeTax': 0.024,
      'totalCost': 0.744,
      'profit': -0.7080000000000006
    }],
    'targetProductIndex': 0,
    'img': 'coal',
    'bonus': 0,
    'technology': 1,
    'efficiency': 100,
    'workersSalary': 100,
    'mnfId': 9,
    'mineDifficult': 1,
    'baseQuality': 1,
    'workersQuantity': 1,
    'totalIngredientsPrice': 0,
    'workersQualification': 1,
    'machinesQuality': 1
  }, {
    'i': '7102',
    's': 'Добыча марганца',
    'e': {
      'pc': 'Промышленные товары',
      'pci': '1527',
      's': '/img/products/drill.gif',
      'i': '12097',
      'c': 'Горно-шахтное оборудование',
      'sym': 'drill'
    },
    'epw': 2,
    'ip': [],
    'rp': [{
      'pi': '7089',
      'pbq': 40,
      'rq': 1,
      'qbp': 0,
      'targetMnfId': 7,
      'targetMnfIngId': 2,
      'img': 'mn',
      'name': 'Марганец',
      'quantity': 79,
      'quality': 1,
      'netCost': 1.39,
      'envdTax': 0.27799999999999997,
      'price': 1.67,
      'incomeTax': 0.05600000000000001,
      'totalCost': 1.668,
      'profit': 0.15800000000000014
    }],
    'targetProductIndex': 0,
    'img': 'mn',
    'bonus': 0,
    'technology': 1,
    'efficiency': 100,
    'workersSalary': 100,
    'mnfId': 10,
    'mineDifficult': 1,
    'baseQuality': 1,
    'workersQuantity': 1,
    'totalIngredientsPrice': 0,
    'workersQualification': 1,
    'machinesQuality': 1
  }, {
    'i': '124',
    's': 'Интерьер яхты',
    'e': {
      'pc': 'Промышленные товары',
      'pci': '1527',
      's': '/img/products/machine.gif',
      'i': '1529',
      'c': 'Станок',
      'sym': 'machine'
    },
    'epw': 1,
    'ip': [{
      'pi': '3868',
      'q': 3,
      'mq': 0,
      'quality': 1,
      'price': 122.65,
      'img': 'tv',
      'name': 'Телевизоры',
      'quantity': 6,
      'totalPrice': 735.9000000000001,
      'sourceMnf': 26
    }, {
      'pi': '3870',
      'q': 5,
      'mq': 0,
      'quality': 1,
      'price': 31.08,
      'img': 'sanitaryware',
      'name': 'Сантехника',
      'quantity': 10,
      'totalPrice': 310.79999999999995,
      'sourceMnf': 12
    }, {
      'pi': '1474',
      'q': 50,
      'mq': 0,
      'quality': 1,
      'price': 27.98,
      'img': 'leather',
      'name': 'Кожа',
      'quantity': 100,
      'totalPrice': 2798,
      'sourceMnf': 14
    }, {
      'pi': '1485',
      'q': 50,
      'mq': 0,
      'quality': 1,
      'price': 1,
      'img': 'electroniccomponents',
      'name': 'Электронные компоненты',
      'quantity': 100,
      'totalPrice': 100,
      'sourceMnf': 25
    }, {
      'pi': '7095',
      'q': 10,
      'mq': 0,
      'quality': 1,
      'price': 546.64,
      'img': 'furniture2',
      'name': 'Мебель',
      'quantity': 20,
      'totalPrice': 10932.8,
      'sourceMnf': 20
    }, {
      'pi': '1510',
      'q': 3,
      'mq': 0,
      'quality': 1,
      'price': 164.79,
      'img': 'householdappliances',
      'name': 'Холодильники',
      'quantity': 6,
      'totalPrice': 988.74,
      'sourceMnf': 24
    }],
    'rp': [{
      'pi': '132',
      'pbq': 0.005,
      'rq': 1,
      'qbp': 0,
      'targetMnfId': 0,
      'targetMnfIngId': 2,
      'img': 'yacht_interior',
      'name': 'Интерьер яхты',
      'quantity': 2,
      'quality': 1,
      'netCost': 29933.12,
      'envdTax': 5986.624,
      'price': 35919.74,
      'incomeTax': 1197.3239999999998,
      'totalCost': 35919.744,
      'profit': -0.008000000001629815
    }],
    'targetProductIndex': 0,
    'bonus': 0,
    'technology': 1,
    'efficiency': 100,
    'workersSalary': 100,
    'mnfId': 11,
    'workersQuantity': 400,
    'totalIngredientsPrice': 15866.24,
    'workersQualification': 1,
    'machinesQuality': 1,
    'img': 'yacht_interior'
  }, {
    'i': '2428',
    's': 'Сантехника',
    'e': {
      'pc': 'Промышленные товары',
      'pci': '1527',
      's': '/img/products/machine.gif',
      'i': '1529',
      'c': 'Станок',
      'sym': 'machine'
    },
    'epw': 2,
    'ip': [{
      'pi': '1462',
      'q': 7,
      'mq': 0,
      'quality': 1,
      'price': 0.26,
      'img': 'clay',
      'name': 'Глина',
      'quantity': 84,
      'totalPrice': 21.84,
      'sourceMnf': 13
    }],
    'rp': [{
      'pi': '3870',
      'pbq': 4,
      'rq': 1,
      'qbp': 0,
      'targetMnfId': 11,
      'targetMnfIngId': 1,
      'img': 'sanitaryware',
      'name': 'Сантехника',
      'quantity': 12,
      'quality': 1,
      'netCost': 29.32,
      'envdTax': 1.7592,
      'price': 31.08,
      'incomeTax': 0.35199999999999965,
      'totalCost': 31.0792,
      'profit': 0.009599999999977626
    }],
    'targetProductIndex': 0,
    'bonus': 0,
    'technology': 1,
    'efficiency': 100,
    'workersSalary': 100,
    'mnfId': 12,
    'workersQuantity': 3,
    'totalIngredientsPrice': 21.84,
    'workersQualification': 1,
    'machinesQuality': 1,
    'img': 'sanitaryware'
  }, {
    'i': '2401',
    's': 'Добыча глины',
    'e': {
      'pc': 'Промышленные товары',
      'pci': '1527',
      's': '/img/products/drill.gif',
      'i': '12097',
      'c': 'Горно-шахтное оборудование',
      'sym': 'drill'
    },
    'epw': 2,
    'ip': [],
    'rp': [{
      'pi': '1462',
      'pbq': 250,
      'rq': 1,
      'qbp': 0,
      'targetMnfId': 12,
      'targetMnfIngId': 0,
      'img': 'clay',
      'name': 'Глина',
      'quantity': 490,
      'quality': 1,
      'netCost': 0.22,
      'envdTax': 0.044000000000000004,
      'price': 0.26,
      'incomeTax': 0.008000000000000002,
      'totalCost': 0.264,
      'profit': -1.9600000000000017
    }],
    'targetProductIndex': 0,
    'img': 'clay',
    'bonus': 0,
    'technology': 1,
    'efficiency': 100,
    'workersSalary': 100,
    'mnfId': 13,
    'mineDifficult': 1,
    'baseQuality': 1,
    'workersQuantity': 1,
    'totalIngredientsPrice': 0,
    'workersQualification': 1,
    'machinesQuality': 1
  }, {
    'i': '2417',
    's': 'Свиноферма (картофель)',
    'e': {
      'pc': 'Животные',
      'pci': '2547',
      's': '/img/products/pig.gif',
      'i': '2554',
      'c': 'Свиньи',
      'sym': 'pig'
    },
    'epw': 10,
    'ip': [{
      'pi': '15742',
      'q': 18,
      'mq': 0,
      'quality': 1,
      'price': 0.62,
      'img': 'potato',
      'name': 'Картофель',
      'quantity': 4500,
      'totalPrice': 2790,
      'sourceMnf': 30
    }],
    'rp': [{
      'pi': '1474',
      'pbq': 4,
      'rq': 0.4,
      'qbp': 35,
      'targetMnfId': 11,
      'targetMnfIngId': 2,
      'img': 'leather',
      'name': 'Кожа',
      'quantity': 100,
      'quality': 1,
      'netCost': 27.7,
      'envdTax': 0.277,
      'price': 27.98,
      'incomeTax': 0.05600000000000023,
      'totalCost': 27.977,
      'profit': 0.30000000000001137
    }, {
      'pi': '1490',
      'pbq': 25,
      'rq': 2.5,
      'qbp': 15,
      'img': 'meat',
      'name': 'Мясо',
      'quantity': 625,
      'quality': 1,
      'netCost': 4.43,
      'envdTax': 0.17720000000000002,
      'price': 4.61,
      'incomeTax': 0.03600000000000012,
      'totalCost': 4.6072,
      'profit': 1.7500000000003624
    }],
    'targetProductIndex': 0,
    'bonus': 0,
    'technology': 1,
    'efficiency': 100,
    'workersSalary': 100,
    'mnfId': 14,
    'workersQuantity': 25,
    'totalIngredientsPrice': 2790,
    'workersQualification': 1,
    'machinesQuality': 1,
    'img': 'meat'
  }, {
    'i': '2409',
    's': 'Двигатель',
    'e': {
      'pc': 'Промышленные товары',
      'pci': '1527',
      's': '/img/products/machine.gif',
      'i': '1529',
      'c': 'Станок',
      'sym': 'machine'
    },
    'epw': 2,
    'ip': [{
      'pi': '1480',
      'q': 1,
      'mq': 0,
      'quality': 1,
      'price': 1,
      'img': 'steel',
      'name': 'Сталь',
      'quantity': 10,
      'totalPrice': 10,
      'sourceMnf': 7
    }, {
      'pi': '1475',
      'q': 3,
      'mq': 0,
      'quality': 1,
      'price': 13.87,
      'img': 'components',
      'name': 'Комплектующие',
      'quantity': 30,
      'totalPrice': 416.09999999999997,
      'sourceMnf': 16
    }],
    'rp': [{
      'pi': '1473',
      'pbq': 1,
      'rq': 1,
      'qbp': 0,
      'targetMnfId': 4,
      'targetMnfIngId': 4,
      'img': 'engine',
      'name': 'Двигатель',
      'quantity': 10,
      'quality': 1,
      'netCost': 152.61,
      'envdTax': 6.104400000000002,
      'price': 158.71,
      'incomeTax': 1.2199999999999989,
      'totalCost': 158.7144,
      'profit': -0.04400000000003956
    }],
    'targetProductIndex': 0,
    'img': 'engine',
    'bonus': 0,
    'technology': 1,
    'efficiency': 100,
    'workersSalary': 100,
    'mnfId': 15,
    'workersQuantity': 10,
    'totalIngredientsPrice': 426.09999999999997,
    'workersQualification': 1,
    'machinesQuality': 1
  }, {
    'i': '2409',
    's': 'Хромированные комплектующие',
    'e': {
      'pc': 'Промышленные товары',
      'pci': '1527',
      's': '/img/products/machine.gif',
      'i': '1529',
      'c': 'Станок',
      'sym': 'machine'
    },
    'epw': 2,
    'ip': [{
      'pi': '1480',
      'q': 0.2,
      'mq': 0,
      'quality': 1,
      'price': 1,
      'img': 'steel',
      'name': 'Сталь',
      'quantity': 7,
      'totalPrice': 7,
      'sourceMnf': 7
    }, {
      'pi': '7088',
      'q': 0.05,
      'mq': 0,
      'quality': 1,
      'price': 3.3,
      'img': 'cr',
      'name': 'Хром',
      'quantity': 2,
      'totalPrice': 6.6,
      'sourceMnf': 17
    }],
    'rp': [{
      'pi': '1475',
      'pbq': 8.333333333333334,
      'rq': 1,
      'qbp': 10,
      'targetMnfId': 15,
      'targetMnfIngId': 1,
      'img': 'components',
      'name': 'Комплектующие',
      'quantity': 34,
      'quality': 1,
      'netCost': 13.34,
      'envdTax': 0.5336000000000001,
      'price': 13.87,
      'incomeTax': 0.10599999999999987,
      'totalCost': 13.8736,
      'profit': -0.12240000000001672
    }],
    'targetProductIndex': 0,
    'bonus': 0,
    'technology': 1,
    'efficiency': 100,
    'workersSalary': 100,
    'mnfId': 16,
    'workersQuantity': 4,
    'totalIngredientsPrice': 13.6,
    'workersQualification': 1,
    'machinesQuality': 1,
    'img': 'components'
  }, {
    'i': '7096',
    's': 'Добыча хрома',
    'e': {
      'pc': 'Промышленные товары',
      'pci': '1527',
      's': '/img/products/drill.gif',
      'i': '12097',
      'c': 'Горно-шахтное оборудование',
      'sym': 'drill'
    },
    'epw': 2,
    'ip': [],
    'rp': [{
      'pi': '7088',
      'pbq': 20,
      'rq': 1,
      'qbp': 0,
      'targetMnfId': 16,
      'targetMnfIngId': 1,
      'img': 'cr',
      'name': 'Хром',
      'quantity': 40,
      'quality': 1,
      'netCost': 2.75,
      'envdTax': 0.55,
      'price': 3.3,
      'incomeTax': 0.10999999999999997,
      'totalCost': 3.3,
      'profit': 0
    }],
    'targetProductIndex': 0,
    'img': 'cr',
    'bonus': 0,
    'technology': 1,
    'efficiency': 100,
    'workersSalary': 100,
    'mnfId': 17,
    'mineDifficult': 1,
    'baseQuality': 1,
    'workersQuantity': 1,
    'totalIngredientsPrice': 0,
    'workersQualification': 1,
    'machinesQuality': 1
  }, {
    'i': '2408',
    's': 'Стекло',
    'e': {
      'pc': 'Промышленные товары',
      'pci': '1527',
      's': '/img/products/machine.gif',
      'i': '1529',
      'c': 'Станок',
      'sym': 'machine'
    },
    'epw': 2,
    'ip': [{
      'pi': '1466',
      'q': 1,
      'mq': 0,
      'quality': 1,
      'price': 0.84,
      'img': 'silicon',
      'name': 'Кремний',
      'quantity': 60,
      'totalPrice': 50.4,
      'sourceMnf': 19
    }],
    'rp': [{
      'pi': '1481',
      'pbq': 20,
      'rq': 1,
      'qbp': 0,
      'targetMnfId': 1,
      'targetMnfIngId': 4,
      'img': 'glass',
      'name': 'Стекло',
      'quantity': 60,
      'quality': 1,
      'netCost': 6.34,
      'envdTax': 0.2536,
      'price': 6.59,
      'incomeTax': 0.05,
      'totalCost': 6.5935999999999995,
      'profit': -0.2159999999999762
    }],
    'targetProductIndex': 0,
    'img': 'glass',
    'bonus': 0,
    'technology': 1,
    'efficiency': 100,
    'workersSalary': 100,
    'mnfId': 18,
    'workersQuantity': 3,
    'totalIngredientsPrice': 50.4,
    'workersQualification': 1,
    'machinesQuality': 1
  }, {
    'i': '2402',
    's': 'Добыча кремния',
    'e': {
      'pc': 'Промышленные товары',
      'pci': '1527',
      's': '/img/products/drill.gif',
      'i': '12097',
      'c': 'Горно-шахтное оборудование',
      'sym': 'drill'
    },
    'epw': 2,
    'ip': [],
    'rp': [{
      'pi': '1466',
      'pbq': 80,
      'rq': 1,
      'qbp': 0,
      'targetMnfId': 18,
      'targetMnfIngId': 0,
      'img': 'silicon',
      'name': 'Кремний',
      'quantity': 157,
      'quality': 1,
      'netCost': 0.7,
      'envdTax': 0.13999999999999999,
      'price': 0.84,
      'incomeTax': 0.028000000000000004,
      'totalCost': 0.84,
      'profit': 0
    }],
    'targetProductIndex': 0,
    'img': 'silicon',
    'bonus': 0,
    'technology': 1,
    'efficiency': 100,
    'workersSalary': 100,
    'mnfId': 19,
    'mineDifficult': 1,
    'baseQuality': 1,
    'workersQuantity': 1,
    'totalIngredientsPrice': 0,
    'workersQualification': 1,
    'machinesQuality': 1
  }, {
    'i': '2413',
    's': 'Мебельный гарнитур',
    'e': {
      'pc': 'Промышленные товары',
      'pci': '1527',
      's': '/img/products/machine.gif',
      'i': '1529',
      'c': 'Станок',
      'sym': 'machine'
    },
    'epw': 1,
    'ip': [{
      'pi': '1463',
      'q': 20,
      'mq': 0,
      'quality': 1,
      'price': 1,
      'img': 'wood',
      'name': 'Древесина',
      'quantity': 400,
      'totalPrice': 400,
      'sourceMnf': 6
    }, {
      'pi': '1481',
      'q': 5,
      'mq': 0,
      'quality': 1,
      'price': 1,
      'img': 'glass',
      'name': 'Стекло',
      'quantity': 100,
      'totalPrice': 100,
      'sourceMnf': 18
    }, {
      'pi': '7091',
      'q': 3,
      'mq': 0,
      'quality': 1,
      'price': 16.9,
      'img': 'mirror0',
      'name': 'Зеркальный лист',
      'quantity': 60,
      'totalPrice': 1013.9999999999999,
      'sourceMnf': 21
    }],
    'rp': [{
      'pi': '7095',
      'pbq': 0.25,
      'rq': 1,
      'qbp': 0,
      'targetMnfId': 11,
      'targetMnfIngId': 4,
      'img': 'furniture2',
      'name': 'Мебель',
      'quantity': 20,
      'quality': 1,
      'netCost': 515.7,
      'envdTax': 30.942000000000004,
      'price': 546.64,
      'incomeTax': 6.187999999999988,
      'totalCost': 546.642,
      'profit': -0.04000000000132786
    }],
    'targetProductIndex': 0,
    'bonus': 0,
    'technology': 1,
    'efficiency': 100,
    'workersSalary': 100,
    'mnfId': 20,
    'workersQuantity': 80,
    'totalIngredientsPrice': 1514,
    'workersQualification': 1,
    'machinesQuality': 1,
    'img': 'furniture2'
  }, {
    'i': '2408',
    's': 'Зеркальные листы',
    'e': {
      'pc': 'Промышленные товары',
      'pci': '1527',
      's': '/img/products/machine.gif',
      'i': '1529',
      'c': 'Станок',
      'sym': 'machine'
    },
    'epw': 2,
    'ip': [{
      'pi': '1481',
      'q': 1,
      'mq': 0,
      'quality': 1,
      'price': 1,
      'img': 'glass',
      'name': 'Стекло',
      'quantity': 60,
      'totalPrice': 60,
      'sourceMnf': 18
    }, {
      'pi': '1471',
      'q': 0.2,
      'mq': 0,
      'quality': 1,
      'price': 21.25,
      'img': 'aluminium',
      'name': 'Алюминий',
      'quantity': 12,
      'totalPrice': 255,
      'sourceMnf': 22
    }],
    'rp': [{
      'pi': '7091',
      'pbq': 10,
      'rq': 1,
      'qbp': 0,
      'targetMnfId': 20,
      'targetMnfIngId': 2,
      'img': 'mirror0',
      'name': 'Зеркальный лист',
      'quantity': 60,
      'quality': 1,
      'netCost': 16.25,
      'envdTax': 0.65,
      'price': 16.9,
      'incomeTax': 0.12999999999999973,
      'totalCost': 16.9,
      'profit': 0
    }],
    'targetProductIndex': 0,
    'img': 'mirror0',
    'bonus': 0,
    'technology': 1,
    'efficiency': 100,
    'workersSalary': 100,
    'mnfId': 21,
    'workersQuantity': 6,
    'totalIngredientsPrice': 315,
    'workersQualification': 1,
    'machinesQuality': 1
  }, {
    'i': '2403',
    's': 'Алюминий',
    'e': {
      'pc': 'Промышленные товары',
      'pci': '1527',
      's': '/img/products/machine.gif',
      'i': '1529',
      'c': 'Станок',
      'sym': 'machine'
    },
    'epw': 4,
    'ip': [{
      'pi': '1461',
      'q': 2,
      'mq': 0,
      'quality': 1,
      'price': 3.34,
      'img': 'bauxite',
      'name': 'Бокситы',
      'quantity': 32,
      'totalPrice': 106.88,
      'sourceMnf': 23
    }],
    'rp': [{
      'pi': '1471',
      'pbq': 8,
      'rq': 1,
      'qbp': 0,
      'targetMnfId': 21,
      'targetMnfIngId': 1,
      'img': 'aluminium',
      'name': 'Алюминий',
      'quantity': 16,
      'quality': 1,
      'netCost': 20.43,
      'envdTax': 0.8172000000000001,
      'price': 21.25,
      'incomeTax': 0.16400000000000006,
      'totalCost': 21.2472,
      'profit': 0.04480000000000928
    }],
    'targetProductIndex': 0,
    'bonus': 0,
    'technology': 1,
    'efficiency': 100,
    'workersSalary': 100,
    'mnfId': 22,
    'workersQuantity': 2,
    'totalIngredientsPrice': 106.88,
    'workersQualification': 1,
    'machinesQuality': 1,
    'img': 'aluminium'
  }, {
    'i': '1869',
    's': 'Добыча бокситов',
    'e': {
      'pc': 'Промышленные товары',
      'pci': '1527',
      's': '/img/products/drill.gif',
      'i': '12097',
      'c': 'Горно-шахтное оборудование',
      'sym': 'drill'
    },
    'epw': 2,
    'ip': [],
    'rp': [{
      'pi': '1461',
      'pbq': 20,
      'rq': 1,
      'qbp': 0,
      'targetMnfId': 22,
      'targetMnfIngId': 0,
      'img': 'bauxite',
      'name': 'Бокситы',
      'quantity': 79,
      'quality': 1,
      'netCost': 2.78,
      'envdTax': 0.5559999999999999,
      'price': 3.34,
      'incomeTax': 0.11200000000000002,
      'totalCost': 3.336,
      'profit': 0.3160000000000003
    }],
    'targetProductIndex': 0,
    'img': 'bauxite',
    'bonus': 0,
    'technology': 1,
    'efficiency': 100,
    'workersSalary': 100,
    'mnfId': 23,
    'mineDifficult': 1,
    'baseQuality': 1,
    'workersQuantity': 2,
    'totalIngredientsPrice': 0,
    'workersQualification': 1,
    'machinesQuality': 1
  }, {
    'i': '2424',
    's': 'Холодильники',
    'e': {
      'pc': 'Промышленные товары',
      'pci': '1527',
      's': '/img/products/machine.gif',
      'i': '1529',
      'c': 'Станок',
      'sym': 'machine'
    },
    'epw': 2,
    'ip': [{
      'pi': '1475',
      'q': 0.5,
      'mq': 0,
      'quality': 1,
      'price': 1,
      'img': 'components',
      'name': 'Комплектующие',
      'quantity': 3,
      'totalPrice': 3,
      'sourceMnf': 16
    }, {
      'pi': '1480',
      'q': 1,
      'mq': 0,
      'quality': 1,
      'price': 1,
      'img': 'steel',
      'name': 'Сталь',
      'quantity': 6,
      'totalPrice': 6,
      'sourceMnf': 7
    }, {
      'pi': '1485',
      'q': 0.25,
      'mq': 0,
      'quality': 1,
      'price': 114.92,
      'img': 'electroniccomponents',
      'name': 'Электронные компоненты',
      'quantity': 2,
      'totalPrice': 229.84,
      'sourceMnf': 25
    }],
    'rp': [{
      'pi': '1510',
      'pbq': 1,
      'rq': 1,
      'qbp': 0,
      'targetMnfId': 11,
      'targetMnfIngId': 5,
      'img': 'householdappliances',
      'name': 'Холодильники',
      'quantity': 6,
      'quality': 1,
      'netCost': 149.81,
      'envdTax': 14.981000000000002,
      'price': 164.79,
      'incomeTax': 2.995999999999998,
      'totalCost': 164.791,
      'profit': -0.006000000000028649
    }],
    'targetProductIndex': 0,
    'bonus': 0,
    'technology': 1,
    'efficiency': 100,
    'workersSalary': 100,
    'mnfId': 24,
    'workersQuantity': 6,
    'totalIngredientsPrice': 238.84,
    'workersQualification': 1,
    'machinesQuality': 1,
    'img': 'householdappliances'
  }, {
    'i': '2423',
    's': 'Электронные компоненты',
    'e': {
      'pc': 'Промышленные товары',
      'pci': '1527',
      's': '/img/products/machine.gif',
      'i': '1529',
      'c': 'Станок',
      'sym': 'machine'
    },
    'epw': 2,
    'ip': [{
      'pi': '1466',
      'q': 0.1,
      'mq': 0,
      'quality': 1,
      'price': 1,
      'img': 'silicon',
      'name': 'Кремний',
      'quantity': 1,
      'totalPrice': 1,
      'sourceMnf': 19
    }],
    'rp': [{
      'pi': '1485',
      'pbq': 1,
      'rq': 1,
      'qbp': 0,
      'targetMnfId': 24,
      'targetMnfIngId': 2,
      'img': 'electroniccomponents',
      'name': 'Электронные компоненты',
      'quantity': 2,
      'quality': 1,
      'netCost': 110.5,
      'envdTax': 4.420000000000001,
      'price': 114.92,
      'incomeTax': 0.8840000000000003,
      'totalCost': 114.92,
      'profit': 0
    }],
    'targetProductIndex': 0,
    'bonus': 0,
    'technology': 1,
    'efficiency': 100,
    'workersSalary': 100,
    'mnfId': 25,
    'workersQuantity': 2,
    'totalIngredientsPrice': 1,
    'workersQualification': 1,
    'machinesQuality': 1,
    'img': 'electroniccomponents'
  }, {
    'i': '3891',
    's': 'Телевизоры',
    'e': {
      'pc': 'Промышленные товары',
      'pci': '1527',
      's': '/img/products/machine.gif',
      'i': '1529',
      'c': 'Станок',
      'sym': 'machine'
    },
    'epw': 2,
    'ip': [{
      'pi': '1477',
      'q': 0.5,
      'mq': 0,
      'quality': 1,
      'price': 1,
      'img': 'plastics',
      'name': 'Пластмасса',
      'quantity': 3,
      'totalPrice': 3,
      'sourceMnf': 5
    }, {
      'pi': '1485',
      'q': 0.5,
      'mq': 0,
      'quality': 1,
      'price': 1,
      'img': 'electroniccomponents',
      'name': 'Электронные компоненты',
      'quantity': 3,
      'totalPrice': 3,
      'sourceMnf': 25
    }, {
      'pi': '1481',
      'q': 0.5,
      'mq': 0,
      'quality': 1,
      'price': 1,
      'img': 'glass',
      'name': 'Стекло',
      'quantity': 3,
      'totalPrice': 3,
      'sourceMnf': 18
    }],
    'rp': [{
      'pi': '3868',
      'pbq': 1,
      'rq': 1,
      'qbp': 0,
      'targetMnfId': 11,
      'targetMnfIngId': 0,
      'img': 'tv',
      'name': 'Телевизоры',
      'quantity': 6,
      'quality': 1,
      'netCost': 111.5,
      'envdTax': 11.15,
      'price': 122.65,
      'incomeTax': 2.2300000000000013,
      'totalCost': 122.65,
      'profit': 0
    }],
    'targetProductIndex': 0,
    'bonus': 0,
    'technology': 1,
    'efficiency': 100,
    'workersSalary': 100,
    'mnfId': 26,
    'workersQuantity': 6,
    'totalIngredientsPrice': 9,
    'workersQualification': 1,
    'machinesQuality': 1,
    'img': 'tv'
  }, {
    'i': '2405',
    's': 'Синтетические ткани',
    'e': {
      'pc': 'Промышленные товары',
      'pci': '1527',
      's': '/img/products/machine.gif',
      'i': '1529',
      'c': 'Станок',
      'sym': 'machine'
    },
    'epw': 4,
    'ip': [{
      'pi': '1467',
      'q': 0.5,
      'mq': 0,
      'quality': 1,
      'price': 1,
      'img': 'oil',
      'name': 'Нефть',
      'quantity': 304,
      'totalPrice': 304,
      'sourceMnf': 3
    }, {
      'pi': '1483',
      'q': 1,
      'mq': 0,
      'quality': 1,
      'price': 2.14,
      'img': 'chemicals',
      'name': 'Химикаты',
      'quantity': 608,
      'totalPrice': 1301.1200000000001,
      'sourceMnf': 28
    }, {
      'pi': '1476',
      'q': 0.1,
      'mq': 0,
      'quality': 1,
      'price': 1,
      'img': 'paint',
      'name': 'Краска',
      'quantity': 61,
      'totalPrice': 61,
      'sourceMnf': 2
    }],
    'rp': [{
      'pi': '1479',
      'pbq': 16,
      'rq': 1,
      'qbp': 0,
      'targetMnfId': 4,
      'targetMnfIngId': 3,
      'img': 'syntheticfabric',
      'name': 'Синтетическая ткань',
      'quantity': 608,
      'quality': 1,
      'netCost': 9.62,
      'envdTax': 0.09620000000000001,
      'price': 9.72,
      'incomeTax': 0.020000000000000285,
      'totalCost': 9.716199999999999,
      'profit': 2.3104000000010956
    }],
    'targetProductIndex': 0,
    'img': 'syntheticfabric',
    'bonus': 0,
    'technology': 1,
    'efficiency': 100,
    'workersSalary': 100,
    'mnfId': 27,
    'workersQuantity': 38,
    'totalIngredientsPrice': 1666.1200000000001,
    'workersQualification': 1,
    'machinesQuality': 1
  }, {
    'i': '2405',
    's': 'Химикаты',
    'e': {
      'pc': 'Промышленные товары',
      'pci': '1527',
      's': '/img/products/machine.gif',
      'i': '1529',
      'c': 'Станок',
      'sym': 'machine'
    },
    'epw': 4,
    'ip': [{
      'pi': '1468',
      'q': 2,
      'mq': 0,
      'quality': 1,
      'price': 0.34,
      'img': 'minerals',
      'name': 'Природные минералы',
      'quantity': 1280,
      'totalPrice': 435.20000000000005,
      'sourceMnf': 29
    }],
    'rp': [{
      'pi': '1483',
      'pbq': 80,
      'rq': 1,
      'qbp': 0,
      'targetMnfId': 27,
      'targetMnfIngId': 1,
      'img': 'chemicals',
      'name': 'Химикаты',
      'quantity': 640,
      'quality': 1,
      'netCost': 2.06,
      'envdTax': 0.08240000000000001,
      'price': 2.14,
      'incomeTax': 0.016000000000000014,
      'totalCost': 2.1424,
      'profit': -1.5359999999998308
    }],
    'targetProductIndex': 0,
    'img': 'chemicals',
    'bonus': 0,
    'technology': 1,
    'efficiency': 100,
    'workersSalary': 100,
    'mnfId': 28,
    'workersQuantity': 8,
    'totalIngredientsPrice': 435.20000000000005,
    'workersQualification': 1,
    'machinesQuality': 1
  }, {
    'i': '2398',
    's': 'Добыча минералов',
    'e': {
      'pc': 'Промышленные товары',
      'pci': '1527',
      's': '/img/products/drill.gif',
      'i': '12097',
      'c': 'Горно-шахтное оборудование',
      'sym': 'drill'
    },
    'epw': 2,
    'ip': [],
    'rp': [{
      'pi': '1468',
      'pbq': 200,
      'rq': 1,
      'qbp': 0,
      'targetMnfId': 28,
      'targetMnfIngId': 0,
      'img': 'minerals',
      'name': 'Природные минералы',
      'quantity': 2744,
      'quality': 1,
      'netCost': 0.28,
      'envdTax': 0.05600000000000001,
      'price': 0.34,
      'incomeTax': 0.012,
      'totalCost': 0.336,
      'profit': 10.97600000000001
    }],
    'targetProductIndex': 0,
    'img': 'minerals',
    'bonus': 0,
    'technology': 1,
    'efficiency': 100,
    'workersSalary': 100,
    'mnfId': 29,
    'mineDifficult': 1,
    'baseQuality': 1,
    'workersQuantity': 7,
    'totalIngredientsPrice': 0,
    'workersQualification': 1,
    'machinesQuality': 1
  }, {
    'i': '2119',
    's': 'Выращивание картофеля',
    'e': {
      'pc': 'Промышленные товары',
      'pci': '1527',
      's': '/img/products/tractor.gif',
      'i': '1530',
      'c': 'Трактор',
      'sym': 'tractor'
    },
    'epw': 0.2,
    'ip': [],
    'rp': [{
      'pi': '15742',
      'pbq': 20800,
      'rq': 1,
      'qbp': 0,
      'targetMnfId': 14,
      'targetMnfIngId': 0,
      'img': 'potato',
      'name': 'Картофель',
      'quantity': 20800,
      'quality': 1,
      'netCost': 0.52,
      'envdTax': 0.10400000000000001,
      'price': 0.62,
      'incomeTax': 0.019999999999999997,
      'totalCost': 0.624,
      'profit': -83.20000000000007
    }],
    'targetProductIndex': 0,
    'img': 'potato',
    'bonus': 0,
    'technology': 1,
    'efficiency': 100,
    'workersSalary': 100,
    'mnfId': 30,
    'baseQuality': 1,
    'workersQuantity': 1,
    'totalIngredientsPrice': 0,
    'workersQualification': 1,
    'machinesQuality': 1
  }];

  service.selectedManufacture = service.manufactures[0]; //TODO: удалить

  service.observerCallbacks = [];

  // register observer
  service.registerObserverCallback = function (callback) {
    service.observerCallbacks.push(callback);
  };

  // notify all observers
  service.notifyObservers = function () {
    angular.forEach(service.observerCallbacks, function (callback) {
      callback();
    });
  };

  service.calculateDiffCoefficient = function (mineDifficult) {
    return Math.pow(1.4, Math.abs(3 - mineDifficult));
  };

  service.calculateWorkersQuantity = function (manufacture, product, ingredientQuantity) {
    let workersQuantity = ingredientQuantity / (manufacture.efficiency / 100);
    workersQuantity /= Math.pow(1.05, manufacture.technology - 1);
    workersQuantity /= product.pbq;

    if (manufacture.e.sym === 'tractor') {
      // farm
      workersQuantity *= 52;
    }

    if (manufacture.e.sym === 'drill') {
      // mine
      if (manufacture.mineDifficult >= 3) {
        workersQuantity *= service.calculateDiffCoefficient(manufacture.mineDifficult);
      } else {
        workersQuantity /= service.calculateDiffCoefficient(manufacture.mineDifficult);
      }
    }

    return Math.ceil(workersQuantity);
  };

  service.addManufacture = function (recipe, quantity, targetId, ingId) {
    if (recipe.mnfId) {
      // set source
      service.selectedManufacture.ip[ingId].sourceMnf = recipe.mnfId;
      service.notifyObservers();
    } else {
      recipe = angular.copy(recipe);
      // set default values
      recipe.bonus = 0;
      recipe.technology = 1;
      recipe.efficiency = 100;
      recipe.workersSalary = 100;
      recipe.mnfId = service.manufactures.length;
      recipe.rp[recipe.targetProductIndex].targetMnfId = targetId;
      recipe.rp[recipe.targetProductIndex].targetMnfIngId = ingId;
      recipe.ip.forEach(function (ingredient) {
        ingredient.quality = 1;
        ingredient.price = 1;
      });

      // mine / plant
      if (recipe.e.sym === 'tractor' || recipe.e.sym === 'saw') {
        recipe.baseQuality = 1;
      }

      // mine
      if (recipe.e.sym === 'drill') {
        recipe.mineDifficult = 1;
        recipe.baseQuality = 1;
      }

      // calc workersQuantity
      let recipeProduct = recipe.rp.filter(function (product) {
        return product.pi === service.selectedManufacture.ip[ingId].pi;
      })[0];
      recipe.workersQuantity = service.calculateWorkersQuantity(recipe, recipeProduct, quantity);

      // set source
      service.selectedManufacture.ip[ingId].sourceMnf = recipe.mnfId;

      // add new recipe
      service.manufactures.push(recipe);
      service.selectedManufacture = recipe;

      // show new recipe in calc
      service.notifyObservers();
    }
  };

  service.doCalc = function (manufacture, automaticUpdate = false) {
    // set default values
    if (!manufacture.efficiency) {
      manufacture.efficiency = 100;
    }
    manufacture.bonus = manufacture.bonus | 0;

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

    manufacture.ip.forEach(function (ingredient) {

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
        let sourceProduct = sourceManufacture.rp.filter(function (product) {
          return product.pi === ingredient.pi;
        })[0];

        sourceManufacture.workersQuantity = service.calculateWorkersQuantity(sourceManufacture, sourceProduct, ingredient.quantity);

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

    manufacture.rp.forEach(function (product) {
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

      product.quality = product.quality * (1 + manufacture.bonus / 100);

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
      product.changeTaxPoint = $filter('number', 2)(product.netCost * (1 + envdCoefficient));

      if (!product.price || automaticUpdate) {
        // automatic default price
        product.price = parseFloat((product.netCost + product.envdTax).toFixed(2));
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

      // update target if exist
      if (product.targetMnfId !== angular.undefined && product.price && product.quantity &&
        (oldProductPrice !== product.price || oldProductQuantity !== product.quantity)) {

        // search all targets
        service.manufactures.forEach(function (targetManufacture) {
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
  };

  service.mapType = 'scheme';

  service.buildMap = function () {
    let nodes = [];
    let links = [];

    service.manufactures.forEach(function (manufacture) {
      let products = [];
      manufacture.rp.forEach(function (product) {
        products.push({
          img: product.img,
          quantity: product.quantity,
          quality: product.quality,
          price: product.price
        });
      });
      manufacture.ip.forEach(function (product) {
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
