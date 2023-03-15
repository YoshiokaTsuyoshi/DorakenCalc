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
                "text": "【注意】",
                "wrap": true,
                "size": "xs"
              },
              {
                "type": "text",
                "text": "・連続でのチャットの送信はやめてください。",
                "wrap": true,
                "size": "xxs"
              },
              {
                "type": "text",
                "text": "・チャットを送信すると、\"必ず\"返信があります。",
                "wrap": true,
                "size": "xxs"
              },
              {
                "type": "text",
                "text": "・返信を待たずに操作を繰り返すと、誤作動が発生する可能性があります。",
                "wrap": true,
                "size": "xxs"
              },
              {
                "type": "text",
                "text": "・ボタンを押したり、チャットの送信をしても10秒以上返信が無い場合は吉岡に知らせてください。",
                "wrap": true,
                "size": "xxs"
              },
              {
                "type": "text",
                "text": "・その他わからないことがあれば、吉岡に連絡ください。",
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
                  "label": "データ入力を開始",
                  "data": "dataInput",
                  "displayText": "データ入力開始を申請",
                  "inputOption": "openKeyboard"
                }
              },
              {
                "type": "button",
                "action": {
                  "type": "postback",
                  "label": "データ入力方法確認",
                  "data": "dataInputWay",
                  "displayText": "データ入力方法確認を申請"
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
                      "text": "「返信してください」というチャットが来てから入力を開始してください。",
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
                      "text": "軍団ステータスの軍団員一覧から、画像のように文章のコピーをはじめてください。コピーの始点は一人目の名前より上であればどこでも構いません。",
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
                      "text": "ページ内の全員(1ページ最大10人)の情報をコピー範囲内に入れてください。",
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
                      "text": "コピーの終点は、ページ最後の団員の「ログイン:○月○日」以降であればどこでも構いません。",
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
                      "text": "コピーした内容をチャットにペーストして送信してください。",
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
                      "text": "軍団員一覧の次ページ以降のデータは「データを追加」を押した後、指示に従いコピペを繰り返してください。",
                      "wrap": true
                    },
                    {
                      "type": "text",
                      "text": "全員分のデータをコピペしたら「データ入力完了」を押してください。",
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
  contentList.push({"type":"text", "text": "合計" + dataJson.length + "人分の入力完了", "wrap": true});
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
                  "label": "データを追加",
                  "data": "dataAdd",
                  "displayText": "データ入力継続を申請",
                  "inputOption": "openKeyboard"
                }
              },
              {
                "type": "button",
                "style": "secondary",
                "action": {
                  "type": "postback",
                  "label": "データ入力完了",
                  "data": "dataEnd",
                  "displayText": "データ入力は完了しました"
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
                "text": "データ入力が完了しました。",
                "wrap": true
              },
              {
                "type": "text",
                "text": "集計結果を表示するか、",
                "wrap": true
              },
              {
                "type": "text",
                "text": "分配計算を開始するか選んで下さい。",
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
                  "label": "集計結果出力",
                  "data": "resultTotal",
                  "displayText": "集計結果を申請"
                }
              },
              {
                "type": "button",
                "style": "secondary",
                "action": {
                  "type": "postback",
                  "label": "分配計算開始",
                  "data": "resultShare",
                  "displayText": "分配計算フローを申請"
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
                "text": "合流者と自軍団員の分配計算どちらを行うか選んでください。",
                "wrap": true
              },
              {
                "type": "text",
                "text": "分配計算には指定の数値を返信する必要があります。",
                "wrap": true
              },
              {
                "type": "text",
                "text": "数値入力方法を予め確認してください。",
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
                  "label": "合流者分配計算",
                  "data": "shareUnion",
                  "displayText": "合流者分配計算を申請",
                  "inputOption": "openKeyboard",
                  "fillInText": "獲得G(%):50%\n勝点1点当たりのG(小数):0.01G"
                }
              },
              {
                "type": "button",
                "style": "secondary",
                "action": {
                  "type": "postback",
                  "label": "自軍分配計算",
                  "data": "shareMyself",
                  "displayText": "自軍分配計算を申請",
                  "inputOption": "openKeyboard",
                  "fillInText": "軍vs1点当たりのG(小数):0.01G"
                }
              },
              {
                "type": "button",
                "action": {
                  "type": "postback",
                  "label": "数値入力方法確認",
                  "data": "shareWay",
                  "displayText": "数値入力方法確認を申請"
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
                      "text": "合流者分配計算を選択した場合の画面",
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
                      "text": "返信後、応答を待ってください",
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
                      "text": "自軍分配計算を選択した場合の画面",
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
                      "text": "返信後、応答を待ってください",
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
                "text": "あなたのUserIdによる前回の入力データを発見しました。",
                "wrap": true
              },
              {
                "type": "text",
                "text": "新規でデータ入力を行うか、前回のデータを利用して結果出力を行うか選んでください。",
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
                  "label": "新規データ入力",
                  "data": "newDataInput",
                  "displayText": "新規データ入力を申請"
                }
              },
              {
                "type": "button",
                "style": "secondary",
                "action": {
                  "type": "postback",
                  "label": "前回データで結果出力",
                  "data": "dataEnd",
                  "displayText": "前回データで結果出力を申請"
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
  while(dataText.indexOf("月軍vs軍pt:") > 0) {
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
    indexStart = dataText.indexOf("月軍vs軍pt:");
    indexEnd = dataText.indexOf("月", indexStart + 1);
    indexStart = dataText.lastIndexOf("\n役職", indexStart);
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
    indexStart = tempDataText.indexOf("獲得:", indexStart) + 3;
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
  let dataTotal = "集計結果\n\n", flag1 = true;
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
    name = name.indexOf("【") <= 0 ? name : name.substring(0, name.indexOf("【"));
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
      dataShare = "合流者分配結果\n" + dataText + "\n\n";
      for(let i = 0; i < dataJson.dataSize; i++) {
        var winPtG = 0, winPt = dataJson.data[i].winPt, getGG = 0, onBossPtG = 0;
        if(winPt >= 160) winPtG = 750;
        else if(winPt >= 130) winPtG = 500;
        else if(winPt >= 100) winPtG = 300;
        else if(winPt >= 60) winPtG = 150;
        else winPtG = 0;
        getGG = parseInt(getGRate * dataJson.data[i].getG);
        onBossPtG = parseInt(onBossPtRate * dataJson.data[i].onBossPt);
        dataShare += dataJson.data[i].name + ":(獲得G)" + dataJson.data[i].getG + "G→" + getGG + "G/(勝利pt)" + winPt + "→" + winPtG + "G/(勝点)" + dataJson.data[i].onBossPt + "→" + onBossPtG + "G/(分配合計)" + (getGG + winPtG + onBossPtG) + "G\n";
      }
      break;
    case "shareMyself":
      let armyPtRate = 0;
      index = dataText.indexOf(":") + 1;
      armyPtRate = parseFloat(dataText.substring(index, dataText.indexOf("G", index)));
      dataShare = "自軍分配結果\n" + dataText + "\n\n";
      for(let i = 0; i < dataJson.dataSize; i++) {
        var postG = 0, adGG = 0, armyPtG = 0;
        switch(dataJson.data[i].post) {
          case "団員":
            postG = 0;
            break;
          case "副団長":
            postG = 1000;
            break;
          case "軍団長":
            postG = 5000;
            break;
          case "訓練生":
            postG = 0;
            break;
          default:
            postG = 500;
        }
        adGG = parseInt(0.05 * dataJson.data[i].adG);
        armyPtG = parseInt(armyPtRate * dataJson.data[i].armyPt);
        dataShare += dataJson.data[i].name + ":(役職手当)" + dataJson.data[i].post + "→" + postG + "G/(軍資金還元)" + dataJson.data[i].adG + "G→" + adGG + "G/(軍vs勝点)" + dataJson.data[i].armyPt + "→" + armyPtG + "G/(分配合計)" + (postG + adGG + armyPtG) + "G\n";
      }
      break;
    default:
      break;
  }
  return textPayloadTemplate([dataShare], eventObject);
}