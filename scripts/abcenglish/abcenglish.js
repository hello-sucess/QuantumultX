/*
ABCEnglish unlock vip by 渤涵

[rewrite_local]
^https:\/\/api\.abctime\.com\/(v2\/member\/member\/order-list|v2\/member\/member\/info) url script-response-body buehen0426/Scripts/abcenglish/abcenglish.js

[MITM]
hostname = api.abctime.com

*/

var obj = JSON.parse($response.body);

obj.data.subcribe = 1,
obj.data.expire_time = 1999999999,
obj.data.spread_level = 27,
obj.data.isPayNow = "付费用户",
obj.data.validProduct = 0,
obj.data.end_date = "2033-12-01",
obj.data.guest_pay_status = 1,
obj.data.unlockNum = 146,

$done({body: JSON.stringify(obj)});