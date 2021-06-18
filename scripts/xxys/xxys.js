/*

小小影视 unlock Vip by 渤涵

[rewrite_local]
^https:\/\/.*\..*\.com\/(getGlobalData|ucp/index|ssp-svr\/ssp\/list3|vod\/reqplay) url script-response-body buehen0426/Scripts/xxys/xxys.js

[MITM]
hostname = *.xxjjappss.com; *.xjwdapps.com; *.xjxjappss.com; *.gqbyh.com; *.hnhk360.com; *.leleapps.com;

*/

const path1 = "/ucp/index";
const path2 = "/vod/reqplay/";
const path3 = "getGlobalData";
const path4 = "ssp-svr/ssp/list3";
const path5 = "/ucp/task/share";
let obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1){
	obj.data.uinfo["down_daily_remainders"] = "666";
	obj.data.uinfo["play_daily_remainders"] = "666";
    obj.data.uinfo["curr_group"] = "5";
	obj.data.uinfo["next_upgrade_need"] = "0";
	obj.data.user["isvip"] = "1";
    obj.data.user["gid"] = "5";
    obj.data.user["gicon"] = "V5";
	obj.data.user["goldcoin"] = "666";
}

if ($request.url.indexOf(path2) != -1){
	obj.retcode = "0";
	obj.data.lastplayindex = "1";
	if(obj.data.hasOwnProperty("httpurl_preview")){
		var playurl = obj.data["httpurl_preview"];
		obj.data["httpurl"] = playurl;
	};
}

if ($request.url.indexOf(path3) != -1) {
delete obj.data.adrows
delete obj.data.adgroups
delete obj.data.iOS_adgroups
}

if ($request.url.indexOf(path4) != -1){
delete obj.data.pmap
}

if ($request.url.indexOf(path5) != -1){
delete obj.data
}

$done({body: JSON.stringify(obj)});