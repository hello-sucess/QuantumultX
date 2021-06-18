/*

开言英语 unlock vip by 渤涵

[rewrite_local]
^https:\/\/api\.openlanguage\.com\/ez\/studentapp\/v15\/getUserDetail? url script-response-body buehen/script/kyyy.js

[MITM]
hostname = api.openlanguage.com

*/

var obj = JSON.parse($response.body);

const path1 = "/getUserDetail";
const path2 = "/productListGet";
const path3 = "/lessonState";
const path4 = "/lessonDetail";

if ($request.url.indexOf(path1) != -1){
obj.user_info.vip_info.vip_level = 1,
obj.user_info.vip_info.expire_time = 1999999999,
obj.user_info.vip_info.has_paid = 1
}

if ($request.url.indexOf(path2) != -1){
obj.user_subscribe.subscribe_type = 1,
obj.user_subscribe.subscribe_pay_type = 1,
obj.user_subscribe.subscribe_status = 1,
obj.apple_trial_time = 1999999999
}

if ($request.url.indexOf(path3) != -1){
obj.data.assignment_exact_grade = 0,
obj.data.oral_grade = 0
}

if ($request.url.indexOf(path4) != -1){
obj.data.lesson_meta.is_free = 1,
obj.data.lesson_meta.level_id = 1,
obj.data.lesson_meta.level_name = B1,
obj.data.lesson_meta.privilege_status = 1
obj.data.lesson_meta.course_name = "限时免费",
obj.data.lesson_common_info.expire_time = 1999999999
}

$done({body: JSON.stringify(obj)});