/*

梯田阅读 unlock vip by 渤涵

[rewrite_local]
^https:\/\/apicdn\.mylittleenglish\.com\/(le_maincourse10|tt_reading10)\/index\.php\/Home\/(misc\/badges|book\/books|userv3\/login_sms|userv3\/refresh_vip) url script-response-body buehen0426/Scripts/ttyd/ttyd.js

[MITM]
hostname = apicdn.mylittleenglish.com

*/

re('order":\\d@book_order":\\d@is_vip":\\d@unlock_bookmore":\\d@deadline":"\\d{4}-\\d{2}-\\d{2}"@can_unlock":\\d@message":"\\w+"@code":\\d+','order":1@book_order":1@is_vip":1@unlock_bookmore":1@deadline":"2033-12-12"@can_unlock":1@message":"ok"@code":200')

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

