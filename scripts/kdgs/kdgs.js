/*

#口袋故事拼音 unlock vip by 渤涵

[rewrite_local]
^https:\/\/api\.idaddy\.cn\/inner4\/lesson\/(user|list) url script-response-body buehen0426/Scripts/kdgs/kdgs.js

[MITM]
hostname:api.idaddy.cn

*/

const path1 = "/inner4/lesson/user";
const path2 = "/inner4/lesson/list";

let obj = JSON.parse($response.body);

if ($request.url.indexOf(path2) != -1){
obj.data.list["is_free"] = "1";
}

if ($request.url.indexOf(path1) != -1){
obj.data.user["ilisten_vip"] = true;
obj.data.user["vip_valid_time"] = "1999999999";
obj.data.user["is_vip"] = true;
obj.data.user["forever_vip"] = true;
}

$done({body: JSON.stringify(obj)});