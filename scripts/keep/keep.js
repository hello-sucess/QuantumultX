/*

Keep Vip unlock private lessons and action libraries by 渤涵.

[rewrite_local]
QX1.0.0:
^https:\/\/api\.gotokeep\.com\/(.+\/subject|.+\/dynamic) url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Keep.js

Surge4.0:
http-response https:\/\/api\.gotokeep\.com\/(.+\/subject|.+\/dynamic) requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Keep.js

[MITM]
hostname = api.gotokeep.com

*/

let url = $request.url;
let body = $response.body;
let obj = JSON.parse(body);

const path1 = '/homepage/v2/tab';
const path2 = '/athena/v4/people/my';
const path3 = '/kprime/v1/auth';

if (url.indexOf(path1) != -1) {
body=body.replace(/memberStatus\":\d/g,'memberStatus":1');
body=body.replace(/memberOffDays\":\d+/g,'memberOffDays":9999');
body=body.replace(/member\":\w+/g,'member":true');
body=body.replace(/endTime\":\d/g,'endTime":1999999999000');
body=body.replace(/status\":\d/g,'status":1');
}
if (url.indexOf(path2) != -1) {
body=body.replace(/memberStatus\":\d/g,'memberStatus":1');
}
if (url.indexOf(path3) != -1) {
body=body.replace(/status\":\d/g,'status":1');
body=body.replace(/memberStatus\":\d/g,'memberStatus":1');
body=body.replace(/autoRenew\":\w+/g,'autoRenew":true');
}
$done(body);