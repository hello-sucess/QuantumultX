/*

JibJab unlock vip by 渤涵

[rewrite_local]
^https:\/\/origin-prod-phoenix\.jibjab\.com\/v1\/user url script-response-body buehen0426/Scripts/jibjab/jibjab.js

[MITM]
hostname = origin-prod-phoenix.jibjab.com

*/

re('is-paid\":\\w+','is-paid\":true')

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