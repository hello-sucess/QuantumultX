/*

# Photoshop for iPad & Ps Express unlock vip by 渤涵

Photoshop download link : http://t.cn/AiBIDoTv
Ps Express download link : http://t.cn/AiEwcMje
注意 Adobe PhotoShop 需注册登录非大陆的Adobe账号，否则会没有云存储空间

[rewrite_local]
^https:\/\/.*\.adobe\..*\/mobile_profile\/nul\/v\d$ url script-response-body buehen0426/Scripts/photoshop/photoshop.js

[mitm]
hostname = *.adobe.*

*/

let obj = JSON.parse($response.body);

obj.mobileProfile.profileStatus = 'PROFILE_AVAILABLE';

$done({body: JSON.stringify(obj)});