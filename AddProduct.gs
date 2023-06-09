function добавитьПродукт() 
{
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getActiveSheet();

  // Получаем данные от пользователя
  var наименование = Browser.inputBox("Введите название продукта:");
  var стоимость = Browser.inputBox("Введите стоимость за килограмм/литр:");

  // Проверяем, если пользователь не ввел данные, то выводим сообщение о отмене операции
  if (наименование === "" || стоимость === "") 
  {
    SpreadsheetApp.getUi().alert("Операция отменена.");
    return;
  }

  // Проверяем, есть ли уже данный продукт в списке
  var продукты = sheet.getRange("B2:B").getValues();
  for (var i = 0; i < продукты.length; i++) 
  {
    if (продукты[i][0] === наименование) 
    {
      SpreadsheetApp.getUi().alert("Продукт с таким наименованием уже существует.");
      return;
    }
  }
  
  // Проверяем правильность стоимости
  if (parseFloat(стоимость) <= 0 || isNaN(parseFloat(стоимость))) {
    SpreadsheetApp.getUi().alert("Неправильная стоимость продукта.");
    return;
  }

  // Получаем последний ID из предыдущей строки
  var последняяСтрока = sheet.getLastRow();
  var предыдущийID = последняяСтрока > 1 ? sheet.getRange(последняяСтрока, 1).getValue() : "";

  // Генерируем новый ID
  var новыйID = генерироватьНовыйID(предыдущийID);

  // Добавляем новый продукт в таблицу
  var новыйПродукт = [новыйID, наименование, стоимость];
  var новаяСтрока = sheet.getRange(последняяСтрока + 1, 1, 1, новыйПродукт.length);
  новаяСтрока.setValues([новыйПродукт]);

  // Проверяем цвет предыдущей строки и применяем светло-оранжевый цвет, если предыдущая строка была светло-желтого цвета
  if (последняяСтрока > 1) {
    var предыдущийЦвет = sheet.getRange(последняяСтрока, 1).getBackground();
    if (предыдущийЦвет === "#fce5cd") {
      новаяСтрока.setBackground("#fff2cc");
    } else {
      новаяСтрока.setBackground("#fce5cd");
    }
  }
  
  // Опционально: можно добавить уведомление о успешном добавлении продукта.
  SpreadsheetApp.getUi().alert("Продукт \"" + наименование + "\" успешно добавлен!");
}
