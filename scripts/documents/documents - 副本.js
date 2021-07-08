/*

# Documents 解锁内购年订阅 by 渤涵
Documents Download Link：http://t.cn/AiCd5Ac4

[rewrite_local]
https:\/\/license\.pdfexpert\.com\/api\/1.0\/documents\/subscription\/(check|refresh) url script-response-body buehen0426/Scripts/documents/documents.js

[MITM]
hostname = license.pdfexpert.com,

*/

let obj = JSON.parse($response.body);

obj = {
  "isEligibleForIntroPeriod":true,
  "originalTransactionId":"730000355073823",
  "subscriptionExpirationDate":"02:33 19/08/2020",
  "subscriptionState":"active",
  "subscriptionReceiptId":"1559207582000",
  "isDocuments6User":true,
  "subscriptionAutoRenewStatus":"autoRenewOff",
  "isInGracePeriod":true
};

$done({body: JSON.stringify(obj)});