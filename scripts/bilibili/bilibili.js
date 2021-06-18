/*

Bilibili unlock vip by 渤涵

[rewrite_local]
^https:\/\/api2\.mubu\.com\/v3\/api\/user\/current_user url script-response-body buehen0426/Scripts/mubu/mubu.js

[MITM]
hostname = api.bilibili.com

*/

re('"is_vip":\\d@"vip_status":\\d@vip_due_date":\\d+@"due_date":\\d+@"vip_pay_type":\\d@"vip_type":\\d@"type":\\d@"status":\\d','"is_vip":1@"vip_status":1@vip_due_date":1999999999000@due_date":1999999999000@"vip_pay_type":1@"vip_type":2@"type":2@"status":1')

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