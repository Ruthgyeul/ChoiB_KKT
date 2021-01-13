const CH = {};

CH.ExtraExp = function(msg) {
var Extra = ["\n", "사진을 보냈습니다.", "동영상을 보냇습니다.", "음성메시지를 보냈습니다.", "샵검색:", "#", "@", "www.", "http:", "https:", ".com", ".gov", "/"];
for (var n = 0; n < Extra.length; n++) { 
if (msg.indexOf(Extra[n]) != -1) return true; 
}
return false;
};

CH.EsterEgg = function(msg) {
var Egg = ["체온아 사랑해", "체온아 잘했어", "체온아 멋있다", "체온아 힘내"];
for (var n = 0; n < Egg.length; n++) {
if (msg == (Egg[n])) return true; 
}
return false;
};

function response(room, msg, sender, igc, replier){

const FS = FileStream, path = "/sdcard/ProjectK/" + room + "/lv.json";
if(!new java.io.File(path).canRead()) FS.write(path, '[]');
let lv = JSON.parse(FS.read(path));

if (!lv.find(e=>e.name==sender)) {
lv.push({'name':sender, 'lv':1, 'xp':0});
}

lv[lv.findIndex(e=>e.name==sender)].xp++;

if (lv[lv.findIndex(e=>e.name==sender)].xp>=Number((lv[lv.findIndex(e=>e.name==sender)].lv*25) + 35)) {
lv[lv.findIndex(e=>e.name==sender)].lv++;
lv[lv.findIndex(e=>e.name==sender)].xp -= ((lv[lv.findIndex(e=>e.name==sender)].lv*25) + 35);
FS.write(path, JSON.stringify(lv));
replier.reply("『 GG " + sender + "레벨업! 』\n" + Number(lv[lv.findIndex(e=>e.name==sender)].lv - 1) + " >> " + lv[lv.findIndex(e=>e.name==sender)].lv + "LV [" + lv[lv.findIndex(e=>e.name==sender)].xp + "/" + ((lv[lv.findIndex(e=>e.name==sender)].lv*25) + 35) + " exp left]");
}

if (msg == "이모티콘을 보냈습니다.") {
lv[lv.findIndex(e=>e.name==sender)].xp+2;
FS.write(path, JSON.stringify(lv));
}

if (CH.ExtraExp(msg)) {
lv[lv.findIndex(e=>e.name==sender)].xp+5;
FS.write(path, JSON.stringify(lv));
}

if (CH.EsterEgg(msg)) {
lv[lv.findIndex(e=>e.name==sender)].xp+14;
FS.write(path, JSON.stringify(lv));
}

if (msg == "!Lrank") {
replier.reply("『 ⭐ Chat Level List 』" + "\u200b".repeat(500) + "\n" + "═".repeat(20) + "\n\n" + lv.sort((a,b)=>(((b.lv*25)+35)+b.xp)-(((a.lv*25)+35)+a.xp)).slice(0,150).map((e,i)=>++i + "위 [" + e.lv + "LV, " + e.xp + "/" + ((e.lv*25) + 35) + " exp left] : " + e.name).join("\n\n") + "\n\n" + "═".repeat(20));
}

if (msg == "!level") {
let index = lv.sort((a,b)=>(((b.lv*25)+35)+b.xp)-(((a.lv*25)+35)+a.xp)).findIndex(e=>e.name==sender);
replier.reply("『 ⭐ " + sender + " 』\n" + "═".repeat(15) + "\n『🔥』 순위 : " + (index+1) + "위\n『🔥』 레벨 : " + lv[index].lv + "LV\n『🔥』 남은 경험치 : " + lv[index].xp + "/" + ((lv[index].lv*25) + 35) + " exp\n" + "═".repeat(15));
}

FS.write(path, JSON.stringify(lv));

}
