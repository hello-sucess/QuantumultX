/*

Ted unlock vip by 渤涵

[rewrite_local]
^https:\/\/api.iyuba\.com\.cn\/v2\/api.iyuba? url script-response-body buehen0426/Scripts/ted/ted.js

[MITM]
hostname = api.iyuba.com.cn

*/

var obj = JSON.parse($response.body);
obj.vipStatus = 1,
obj.expireTime = 1999999999,


$done({body: JSON.stringify(obj)});