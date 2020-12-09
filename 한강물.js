function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) { 

if (msg == "!한강물") {
let data = Utils.getWebText("http://hangang.dkserver.wo.tc");
let temp = data.split("temp\":\"")[1].split("\"")[0];
let time = data.split("time\":\"")[1].split("\"")[0];
if (Math.floor(Math.random()*16)==0) {
replier.reply("엥? 한강물 따위 관심 없는데?");
} else {
replier.reply("현재 한강물의 온도는 " + temp + "°C 인데,\n어때? 입수하실?");
replier.reply(time);
}
}
  
}
