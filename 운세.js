//계산: 100(최소 포함/1000) - 100(최대 포함/1000)
//0% - 0.3%
//1% ~ 30% - 14.3%
//31% ~70% - 53%
//71% ~ 85% - 20%
//86% ~ 99% - 12.2%
//100% - 0.2%

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) { 

if (msg == "!운세") {
let rand = Math.floor(Math.random() * 1001) + 1; //100%
let dice1 = Math.floor(Math.random() * 30) + 1; //14.3%
let dice2 = Math.floor(Math.random() * 70) + 31; //53%
let dice3 = Math.floor(Math.random() * 85) + 71; //20%
let dice4 = Math.floor(Math.random() * 99) + 86; //12.2%

if (rand < 4) {
replier.reply((Math.floor(Math.random() * 2) ? "헐! " : "아? ") + sender + " 친구의 운세는 무려 100%야!!!");
} 
if (rand > 3 && rand < 8) {
replier.reply((Math.floor(Math.random() * 2) ? "엌ㅋ! " : "아.. ") + sender + " 친구의 운세는 무려 0%라고~ㅋ");
}
if (rand > 7 && rand < 131) {
replier.reply((Math.floor(Math.random() * 2) ? "앗! " : "우왕! ") + sender + " 친구의 운세는 " + dice4 + "%가 나왔엉~");
}
if (rand > 130 && rand < 275) {
replier.reply((Math.floor(Math.random() * 2) ? "앗! " : "우왕! ") + sender + " 친구의 운세는 " + dice1 + "%가 나왔엉~");
}
if (rand > 274 && rand < 476) {
replier.reply((Math.floor(Math.random() * 2) ? "앗! " : "우왕! ") + sender + " 친구의 운세는 " + dice3 + "%가 나왔엉~");
}
if (rand > 475) {
replier.reply((Math.floor(Math.random() * 2) ? "앗! " : "우왕! ") + sender + " 친구의 운세는 " + dice2 + "%가 나왔엉~");
}
  
}
