/*
Prisma unlock vip by 渤涵
#Prisma 解锁高级会员权限 畅想VIP功能
[rewrite_local]
https://api.neuralprisma.com/receipt/ios/status/prisma/* url script-response-body tank0426/scripts/prisma/prisma.js
[MITM]
hostname = api.neuralprisma.com
*/

obj={
  "status": "ok",
  "is_valid": true,
  "expiration_date": "2099-12-01T03:51:32Z",
  "is_trial": false,
  "processing_count": 5,
  "is_introductory_used": true,
  "product_id": "",
  "promotional_offer_id": "",
  "is_grace_period": false,
  "auto_renew_enabled": true,
  "is_in_billing_retry_period": false,
  "subscription_type": "annual",
  "platform": "ios",
  "device_user_info": {
    "auth_type": "",
    "subscription_valid": true
  }
}
$done({body: JSON.stringify(obj)});