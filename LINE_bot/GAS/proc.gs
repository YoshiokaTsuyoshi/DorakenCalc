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
      return textPayloadTemplate(["UserId:" + eventObject.source.userId + "\n�\����������܂����B", "�f�[�^���͕��@�ɏ]����\n���͂���f�[�^��ԐM���Ă��������B"], eventObject);
    case "dataInputWay":
      return flexDataInputWay(eventObject);
    case "dataAdd":
      return textPayloadTemplate(["�\����������܂����B", "����" + dataJson.dataSize + "�l���̃f�[�^��\n���͂���Ă��܂��B", "�����ăf�[�^����͂��Ă��������B"], eventObject);
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
      return textPayloadTemplate(["���l���͕��@�ɏ]���A���l��ԐM���Ă��������B", "��1�F�l����40%�A���_��1�_������0.0025G�̏ꍇ\n\n�l��G(%):40%\n���_1�_�������G(����):0.0025G\n\n�Ɠ��͂��Ă��������B", "��2�F�l��0%�A���_1�_������0G�̏ꍇ\n\n�l��G(%):0%\n���_1�_�������G(����):0G\n\n�Ɠ��͂��Ă��������B"], eventObject);
    case "shareMyself":
      var inputJson = {
        "flag": "shareMyself",
        "dataSize": dataJson.dataSize,
        "data": dataJson.data
      };
      file.setTrashed(true);
      folder.createFile(eventObject.source.userId + ".json", JSON.stringify(inputJson), MimeType.PLAIN_TEXT);
      return textPayloadTemplate(["���l���͕��@�ɏ]���A���l��ԐM���Ă��������B", "��1�F�Rvs1�_������0.0025G�̏ꍇ\n\n�Rvs1�_�������G(����):0.0025G\n\n�Ɠ��͂��Ă��������B", "��2�F�Rvs1�_������0G�̏ꍇ\n\n�Rvs1�_�������G(����):0G\n\n�Ɠ��͂��Ă��������B"], eventObject);
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
      //�O��̋L�^���珈�����ʂ��ς邩��flex
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