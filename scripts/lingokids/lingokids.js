/*

Lingokids unlock Vip by 渤涵

[rewrite_local]
^https:\/\/api\.lingokids\.com\/v1\/renovate_session$ url script-response-body buehen0426/Scripts/lingokids/lingokids.js

[MITM]
hostname = api.lingokids.com

*/

var obj = JSON.parse($response.body);
obj["info"]["subscriptions"] = [{
 "status": "active",
 "product": "unlimited",
 "duration_unit": "months",
 "id": 15979181,
 "platform": "apple",
 "duration_value": 1,
 "starts_at": 1572617692,
 "ends_at": 1999999999,
 "auto_renew_status": true,
 "plan_id": "lk.ios.s1m.t1m.p15.v1",
 "state": "active",
}];
$done({body: JSON.stringify(obj)});