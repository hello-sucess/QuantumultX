/*

网易蜗牛阅读 unlock vip by 渤涵

[rewrite_local]
^https?:\/\/p\.du\.163\.com\/gain\/readtime\/info\.json url script-response-body buehen0426/Scripts/wywnyd/wywnyd.js

[MITM]
hostname = p.du.163.com

*/

var body = $response.body;
var obj = JSON.parse(body);

obj.tradeEndTime = 1679685290000;
body = JSON.stringify(obj);
$done({body});