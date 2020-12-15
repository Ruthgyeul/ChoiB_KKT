function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) { 
if (msg == "!한강물") {
let data = Utils.getWebText("http://hangang.dkserver.wo.tc");
let temp = data.split("temp\":\"")[1].split("\"")[0];
let time = data.split("time\":\"")[1].split("\"")[0];
let d = time.split(" ")[0].split("-");
let year = d[0];
let month = d[1];
let day = d[2];
let t = time.split(" ")[1].split(":");
let hour = t[0];
let min = t[1];
if (Math.floor(Math.random()*10)==0) {
replier.reply("엥? 난 한강물 따위 관심 없는데?");
} else {
replier.reply("현재 한강물의 온도는 " + temp + "°C 인데,\n어때? 입수하실?");
replier.reply("한국시간" + month + "월 " + day + "일 " + hour + "시 " + min + "분 기준");
}
}
}
