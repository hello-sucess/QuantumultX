/*

幕布 unlock vip by 渤涵

[rewrite_local]
^https:\/\/api2\.mubu\.com\/v3\/api\/user\/current_user url script-response-body buehen0426/Scripts/mubu/mubu.js

[MITM]
hostname = api2.mubu.com

*/

re('vipEndDate":"\\d+"@level":\\d','vipEndDate":"1999999999"@level":2')

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