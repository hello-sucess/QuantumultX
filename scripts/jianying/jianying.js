/*

简影 unlock Vip by 渤涵

[rewrite_local]
^https:\/\/api\.jianmovie\.com\/cardinfo url script-response-body buehen0426/Scripts/jianying/jianying.js

[MITM]
hostname = api.jianmovie.com

*/

var obj = JSON.parse($response.body);
obj.is_vip = 1,
obj.vip_type = "com.jyys.jianmovie.yearvipsubscription",
obj.vip_expire_time = 1999999999,


$done({body: JSON.stringify(obj)});