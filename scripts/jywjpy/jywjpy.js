/*

鲸鱼外教培优 unlock vip by 渤涵

[rewrite_local]
^https:\/\/parent-api\.jingyupeiyou\.com\/(v3\/picturebook\/detail|v2/login/getUserInfoByToken) url script-response-body buehen0426/Scripts/jywjpy/jywjpy.js

[MITM]
hostname = parent-api.jingyupeiyou.com

*/

re('is_vip":\\d@"nickname":".*?"','is_vip":0@"nickname":"已解锁"')

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