/*

滴滴学堂 unlock Vip by 渤涵

[rewrite_local]
^https:\/\/app\.ddkids\.com\/api\_v7\/account url script-response-body buehen0426/Scripts/ddxt/ddxt.js

[MITM]
hostname:app.ddkids.com

*/

var obj = JSON.parse($response.body);
obj={
 "error": 0,
 "data": {
  "user_type": 2,
  "user_name": "郭品妙",
  "login_name": "1163274",
  "kid_id": "163274",
  "school_id": "474",
  "kid_img": "",
  "if_bind": 1,
  "phone": "13795486109",
  "school_name": "上海市松江区华亭第二幼儿园",
  "sex": null,
  "grade_class": "5|4",
  "student_number": "0",
  "pay_method": "",
  "grade_class_alias": null,
  "img_md5": null,
  "ddschool": {
   "vip_end_time": 1888888888000,
   "vip_is_available": "1"
  }
 }
};
$done({body: JSON.stringify(obj)});