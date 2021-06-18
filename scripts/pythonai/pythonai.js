/*

PythonAI unlock vip by 渤涵

[rewrite_local]
^http:\/\/ws\.60he\.com\/(user*|book*) url script-response-body buehen0426/Scripts/pythonai/pythonai.js

[MITM]
hostname = ws.60he.com

*/

re('vip\":\\d@isFree\":\\d','vip\":365@isFree\":1')

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