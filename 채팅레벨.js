const CH = {};

CH.ExtraExp = function(msg) {
var Extra = ["\n", "사진을 보냈습니다.", "동영상을 보냇습니다.", "음성메시지를 보냈습니다.", "샵검색:", "#", "@", "www.", "http:", "https:", ".com", ".gov", "/"];
for (var n = 0; n < Extra.length; n++) { 
if (msg.indexOf(Extra[n]) != -1) return true; 
}
return false;
};

function response(room, msg, sender, igc, replier){

if (room.indexOf("b")) {

const FS = FileStream, path = "/sdcard/ProjectK/" + room + "/lv.json";
if(!new java.io.File(path).canRead()) FS.write(path, '[]');
let lv = JSON.parse(FS.read(path));

if (!lv.find(e=>e.name==sender)) {
lv.push({'name':sender, 'lv':1, 'xp':0});
}

lv[lv.findIndex(e=>e.name==sender)].xp++;

if (lv[lv.findIndex(e=>e.name==sender)].xp >= ((lv[lv.findIndex(e=>e.name==sender)].lv*25) + 35)) {
lv[lv.findIndex(e=>e.name==sender)].lv++;
lv[lv.findIndex(e=>e.name==sender)].xp -= (((lv[lv.findIndex(e=>e.name==sender)].lv-1)*25) + 35);
FS.write(path, JSON.stringify(lv));
replier.reply("『GG " + sender + " 레벨업!』\n" + (lv[lv.findIndex(e=>e.name==sender)].lv - 1) + "Lv >> " + lv[lv.findIndex(e=>e.name==sender)].lv + "Lv [" + lv[lv.findIndex(e=>e.name==sender)].xp + "/" + ((lv[lv.findIndex(e=>e.name==sender)].lv*25) + 35) + " exp left]");
}

if (msg == "이모티콘을 보냈습니다.") {
lv[lv.findIndex(e=>e.name==sender)].xp++;
lv[lv.findIndex(e=>e.name==sender)].xp++;
lv[lv.findIndex(e=>e.name==sender)].xp++;
FS.write(path, JSON.stringify(lv));
}

if (CH.ExtraExp(msg)) {
lv[lv.findIndex(e=>e.name==sender)].xp++;
lv[lv.findIndex(e=>e.name==sender)].xp++;
lv[lv.findIndex(e=>e.name==sender)].xp++;
lv[lv.findIndex(e=>e.name==sender)].xp++;
lv[lv.findIndex(e=>e.name==sender)].xp++;
FS.write(path, JSON.stringify(lv));
}

if (msg == "!Lrank") {
for (d=0; d=<20; d++) {
let DataCK = (lv.sort((a,b)=>((b.lv*1000000)+b.xp)-((a.lv*1000000)+a.xp)).slice(0,150).map((e,i)=>++i + "위 [ " + e.lv + "Lv ▪︎ " + e.xp + "/" + ((e.lv*25) + 35) + " exp left ] : " + e.name).join("\n\n"));
}
replier.reply("『 ⭐ Chat Level List 』" + "\u200b".repeat(500) + "\n" + "═".repeat(20) + "\n\n" + DataCK + "\n\n" + "═".repeat(20));
}

if (msg == "!level") {
let index = lv.sort((a,b)=>((b.lv*1000000)+b.xp)-((a.lv*1000000)+a.xp).findIndex(e=>e.name==sender));
replier.reply("『 ⭐ " + sender + " 』\n" + "═".repeat(15) + "\n『🔥』 순위 : " + (index+1) + "위\n『🔥』 레벨 : " + lv[index].lv + "Lv\n『🔥』 남은 경험치 : " + lv[index].xp + "/" + ((lv[index].lv*25) + 35) + " exp\n" + "═".repeat(15));
}

FS.write(path, JSON.stringify(lv));

}
  
}
