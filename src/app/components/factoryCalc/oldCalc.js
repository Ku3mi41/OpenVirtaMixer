$('form').submit(
  function (e) {
    // stop form submission
    e.preventDefault();

    // var envdTax = 1 + arr_envd[$("#Prod_Quantity").parent().parent().prev().find('a').attr('title')] / 100;
    if (isNaN(envdTax)) envdTax = 1;
    // var tech = parseFloat($("#tech", this).val());

    $(this).find("#techDiv").removeClass("has-error");
    var ingQual = [],
      ingPrice = [],
      ingBaseQty = [],
      ingTotalPrice = [],
      ingCost = [],
      IngTotalCost = 0;

    $("input[id^='Ing_Quality']", this).each(function () {
      ingQual.push(parseFloat($(this).val().replace(',', '.')) || 0);
    });
    var num = ingQual.length;

    $("input[id^='Ing_Price']", this).each(function () {
      ingPrice.push(parseFloat($(this).val().replace(',', '.')) || 0);
    });

    if ($("#animal_Quality", this).val()) {
      var animal_Qual = parseFloat($("#animal_Quality", this).val().replace(',', '.'));
    }

    var animal_Quan = parseFloat($("#animals", this).val());

    var eff = parseFloat($("#Eff", this).val().replace('%', '')) / 100;

    var Sale_Price = $("#Sale_Price", this).val();
    var Sale_Price2 = $("#Sale_Price2", this).val();

    $("input[id^='Ing_Qty']", this).each(function () {
      ingBaseQty.push(parseFloat($(this).val().replace(',', '.')) || 0);
    });

    //количество товаров производимых 1 человеком
    var prodbase_quan = parseFloat($("#Prod1_Quantity", this).val());
    var prodbase_quan2 = parseFloat($("#Prod2_Quantity", this).val()) || 0;

    var work_quant = parseFloat($("#work_quan", this).val());
    var work_salary = parseFloat($("#work_salary", this).val().replace(',', '.'));

    //квалификация работников
    // var PersonalQual = Math.pow(tech, 0.8);
    // $("#PersonalQual", this).text(PersonalQual.toFixed(2));

    //качество станков
    // var EquipQuan = Math.pow(tech, 1.2);
    // $("#EquipQuan", this).text(EquipQuan.toFixed(2));

    var ingQuantity = [];

    //количество ингридиентов
    // for (var i = 0; i < num; i++) {
    //   ingQuantity[i] = ingBaseQty[i] * prodbase_quan * work_quant * Math.pow(1.05, tech - 1) * eff;
    // }
    // ;

    //ферма
//    if ($("#animal_Quantity", this).text()) {
//      ingQuantity[0] = ingBaseQty[0] * animal_Quan * work_quant;
//    }
//    $("#animal_Quantity", this).text(commaSeparateNumber(animal_Quan * work_quant) + " ед.")
//
//    $("span[id^='Ing_Quantity']", this).each(function (index) {
//      $(this).text(commaSeparateNumber(Math.ceil(ingQuantity[index].toFixed(2))) + " ед.");
//    });

    // $(this).find("#Ing_Qty1uantity").text(commaSeparateNumber( Math.ceil( Ing_Qty1uantity.toFixed(2)) ) + " ед.");

    //цена ингридиентов
    // for (var i = 0; i < num; i++) {
    //   if (ingPrice[i] > 0) {
    //     ingTotalPrice[i] = ingQuantity[i] * ingPrice[i];
    //   } else {
    //     ingTotalPrice[i] = 0;
    //   }
    // }
    // ;

    // if (ing1price > 0) {var Ing1_TotalPrice = Ing_Qty1uantity * ing1price;} else { var Ing1_TotalPrice = 0}

    // $("span[id^='Ing_TotalPrice']", this).each(function (index) {
    //   $(this).text("$" + commaSeparateNumber(ingTotalPrice[index].toFixed(2)));
    // });


    //общая цена ингридиентов
    // for (var i = 0; i < num; i++) {
    //   IngTotalCost += ingTotalPrice[i];
    // }
    // ;

//    $("#IngTotalPrice", this).text("$" + commaSeparateNumber(IngTotalCost.toFixed(2)));

    //объем выпускаемой продукции
    // var Prod_Quantity = work_quant * prodbase_quan * Math.pow(1.05, tech - 1) * eff;
    //для шахт
//    if ($("#ResDif", this).val()) {
//      Prod_Quantity = Prod_Quantity * $("#ResDif", this).val();
//      if ($("#10Q", this).hasClass("btn-warning")) {
//        Prod_Quantity = Prod_Quantity * 0.95;
//      }
//    }

    //фермы
//    if ($("#ResFQ", this).val()) {
//      Prod_Quantity2 = Prod_Quantity / 52;
//      $("#Prod_Quantity2", this).text(commaSeparateNumber(Math.round(Prod_Quantity2)) + " ед. / нед.");
//    }
//
//    $("#Prod_Quantity", this).text(commaSeparateNumber(Math.round(Prod_Quantity)) + " ед.");

    //объем 2ой выпускаемой продукции
    // if ($("#Bonus2", this).val()) {
    //   var Prod_Quantity2 = work_quant * prodbase_quan2 * Math.pow(1.05, tech - 1) * eff;
    //   $("#Prod_Quantity2", this).text(commaSeparateNumber(Math.round(Prod_Quantity2)) + " ед.");
    // }

    //итоговое качество ингридиентов
    //
    // var IngTotalQual = 0;
    // var IngTotalQty = 0;
    // for (var i = 0; i < num; i++) {
    //   IngTotalQual += ingQual[i] * ingBaseQty[i];
    //   IngTotalQty += ingBaseQty[i];
    // }
    // ;
    // IngTotalQual = IngTotalQual / IngTotalQty * eff;

    //ферма
//    if ($("#animal_Quality", this).val()) IngTotalQual = ( ingQual[0] * 0.3 + animal_Qual * 0.7 ) * eff;

    //качество товара
    // var ProdQual = Math.pow(IngTotalQual, 0.5) * Math.pow(tech, 0.65);
    //шахты
//    if ($("#ResQ", this).val()) {
//      ProdQual = Math.pow(tech, 0.65) * $("#ResQ", this).val() * eff;
//    }
    //фермы
//    if ($("#ResFQ", this).val()) {
//      ProdQual = Math.pow(tech, 0.65) * Math.pow($("#ResFQ", this).val(), 0.5) * eff;
//    }

    // //ограничение качества (по технологии)
    // if (ProdQual > Math.pow(tech, 1.3)) {
    //   ProdQual = Math.pow(tech, 1.3)
    // }
    // if (ProdQual < 1) {
    //   ProdQual = 1
    // }

    //бонус к качеству
    // ProdQual = ProdQual * ( 1 + $("#Bonus", this).val().replace('%', '') / 100 );
    // $("#ProdQual", this).text(ProdQual.toFixed(2));

    //если есть второй продукт производства
    // if ($("#Bonus2", this).val()) {
    //   var ProdQual2 = Math.pow(IngTotalQual, 0.5) * Math.pow(tech, 0.65);
    //   if (ProdQual2 > Math.pow(tech, 1.3)) {
    //     ProdQual2 = Math.pow(tech, 1.3)
    //   }
    //   if (ProdQual2 < 1) {
    //     ProdQual2 = 1
    //   }
    //   ProdQual2 = ProdQual2 * ( 1 + $("#Bonus2", this).val().replace('%', '') / 100 );
    //   $(this).find("#ProdQual2").text(ProdQual2.toFixed(2));
    // }

    //себестоимость
    // var zp = work_salary * work_quant;
    // var exps = IngTotalCost + zp * 1.1;

//    if ($("#ResFQ", this).val()) exps *= 52;

    // if (envdTax > 1) {
    //   $("#Cost", this).text("$" + commaSeparateNumber((exps / Prod_Quantity).toFixed(2)) + " ($" + commaSeparateNumber(((exps / Prod_Quantity) * envdTax).toFixed(2)) + ")");
    //   if ($("#Bonus2", this).val()) {
    //     $("#Cost", this).text("$" + commaSeparateNumber((exps / Prod_Quantity / 2).toFixed(2)) + " ($" + commaSeparateNumber(((exps / Prod_Quantity / 2) * envdTax).toFixed(2)) + ")");
    //     $("#Cost2", this).text("$" + commaSeparateNumber((exps / Prod_Quantity2 / 2).toFixed(2)) + " ($" + commaSeparateNumber(((exps / Prod_Quantity2 / 2) * envdTax).toFixed(2)) + ")");
    //   }
    // } else {
    //   $("#Cost", this).text("$" + commaSeparateNumber((exps / Prod_Quantity).toFixed(2)));
    //   if ($("#Bonus2", this).val()) {
    //     $("#Cost", this).text("$" + commaSeparateNumber((exps / Prod_Quantity / 2 ).toFixed(2)));
    //     $("#Cost2", this).text("$" + commaSeparateNumber((exps / Prod_Quantity2 / 2 ).toFixed(2)));
    //   }
    // }

    //прибыль
    // var profit = ( Sale_Price * Prod_Quantity ) - exps;
    // $("#profit", this).text("$" + commaSeparateNumber(profit.toFixed(2)));
    //фермы
//    if ($("#ResFQ", this).val()) {
//      $("#profit1", this).text("$" + commaSeparateNumber((profit / 52).toFixed(2)))
//    }

    // if ($("#Bonus2", this).val()) {
    //   var profit = ( Sale_Price * Prod_Quantity + Sale_Price2 * Prod_Quantity2 ) - exps;
    //   $("#profit", this).text("$" + commaSeparateNumber(profit.toFixed(2)));
    // }

    // //подсветка прибыли
    // $("#profit", this).removeClass("label-danger").removeClass("label-success");
    // if (profit > 0) {
    //   $("#profit", this).addClass("label-success");
    // }
    // else {
    //   $("#profit", this).addClass("label-danger");
    // }

    //доля ингридиентов в расходах
    if ($("#animal_Quantity", this).text()) return;

    for (var i = 0; i < num; i++) {
      ingCost[i] = ingTotalPrice[i] / IngTotalCost * 100;
    }
    ;

    $("div[id^='ingWidth']", this).each(function (index) {
      $(this).width(ingCost[index] + "%");
    });

  }
);
