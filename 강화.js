// ERR


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
replier.reply("『  " + sender + " 』\n" + "═".repeat(15) + "\n『🏅』 순위 : " + (index+1) + "위\n『🏅』 강화 레벨 : " + reinf[index].lv + "Lv\n『🏅』 " + reinf[index].counterdice + "% 확률로 강화 성공" + "═".repeat(15));
}

}




////////////







const scriptName="검강화";

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName, threadId){

var i = Math.floor(Math.random()*1001)/10;
if((room.indexOf("1급_청정수")!=-1||room.indexOf("학생들")!=-1) && room.indexOf("Dragon")==-1){
if(msg.indexOf("/")==0){
var itemlist = ["정체모를 눅눅한 목검", "조잡한 녹슨철검", "쓸만한 철검", "보급형 철검", "견습기사의 강철검", "왕실기사의 양날대검", "황실 호위기사의 세이버", "적기사단장의 핏빛대검", "드워프제 미스릴장검", "드워프제 오리하르콘 세검", "하이 마스터의 미스릴티움 곡도", "중급마족의 장검", "하급마왕의 폭렬검", "상급마왕의 흡혈검", "마검 살인의 추억", "성검 빛의 심판", "마검 크림슨 리퍼", "성검 화이트 노바", "마검 엔트로피", "성검 칼디라스", "신살검", "대악검(大惡剣)제 1검-교만(驕慢)","대악검(大惡剣)제 2검-인색(貪慾)","대악검(大惡剣)제 3검-시기(猜忌)","대악검(大惡剣)제 4검-분노(憤怒)","대악검(大惡剣)제 5검-음욕(淫慾)","대악검(大惡剣)제 6검-식탐(食貪)","대악검(大惡剣)제 7검-나태(懶怠)","대성검(大聖剣)제 1검-창세(創世)","대성검(大聖剣)제 2검-조율(調律)","대성검(大聖剣)제 3검-수호(守護)","태선악검(泰善惡剣)"];
try{
var playerdatafile = Number(DataBase.getDataBase(sender+"의 강화수치.txt"));
}catch(e){
playerdatafile="undefined";
}
var playeritem = itemlist[playerdatafile];

var playerhashid = DataBase.getDataBase(sender+"의 아이디.txt");
var aar = (0<i) && (i<=10);
var bar = (10<i) && (i<=30);
var car = (30<i) && (i<=100);
var dar = ((0<i) && (i<=(10-playerdatafile)));
var ear = (((10-playerdatafile)<i) && (i<=(30-2*playerdatafile)));
var zzar = (((30-2*playerdatafile)<i) && (i<=(100-5*playerdatafile)));
var gar = (((100-5*playerdatafile)<i )&& (i<=(100-3*playerdatafile)));
var har = (((100-3*playerdatafile)<i) && (i<=99));
var iar = ((99<i)&&(i<=100));
var jar = ((0<i)&&(i<=1));
var kar = ((1<i)&&(i<=12));
var lar = ((12<i)&&(i<=55));
var mar = ((55<i)&&(i<=73));
var nar = ((73<i)&&(i<=99));
var oar = ((1<i)&&(i<=(20-playerdatafile)));
var par = (((20-playerdatafile)<i)&&(i<=(100-5*playerdatafile)));
var qar = (((100-5*playerdatafile)<i)&&(i<=(120-5*playerdatafile)));
var rar = (((120-5*playerdatafile)<i)&&(i<=(109-playerdatafile)));
var sar = (((109-playerdatafile)<i)&&(i<=100));
var tar =((1<i)&&(i<=3));
var uar = ((3<i)&&(i<=15));
var xdar = ((15<i)&&(i<=35));
var war = ((35<i)&&(i<=92));
var xar = ((92<i)&&(i<=100));
var yar = ((1<i)&&(i<=(21-playerdatafile)));
var zar = (((21-playerdatafile)<i)&&(i<=(100-5*playerdatafile)));
}
var rank = Number(DataBase.getDataBase("검강화 최고기록"));
var rankowner = DataBase.getDataBase("검강화 최고기록 주인");
if(msg.indexOf("/불멸의 축복 ")==0){
if(sender.indexOf("۝1급_청정수۝")!=-1 || sender.indexOf("주성민")!=-1){
if( hashcode == hashcode2||hashcode1==hashcode2){
var buff = Number(msg.replace("/불멸의 축복 "));
DataBase.setDataBase(sender+"불멸의 축복",buff);
replier.reply("다음 "+buff+"번 동안 실패를 하더라도 검이 파괴되지 않습니다. 단, 강화수치는 떨어질 수 있습니다.");
return;
}else {
replier.reply("관리자가 아닙니다.");
return;
}
}else{
replier.reply("관리자가 아닙니다.");
return;
}
}
if(msg.indexOf("/강화 랭킹 리셋")==0){
if(sender.indexOf("۝1급_청정수۝")!=-1 || sender.indexOf("주성민")!=-1){
if( hashcode == hashcode2||hashcode1==hashcode2){
DataBase.setDataBase("검강화 최고기록", 0);
replier.reply("시작되었습니다. 기본기록 +0강");
return;
}else {
replier.reply("관리자와 이름은 같지만 관리자가 아닙니다.");
return;
}
}else{
replier.reply("관리자가 아닙니다.");
return;
}
}
if(sender!="주성민"&&sender!="۝1급_청정수۝"&&playerdatafile>rank && playerdatafile!=31 && playerdatafile!="undefined" && playerhashid.indexOf(java.lang.String(imageDB.getProfileHash()))!=-1){
DataBase.setDataBase("검강화 최고기록",playerdatafile);
DataBase.setDataBase("검강화 최고기록 주인",sender);
rank = DataBase.getDataBase("검강화 최고기록");
rankowner = DataBase.getDataBase("검강화 최고기록 주인");
replier.reply("최고기록이 갱신되었습니다.\n현재 최고기록 : "+rankowner+"님의\n[ +"+rank+"강 "+itemlist[rank]+" ]");
return;
}
if(msg=="/검강화 랭킹"){
replier.reply("현재 최고기록은\n"+rankowner+"님의\n[ +"+rank+"강 "+itemlist[rank]+" ]\n입니다!");
return;
}
var findluck = Math.floor(Math.random()*10);

if(msg=="/강화오류검사"){
if(playerdatafile=="undefined"||playerhashid==null||playerhashid.indexOf(java.lang.String(imageDB.getProfileHash()))==-1){
replier.reply(sender+" 님, 오류가 있거나 검이 없으십니다. 해쉬코드 : "+playerhashid);
}else {
replier.reply(sender+" 님은 정상입니다. 해쉬코드 : "+playerhashid);
}
}
​ if (msg.indexOf("/내 검")==0){
if(playerdatafile!="undefined"&&playerhashid.indexOf(java.lang.String(imageDB.getProfileHash()))!=-1){
replier.reply("[ "+sender+" ] 님의 검은\n[ +"+playerdatafile+" "+playeritem+" ] 입니다!");
return;
}else{
replier.reply("무기가 없습니다!\n[ /고철찾기 ] 로 기본 무기를 찾으세요!\nMade by ۝1급_청정수۝");
//출처 지우면 잡으러 갈거에요
return;
}
}
var hashcode = DataBase. getDataBase("۝1급_청정수۝프사코드");
var hashcode1 = DataBase. getDataBase("주성민프사코드");
var hashcode2 = java.lang.String(imageDB.getProfileHash()); 
if(msg.indexOf("/강화 관리")==0){
if(sender.indexOf("۝1급_청정수۝")!=-1 || sender.indexOf("주성민")!=-1){
var target = msg.split("\n")[1];
var targetdata = msg.split("\n")[2];
if( hashcode == hashcode2||hashcode1==hashcode2){
DataBase.setDataBase(target+"의 강화수치.txt", targetdata);
replier.reply("관리자 권한으로 수정하였습니다!");
return;
}else {
replier.reply("관리자와 이름은 같지만 관리자가 아닙니다.");
return;
}
}else{
replier.reply("관리자가 아닙니다.");
return;
}
}
​ if (msg.indexOf("/고철찾기")==0 && (playerdatafile=="undefined"||playerhashid==null||playerhashid.indexOf(java.lang.String(imageDB.getProfileHash()))==-1)&&findluck<6){
replier.reply("찾는중...");
java.lang.Thread.sleep(2000);
DataBase.setDataBase(sender+"의 강화수치.txt",0);
DataBase.setDataBase(sender+"의 아이디.txt",java.lang.String(imageDB.getProfileHash()));
playerdatafile = DataBase.getDataBase(sender+"의 강화수치.txt");
playeritem = itemlist[playerdatafile];
replier.reply("[ "+sender+" ] 님께서 고철더미에서\n[ +"+playerdatafile+" "+playeritem+" ] 을(를) 찾았습니다!");
return;
}
​ if (msg.indexOf("/고철찾기")==0 && (playerdatafile=="undefined"||playerhashid==null||playerhashid.indexOf(java.lang.String(imageDB.getProfileHash()))==-1)&&findluck>=6&&findluck<9){
replier.reply("찾는중...");
java.lang.Thread.sleep(2000);
DataBase.setDataBase(sender+"의 강화수치.txt",1);
DataBase.setDataBase(sender+"의 아이디.txt",java.lang.String(imageDB.getProfileHash()));
playerdatafile = DataBase.getDataBase(sender+"의 강화수치.txt");
playeritem = itemlist[playerdatafile];
replier.reply("[ "+sender+" ] 님께서 고철더미에서\n[ +"+playerdatafile+" "+playeritem+" ] 을(를) 찾았습니다!");
return;
}
​ if (msg.indexOf("/고철찾기")==0 && (playerdatafile=="undefined"||playerhashid==null||playerhashid.indexOf(java.lang.String(imageDB.getProfileHash()))==-1)&&findluck>=9){
replier.reply("찾는중...");
java.lang.Thread.sleep(2000);
DataBase.setDataBase(sender+"의 강화수치.txt",2);
DataBase.setDataBase(sender+"의 아이디.txt",java.lang.String(imageDB.getProfileHash()));
playerdatafile = DataBase.getDataBase(sender+"의 강화수치.txt");
playeritem = itemlist[playerdatafile];
replier.reply("!!!");
java.lang.Thread.sleep(500);
replier.reply("[ "+sender+" ] 님께서 고철더미에서\n[ +"+playerdatafile+" "+playeritem+" ] 을(를) 찾았습니다!");
return;
}
    if(msg=="/검강화" && (playerdatafile=="undefined"||playerhashid==null||playerhashid.indexOf(java.lang.String(imageDB.getProfileHash()))==-1)){
        replier.reply("강화할 무기가 없습니다!\n[ /고철찾기 ] 로 기본 무기를 찾으세요!");
return;
    }
    if(msg=="/검강화" && playerdatafile!="undefined" && playerhashid.indexOf(java.lang.String(imageDB.getProfileHash()))!=-1){
i = Math.floor(Math.random()*101);
        if(playerdatafile==0){
            if(aar){
                replier.reply("떨리는 손으로 강화장인에게\n[ "+playeritem+" ] 을(를) 주었습니다!");
                java.lang.Thread.sleep(3000);
                replier.reply("눈을 못 뜰 정도의 빛이 뿜어져 나옵니다!");
DataBase.setDataBase(sender+"의 강화수치.txt",playerdatafile+3);
                replier.reply("[ +"+playerdatafile+" "+playeritem+" ] 이 \n[ +"+(playerdatafile+3)+" "+itemlist[playerdatafile+3]+" ] 으로 강화되었습니다!");
return;
            }
            if(bar){
                replier.reply("떨리는 손으로 강화장인에게\n[ "+playeritem+" ] 을(를) 주었습니다!");
                java.lang.Thread.sleep(3000);
                replier.reply("매우 밝은 빛이 뿜어져 나옵니다!");
DataBase.setDataBase(sender+"의 강화수치.txt",playerdatafile+2);
replier.reply("[ +"+playerdatafile+" "+playeritem+" ] 이 \n[ +"+(playerdatafile+2)+" "+itemlist[playerdatafile+2]+" ] 으로 강화되었습니다!");
return;
            }
            if(car){
                replier.reply("떨리는 손으로 강화장인에게\n[ "+playeritem+" ] 을(를) 주었습니다!");
                java.lang.Thread.sleep(3000);
                replier.reply("밝은 빛이 뿜어져 나옵니다!");
DataBase.setDataBase(sender+"의 강화수치.txt",playerdatafile+1); 
                replier.reply("[ +"+playerdatafile+" "+playeritem+" ] 이\n[ +"+(playerdatafile+1)+" "+itemlist[playerdatafile+1]+" ] 으로 강화되었습니다!");
return;
             }
        }
        if(playerdatafile>=1 && playerdatafile<9){
            if(dar){
                replier.reply("떨리는 손으로 강화장인에게\n[ "+playeritem+" ] 을(를) 주었습니다!");
                java.lang.Thread.sleep(3000);
                replier.reply("눈을 못 뜰 정도의 빛이 뿜어져 나옵니다!");
DataBase.setDataBase(sender+"의 강화수치.txt",playerdatafile+3);
replier.reply("[ +"+playerdatafile+" "+playeritem+" ] 이 \n[ +"+(playerdatafile+3)+" "+itemlist[playerdatafile+3]+" ] 으로 강화되었습니다!");
return;
            }
            if(ear){
                replier.reply("떨리는 손으로 강화장인에게\n[ "+playeritem+" ] 을(를) 주었습니다!");
                java.lang.Thread.sleep(3000);
                replier.reply("매우 밝은 빛이 뿜어져 나옵니다!");
DataBase.setDataBase(sender+"의 강화수치.txt",playerdatafile+2);
replier.reply("[ +"+playerdatafile+" "+playeritem+" ] 이 \n[ +"+(playerdatafile+2)+" "+itemlist[playerdatafile+2]+" ] 으로 강화되었습니다!");
return;
                
            }
            if(zzar){
                replier.reply("떨리는 손으로 강화장인에게\n[ "+playeritem+" ] 을(를) 주었습니다!");
                java.lang.Thread.sleep(3000);
                replier.reply("밝은 빛이 뿜어져 나옵니다!");
DataBase.setDataBase(sender+"의 강화수치.txt",playerdatafile+1);
replier.reply("[ +"+playerdatafile+" "+playeritem+" ] 이 \n[ +"+(playerdatafile+1)+" "+itemlist[playerdatafile+1]+" ] 으로 강화되었습니다!");
return;
                
            }
            if(gar){
                replier.reply("떨리는 손으로 강화장인에게\n[ "+playeritem+" ] 을(를) 주었습니다!");
                java.lang.Thread.sleep(3000);
                replier.reply("아무 일도 없었습니다.......");
return;
            }
            if(har){
                replier.reply("떨리는 손으로 강화장인에게\n[ "+playeritem+" ] 을(를) 주었습니다!");
                java.lang.Thread.sleep(3000);
                replier.reply("아이고 실수!");
DataBase.setDataBase(sender+"의 강화수치.txt",playerdatafile-1);
replier.reply("[ +"+playerdatafile+" "+playeritem+" ] 이 \n[ +"+(playerdatafile-1)+" "+itemlist[playerdatafile-1]+" ] 으로 하락하였습니다!");
return;
                
            }
            if(iar){
                replier.reply("떨리는 손으로 강화장인에게\n[ "+playeritem+" ] 을(를) 주었습니다!");
                java.lang.Thread.sleep(3000);
                replier.reply("어잌후! 손이 미끄러졌네?");
                replier.reply("[ +"+playerdatafile+" "+playeritem+" ] 이 파괴되었습니다!");
                DataBase.removeDataBase(sender+"의 강화수치.txt");
DataBase.removeDataBase(sender+"의 아이디.txt");
return;
            }
        }
        if(playerdatafile==9){
            if(jar){
                replier.reply("떨리는 손으로 강화장인에게\n[ "+playeritem+" ] 을(를) 주었습니다!");
                java.lang.Thread.sleep(3000);
                replier.reply("눈을 못 뜰 정도의 빛이 뿜어져 나옵니다!");
DataBase.setDataBase(sender+"의 강화수치.txt",playerdatafile+3);
replier.reply("[ +"+playerdatafile+" "+playeritem+" ] 이 \n[ +"+(playerdatafile+3)+" "+itemlist[playerdatafile+3]+" ] 으로 강화되었습니다!");                
return;
            }
            if(kar){
                replier.reply("떨리는 손으로 강화장인에게\n[ "+playeritem+" ] 을(를) 주었습니다!");
                java.lang.Thread.sleep(3000);
                replier.reply("매우 밝은 빛이 뿜어져 나옵니다!");
DataBase.setDataBase(sender+"의 강화수치.txt",playerdatafile+2);
replier.reply("[ +"+playerdatafile+" "+playeritem+" ] 이 \n[ +"+(playerdatafile+2)+" "+itemlist[playerdatafile+2]+" ] 으로 강화되었습니다!");
                return;
            }
            if(lar){
                replier.reply("떨리는 손으로 강화장인에게\n[ "+playeritem+" ] 을(를) 주었습니다!");
                java.lang.Thread.sleep(3000);
                replier.reply("밝은 빛이 뿜어져 나옵니다!");
DataBase.setDataBase(sender+"의 강화수치.txt",playerdatafile+1);
replier.reply("[ +"+playerdatafile+" "+playeritem+" ] 이 \n[ +"+(playerdatafile+1)+" "+itemlist[playerdatafile+1]+" ] 으로 강화되었습니다!");
                return;
            }
            if(mar){
                replier.reply("떨리는 손으로 강화장인에게\n[ "+playeritem+" ] 을(를) 주었습니다!");
                java.lang.Thread.sleep(3000);
                replier.reply("아무 일도 없었습니다.......");
return;
            }
            if(nar){
                replier.reply("떨리는 손으로 강화장인에게\n[ "+playeritem+" ] 을(를) 주었습니다!");
                java.lang.Thread.sleep(3000);
                replier.reply("아이고 실수!");
DataBase.setDataBase(sender+"의 강화수치.txt",playerdatafile-1);
replier.reply("[ +"+playerdatafile+" "+playeritem+" ] 이 \n[ +"+(playerdatafile-1)+" "+itemlist[playerdatafile-1]+" ] 으로 하락하였습니다!");
                return;
            }
            if(iar){
                replier.reply("떨리는 손으로 강화장인에게\n[ "+playeritem+" ] 을(를) 주었습니다!");
                java.lang.Thread.sleep(3000);
                replier.reply("어잌후! 손이 미끄러졌네?");
                replier.reply("[ +"+playerdatafile+" "+playeritem+" ] 이 파괴되었습니다!");
                DataBase.removeDataBase(sender+"의 강화수치.txt");
DataBase.removeDataBase(sender+"의 아이디.txt");
return;
            }
        }
        if(playerdatafile>=10 && playerdatafile<17){
            if(jar){
                replier.reply("떨리는 손으로 강화장인에게\n[ "+playeritem+" ] 을(를) 주었습니다!");
                java.lang.Thread.sleep(3000);
                replier.reply("눈을 못 뜰 정도의 빛이 뿜어져 나옵니다!");
DataBase.setDataBase(sender+"의 강화수치.txt",playerdatafile+3);
replier.reply("[ +"+playerdatafile+" "+playeritem+" ] 이 \n[ +"+(playerdatafile+3)+" "+itemlist[playerdatafile+3]+" ] 으로 강화되었습니다!");
return;                
            }
            if(oar){
                replier.reply("떨리는 손으로 강화장인에게\n[ "+playeritem+" ] 을(를) 주었습니다!");
                java.lang.Thread.sleep(3000);
                replier.reply("매우 밝은 빛이 뿜어져 나옵니다!");
DataBase.setDataBase(sender+"의 강화수치.txt",playerdatafile+2);
replier.reply("[ +"+playerdatafile+" "+playeritem+" ] 이 \n[ +"+(playerdatafile+2)+" "+itemlist[playerdatafile+2]+" ] 으로 강화되었습니다!");
return;        
            }
            if(par){
                replier.reply("떨리는 손으로 강화장인에게\n[ "+playeritem+" ] 을(를) 주었습니다!");
                java.lang.Thread.sleep(3000);
                replier.reply("밝은 빛이 뿜어져 나옵니다!");
DataBase.setDataBase(sender+"의 강화수치.txt",playerdatafile+1);
replier.reply("[ +"+playerdatafile+" "+playeritem+" ] 이 \n[ +"+(playerdatafile+1)+" "+itemlist[playerdatafile+1]+" ] 으로 강화되었습니다!");
return;               
            }
            if(qar){
                replier.reply("떨리는 손으로 강화장인에게\n[ "+playeritem+" ] 을(를) 주었습니다!");
                java.lang.Thread.sleep(3000);
                replier.reply("아무 일도 없었습니다.......");
return;
            }
            if(rar){
                replier.reply("떨리는 손으로 강화장인에게\n[ "+playeritem+" ] 을(를) 주었습니다!");
                java.lang.Thread.sleep(3000);
                replier.reply("아이고 실수!");
DataBase.setDataBase(sender+"의 강화수치.txt",playerdatafile-1);
                replier.reply("[ +"+playerdatafile+" "+playeritem+" ] 이 \n[ +"+(playerdatafile-1)+" "+itemlist[playerdatafile-1]+" ] 으로 하락하였습니다!");
return;
                            }
            if(sar){
                replier.reply("떨리는 손으로 강화장인에게\n[ "+playeritem+" ] 을(를) 주었습니다!");
                java.lang.Thread.sleep(3000);
                replier.reply("어잌후! 손이 미끄러졌네?");
                replier.reply("[ +"+playerdatafile+" "+playeritem+" ] 이 파괴되었습니다!");
                DataBase.removeDataBase(sender+"의 강화수치.txt");
DataBase.removeDataBase(sender+"의 아이디.txt");
return;
            }
        }
        /*if(playerdatafile>=10 && playerdatafile<17){
            if(jar){
                replier.reply("떨리는 손으로 강화장인에게\n[ "+playeritem+" ] 을(를) 주었습니다!");
                java.lang.Thread.sleep(3000);
                replier.reply("눈을 못 뜰 정도의 빛이 뿜어져 나옵니다!");
DataBase.setDataBase(sender+"의 강화수치.txt",playerdatafile+3);
                replier.reply("[ +"+playerdatafile+" "+playeritem+" ] 이 \n[ +"+(playerdatafile+3)+" "+itemlist[playerdatafile+3]+" ] 으로 강화되었습니다!");
return;
                            }
            if(tar){
                replier.reply("떨리는 손으로 강화장인에게\n[ "+playeritem+" ] 을(를) 주었습니다!");
                java.lang.Thread.sleep(3000);
                replier.reply("매우 밝은 빛이 뿜어져 나옵니다!");
DataBase.setDataBase(sender+"의 강화수치.txt",playerdatafile+2);
                replier.reply("[ +"+playerdatafile+" "+playeritem+" ] 이 \n[ +"+(playerdatafile+2)+" "+itemlist[playerdatafile+2]+" ] 으로 강화되었습니다!");
return;
                            }
            if(zzar){
                replier.reply("떨리는 손으로 강화장인에게\n[ "+playeritem+" ] 을(를) 주었습니다!");
                java.lang.Thread.sleep(3000);
                replier.reply("밝은 빛이 뿜어져 나옵니다!");
        DataBase.setDataBase(sender+"의 강화수치.txt",playerdatafile+1);
                replier.reply("[ +"+playerdatafile+" "+playeritem+" ] 이 \n[ +"+(playerdatafile+1)+" "+itemlist[playerdatafile+1]+" ] 으로 강화되었습니다!");
return;
            }
            if(gar){
                replier.reply("떨리는 손으로 강화장인에게\n[ "+playeritem+" ] 을(를) 주었습니다!");
                java.lang.Thread.sleep(3000);
                replier.reply("아무 일도 없었습니다.......");
return;
            }
            if(har){
                replier.reply("떨리는 손으로 강화장인에게\n[ "+playeritem+" ] 을(를) 주었습니다!");
                java.lang.Thread.sleep(3000);
                replier.reply("아이고 실수!");
DataBase.setDataBase(sender+"의 강화수치.txt",playerdatafile-1);
                replier.reply("[ +"+playerdatafile+" "+playeritem+" ] 이 \n[ +"+(playerdatafile-1)+" "+itemlist[playerdatafile-1]+" ] 으로 하락하였습니다!");
return;
            }
            if(iar){
                replier.reply("떨리는 손으로 강화장인에게\n[ "+playeritem+" ] 을(를) 주었습니다!");
                java.lang.Thread.sleep(3000);
                replier.reply("어잌후! 손이 미끄러졌네?");
                replier.reply("[ +"+playerdatafile+" "+playeritem+" ] 이 파괴되었습니다!");
                DataBase.removeDataBase(sender+"의 강화수치.txt");
DataBase.removeDataBase(sender+"의 아이디.txt");
return;
            }
        }*/
        if(playerdatafile==17){
            if(jar){
                replier.reply("떨리는 손으로 강화장인에게\n[ "+playeritem+" ] 을(를) 주었습니다!");
                java.lang.Thread.sleep(3000);
                replier.reply("눈을 못 뜰 정도의 빛이 뿜어져 나옵니다!");
DataBase.setDataBase(sender+"의 강화수치.txt",playerdatafile+3);
                replier.reply("[ +"+playerdatafile+" "+playeritem+" ] 이 \n[ +"+(playerdatafile+3)+" "+itemlist[playerdatafile+3]+" ] 으로 강화되었습니다!");
return;
                            }
            if(tar){
                replier.reply("떨리는 손으로 강화장인에게\n[ "+playeritem+" ] 을(를) 주었습니다!");
                java.lang.Thread.sleep(3000);
                replier.reply("매우 밝은 빛이 뿜어져 나옵니다!");
DataBase.setDataBase(sender+"의 강화수치.txt",playerdatafile+2);
                replier.reply("[ +"+playerdatafile+" "+playeritem+" ] 이 \n[ +"+(playerdatafile+2)+" "+itemlist[playerdatafile+2]+" ] 으로 강화되었습니다!");
return;
                            }
            if(uar){
                replier.reply("떨리는 손으로 강화장인에게\n[ "+playeritem+" ] 을(를) 주었습니다!");
                java.lang.Thread.sleep(3000);
                replier.reply("밝은 빛이 뿜어져 나옵니다!");
DataBase.setDataBase(sender+"의 강화수치.txt",playerdatafile+1);
                replier.reply("[ +"+playerdatafile+" "+playeritem+" ] 이 \n[ +"+(playerdatafile+1)+" "+itemlist[playerdatafile+1]+" ] 으로 강화되었습니다!");
return;
                            }
            if(xdar){
                replier.reply("떨리는 손으로 강화장인에게\n[ "+playeritem+" ] 을(를) 주었습니다!");
                java.lang.Thread.sleep(3000);
                replier.reply("아무 일도 없었습니다.......");
return;
            }
            if(war){
                replier.reply("떨리는 손으로 강화장인에게\n[ "+playeritem+" ] 을(를) 주었습니다!");
                java.lang.Thread.sleep(3000);
                replier.reply("아이고 실수!");
DataBase.setDataBase(sender+"의 강화수치.txt",playerdatafile-1);
                replier.reply("[ +"+playerdatafile+" "+playeritem+" ] 이 \n[ +"+(playerdatafile-1)+" "+itemlist[playerdatafile-1]+" ] 으로 하락하였습니다!");
return;
            }
            if(xar){
                replier.reply("떨리는 손으로 강화장인에게\n[ "+playeritem+" ] 을(를) 주었습니다!");
                java.lang.Thread.sleep(3000);
                replier.reply("어잌후! 손이 미끄러졌네?");
                replier.reply("[ +"+playerdatafile+" "+playeritem+" ] 이 파괴되었습니다!");
                DataBase.removeDataBase(sender+"의 강화수치.txt");
DataBase.removeDataBase(sender+"의 아이디.txt");
return;
            }
        }
        if(playerdatafile>=18 && playerdatafile<20){
if(i>0&&i<=1){
                replier.reply("떨리는 손으로 강화장인에게\n[ "+playeritem+" ] 을(를) 주었습니다!");
                java.lang.Thread.sleep(3000);
                replier.reply("눈을 못 뜰 정도의 빛이 뿜어져 나옵니다!");
DataBase.setDataBase(sender+"의 강화수치.txt",playerdatafile+3);
                replier.reply("[ +"+playerdatafile+" "+playeritem+" ] 이 \n[ +"+(playerdatafile+3)+" "+itemlist[playerdatafile+3]+" ] 으로 강화되었습니다!");
return;
            }
            if(yar){
                replier.reply("떨리는 손으로 강화장인에게\n[ "+playeritem+" ] 을(를) 주었습니다!");
                java.lang.Thread.sleep(3000);
                replier.reply("매우 밝은 빛이 뿜어져 나옵니다!");
DataBase.setDataBase(sender+"의 강화수치.txt",playerdatafile+2);
                replier.reply("[ +"+playerdatafile+" "+playeritem+" ] 이 \n[ +"+(playerdatafile+2)+" "+itemlist[playerdatafile+2]+" ] 으로 강화되었습니다!");
return;
                            }
            if(zar){
                replier.reply("떨리는 손으로 강화장인에게\n[ "+playeritem+" ] 을(를) 주었습니다!");
                java.lang.Thread.sleep(3000);
                replier.reply("밝은 빛이 뿜어져 나옵니다!");
DataBase.setDataBase(sender+"의 강화수치.txt",playerdatafile+1);
                replier.reply("[ +"+playerdatafile+" "+playeritem+" ] 이 \n[ +"+(playerdatafile+1)+" "+itemlist[playerdatafile+1]+" ] 으로 강화되었습니다!");
return;
                            }
            if(qar){
                replier.reply("떨리는 손으로 강화장인에게\n[ "+playeritem+" ] 을(를) 주었습니다!");
                java.lang.Thread.sleep(3000);
                replier.reply("아무 일도 없었습니다.......");
return;
            }
            if(rar){
                replier.reply("떨리는 손으로 강화장인에게\n[ "+playeritem+" ] 을(를) 주었습니다!");
                java.lang.Thread.sleep(3000);
                replier.reply("아이고 실수!");
DataBase.setDataBase(sender+"의 강화수치.txt",playerdatafile-1);
                replier.reply("[ +"+playerdatafile+" "+playeritem+" ] 이 \n[ +"+(playerdatafile-1)+" "+itemlist[playerdatafile-1]+" ] 으로 하락하였습니다!");
return;
                            }
            if(sar){
                replier.reply("떨리는 손으로 강화장인에게\n[ "+playeritem+" ] 을(를) 주었습니다!");
                java.lang.Thread.sleep(3000);
                replier.reply("어잌후! 손이 미끄러졌네?");
                replier.reply("[ +"+playerdatafile+" "+playeritem+" ] 이 파괴되었습니다!");
                DataBase.removeDataBase(sender+"의 강화수치.txt");
DataBase.removeDataBase(sender+"의 아이디.txt");
return;
            }
        }
if(playerdatafile>=20 && playerdatafile<28){
if(i>0&&i>(0.8-(playerdatafile-20))/10){
                replier.reply("떨리는 손으로 강화장인에게\n[ "+playeritem+" ] 을(를) 주었습니다!");
                java.lang.Thread.sleep(3000);
                replier.reply("눈을 못 뜰 정도의 빛이 뿜어져 나옵니다!");
DataBase.setDataBase(sender+"의 강화수치.txt",playerdatafile+3);
                replier.reply("[ +"+playerdatafile+" "+playeritem+" ] 이 \n[ +"+(playerdatafile+3)+" "+itemlist[playerdatafile+3]+" ] 으로 강화되었습니다!");
return;
            }
if(i>(0.8-((playerdatafile-20)/10))&&(i<=(1.8-((playerdatafile-20)/10)))){
                replier.reply("떨리는 손으로 강화장인에게\n[ "+playeritem+" ] 을(를) 주었습니다!");
                java.lang.Thread.sleep(3000);
                replier.reply("매우 밝은 빛이 뿜어져 나옵니다!");
DataBase.setDataBase(sender+"의 강화수치.txt",playerdatafile+2);
                replier.reply("[ +"+playerdatafile+" "+playeritem+" ] 이 \n[ +"+(playerdatafile+2)+" "+itemlist[playerdatafile+2]+" ] 으로 강화되었습니다!");
return;
            }
            if(i>(1.8-((playerdatafile-20)/10))&&i<=(5-(((2*playerdatafile)-40)/10))){
                replier.reply("떨리는 손으로 강화장인에게\n[ "+playeritem+" ] 을(를) 주었습니다!");
                java.lang.Thread.sleep(3000);
                replier.reply("밝은 빛이 뿜어져 나옵니다!");
DataBase.setDataBase(sender+"의 강화수치.txt",playerdatafile+1);
                replier.reply("[ +"+playerdatafile+" "+playeritem+" ] 이 \n[ +"+(playerdatafile+1)+" "+itemlist[playerdatafile+1]+" ] 으로 강화되었습니다!");
return;
                            }
            if(i>(5-(((2*playerdatafile)-40)/10))&&(25-(((2*playerdatafile)-40)/10))>=i){
                replier.reply("떨리는 손으로 강화장인에게\n[ "+playeritem+" ] 을(를) 주었습니다!");
                java.lang.Thread.sleep(3000);
                replier.reply("아무 일도 없었습니다.......");
return;
            }
            if(i<=(25-(((2*playerdatafile)-40)/10))&&i<=(110-playerdatafile)){
                replier.reply("떨리는 손으로 강화장인에게\n[ "+playeritem+" ] 을(를) 주었습니다!");
                java.lang.Thread.sleep(3000);
                replier.reply("아이고 실수!");
DataBase.setDataBase(sender+"의 강화수치.txt",playerdatafile-1);
                replier.reply("[ +"+playerdatafile+" "+playeritem+" ] 이 \n[ +"+(playerdatafile-1)+" "+itemlist[playerdatafile-1]+" ] 으로 하락하였습니다!");
return;
                            }
            if(i>(110-playerdatafile)&&(i<=100)){
                replier.reply("떨리는 손으로 강화장인에게\n[ "+playeritem+" ] 을(를) 주었습니다!");
                java.lang.Thread.sleep(3000);
                replier.reply("어잌후! 손이 미끄러졌네?");
                replier.reply("[ +"+playerdatafile+" "+playeritem+" ] 이 파괴되었습니다!");
                DataBase.removeDataBase(sender+"의 강화수치.txt");
DataBase.removeDataBase(sender+"의 아이디.txt");
return;
            }
        }
if(playerdatafile==28){
if(i>0&&i<=1){
                replier.reply("떨리는 손으로 강화장인에게\n[ "+playeritem+" ] 을(를) 주었습니다!");
                java.lang.Thread.sleep(3000);
                replier.reply("매우 밝은 빛이 뿜어져 나옵니다!");
DataBase.setDataBase(sender+"의 강화수치.txt",playerdatafile+2);
                replier.reply("[ +"+playerdatafile+" "+playeritem+" ] 이 \n[ +"+(playerdatafile+2)+" "+itemlist[playerdatafile+2]+" ] 으로 강화되었습니다!");
return;
            }
            if(i>1&&i<=3){
                replier.reply("떨리는 손으로 강화장인에게\n[ "+playeritem+" ] 을(를) 주었습니다!");
                java.lang.Thread.sleep(3000);
                replier.reply("밝은 빛이 뿜어져 나옵니다!");
DataBase.setDataBase(sender+"의 강화수치.txt",playerdatafile+1);
                replier.reply("[ +"+playerdatafile+" "+playeritem+" ] 이 \n[ +"+(playerdatafile+1)+" "+itemlist[playerdatafile+1]+" ] 으로 강화되었습니다!");
return;
                            }
            if(i>3&&23>=i){
                replier.reply("떨리는 손으로 강화장인에게\n[ "+playeritem+" ] 을(를) 주었습니다!");
                java.lang.Thread.sleep(3000);
                replier.reply("아무 일도 없었습니다.......");
return;
            }
            if(i<=23&&i<=81){
                replier.reply("떨리는 손으로 강화장인에게\n[ "+playeritem+" ] 을(를) 주었습니다!");
                java.lang.Thread.sleep(3000);
                replier.reply("아이고 실수!");
DataBase.setDataBase(sender+"의 강화수치.txt",playerdatafile-1);
                replier.reply("[ +"+playerdatafile+" "+playeritem+" ] 이 \n[ +"+(playerdatafile-1)+" "+itemlist[playerdatafile-1]+" ] 으로 하락하였습니다!");
return;
                            }
            if(i>81&&(i<=100)){
                replier.reply("떨리는 손으로 강화장인에게\n[ "+playeritem+" ] 을(를) 주었습니다!");
                java.lang.Thread.sleep(3000);
                replier.reply("어잌후! 손이 미끄러졌네?");
                replier.reply("[ +"+playerdatafile+" "+playeritem+" ] 이 파괴되었습니다!");
                DataBase.removeDataBase(sender+"의 강화수치.txt");
DataBase.removeDataBase(sender+"의 아이디.txt");
return;
            }
        }
if(playerdatafile==29){
            if(i>0&&i<=1){
                replier.reply("떨리는 손으로 강화장인에게\n[ "+playeritem+" ] 을(를) 주었습니다!");
                java.lang.Thread.sleep(3000);
                replier.reply("밝은 빛이 뿜어져 나옵니다!");
DataBase.setDataBase(sender+"의 강화수치.txt",playerdatafile+1);
                replier.reply("[ +"+playerdatafile+" "+playeritem+" ] 이 \n[ +"+(playerdatafile+1)+" "+itemlist[playerdatafile+1]+" ] 으로 강화되었습니다!");
return;
                            }
            if(i>1&&21>=i){
                replier.reply("떨리는 손으로 강화장인에게\n[ "+playeritem+" ] 을(를) 주었습니다!");
                java.lang.Thread.sleep(3000);
                replier.reply("아무 일도 없었습니다.......");
return;
            }
            if(i<=21&&i<=80){
                replier.reply("떨리는 손으로 강화장인에게\n[ "+playeritem+" ] 을(를) 주었습니다!");
                java.lang.Thread.sleep(3000);
                replier.reply("아이고 실수!");
DataBase.setDataBase(sender+"의 강화수치.txt",playerdatafile-1);
                replier.reply("[ +"+playerdatafile+" "+playeritem+" ] 이 \n[ +"+(playerdatafile-1)+" "+itemlist[playerdatafile-1]+" ] 으로 하락하였습니다!");
return;
                            }
            if(i>80&&(i<=100)){
                replier.reply("떨리는 손으로 강화장인에게\n[ "+playeritem+" ] 을(를) 주었습니다!");
                java.lang.Thread.sleep(3000);
                replier.reply("어잌후! 손이 미끄러졌네?");
                replier.reply("[ +"+playerdatafile+" "+playeritem+" ] 이 파괴되었습니다!");
                DataBase.removeDataBase(sender+"의 강화수치.txt");
DataBase.removeDataBase(sender+"의 아이디.txt");
return;
            }
        }
if(playerdatafile==30){
replier.reply("이미 일반인 1위이십니다.\n그 정신나간 확률을 돌파하신 것을 축하드립니다.");
}
    }

}else if(msg.indexOf("/검강화")==0||msg.indexOf("/내 검")==0||msg.indexOf("/고철찾기")==0){
replier.reply("제 주인의 명령어놀이터 방에서 해주시기 바랍니다.");
}
}
