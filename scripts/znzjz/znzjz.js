/*

智能证件照 unlock vip by 渤涵

[rewrite_local]
https:\/\/certificate\.yiyongcad\.com\/api\/v4\/(virtualactregister|memprofile) url script-response-body buehen0426/Scripts/znzjz/znzjz.js

[MITM]
hostname = api.jiaonizuocai.com

*/

let obj = JSON.parse($response.body);

obj.userinfo.vip = [{
      "id":152498323,
      "auth_type":1,
      "auth_value":1999999999,
}];
obj.userinfo.auth_type = 1;
obj.userinfo.auth_value = 1999999999;


$done({body: JSON.stringify(obj)});