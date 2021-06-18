/*

Think-Think unlock vip by 渤涵

[rewrite_local]
^https:\/\/think2-api\.hanamarulab\.com\/api\/v4\/zh_CN\/apple\/.*\/purchase\/info url script-response-body buehen0426/Scripts/think/think.js

[MITM]
hostname = think2-api.hanamarulab.com

*/

re('course":\\d+@store":\\w+@expires_date":\\w+','course":40@store":1@expires_date":2033-12-12')

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
