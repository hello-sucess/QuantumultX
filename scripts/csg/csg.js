/*

#藏书阁 vip by 渤涵

[rewrite_local]
^https:\/\/gateway\.geebooclub\.com\/vip\/status url script-response-body buehen0426/Scripts/csg/csg.js

[MITM]
hostname = gateway.geebooclub.com

*/

re('isVip":\\d+@isExpire":\\d@expireTime":\\w+','isVip":1@isExpire":0@expireTime":2033-12-12 09:09:09')

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