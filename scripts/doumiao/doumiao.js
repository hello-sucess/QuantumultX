/*

豆苗闪算 unlock vip by 渤涵

[rewrite_local]
^https:\/\/api\.doumiao9\.com\/pay\/check_permission? url script-response-body buehen0426/Scripts/doumiao/doumiao.js

[MITM]
hostname = api.doumiao9.com

*/

/*let obj = JSON.parse($response.body);

obj.data["expiry"] = "-1";
obj.data["enddate"] = "2024-01-24 23:59:59";
obj.data["month"] = 36;


$done({body: JSON.stringify(obj)});
*/

re('key":"student-base"@month":0@enddate":"\\d+-\\d+-\\d+ 23:59:59"@expiry":\\d+','key":"student-vip"@month":36@enddate":"2024-01-24 23:59:59"@expirly":1096')

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