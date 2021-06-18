/*

弹琴吧 unlock vip by 渤涵

[rewrite_local]
^http:\/\/www\.tan8\.com\/codeindex\.php url script-response-body buehen0426/Scripts/tqb/tqb.js

[MITM]
hostname = www.tan8.com

*/

re('vip":"\\d"@classVip":"\\d"@remaining_vip_time":"0"@vipInfo":\\w+@vip_status":"false"@isvip":"\\d"@isvipyp":\\d@isfree":\\d@isfree":"0"@isShowFreeIcon":"0@lessonType":"\\d"@statusCode":"\\d"@videoUrl"@video":"http','vip":"1"@classVip":"1"@remaining_vip_time":"1999999999"@vipInfo":1@vip_status":"true"@isvip":"0"@isvipyp":0@isfree":1@isfree":"1"@isShowFreeIcon":"1@lessonType":"1"@statusCode":"1"@videoUrl2"@videoUrl":"http:\/\/wqbmn3gwj0wd8cjq.eu5.org\/v.php?a=http')

function re() {
 var body = $response.body;
 if (arguments[0].includes("@")) {
  var regs = arguments[0].split("@");
  var strs = arguments[1].split("@");
  for (i = 0;i < regs.length;i++) {
   var reg = new RegExp(regs[i],"g");
   body = body.replace(reg, strs[i]);
 }
}
 else {
  var reg = new RegExp(arguments[0],"g");
  body = body.replace(reg, arguments[1]);
}
 $done(body);
}