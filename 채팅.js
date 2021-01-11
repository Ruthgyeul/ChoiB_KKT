//[출처] 채팅순위 (카카오톡 봇 커뮤니티) | 작성자 Jwon0423

const FS = FileStream, path = "/sdcard/채팅/chat.json";
if(!new java.io.File(path).canRead()) FS.write(path, '[]');
let chat = JSON.parse(FS.read(path));

function response(room, msg, sender, igc, replier){

if (room.indexOf("b") {

if(!chat.find(e=>e.name==sender)) chat.push({'name':sender, 'count':1});
chat[chat.findIndex(e=>e.name==sender)].count++;

FS.write(path, JSON.stringify(chat));
}

if(!chat[sender]) chat[sender] = {'lv':1, 'xp':0};
++chat[sender].xp;

if(chat[sender].xp>=150){
++chat[sender].lv;
chat[sender].xp -= 150;
replier.reply("채팅 레벨 UP!\n\n『 🗣️ " + sender + " 정보 』" + "\n" + "═".repeat(12) + "\n『🏅』 순위 : " + (index+1) + "위\n『🏅』 레벨 : " + chat[sender].lv + "LV. >> " + chat[sender].lv + "LV.\n『🏅』 채팅수 : " + chat[index].count + "회\n" + "═".repeat(12));
}

}

if(msg == "!levels" || msg == "!level"){
let total = chat.map(e=>e.count).reduce((a,b)=>a+b);
replier.reply("『 🗣️ " + room + " 채팅 랭킹 』" + "\u200b".repeat(500) + "\n전체 채팅량 : " + total + "\n" + "═".repeat(20) + "\n\n" + chat.sort((a,b)=>b.count-a.count).slice(0,150).map((e,i)=>++i + "위 [" + e.count + "회, " + (e.count/total*100).toFixed(2) + "%] : " + e.name).join('\n\n') + "\n\n" + "═".repeat(20));
}

if(msg == "!rank"){
let index = chat.sort((a,b)=>b.count-a.count).findIndex(e=>e.name==sender);
replier.reply("『 🗣️ " + sender + " 정보 』" + "\n" + "═".repeat(12) + "\n『🏅』 순위 : " + (index+1) + "위\n『🏅』 레벨 : " + chat[sender].lv + "LV.\n『🏅』 채팅수 : " + chat[index].count + "회\n" + "═".repeat(12));
}

}
