const FS = FileStream

function response(room, msg, sender, igc, replier){

let path1 = "/sdcard/ProjectK/" + room + "/chat.json";
if (!new java.io.File(path1).canRead()) FS.write(path1, '[]');
let chat = JSON.parse(FS.read(path1));

let path2 = "/sdcard/ProjectK/" + room + "/lv.json";
if (!new java.io.File(path2).canRead()) FS.write(path2, '{}');
let lv = JSON.parse(FS.read(path2));

if (room.indexOf("b")) {

if (!chat.find(e=>e.name==sender)) chat.push({'name':sender, 'count':1});
chat[chat.findIndex(e=>e.name==sender)].count++;
FS.write(path, JSON.stringify(chat));

if (!lv[sender]) lv[sender] = {'lv':1, 'xp':0};
++lv[sender].xp;
FS.write(path2, JSON.stringify(lv));

if (msg.startsWith(".") || msg.startsWith("최빈") || msg.startsWith("최비") || msg.startsWith("빈") || msg.startsWith("비니") || msg == "이모티콘을 보냈습니다.") {
for (var i=1; i<=4; i++) {
++lv[sender].xp;
}
FS.write(path2, JSON.stringify(lv));
}

if (msg == "사진을 보냈습니다." || msg == "동영상을 보냈습니다." || msg == "음성메시지를 보냈습니다." || msg.startsWith("샵검색:")) {
for (var i=1; i<=7; i++) {
++lv[sender].xp;
}
FS.write(path2, JSON.stringify(lv));
}

if (lv[sender].xp>=125) {
++lv[sender].lv;
lv[sender].xp -= 125;
FS.write(path2, JSON.stringify(lv));
replier.reply("『 📢 채팅 레벨 UP! 』\n" + sender + "님의 레벨\n" + Number(lv[sender].lv - 1) + "LV >> " + lv[sender].lv + "LV");
}

if (msg == "!levels" || msg == "!level") {
let total = chat.map(e=>e.count).reduce((a,b)=>a+b);
replier.reply("『 📢 " + room + " Rank 』" + "\nTotal Chat : " + total + " [100%]" + "\u200b".repeat(500) + "\n" + "═".repeat(20) + "\n\n" + chat.sort((a,b)=>b.count-a.count).slice(0,150).map((e,i)=>++i + "위 [" + lv[e.name].lv + "LV, " + e.count + "회, " + (e.count/total*100).toFixed(2) + "%] : " + e.name).join('\n\n') + "\n\n" + "═".repeat(20));
}

if (msg=="!rank") {
let index = chat.sort((a,b)=>b.count-a.count).findIndex(e=>e.name==sender);
replier.reply("『 📢 " + sender + " 정보 』" + "\n" + "═".repeat(15) + "\n『🏅』 순위 : " + (index+1) + "위\n『🏅』 레벨 : " + lv[sender].lv + "LV\n『🏅』 채팅수 : " + chat[index].count + "회\n" + "═".repeat(15));
}

}

}
