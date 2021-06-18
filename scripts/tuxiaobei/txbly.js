/*

兔小贝乐园 unlock Vip by 渤涵

[rewrite_local]
https:\/\/leyuan-api\.tuxiaobei\.com\/v1\/user\/(vip-status|profile|update-profile|verify-token)? url script-response-body buehen0426/Scripts/tuxiaobei/txbly.js

[MITM]
hostname = *-api.tuxiaobei.com

*/

let obj = JSON.parse($response.body);
	obj.data["vip"] = 1;
    obj.data["game_vip_expire_at"] = "1999999999";
    obj.data["game_vip"] = 1;
	obj.data["vip_expire_at"] = "1999999999";
	obj.data["vip_type"] = "2";	

$done({body: JSON.stringify(obj)});