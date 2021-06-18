/*

大片 unlock vip by 渤涵

[rewrite_local]
^https?:\/\/m2u-api\.getkwai\.com\/vni-server\/api\/v1\/(user\/profile|banners) url script-response-body buehen0426/Script/dapian/dapian.js

[MITM]
m2u-api.getkwai.com

*/

var body = $response.body;
var url = $request.url;

const vip = '/v1/user/profile';
const ad = '/v1/banners';

if (url.indexOf(vip) != -1) {
    let obj = JSON.parse(body);
    obj.data.userInfo.is_vip = 1;
    obj.data.userInfo.isVip = 1;
    obj.data.userInfo.vipEndTime = 1999999999000;
    obj.data.userInfo.vipStartTime = 1566666666000;
	body = JSON.stringify(obj);  
 }

if (url.indexOf(ad) != -1) {
    let obj = JSON.parse(body);
	delete obj.banners
	body = JSON.stringify(obj); 
 }

$done({body});