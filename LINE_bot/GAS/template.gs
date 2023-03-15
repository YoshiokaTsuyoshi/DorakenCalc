function optionTemplate(payload) {
  return {
    "contentType": "application/json; charset=UTF-8",
    "headers": {
      "Authorization": "Bearer " + ACCESS_TOKEN
    },
    "method": "post",
    "payload": JSON.stringify(payload)
  };
}

function textPayloadTemplate(messages, eventObject) {
  let messageList = [];
  for(let i = 0; i < messages.length; i++) {
    messageList.push({
      "type": "text",
      "text": messages[i]
    });
  }
  return {
    "replyToken": eventObject.replyToken,
    "messages": messageList
  };
}

function flexDataInputStart(eventObject) {
  return {
    "replyToken": eventObject.replyToken,
    "messages": [
      {
        "type": "flex",
        "altText": "This is flex message.",
        "contents": {
          "type": "bubble",
          "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "�y���Ӂz",
                "wrap": true,
                "size": "xs"
              },
              {
                "type": "text",
                "text": "�E�A���ł̃`���b�g�̑��M�͂�߂Ă��������B",
                "wrap": true,
                "size": "xxs"
              },
              {
                "type": "text",
                "text": "�E�`���b�g�𑗐M����ƁA\"�K��\"�ԐM������܂��B",
                "wrap": true,
                "size": "xxs"
              },
              {
                "type": "text",
                "text": "�E�ԐM��҂����ɑ�����J��Ԃ��ƁA��쓮����������\��������܂��B",
                "wrap": true,
                "size": "xxs"
              },
              {
                "type": "text",
                "text": "�E�{�^������������A�`���b�g�̑��M�����Ă�10�b�ȏ�ԐM�������ꍇ�͋g���ɒm�点�Ă��������B",
                "wrap": true,
                "size": "xxs"
              },
              {
                "type": "text",
                "text": "�E���̑��킩��Ȃ����Ƃ�����΁A�g���ɘA�����������B",
                "wrap": true,
                "size": "xxs"
              },
            ]
          },
          "footer": {
            "type": "box",
            "layout": "vertical",
            "spacing": "md",
            "contents": [
              {
                "type": "button",
                "style": "primary",
                "action": {
                  "type": "postback",
                  "label": "�f�[�^���͂��J�n",
                  "data": "dataInput",
                  "displayText": "�f�[�^���͊J�n��\��",
                  "inputOption": "openKeyboard"
                }
              },
              {
                "type": "button",
                "action": {
                  "type": "postback",
                  "label": "�f�[�^���͕��@�m�F",
                  "data": "dataInputWay",
                  "displayText": "�f�[�^���͕��@�m�F��\��"
                }
              }
            ]
          }
        }
      }
    ]
  };
}

function flexDataInputWay(eventObject) {
  let dataInputStartPayload = flexDataInputStart(eventObject);
  return {
    "replyToken": eventObject.replyToken,
    "messages": [
      {
        "type": "flex",
          "altText": "This is flex message.",
          "contents": {
            "type": "carousel",
            "contents": [
              {
                "type": "bubble",
                "hero": {
                  "type": "image",
                  "url": "https://yoshiokatsuyoshi.github.io/DorakenCalc/LINE_bot/image/032E84FB-0CF7-472C-8D0A-3C72683E3C90.png",
                  "size": "full"
                },
                "footer": {
                  "type": "box",
                  "layout": "vertical",
                  "spacing": "md",
                  "contents": [
                    {
                      "type": "text",
                      "text": "�u�ԐM���Ă��������v�Ƃ����`���b�g�����Ă�����͂��J�n���Ă��������B",
                      "wrap": true
                    }
                  ]
                }
              },
              {
                "type": "bubble",
                "hero": {
                  "type": "image",
                  "url": "https://yoshiokatsuyoshi.github.io/DorakenCalc/TotalExpImg/IMG_2079.PNG",
                  "size": "full"
                },
                "footer": {
                  "type": "box",
                  "layout": "vertical",
                  "spacing": "md",
                  "contents": [
                    {
                      "type": "text",
                      "text": "�R�c�X�e�[�^�X�̌R�c���ꗗ����A�摜�̂悤�ɕ��͂̃R�s�[���͂��߂Ă��������B�R�s�[�̎n�_�͈�l�ڂ̖��O����ł���΂ǂ��ł��\���܂���B",
                      "wrap": true
                    }
                  ]
                }
              },
              {
                "type": "bubble",
                "hero": {
                  "type": "image",
                  "url": "https://yoshiokatsuyoshi.github.io/DorakenCalc/TotalExpImg/IMG_2081.PNG",
                  "size": "full"
                },
                "footer": {
                  "type": "box",
                  "layout": "vertical",
                  "spacing": "md",
                  "contents": [
                    {
                      "type": "text",
                      "text": "�y�[�W���̑S��(1�y�[�W�ő�10�l)�̏����R�s�[�͈͓��ɓ���Ă��������B",
                      "wrap": true
                    }
                  ]
                }
              },
              {
                "type": "bubble",
                "hero": {
                  "type": "image",
                  "url": "https://yoshiokatsuyoshi.github.io/DorakenCalc/TotalExpImg/IMG_2080.PNG",
                  "size": "full"
                },
                "footer": {
                  "type": "box",
                  "layout": "vertical",
                  "spacing": "md",
                  "contents": [
                    {
                      "type": "text",
                      "text": "�R�s�[�̏I�_�́A�y�[�W�Ō�̒c���́u���O�C��:���������v�ȍ~�ł���΂ǂ��ł��\���܂���B",
                      "wrap": true
                    }
                  ]
                }
              },
              {
                "type": "bubble",
                "hero": {
                  "type": "image",
                  "url": "https://yoshiokatsuyoshi.github.io/DorakenCalc/LINE_bot/image/C951F87C-6793-45EC-8C49-90BC61479D28.png",
                  "size": "full"
                },
                "footer": {
                  "type": "box",
                  "layout": "vertical",
                  "spacing": "md",
                  "contents": [
                    {
                      "type": "text",
                      "text": "�R�s�[�������e���`���b�g�Ƀy�[�X�g���đ��M���Ă��������B",
                      "wrap": true
                    }
                  ]
                }
              },
              {
                "type": "bubble",
                "hero": {
                  "type": "image",
                  "url": "https://yoshiokatsuyoshi.github.io/DorakenCalc/LINE_bot/image/6AF63721-233E-4CD8-8E87-FFA74D1462F7.png",
                  "size": "full"
                },
                "footer": {
                  "type": "box",
                  "layout": "vertical",
                  "spacing": "md",
                  "contents": [
                    {
                      "type": "text",
                      "text": "�R�c���ꗗ�̎��y�[�W�ȍ~�̃f�[�^�́u�f�[�^��ǉ��v����������A�w���ɏ]���R�s�y���J��Ԃ��Ă��������B",
                      "wrap": true
                    },
                    {
                      "type": "text",
                      "text": "�S�����̃f�[�^���R�s�y������u�f�[�^���͊����v�������Ă��������B",
                      "wrap": true
                    }
                  ]
                }
              }
            ]
          }
      },
      dataInputStartPayload.messages[0]
    ]
  }
}

function flexDataAddOrEnd(eventObject, dataJson) {
  let num = 0, contentList = [];
    for(; num < dataJson.length; num++) {
    var temp = {
      "type": "text",
      "text": null,
      "size": "xs",
      "wrap": true
    }
    temp.text = dataJson[num].name;
    contentList.push(temp);
  }
  num++;
  contentList.push({"type":"text", "text": "���v" + dataJson.length + "�l���̓��͊���", "wrap": true});
  return {
    "replyToken": eventObject.replyToken,
    "messages": [
      {
        "type": "flex",
        "altText": "This is flex message.",
        "contents": {
          "type": "bubble",
          "body": {
            "type": "box",
            "layout": "vertical",
            "spacing": "md",
            "contents": contentList
          },
          "footer": {
            "type": "box",
            "layout": "vertical",
            "spacing": "md",
            "contents": [
              {
                "type": "button",
                "style": "primary",
                "action": {
                  "type": "postback",
                  "label": "�f�[�^��ǉ�",
                  "data": "dataAdd",
                  "displayText": "�f�[�^���͌p����\��",
                  "inputOption": "openKeyboard"
                }
              },
              {
                "type": "button",
                "style": "secondary",
                "action": {
                  "type": "postback",
                  "label": "�f�[�^���͊���",
                  "data": "dataEnd",
                  "displayText": "�f�[�^���͂͊������܂���"
                }
              }
            ]
          }
        }
      }
    ]
  };
}

function flexResultTotalOrShare(eventObject) {
  return {
    "replyToken": eventObject.replyToken,
    "messages": [
      {
        "type": "flex",
        "altText": "This is flex message.",
        "contents": {
          "type": "bubble",
          "body": {
            "type": "box",
            "layout": "vertical",
            "spacing": "md",
            "contents": [
              {
                "type": "text",
                "text": "�f�[�^���͂��������܂����B",
                "wrap": true
              },
              {
                "type": "text",
                "text": "�W�v���ʂ�\�����邩�A",
                "wrap": true
              },
              {
                "type": "text",
                "text": "���z�v�Z���J�n���邩�I��ŉ������B",
                "wrap": true
              }
            ]
          },
          "footer": {
            "type": "box",
            "layout": "vertical",
            "spacing": "md",
            "contents": [
              {
                "type": "button",
                "style": "primary",
                "action": {
                  "type": "postback",
                  "label": "�W�v���ʏo��",
                  "data": "resultTotal",
                  "displayText": "�W�v���ʂ�\��"
                }
              },
              {
                "type": "button",
                "style": "secondary",
                "action": {
                  "type": "postback",
                  "label": "���z�v�Z�J�n",
                  "data": "resultShare",
                  "displayText": "���z�v�Z�t���[��\��"
                }
              }
            ]
          }
        }
      }
    ]
  };
}

function flexShareSelect(eventObject) {
  return {
    "replyToken": eventObject.replyToken,
    "messages": [
      {
        "type": "flex",
        "altText": "This is flex message.",
        "contents": {
          "type": "bubble",
          "body": {
            "type": "box",
            "layout": "vertical",
            "spacing": "md",
            "contents": [
              {
                "type": "text",
                "text": "�����҂Ǝ��R�c���̕��z�v�Z�ǂ�����s�����I��ł��������B",
                "wrap": true
              },
              {
                "type": "text",
                "text": "���z�v�Z�ɂ͎w��̐��l��ԐM����K�v������܂��B",
                "wrap": true
              },
              {
                "type": "text",
                "text": "���l���͕��@��\�ߊm�F���Ă��������B",
                "wrap": true
              }
            ]
          },
          "footer": {
            "type": "box",
            "layout": "vertical",
            "spacing": "md",
            "contents": [
              {
                "type": "button",
                "style": "primary",
                "action": {
                  "type": "postback",
                  "label": "�����ҕ��z�v�Z",
                  "data": "shareUnion",
                  "displayText": "�����ҕ��z�v�Z��\��",
                  "inputOption": "openKeyboard",
                  "fillInText": "�l��G(%):50%\n���_1�_�������G(����):0.01G"
                }
              },
              {
                "type": "button",
                "style": "secondary",
                "action": {
                  "type": "postback",
                  "label": "���R���z�v�Z",
                  "data": "shareMyself",
                  "displayText": "���R���z�v�Z��\��",
                  "inputOption": "openKeyboard",
                  "fillInText": "�Rvs1�_�������G(����):0.01G"
                }
              },
              {
                "type": "button",
                "action": {
                  "type": "postback",
                  "label": "���l���͕��@�m�F",
                  "data": "shareWay",
                  "displayText": "���l���͕��@�m�F��\��"
                }
              }
            ]
          }
        }
      }
    ]
  };
}

function flexShareWay(eventObject) {
  let shareSelectPayload = flexShareSelect(eventObject);
  return {
    "replyToken": eventObject.replyToken,
    "messages": [
      {
        "type": "flex",
          "altText": "This is flex message.",
          "contents": {
            "type": "carousel",
            "contents": [
              {
                "type": "bubble",
                "hero": {
                  "type": "image",
                  "url": "https://yoshiokatsuyoshi.github.io/DorakenCalc/LINE_bot/image/union1.png",
                  "size": "full"
                },
                "footer": {
                  "type": "box",
                  "layout": "vertical",
                  "spacing": "md",
                  "contents": [
                    {
                      "type": "text",
                      "text": "�����ҕ��z�v�Z��I�������ꍇ�̉��",
                      "wrap": true
                    }
                  ]
                }
              },
              {
                "type": "bubble",
                "hero": {
                  "type": "image",
                  "url": "https://yoshiokatsuyoshi.github.io/DorakenCalc/LINE_bot/image/union2.png",
                  "size": "full"
                },
                "footer": {
                  "type": "box",
                  "layout": "vertical",
                  "spacing": "md",
                  "contents": [
                    {
                      "type": "text",
                      "text": "�ԐM��A������҂��Ă�������",
                      "wrap": true
                    }
                  ]
                }
              },
              {
                "type": "bubble",
                "hero": {
                  "type": "image",
                  "url": "https://yoshiokatsuyoshi.github.io/DorakenCalc/LINE_bot/image/myself1.png",
                  "size": "full"
                },
                "footer": {
                  "type": "box",
                  "layout": "vertical",
                  "spacing": "md",
                  "contents": [
                    {
                      "type": "text",
                      "text": "���R���z�v�Z��I�������ꍇ�̉��",
                      "wrap": true
                    }
                  ]
                }
              },
              {
                "type": "bubble",
                "hero": {
                  "type": "image",
                  "url": "https://yoshiokatsuyoshi.github.io/DorakenCalc/LINE_bot/image/myself2.png",
                  "size": "full"
                },
                "footer": {
                  "type": "box",
                  "layout": "vertical",
                  "spacing": "md",
                  "contents": [
                    {
                      "type": "text",
                      "text": "�ԐM��A������҂��Ă�������",
                      "wrap": true
                    }
                  ]
                }
              }
            ]
          }
      },
      shareSelectPayload.messages[0]
    ]
  }
}

function flexNewOrResult(eventObject) {
  return {
    "replyToken": eventObject.replyToken,
    "messages": [
      {
        "type": "flex",
        "altText": "This is flex message.",
        "contents": {
          "type": "bubble",
          "body": {
            "type": "box",
            "layout": "vertical",
            "spacing": "md",
            "contents": [
              {
                "type": "text",
                "text": "���Ȃ���UserId�ɂ��O��̓��̓f�[�^�𔭌����܂����B",
                "wrap": true
              },
              {
                "type": "text",
                "text": "�V�K�Ńf�[�^���͂��s�����A�O��̃f�[�^�𗘗p���Č��ʏo�͂��s�����I��ł��������B",
                "wrap": true
              }
            ]
          },
          "footer": {
            "type": "box",
            "layout": "vertical",
            "spacing": "md",
            "contents": [
              {
                "type": "button",
                "style": "primary",
                "action": {
                  "type": "postback",
                  "label": "�V�K�f�[�^����",
                  "data": "newDataInput",
                  "displayText": "�V�K�f�[�^���͂�\��"
                }
              },
              {
                "type": "button",
                "style": "secondary",
                "action": {
                  "type": "postback",
                  "label": "�O��f�[�^�Ō��ʏo��",
                  "data": "dataEnd",
                  "displayText": "�O��f�[�^�Ō��ʏo�͂�\��"
                }
              }
            ]
          }
        }
      }
    ]
  };
}

function textToData(dataText) {
  let indexStart = 0, indexEnd = 0, tempDataText = "", allDataList = [];
  while(dataText.indexOf("���Rvs�Rpt:") > 0) {
    var allDataObject = {
      "name": null,
      "post": null,
      "hp": null,
      "onBossPt": null,
      "popular": null,
      "winPt": null,
      "getG": null,
      "adG": null,
      "armyPt": null,
      "logMonth": null
    };
    indexStart = dataText.indexOf("���Rvs�Rpt:");
    indexEnd = dataText.indexOf("��", indexStart + 1);
    indexStart = dataText.lastIndexOf("\n��E", indexStart);
    indexStart = dataText.lastIndexOf("\n", indexStart - 1) + 1;
    //if(indexStart < 0) indexStart = 0;
    tempDataText = dataText.substring(indexStart, indexEnd);
    indexStart = 0;
    dataText = dataText.substring(indexEnd);
    indexEnd = tempDataText.indexOf("\n", indexStart);
    allDataObject.name = tempDataText.substring(indexStart, indexEnd);
    indexStart = tempDataText.indexOf("\n", indexEnd + 1);
    allDataObject.post = tempDataText.substring(tempDataText.indexOf(":", indexEnd) + 1, indexStart);
    indexEnd = tempDataText.indexOf("\n", indexStart + 1);
    allDataObject.hp = parseInt(tempDataText.substring(tempDataText.indexOf(":", indexStart) + 1, indexEnd), 10);
    indexStart = tempDataText.indexOf("\n", indexEnd + 1);
    allDataObject.onBossPt = parseInt(tempDataText.substring(tempDataText.indexOf(":", indexEnd) + 1, indexStart), 10);
    indexEnd = tempDataText.indexOf("\n", indexStart + 1);
    allDataObject.popular = parseInt(tempDataText.substring(tempDataText.indexOf(":", indexStart) + 1, indexEnd), 10);
    indexStart = tempDataText.indexOf("\n", indexEnd + 1);
    allDataObject.winPt = parseInt(tempDataText.substring(tempDataText.indexOf(":", indexEnd) + 1, indexStart), 10);
    indexStart = tempDataText.indexOf("�l��:", indexStart) + 3;
    indexEnd = tempDataText.indexOf("\n", indexStart + 1);
    allDataObject.getG = parseInt(tempDataText.substring(indexStart, indexEnd).replace(/,/g, ""), 10);
    indexStart = tempDataText.indexOf("\n", indexEnd + 1);
    allDataObject.adG = parseInt(tempDataText.substring(tempDataText.indexOf(":", indexEnd) + 1, indexStart).replace(/,/g, ""), 10);
    indexEnd = tempDataText.indexOf("\n", indexStart + 1);
    allDataObject.armyPt = parseInt(tempDataText.substring(tempDataText.indexOf(":", indexStart) + 1, indexEnd).replace(/,/g, ""), 10);
    allDataObject.logMonth = parseInt(tempDataText.substring(tempDataText.indexOf(":", indexEnd) + 1), 10);
    allDataList.push(allDataObject);
  }
  return allDataList;
}

function imageToData(eventObject) {
  let tempObj = {
    title: "tempImage.png",
    mimeType: "image/png"
  },
  option = {
    ocr: true,
    ocrLanguage: "ja"
  };
  var image;
  if(eventObject.message.contentProvider.type === "line") image = UrlFetchApp.fetch("https://api-data.line.me/v2/bot/message/" + eventObject.message.id + "/content", {
    "headers": {
      "Authorization": "Bearer " + ACCESS_TOKEN
    }
  });
  let fileData = Drive.Files.insert(tempObj, image.getBlob(), option);
  let fileString = DocumentApp.openById(fileData.id).getBody.toString();
  return textPayloadTemplate([fileString], eventObject);
}

function createResultTotal(eventObject, dataJson) {
  let dataTotal = "�W�v����\n\n", flag1 = true;
  while(flag1) {
    flag1 = false;
    for(let i = 0; i < dataJson.dataSize - 1; i++) {
      if(dataJson.data[i].getG < dataJson.data[i + 1].getG) {
        var temp = dataJson.data[i];
        dataJson.data[i] = dataJson.data[i + 1];
        dataJson.data[i + 1] = temp;
        flag1 = true;
      }
    }
  }
  Logger.log(dataJson);
  for(let i = 0; i < dataJson.dataSize; i++) {
    var name = dataJson.data[i].name;
    name = name.indexOf("�y") <= 0 ? name : name.substring(0, name.indexOf("�y"));
    dataTotal += name + ":" + parseInt(dataJson.data[i].getG) + "/" + parseInt(dataJson.data[i].winPt) + "/" + parseInt(dataJson.data[i].onBossPt) + "\n";
  }
  return textPayloadTemplate([dataTotal], eventObject);
}

function createResultShare(eventObject, dataJson) {
  let dataText = eventObject.message.text, index = 0, dataShare = "";
  switch(dataJson.flag) {
    case "shareUnion":
      let getGRate = 0, onBossPtRate = 0;
      index = dataText.indexOf(":") + 1;
      getGRate = parseFloat(dataText.substring(index, dataText.indexOf("%", index))) / 100.0;
      index = dataText.indexOf(":", index) + 1;
      onBossPtRate = parseFloat(dataText.substring(index, dataText.indexOf("G", index)));
      dataShare = "�����ҕ��z����\n" + dataText + "\n\n";
      for(let i = 0; i < dataJson.dataSize; i++) {
        var winPtG = 0, winPt = dataJson.data[i].winPt, getGG = 0, onBossPtG = 0;
        if(winPt >= 160) winPtG = 750;
        else if(winPt >= 130) winPtG = 500;
        else if(winPt >= 100) winPtG = 300;
        else if(winPt >= 60) winPtG = 150;
        else winPtG = 0;
        getGG = parseInt(getGRate * dataJson.data[i].getG);
        onBossPtG = parseInt(onBossPtRate * dataJson.data[i].onBossPt);
        dataShare += dataJson.data[i].name + ":(�l��G)" + dataJson.data[i].getG + "G��" + getGG + "G/(����pt)" + winPt + "��" + winPtG + "G/(���_)" + dataJson.data[i].onBossPt + "��" + onBossPtG + "G/(���z���v)" + (getGG + winPtG + onBossPtG) + "G\n";
      }
      break;
    case "shareMyself":
      let armyPtRate = 0;
      index = dataText.indexOf(":") + 1;
      armyPtRate = parseFloat(dataText.substring(index, dataText.indexOf("G", index)));
      dataShare = "���R���z����\n" + dataText + "\n\n";
      for(let i = 0; i < dataJson.dataSize; i++) {
        var postG = 0, adGG = 0, armyPtG = 0;
        switch(dataJson.data[i].post) {
          case "�c��":
            postG = 0;
            break;
          case "���c��":
            postG = 1000;
            break;
          case "�R�c��":
            postG = 5000;
            break;
          case "�P����":
            postG = 0;
            break;
          default:
            postG = 500;
        }
        adGG = parseInt(0.05 * dataJson.data[i].adG);
        armyPtG = parseInt(armyPtRate * dataJson.data[i].armyPt);
        dataShare += dataJson.data[i].name + ":(��E�蓖)" + dataJson.data[i].post + "��" + postG + "G/(�R�����Ҍ�)" + dataJson.data[i].adG + "G��" + adGG + "G/(�Rvs���_)" + dataJson.data[i].armyPt + "��" + armyPtG + "G/(���z���v)" + (postG + adGG + armyPtG) + "G\n";
      }
      break;
    default:
      break;
  }
  return textPayloadTemplate([dataShare], eventObject);
}