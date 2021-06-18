/*

#西窗烛 unlock vip by 渤涵

[rewrite_local]
^https:\/\/avoscloud\.com\/1\.1\/users\/ url script-response-body buehen0426/Scripts/xcz/xcz.js

[MITM]
hostname:avoscloud.com

*/

var body = $response.body; 
var obj = JSON.parse(body); 

obj.lifetimeMembership = true;
obj.membership = true;

body = JSON.stringify(obj); 
$done(body);