function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {

if (msg == "!코로나") {
try {
let data = Utils.getWebText("http://ncov.mohw.go.kr");
let nraw = data.split("실시간 집계현황")[1].split("help_info")[0].split("<li>");
let distraw = data.split("\"rpsam_graph\">")[1].split("<svg")[0];
let nationwide = "[대한민국 코로나 현황]\n";
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
nationwide ";
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
district += title + " 확진자: " + num + "명 " + before;
}
let korcov = nationwide;
let kordis = "[지역별 코로나 현황]" + Utils.compress() + "\n\n" + district;
replier.reply(korcov);
replier.reply(kordis);
}
} catch(e) {
return e;
replier.reply("에러: " + e);
}
  
}
