# DorakenCalc
* ウェブ版ツール：https://yoshiokatsuyoshi.github.io/DorakenCalc/
* LINE版ツール：https://line.me/R/ti/p/@693cdilw


## LINE版ツール(概要)
Google Apps Scriptで開発したツール本体を、LINEbotを入出力として実装  
ウェブ版ツールがUIなどに使いづらさがあったためLINE版を新規開発

## 実行動画
ゲーム画面はぼかしてます
https://user-images.githubusercontent.com/98578587/226675880-bde5106f-f6be-46b7-92cf-c0eff5ed27d8.mp4


## LINE版ツール(詳細)
GASにおいてwebツールを開発し、URLを発行  
URLをLINEbotのwebhookに設定し、LINEからPOSTを受け取る  
UserIdごとにGASと紐づけられた私のGoogleDriveにJSONデータファイルを作成  
「POSTイベント・応答先LINEUserId・UserId固有のJSONファイル内フラグ」を使用して応答メッセージの分岐を実現  
LINEのmessagingAPIを使用してPOSTを送信
