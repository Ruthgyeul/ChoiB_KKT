function Time(Dr, Hr) {
var date = new Date();
var dateDr = (date.getDate() + Dr);
var hourHr = (date.getHours() + Hr);
var mdatestr = hourHr <= 24 ? hourHr : (dateDr + 1 && hourHr - 24);
var datestr = (date.getMonth() + 1) + "월 " + dateDr + "일";
var mhourstr = hourHr <= 12 ? "오전 " + hourHr : "오후 " + (hourHr - 12);
var timestr = mhourstr + "시 " + date.getMinutes() + "분 " + date.getSeconds() + "초";
return datestr + " " + timestr;
}

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {

if (msg == "!세계시간") {
replier.reply("[세계시간]" + Utils.compress() + "\n\n\n[대한민국]\n" + Time(1, -9) + "\n\n[미서부]\n" + Time(0, -1) + "\n\n[미중부]\n" + Time(0, 0) + "\n\n[미동부]\n" + Time(0, 1) + "\n\n[프랑스]\n" + Time(0, 7));
}
 
if (msg == "!한국시간") {
replier.reply("[한국시간]\n" + Time(1, -9));
}
 
if (msg == "!미국시간") {
replier.reply("[미서부]\n" + Time(0, -1) + "\n[미중부]\n" + Time(0, 0) + "\n[미동부]\n" + Time(0, 1));
}
 
if (msg == "!미서부시간") {
replier.reply("[미서부시간]\n" + Time(0, -1));
}
 
if (msg == "!미중부시간") {
replier.reply("[미중부시간]\n" + Time(0, 0));
}
 
if (msg == "!미동부시간") {
replier.reply("[미동부시간]\n" + Time(0, 1));
}
 
if (msg == "!프랑스시간") {
replier.reply("[프랑스시간]\n" + Time(0, 7));
}
 
}
