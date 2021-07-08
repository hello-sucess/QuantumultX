/*
酷我换肤 unlock vip by 渤涵

[rewrite_local]
^https?:\/\/vip1\.kuwo\.cn\/(vip\/v2\/theme)  url script-response-body tank0426/scripts/kuwo/theme.js
[MITM]
hostname = musicpay.kuwo.cn, vip1.kuwo.cn, *.kuwo.cn
*/

var puIFu1=JSON['parse']($response['body']);puIFu1['data']['vipTheme']['type']="free";puIFu1['data']['needBieds']=null;$done({body:JSON['stringify'](puIFu1)});
