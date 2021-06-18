/*

Simple Piano unlock vip by 渤涵

[rewrite_local]
^https:\/\/asla\.joytunes\.com\/server\/asla\/accounts\/* url script-response-body buehen0426/Scripts/piano/piano.js

[MITM]
hostname = asla.joytunes.com

*/

re('membershipInfo\":\\{[^}]+\\}','membershipInfo\":{\"familyIapID\":\"com.joytunes.asla.subscriptiononeyear_trial_family\",\"membershipTier\":\"premium_home\",\"planDuration\":\"oneyear\",\"membershipType\":\"SPONLY\",\"daysRemaining\":737,\"autoRenewable\":1,\"dateStarted\":\"2020-02-23\",\"isTrialPeriod\":1,\"currentIapID\":\"com.joytunes.asla.subscriptiononeyear_trial_individual\",\"dateExpire\":\"2099-03-01\",\"membershipDescription\":\"高级会员\",\"isAutoRenew\":null}')

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