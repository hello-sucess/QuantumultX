/*

石墨文档 unlock vip by 渤涵

[rewrite_local]
https:\/\/shimo\.im\/lizard-api\/users\/ url script-response-body buehen0426/Scripts/shimo/shimo.js

[MITM]
hostname:*.shimo.im

*/

let obj = JSON.parse($response.body);

obj.membership = {
    "accountTypeExpiredAt": "2099-04-30T16:00:00.000Z",
    "accountTypeCreatedAt": "2020-03-17T10:53:26.000Z",
    "accountType": "personal_premium",
    "isEnterprisePremium": true,
    "isExpired": false,
    "isNewDing": false,
    "isOfficial": true
  }

$done({body: JSON.stringify(obj)});