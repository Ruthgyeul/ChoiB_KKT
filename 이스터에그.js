const CH = {}; 
const preMsg = {}; 

CH.say = function(msg, replir) {
if (Math.floor(Math.random() * 15) == 0) { //6.6% 확률
replier.reply(msg); 
} else {
null;
}
};

function response(room, msg, sender, isGroupChat, replier, ImageDB) {
msg = msg.trim();
room = room.trim();
sender = sender.trim();
  
if (preMsg[room] == msg) {
return; 
}

preMsg[room] = msg;

if (msg == "?") {
CH.say("엥? 갈고리 치우자~",replier);
}

if (msg == "삭제된 메시지입니다.") {
CH.say("뭐야!!!! 뭐 삭제한거야!!",replier);
}
  
if (msg == "야") {
CH.say("뭐? 왜?",replier);
}

if (msg == "꺼져" || msg == "ㄲㅈ" || msg == "저리가" || msg == "끄져") {
CH.say("힝.. 최빈이 슬퍼..",replier);
}

if (msg == "ㅅㅂㅍ") {
CH.say("우왕! 개쩐다!!",replier);
}
  
if (msg.indexOf("배고파")!=-1) {
CH.say("앜!!! 밥 먹어!!! 귀찮다고 안먹지 말고 먹어!!!!",replier);
}
  
if (msg.indexOf("권남")!=-1) {
CH.say("권남 쩔더라~ㅋ",replier);
}
  
if (msg.indexOf("뉴페")!=-1) {
CH.say("뉴페? ㅇㄷ?",replier);
}
  
if (msg == "ㅎㅇ" || msg.indexOf("안냥")!=-1 || msg.indexOf("안뇽")!=-1 || msg.indexOf("안녕")!=-1) {
CH.say("ㅂㅇ~!",replier);
}
  
if (msg == "ㅈㄱ") {
CH.say("빠잉~!",replier);
}
  
if (msg.indexOf("학교")!=-1 || msg.indexOf("수업")!=-1 || msg.indexOf("숙제")!=-1 || msg.indexOf("과제")!=-1) {
CH.say("앜ㅋㅋㅋㅋㅋㅋㅋㅋㅋ",replier);
}
  
if (msg.indexOf("게임")!=-1 || msg.indexOf("즐겜")!=-1) {
CH.say("즐겜~",replier);
}
  
if (msg.indexOf("강퇴")!=-1 || msg.indexOf("물갈")!=-1) {
CH.say("헐헐 누구 죽일거야??",replier);
}
  
}
