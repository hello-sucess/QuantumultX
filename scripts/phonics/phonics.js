/*

自然拼读Phonics unlock vip by 渤涵

[rewrite_local]
^http:\/\/ossapp\.bbwansha\.com url script-response-body buehen0426/Scripts/phonics/phonics.js

[MITM]
hostname = ossapp.bbwansha.com

*/

re('code":201@message":"\\w+"@valid_launch":\\d@activity_order":\\d@activity_coins":\\d+','code":200@message":"ok"@valid_launch":1@activity_order":2@activity_coins":0')

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