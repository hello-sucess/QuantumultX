
const path1 = "/product/get_ios_appstore_product_info.do";
const path2 = "/stat/get_user_stat.do";
const path3 = "/account/register_and_login.do";
const path4 = "/stat/get_user_check_in_info.do";
const path5 = "/account/check_user_token.do";


let obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1){
obj.result.userVipInfo.vipStatus = "true"
}

if ($request.url.indexOf(path2) != -1){
obj.result.vipStatus = "true",	
obj.result.vipExpireDateNum = 888888
}

if ($request.url.indexOf(path3) != -1){
obj.result.userVipInfo.vipStatus = "true"
}

if ($request.url.indexOf(path4) != -1){
obj.result.equipmentInfo.vipExpireDateNum = 888888
}

if ($request.url.indexOf(path5) != -1){
obj.result.vipStatus = "true"
}

$done({body: JSON.stringify(obj)});
