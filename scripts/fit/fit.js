/*

#Fit健身 unlock vip by 渤涵

[rewrite_local]
^https:\/\/bea\.sportq\.com\/SFitWeb\/sfit\/getUserBaseInfo url script-response-body buehen0426/Scripts/fit/fit.js

[MITM]
hostname:bea.sportq.com

*/

re('"isVip":"\\d','"isVip":"1')

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