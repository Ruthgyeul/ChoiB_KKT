function response(room, msg, sender, igc, replier){

if (room.indexOf("b")) {

const FS = FileStream, path = "/sdcard/ProjectK/" + room + "/chat.json";
if(!new java.io.File(path).canRead()) FS.write(path, '[]');
let chat = JSON.parse(FS.read(path));

if (!chat.find(e=>e.name==sender)) chat.push({'name':sender, 'count':1});
chat[chat.findIndex(e=>e.name==sender)].count++;

if (msg == "!rank"){
let total = chat.map(e=>e.count).reduce((a,b)=>a+b);
replier.reply("『  Chat Rank 』" + "\nTotal Chat : " + total + " [100.00%]" + "\u200b".repeat(500) + "\n" + "═".repeat(20) + "\n\n" + chat.sort((a,b)=>b.count-a.count).slice(0,150).map((e,i)=>++i + "위 [" + e.count + "회, " + (e.count/total*100).toFixed(2) + "%] : " + e.name).join("\n\n") + "\n\n" + "═".repeat(20));
}

if(msg == "!chat"){
let index = chat.sort((a,b)=>b.count-a.count).findIndex(e=>e.name==sender);
replier.reply("『  " + sender + " 』\n" + "═".repeat(15) + "\n『🏅』 순위 : " + (index+1) + "위\n『🏅』 채팅 수 : " + chat[index].count + "회\n" + "═".repeat(15));
}

FS.write(path, JSON.stringify(chat));

}

}
