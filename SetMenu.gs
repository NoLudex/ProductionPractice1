function создатьПунктыМеню()
{
  var spreadsheed = SpreadsheetApp.getActiveSpreadsheet();

  // Меню
  var меню = 
  [
    {
      name: "Добавить продукт", functionName: "добавитьПродукт"
    },
    {
      name: "Сделать заказ", functionName: "создатьЗаказ"
    }
  ];
  spreadsheed.addMenu("Моё меню", меню)
}
