/*

# Documents 解锁内购年订阅 by 渤涵
Documents Download Link：http://t.cn/AiCd5Ac4

[rewrite_local]
^https:\/\/license\.pdfexpert\.com\/api\/.+\/scanner\/subscription\/(refresh$|check$) url script-response-body buehen0426/Scripts/documents/sp.js

[MITM]
hostname = license.pdfexpert.com,

*/

let body= $response.body; 
var obj = JSON.parse(body); 
obj={
  "receiptStatus": "ok",
  "isEligibleForIntroPeriod": true,
  "subscriptionState": "notActive",
  "receiptId": 1607615220000,
  "isScanner7User": true,
  "inAppStates": [{
    "type": "custom purchase",
    "productId": "scannerpro7-user",
    "entitlements": []
  }],
  "chargingPlatform": "iOS AppStore",
  "bundleId": "com.readdle.Scanner"
}
$done({body: JSON.stringify(obj)});