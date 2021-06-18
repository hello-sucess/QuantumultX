/*

来电精灵 VIP

[rewrite_local]
^https:\/\/vc\.szsszykj\.com\/interface\/GetVip.php url script-response-body buehen0426/Scripts/ldjl/ldjl.js

[MITM]
hostname = vc.szsszykj.com

*/

re('end_time":""','end_time":"2033-12-26 23:59:39"')

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