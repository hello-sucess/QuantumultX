/*

美图秀秀 unlock Vip by 渤涵

[rewrite_local]
https:\/\/api\.xiuxiu.\meitu\.com\/v1\/user\show.json url script-response-body buehen0426/Scripts/mtxx/mtxx.js

[MITM]
hostname = api.xiuxiu.meitu.com

*/

re('"vip_type":\\d','"vip_type":1')

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
