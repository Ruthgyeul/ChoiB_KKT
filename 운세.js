//계산(기준: %): 100(최소 포함/10000) - 100(최대 포함/10000) 
//0% - 0.4%
//1% ~ 21% - 4%
//22% ~86% - 58%
//87% ~ 94% - 24%
//95% ~ 99% - 13.5%
//100% - 0.1%

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) { 

if (msg == "!운세") {
let rand = Math.floor(Math.random() * (10000 - 1)) + 1; //100%
let dice1 = Math.floor(Math.random() * (22 - 1)) + 1; //4%
let dice2 = Math.floor(Math.random() * (86 - 23)) + 23; //58%
let dice3 = Math.floor(Math.random() * (94 - 87)) + 87; //24%
let dice4 = Math.floor(Math.random() * (99 - 95)) + 95; //13.5%

if (rand < 11) {
replier.reply((Math.floor(Math.random() * 2) ? "헐랭! " : "에?! ") + sender + " 친구의 운세는 무려 100%야!!!");
} 

if (rand > 10 && rand < 51) {
replier.reply((Math.floor(Math.random() * 2) ? "엌ㅋ! " : "아.. ") + sender + " 친구의 운세는 무려 0%라고~ㅋ");
}

if (rand > 50 && rand < 1401) {
replier.reply((Math.floor(Math.random() * 2) ? "헐! " : "ㅇㅁㅇ! ") + sender + " 친구의 운세는 " + dice4 + "%가 나왔엉~d4");
}

if (rand > 1400 && rand < 1441) {
replier.reply((Math.floor(Math.random() * 2) ? "풉! " : "ㅋ.. ") + sender + " 친구의 운세는 " + dice1 + "%가 나왔엉~d1");
}

if (rand > 1440 && rand < 3801) {
replier.reply((Math.floor(Math.random() * 2) ? "앗! " : "우왕! ") + sender + " 친구의 운세는 " + dice3 + "%가 나왔엉~d3");
}

if (rand > 3800) {
replier.reply((Math.floor(Math.random() * 2) ? "옹! " : "오호! ") + sender + " 친구의 운세는 " + dice2 + "%가 나왔엉~d2");
}

}

}
