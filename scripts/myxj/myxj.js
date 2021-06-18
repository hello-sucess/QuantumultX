/*

#美颜相机 unlock vip by 渤涵

[rewrite_local]
^https:\/\/api\.meiyan\.com\/(vip\/user_info|vip\/user_center)\.json url script-response-body buehen0426/Scripts/myxj/myxj.js

[MITM]
api.meiyan.com

*/

const path1 = "/vip/user_info";
const path2 = "/vip/user_center";

let obj = JSON.parse($response.body);

if ($request.url.indexOf(path2) != -1){
obj.response.user_info["status"] = 1;
obj.response.user_info["expire_date"] = "1999999999";
obj.response.user_info["period_type"] = 3;
obj.response.user_info["product_type"] = 1;
}

if ($request.url.indexOf(path1) != -1){
obj.response["status"] = 1;
obj.response["agreement_status"] = 1;
obj.response["expire_date"] = "1999999999";
obj.response["period_type"] = 3;
obj.response["product_type"] = 1;
obj.response["permission"] = [];
}

$done({body: JSON.stringify(obj)});