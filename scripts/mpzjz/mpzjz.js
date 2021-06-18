/*

#秒拍证件照 unlock vip by 渤涵

[rewrite_local]
^http:\/\/micro-tool-api\.foundao\.com\/orderPayCenterService\/user\/userInfo url script-response-body buehen0426/Scripts/mpzjz/mpzjz.js

[MITM]
hostname = micro-tool-api.foundao.com

*/

var body = $response.body; 
var obj = JSON.parse(body); 

obj.data.vipExpireTime = "2033-01-01 00\:00\:00";
obj.data.isVip = 1;

body = JSON.stringify(obj); 
$done(body);