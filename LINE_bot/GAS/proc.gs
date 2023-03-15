function postbackProc(eventObject) {
  let folder = DriveApp.getFolderById(LINE_FOLDER);
  let files = folder.getFilesByName(eventObject.source.userId + ".json");
  var dataJson, file = null;
  if(files.hasNext()) {
    file = files.next();
    dataJson = JSON.parse(file.getAs(MimeType.PLAIN_TEXT).getDataAsString());
  }
  switch(eventObject.postback.data) {
    case "dataInput":
      if(file != null) {
        file.setTrashed(true);
      }
      folder.createFile(eventObject.source.userId + ".json", JSON.stringify({"flag": "start"}), MimeType.PLAIN_TEXT);
      return textPayloadTemplate(["UserId:" + eventObject.source.userId + "\n申請を受諾しました。", "データ入力方法に従って\n入力するデータを返信してください。"], eventObject);
    case "dataInputWay":
      return flexDataInputWay(eventObject);
    case "dataAdd":
      return textPayloadTemplate(["申請を受諾しました。", "現在" + dataJson.dataSize + "人分のデータが\n入力されています。", "続けてデータを入力してください。"], eventObject);
    case "dataEnd":
      var inputJson = {
        "flag": "end",
        "dataSize": dataJson.dataSize,
        "data": dataJson.data
      };
      file.setTrashed(true);
      folder.createFile(eventObject.source.userId + ".json", JSON.stringify(inputJson), MimeType.PLAIN_TEXT);
      return flexResultTotalOrShare(eventObject);
    case "resultTotal":
      return createResultTotal(eventObject, dataJson);
    case "resultShare":
      return flexShareSelect(eventObject);
    case "shareUnion":
      var inputJson = {
        "flag": "shareUnion",
        "dataSize": dataJson.dataSize,
        "data": dataJson.data
      };
      file.setTrashed(true);
      folder.createFile(eventObject.source.userId + ".json", JSON.stringify(inputJson), MimeType.PLAIN_TEXT);
      return textPayloadTemplate(["数値入力方法に従い、数値を返信してください。", "例1：獲得が40%、勝点が1点当たり0.0025Gの場合\n\n獲得G(%):40%\n勝点1点当たりのG(小数):0.0025G\n\nと入力してください。", "例2：獲得0%、勝点1点当たり0Gの場合\n\n獲得G(%):0%\n勝点1点当たりのG(小数):0G\n\nと入力してください。"], eventObject);
    case "shareMyself":
      var inputJson = {
        "flag": "shareMyself",
        "dataSize": dataJson.dataSize,
        "data": dataJson.data
      };
      file.setTrashed(true);
      folder.createFile(eventObject.source.userId + ".json", JSON.stringify(inputJson), MimeType.PLAIN_TEXT);
      return textPayloadTemplate(["数値入力方法に従い、数値を返信してください。", "例1：軍vs1点当たり0.0025Gの場合\n\n軍vs1点当たりのG(小数):0.0025G\n\nと入力してください。", "例2：軍vs1点当たり0Gの場合\n\n軍vs1点当たりのG(小数):0G\n\nと入力してください。"], eventObject);
    case "shareWay":
      return flexShareWay(eventObject);
    case "newDataInput":
      return flexDataInputStart(eventObject);
    default:
      break;
  }
  return {};
}

function messageProc(eventObject, files) {
  let folder = DriveApp.getFolderById(LINE_FOLDER);
  let file = files.next();
  let dataJson = JSON.parse(file.getAs(MimeType.PLAIN_TEXT).getDataAsString());
  var newDataJson;
  switch(dataJson.flag) {
    case "start":
      if(eventObject.message.type === "text") newDataJson = textToData(eventObject.message.text);
      else if(eventObject.message.type === "image") return imageToData(eventObject);
      var inputJson = {
        "flag": "add",
        "dataSize": newDataJson.length,
        "data": newDataJson
      };
      file.setTrashed(true);
      folder.createFile(eventObject.source.userId + ".json", JSON.stringify(inputJson), MimeType.PLAIN_TEXT);
      return flexDataAddOrEnd(eventObject, newDataJson);
    case "add":
      newDataJson = textToData(eventObject.message.text);
      var inputJson = {
        "flag": "add",
        "dataSize": newDataJson.length + dataJson.dataSize,
        "data": dataJson.data.concat(newDataJson)
      };
      file.setTrashed(true);
      folder.createFile(eventObject.source.userId + ".json", JSON.stringify(inputJson), MimeType.PLAIN_TEXT);
      return flexDataAddOrEnd(eventObject, newDataJson);
    case "end":
      //前回の記録から処理結果を観るかのflex
      return flexNewOrResult(eventObject);
    case "shareUnion":
      var inputJson = {
        "flag": "end",
        "dataSize":dataJson.dataSize,
        "data": dataJson.data
      };
      file.setTrashed(true);
      folder.createFile(eventObject.source.userId + ".json", JSON.stringify(inputJson), MimeType.PLAIN_TEXT);
      return createResultShare(eventObject, dataJson);
    case "shareMyself":
      var inputJson = {
        "flag": "end",
        "dataSize":dataJson.dataSize,
        "data": dataJson.data
      };
      file.setTrashed(true);
      folder.createFile(eventObject.source.userId + ".json", JSON.stringify(inputJson), MimeType.PLAIN_TEXT);
      return createResultShare(eventObject, dataJson);
    default:
      break;
  }
  return {};
}