/*

洪恩数学 unlock Vip by 渤涵

[rewrite_local]
https:\/\/mathapi\.ihuman\.com\/(v3\/get\_purchase\_list) url script-response-body buehen0426/Scripts/hongen/hnsx.js

[MITM]
hostname = mathapi.ihuman.com

*/

const path1 = "/v3/get_purchase_list";

let key = {"expire_time":7955110875,"vip_type":1,"last_product_id":"com.ihuman.imath.sub.vip1y"};

let obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1){
	obj.result["vip"] = key;	
}


$done({body: JSON.stringify(obj)});