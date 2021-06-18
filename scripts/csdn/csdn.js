/*

CSDN unlock vip by 渤涵

[rewrite_local]
^https:\/\/app-gw\.csdn\.com\/cms-app\/(v1\/college_home\/login\/member_identify_info2|v1\/course_detail\/may_login\/course_info|v2\/college_home\/may_login\/special_data) url script-response-body buehen0426/Scripts/csdn/csdn.js

[MITM]
hostname = app-gw.csdn.com

*/

re('is_member":"no"@remaining_day":\\d+@member_name":".+"@end_date":\\d+@remaining_exchange":\\d+@total_exchange":\\d+@is_big_member":"no"@is_buy":\\d@is_free":\\d@member_type":\\d@expire":"\\d+"@dvip":".+"@is_member":\\d@is_can_play":\\d@is_free_real":\\d','is_member":"yes"@remaining_day":1629@member_name":"net_csdn_CsdnPlus.member.003"@end_date":1999999999@remaining_exchange":888@total_exchange":888@is_big_member":"yes"@is_buy":1@is_free":1@member_type":1@expire":"1999999999"@dvip":"true"@is_member":1@is_can_play":1@is_free_real":1')

function re() {
 var body = $response.body;
 if (arguments[0].includes("@")) {
  var regs = arguments[0].split("@");
  var strs = arguments[1].split("@");
  for (i = 0;i < regs.length;i++) {
   var reg = new RegExp(regs[i],"g");
   body = body.replace(reg, strs[i]);
 }
}
 else {
  var reg = new RegExp(arguments[0],"g");
  body = body.replace(reg, arguments[1]);
}
 $done(body);
}