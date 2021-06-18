/*
大千世界 unlock vip by 渤涵

[rewrite_local]
^https:\/\/api\.mvmtv\.com\/index\.php.*(c=user.*a=info|a=addr.*vid=.*) url script-response-body buehen0426/Scripts/dqsj/dqsj.js

[MITM]
hostname = api.mvmtv.com

*/

let obj = JSON.parse($response.body);
let url = $request.url;
const play = 'vid=';
const vip = 'c=user';

if (url.indexOf(vip) != -1) {
       obj.data["is_expire"] = 5;
       obj.data["rent_exp"] = "2033-05-18 18:00:00";      
       obj.data["vip_exp"] = "2033-05-18 18:00:00";
       } else if (url.indexOf(play) != -1) {
                 let playurl = obj.data.play[0].mp4
                 obj.data.play[0].sd = playurl;
                 obj.data.play[0].fhd = playurl;
                 obj.data.play[0].hd = playurl;
} 
$done({body: JSON.stringify(obj)});