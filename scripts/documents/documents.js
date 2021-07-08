/*

# Documents 解锁内购年订阅 by 渤涵
Documents Download Link：http://t.cn/AiCd5Ac4

[rewrite_local]
^https:\/\/license\.pdfexpert\.com\/api\/.+\/documents\/subscription\/(refresh$|check$) url script-response-body buehen0426/Scripts/documents/documents.js

[MITM]
hostname = license.pdfexpert.com,

*/

var obj= {
  "productId": "com.readdle.ReaddleDocsIPad.subscription.year50_upd_user",
  "subscriptionExpirationIntent": "userCancelled",
  "receiptStatus": "ok",
  "subscriptionExpirationDate": "17:48 25/11/2099",
  "inAppStates": [
    {
      "productId": "com.readdle.ReaddleDocsIPad.subscription.year50_upd_user",
      "subscriptionExpirationIntent": "userCancelled",
      "receiptStatus": "ok",
      "subscriptionExpirationDate": "17:48 25/11/2019",
      "isEligibleForIntroPeriod": false,
      "originalTransactionId": "20000625420102",
      "productName": "subscription",
      "isInBillingRetryPeriod": false,
      "type": "subscription",
      "subscriptionState": "active",
      "subscriptionAutoRenewStatus": "autoRenewOff",
      "isInGracePeriod": false
    },
    {
      "originalTransactionId": "0000",
      "entitlements": [
      ],
      "type": "custom purchase",
      "productId": "documents6-user"
    }
  ],
  "isDocuments6User": true,
  "isEligibleForIntroPeriod": false,
  "originalTransactionId": "20000625420102",
  "isEligibleFor": [
    "winback"
  ],
  "isInBillingRetryPeriod": false,
  "type": "subscription",
  "inAppPurchased": [
    "com.readdle.ReaddleDocsIPad.subscription.year50_upd_user"
  ],
  "bundleId": "com.readdle.ReaddleDocsIPad",
  "receiptId": 1530908572000,
  "chargingPlatform": "iOS AppStore",
  "subscriptionState": "active",
  "subscriptionAutoRenewStatus": "autoRenewOff",
  "isInGracePeriod": false
};
$done({body: JSON.stringify(obj)});