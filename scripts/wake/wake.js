/*

WakeYoga unlock vip by 渤涵

[rewrite_local]
^https:\/\/m\.wakeyoga\.com\/api\/getHuaweiUserSvipList url script-response-body buehen0426/Scripts/wake/wake.js
^https:\/\/api\.wakeyoga\.com\/getLessonDetailNew url script-response-body buehen0426/Scripts/wake/wake.js

[MITM]
hostname = m.wakeyoga.com, api.wakeyoga.com

*/

re('nickname":".*?"@isJoinHMS":\\d@isOrdserSvip":\\w+@uSvipExpireAt":\\d+@vip":\\d@restExpDays":\w+@canPlay":\\w+@canBuy":\\w+@expValid":\\w+','nickname":"已解锁"@isJoinHMS":1@isOrdserSvip":2@uSvipExpireAt":1999999999@vip":2@restExpDays":999@canPlay":1@canBuy":2@expValid":1')

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