function gDate(choice) {
var date = new Date();
var datestr = (date.getMonth() + 1) + "월 " + date.getDate() + "일";
var timestr = date.getHours() + "시 " + date.getMinutes() + "분";
var fulldatestr = date.getFullYear() + "년 " + datestr;
var datetimestr = datestr + " " + timestr;
var fulldatetimestr = fulldatestr + " " + timestr;
var mhourstr = date.getHours() <= 12 ? "오전 " + date.getHours() : "오후 " + (date.getHours() - 12);
switch(choice) {
case "month":
return date.getMonth() + 1;
case "d":
return date.getDate();
case "hour":
return date.getHours();
case "mhour":
return mhourstr;
case "min":
return date.getMinutes();
case "sec":
return date.getSeconds();
case "day":
return date.getDay();
case "date" : // 월 일
return datestr;
case "time" : // 시 분
return timestr;
case "fulldate" : // 년 월 일
return fulldatestr;
case "datetime" : // 월 일 시 분
return datetimestr;
case "fulldatetime" : // 년 월 일 시 분
return fulldatetimestr;
case "getTime":
return date.getTime();
default :
return "";
}
}

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {

if (msg == "!코로나") {
let data = Utils.getWebText("http://ncov.mohw.go.kr");
let nraw = data.split("실시간 집계현황")[1].split("help_info")[0].split("<li>");
let distraw = data.split("\"rpsam_graph\">")[1].split("<svg")[0];
let nationwide = gDate("fulldate") + " 기준 대한민국\n";
let district = "";
let list = "";

for (let i = 1; i < nraw.length; i++) {
let title = nraw[i].split("tit\">")[1].split("<")[0];
let num = nraw[i].replace("<span class=\"mini\">(누적)</span>", "").split("num\">")[1].split("<")[0];
let before = nraw[i].split("before\">")[1].split("<")[0].replace("전일대비 ", "").replace(" ", "");
if (i == 3) {
nationwide += "\n";
}
nationwide += title + ": " + num + "명 " + before;
if (i % 2 != 0) {
nationwide += " ";
}
}

for (let i = 1; list = distraw.split("map_city" + i + "\">")[1]; i++) {
let title = list.split("name\">")[1].split("<")[0];
let num = list.split("num\">")[1].split("<")[0];
let before = list.split("before\">")[1].split("<")[0];
if (title == "검역") {
title = "해외감염";
}
if (i != 1) {
district += "\n";
}
district += title + ": " + num + "명 " + before;
}

replier.reply(nationwide);
replier.reply("💉 지역별 코로나 현황 💉" + COMPRESS + "\n\n" + district);
}

}
