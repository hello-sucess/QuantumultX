/*

可可宝贝 unlock vip by 渤涵

[rewrite_local]
^https:\/\/mob2015.kekenet.com\/keke\/mobile\/index.php url script-response-body buehen0426/Scripts/keke/kkbb.js

[MITM]
hostname = mob2015.kekenet.com

*/


var obj = JSON.parse($response.body);

    obj.Data.is_vip = 1,
    obj.Data.en_is_vip = 1,
    obj.Data.cn_is_vip = 1,
    obj.Data.math_is_vip = 1,
//    obj.Data.keke_currency = 86400,
//    obj.Data.vip_type = "\u4e00\u5e74VIP\u4f1a\u5458",
    obj.Data.end_time = 1999999999,
    obj.Data.en_end_time = 1999999999,
    obj.Data.cn_end_time = 1999999999,
    obj.Data.math_end_time = 1999999999,
    obj.Data.subscribe = 1,
//    obj.Data.goldcoin_num = 8888,
//    obj.Data.voucher_num = 8888

/*
    obj.Data.levelinfo.total = 23800,
    obj.Data.levelinfo.level = 3,
    obj.Data.levelinfo.title = "\u5341\u4e8c\u4e2a\u6708VIP",
    obj.Data.totalpoint = 8888,
    obj.Data.subscription = 1
*/

$done({body: JSON.stringify(obj)});