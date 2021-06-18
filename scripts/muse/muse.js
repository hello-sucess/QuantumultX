/*

ShowMuse unlock vip by 渤涵

[rewrite_local]
^http:\/\/api\.showmuse\.so\/(v2\/user\/sync|v2\/lessons\/*|v2\/courses\/*) url script-response-body buehen0426/Scripts/muse/muse.js

[MITM]
hostname = api.showmuse.so

*/

re('premium\":true@isLockedToUser\":true@name\":\".*?\",\"avata','premium\":false@isLockedToUser\":false@name\":\"已解锁\",\"avata')

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