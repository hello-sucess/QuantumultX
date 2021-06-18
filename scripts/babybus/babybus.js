/*

宝宝巴士世界 unlock Vip by 渤涵

[rewrite_local]
https:\/\/pay\.babybus\.com\/(V2\/OrderService\/getAppleVipTime) url script-response-body buehen0426/Scripts/babybus/babybus.js

[MITM]
hostname = pay.babybus.com

*/

var obj = JSON.parse($response.body);
obj={
 "status": "1",
 "info": "",
 "data": [
  {
   "is_subscribe": 1,
   "start_time": 1575294743,
   "is_vip": true,
   "end_time": 1888888888
  }
 ]
};
$done({body: JSON.stringify(obj)});