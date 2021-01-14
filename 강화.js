function response(room, msg, sender, isGroup, replier) {

const FS = FileStream, path = "/sdcard/ProjectK/" + room + "/reinf.json";
if(!new java.io.File(path).canRead()) FS.write(path, '[]');
let reinf = JSON.parse(FS.read(path));

var FT = FT[Math.floor(Math.random()*FT.length)];
var Dice = Math.floor((Math.random()*1000000)+1);
var LvDice = Math.floor((Math.random()*13)+1);
var FLvDice = Math.floor((Math.random()*10)+1);

if (!reinf.find(e=>e.name==sender)) reinf.push({'name':sender, 'rname':undefined, 'lv':0, 'probability':1000000, 'counterdice':0, 'wait':true});

if(msg.startsWith("!강화 ")) {
let rname = msg.replace(/!강화 /,"");

if(reinf[reinf.findIndex(e=>e.name==sender).lv == 0) {
reinf[reinf.findIndex(e=>e.name==sender).rname == rname;
reinf[reinf.findIndex(e=>e.name==sender)].lv == Math.floor((Math.random()*10)+1);
replier.reply("100% 확률로 강화 성공!\n" + reinf[reinf.findIndex(e=>e.name==sender)].rname + " : 0Lv >> " + reinf[reinf.findIndex(e=>e.name==sender)].lv + "Lv");
reinf[reinf.findIndex(e=>e.name==sender)].wait = false;
FS.write(path, JSON.stringify(reinf));
java.lang.Thread.sleep(60000);
reinf[reinf.findIndex(e=>e.name==sender)].wait = true;
FS.write(path, JSON.stringify(reinf));
}

if (reinf[reinf.findIndex(e=>e.name==sender)].lv>=1 && reinf[reinf.findIndex(e=>e.name==sender)].wait == true) {
let LvS = Number(reinf[reinf.findIndex(e=>e.name==sender)].lv + LvDice);
let FLvS = Number(reinf[reinf.findIndex(e=>e.name==sender)].lv -= FLvDice);
let counterN = Number(reinf[reinf.findIndex(e=>e.name==sender)].lv*1000 + Math.floor((Math.random()*10000)+100);
let CounterDice = Math.floor((Math.random()*counterN)+1);
let DiceS = Number(((1000000-conterN)/(10000))*100);
let FDiceS = Number(100-DiceS);

if (Dice >= CounterDice) {
replier.reply(DiceS + "% 확률로 강화 성공!\n" + reinf[reinf.findIndex(e=>e.name==sender)].rname + " : " + reinf[reinf.findIndex(e=>e.name==sender)].lv + "Lv >> " + LvS + "Lv");
reinf[reinf.findIndex(e=>e.name==sender)].lv == LvS;
reinf[reinf.findIndex(e=>e.name==sender)].counterdice == counterN;
reinf[reinf.findIndex(e=>e.name==sender)].wait = false;
FS.write(path, JSON.stringify(reinf));
java.lang.Thread.sleep(60000);
reinf[reinf.findIndex(e=>e.name==sender)].wait = true;
FS.write(path, JSON.stringify(reinf));
} else if (Dice <= CounterDice) {
replier.reply(FDiceS + "% 확률로 강화 실패!\n" + reinf[reinf.findIndex(e=>e.name==sender)].rname + " : " + reinf[reinf.findIndex(e=>e.name==sender)].lv + "Lv >> " + FLvS + "Lv");
reinf[reinf.findIndex(e=>e.name==sender)].lv == FLvS;
reinf[reinf.findIndex(e=>e.name==sender)].counterdice == counterN;
reinf[reinf.findIndex(e=>e.name==sender)].wait = false;
FS.write(path, JSON.stringify(reinf));
java.lang.Thread.sleep(60000);
reinf[reinf.findIndex(e=>e.name==sender)].wait = true;
FS.write(path, JSON.stringify(reinf));
}

if (reinf[reinf.findIndex(e=>e.name==sender)].wait==false && msg.startsWith("!강화 ")) {
replier.reply (e.name + ",\n60초 쿨타임 진행중... 잠시후 다시 시도해 주세요!");
}

}

}

if (msg == "!Rrank") {
replier.reply("『  강화 Rank 』" + "\u200b".repeat(500) + "\n" + "═".repeat(20) + "\n\n" + reinf.sort((a,b)=>b.lv-a.lv).slice(0,150).map((e,i)=>++i + "위 - " + e.rname + " [ " + e.lv + "Lv ▪︎ " + (((1000000-conterN)/(10000))*100).toFixed(2) + "% 롹률로 강화 성공함 ]).join("\n\n") + "\n\n" + "═".repeat(20));
}

if(msg == "!Rlevel"){
let index = reinf.sort((a,b)=>b.lv-a.count).findIndex(e=>e.name==sender);
replier.reply("『  " + sender + " 』\n" + "═".repeat(15) + "\n『🏅』 순위 : " + (index+1) + "위\n『🏅』 강화 레벨 : " + reinf[index].lv + "Lv\n" + "═".repeat(15));
}

}
