/*

马卡龙玩图 unlock vip by 渤涵

[rewrite_local]
https:\/\/app\.api\.versa-ai\.com\/pay\/order\/iap\/check url script-response-body buehen0426/Scripts/mklwt/mklwt.js

[MITM]
hostname=app.api.versa-ai.com

*/

let obj = JSON.parse($response.body);

obj.result.paySuccess = true,
obj.result.expireDate = 1867418130000,
obj.result.days = 9999,
obj.result.trialPeriod = true,
obj.result.sandbox = true
 
$done({body: JSON.stringify(obj)});