/*

彩视 unlock vip by 渤涵

[rewrite_local]
^http:\/\/api\.colorv\.com\/(v4\/user\/vip_center|webapi\/v2\/pay\/vip_valid_period|v3\/user\/summary\/info) url script-response-body buehen0426/Script/caishi/caishi.js

[MITM]
api.colorv.com

*/

var body = $response.body;
var url = $request.url;

const key2 = '/v4/user/vip_center';
const key1 = '/webapi/v2/pay/vip_valid_period';
const key3 = '/v3/user/summary/info';

if (url.indexOf(key3) != -1) {
    let obj = JSON.parse(body);
    obj.data.vip_remind = "会员还剩365天到期";
    obj.data.vip = 3;
	body = JSON.stringify(obj);  
 }

if (url.indexOf(key2) != -1) {
    let obj = JSON.parse(body);
    obj.data.tip_text = "您还剩365天到期";
    obj.data.user.vip = 3;
    obj.data.vip_status = 3;
    obj.data.vip_text = "超级会员";
	body = JSON.stringify(obj);  
 }

if (url.indexOf(key1) != -1) {
    let obj = JSON.parse(body);
	obj = {"data":[{"desc":"正在使用","t":"2022-03-30","title":"超级会员有效期至2022-03-30"}],"state":200,"vip_bottom_button":{"buy_vip":3,"text":"立即续费"}}
	body = JSON.stringify(obj); 
 }

$done({body});