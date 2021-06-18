/*

Baidu netdisc unlocks online video play speed by 渤涵

[rewrite_local]
^http(s):\/\/pan\.baidu\.com\/(rest\/2\.0\/membership\/user|api\/singkil\/bindquery|api\/user\/getinfo|pmall\/order\/privilege\/info|pmall/points/goodslist) url script-response-body buehen0426/Scripts/baiducloud/baiducloud.js

[MITM]
hostname = pan.baidu.com

*/

const path1 = "/rest/2.0/membership/user";
const path2 = "/api/singkil/bindquery";
const path3 = "/api/user/getinfo";
const path4 = "/pmall/order/privilege/info";
const path5 = "/pmall/points/goodslist";
var timestamp = Math.round(new Date().getTime() /1000);
var lefttime = 1999999999 - timestamp;

let key = [{
      "product_id" : "5210897752128663390",
      "end_time" : 2147483648,
      "buy_time" : "1424057042",
      "cluster" : "offlinedl",
      "status" : "0",
      "start_time" : 1424057042,
      "function_num" : 2,
      "buy_description" : "离线下载套餐(永久)",
      "product_description" : "离线下载套餐(永久)",
      "detail_cluster" : "offlinedl",
      "product_name" : "offlinedl_permanent"
    },
    {
      "cur_svip_type" : "month",
      "product_name" : "svip2_nd",
      "product_description" : "",
      "function_num" : 0,
      "start_time" : 1615703543,
      "buy_description" : "",
      "buy_time" : 0,
      "product_id" : "",
      "auto_upgrade_to_svip" : 0,
      "end_time" : 1999999999,
      "cluster" : "vip",
      "detail_cluster" : "svip",
      "status" : 0
    },
    {
      "product_name" : "contentvip_nd",
      "product_description" : "",
      "function_num" : 0,
      "start_time" : 1615703543,
      "buy_description" : "",
      "buy_time" : 0,
      "product_id" : "",
      "auto_upgrade_to_svip" : 0,
      "end_time" : 1999999999,
      "cluster" : "contentvip",
      "detail_cluster" : "contentvip",
      "status" : 0
    }];

let obj = JSON.parse($response.body);

if ($request.url.indexOf(path2) != -1){
obj.svip = 1;
};

if ($request.url.indexOf(path3) != -1){
obj.records.vip_level = 1;
obj.records.vip_type = 2;
};

if ($request.url.indexOf(path4) != -1){
obj.has_privilege = "1";
obj.vip_type = "svip";
};

if ($request.url.indexOf(path5) != -1){
obj.userinfo.evip = 0;
obj.userinfo.vip = 1;
obj.userinfo.year_vip = 0;
obj.userinfo.svip = 1;
obj.userinfo.year_svip = 0;
obj.userinfo.end_time = 0;
};

if ($request.url.indexOf(path1) != -1){
obj.product_infos = key;
obj.reminder.svip.leftseconds = lefttime;
obj.reminder.svip.nextState = "normal";              
obj.current_product.cluster = "vip";
obj.current_product.detail_cluster = "svip";
obj.current_product.product_type = "vip2_1m_auto";
obj.current_product_v2.cluster = "vip";
obj.current_product_v2.detail_cluster = "svip";
obj.current_product_v2.product_type = "vip2_1m_auto";
};
$done({body: JSON.stringify(obj)});