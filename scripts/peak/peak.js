/*

Peak unlock vip by 渤涵

[rewrite_local]
^https:\/\/billing\.peakcloud\.org\/billing\/2\/user\/me url script-response-body buehen0426/Scripts/peak/peak.js

[MITM]
hostname = billing.peakcloud.org

*/

re('[^*]+','{\n \"response\": {\n  \"bbuid\": \"ZPpZvQbStP\",\n  \"usedIntroOfferPeriod\": false,\n  \"class\": \"UserModuleBillingResponse\",\n  \"is_in_billing_retry\": false,\n  \"modules\": [\n   {\n    \"class\": \"BillingModuleResponse\",\n    \"name\": \"com.brainbow.module.peak.PeakModule\",\n    \"subscription\": {\n     \"status\": 0,\n     \"statusdate\": 0,\n     \"source\": {\n      \"id\": \"com.brainbow.peak.arsub_1wtrial_12m4968\",\n      \"cancelable\": false,\n      \"provider\": \"itunes\",\n      \"type\": \"trial\"\n     },\n     \"bbuid\": \"ZPpZvQbStP\",\n     \"endTime\": 1779061000000,\n     \"startTime\":1531710600000,\n     \"pro\": true\n    }\n   }\n  ]\n },\n \"metaResponse\": {\n  \"code\": 0\n }\n}')

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