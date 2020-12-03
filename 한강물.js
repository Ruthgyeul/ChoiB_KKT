function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) { 
if (room == "뱁새봇") { 

if (msg == "뱁새한강물" != -1) {
let data = Utils.getWebText("http://hangang.dkserver.wo.tc");
let temp = data.split("temp\":\"")[1].split("\"")[0];
replier.reply("[뱁새i] 현재 한강물의 온도는 " + temp + "°C입니다.");
}

}
}
