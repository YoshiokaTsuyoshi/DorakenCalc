//ÉçÉOâêÕ https://ryjkmr.com/google-apps-script-console-log/
const ACCESS_TOKEN = "îÒåˆäJ";

const LINE_FOLDER = "1ee3UisWwQLCHpRGQ3cmPUPGYg4NCZImt";

function doPost(e) {
  let eventObject = JSON.parse(e.postData.contents).events[0];
  Logger.log(eventObject);
  let replyToken = eventObject.replyToken;
  if(replyToken === "undefined") {
    return;
  }
  var option, payload;
  switch(eventObject.type) {
    case "follow":
      //Ç±Ç±Ç…flexÇí«â¡Ç∑ÇÈ https://qiita.com/probabilityhill/items/0ce4983bd855a1fb9e48
      payload = flexDataInputStart(eventObject);
      break;
    case "message":
      var files = DriveApp.getFolderById(LINE_FOLDER).getFilesByName(eventObject.source.userId + ".json");
      if(!files.hasNext()) {
        payload = flexDataInputStart(eventObject);
      }
      else {
        payload = messageProc(eventObject, files);
      }
      break;
    case "postback":
      payload = postbackProc(eventObject);
      break;
    default:
      return;
  }
  option = optionTemplate(payload);
  Logger.log(option);
  UrlFetchApp.fetch("https://api.line.me/v2/bot/message/reply", option);
}

function doGet(e) {
  console.log(e);
  Logger.log(e);
  //return ContentService.createTextOutput(event);
  const htmlOutput = HtmlService.createTemplateFromFile("index").evaluate();
  return htmlOutput;
}