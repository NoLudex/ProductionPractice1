// Глобальные переменные с данными:
// Токен телеграмма у Father_Bot
const telegramBotToken = "Сюда токен бота"; 
// Предварительно отправляем боту /start, чтобы он мог отправлять нам сообщения.
// Нужен ваш ID, он считается как ChatID, можно получить у бота '@userinfobot'
const chatId = "Ваш ID-телеграмм";

function sendTelegramNotification() 
{  
  var url = "https://api.telegram.org/bot" + telegramBotToken + "/sendMessage";
  var payload = 
  {
    "chat_id": chatId,
    // Сообщение, которое вы можете редактировать
    "text": "[LOG] В таблице произошли правки!"
  };
  var options = 
  {
    "method": "post",
    "contentType": "application/json",
    "payload": JSON.stringify(payload)
  };
  
  UrlFetchApp.fetch(url, options);
}

// После загрузки данного кода, нужно установить триггер на функцию: sendTelegramNotification
// В параметрах событий укажите - изменение.
