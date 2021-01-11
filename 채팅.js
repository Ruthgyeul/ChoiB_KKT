function response(room, msg, sender, igc, replier){

const FS = FileStream, path = "/sdcard/ProjectK/" + room + "/chat.json";
if (!new java.io.File(path).canRead()) FS.write(path, '[]');
let chat = JSON.parse(FS.read(path));

const FS2 = FileStream, path2 = "/sdcard/ProjectK/" + room + "/lv.json";
if (!new java.io.File(path2).canRead()) FS2.write(path2, '{}');
let lv = JSON.parse(FS2.read(path2));

const index = chat.sort((a,b)=>b.count-a.count).findIndex(e=>e.name==sender);
const total = chat.map(e=>e.count).reduce((a,b)=>a+b);
  
if (room.indexOf("b")) {

if (!chat.find(e=>e.name==sender)) chat.push({'name':sender, 'count':1});
chat[chat.findIndex(e=>e.name==sender)].count++;

FS.write(path, JSON.stringify(chat));

if (!lv[sender]) lv[sender] = {'lv':1, 'xp':0};
++lv[sender].xp;

if (lv[sender].xp>=75) {
++lv[sender].lv;
lv[sender].xp -= 75;
replier.reply("『 📢 채팅 레벨 UP! 』\n" + sender + "님의 레벨\n" + lv[sender].lv + "LV >> " + lv[sender].lv + "LV");
}

FS.write(path2, JSON.stringify(lv));

if (msg == "!levels" || msg == "!level") {
replier.reply("『 📢 " + room + " Rank 』" + "\nTotal Chat : " + total + " 100%" + "\u200b".repeat(500) + "\n" + "═".repeat(20) + "\n\n" + chat.sort((a,b)=>b.count-a.count).slice(0,150).map((e,i)=>++i + "위 [" + lv[sender].lv + "LV, " + e.count + "회, " + (e.count/total*100).toFixed(2) + "%] : " + e.name).join('\n\n') + "\n\n" + "═".repeat(20));
}

if (msg=="!rank") {
replier.reply("『 📢 " + sender + " 정보 』" + "\n" + "═".repeat(15) + "\n『🏅』 순위 : " + (index+1) + "위\n『🏅』 레벨 : " + lv[sender].lv + "LV\n『🏅』 채팅수 : " + chat[index].count + "회\n" + "═".repeat(15));
}
  
}

}
