const CH = {}; 

CH.say = function(msg, replir) {
if (Math.floor(Math.random() * 11) == 0) { //9% 확률
replier.reply(msg); 
} else {
null;
}
};

function response(room, msg, sender, isGroupChat, replier, ImageDB) {
msg = msg.trim();
room = room.trim();
sender = sender.trim();

if (room.indexOf("b")==0) {
  
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

if (msg == "ㅅㅂㅍ" || msg == "300+" || msg == "삼백플") {
CH.say("우왕! 개쩐다!!",replier);
}
  
if (msg.indexOf("배고파")==0) {
CH.say("앜!!! 밥 먹어!!! 귀찮다고 안먹지 말고 먹어!!!!",replier);
}
  
if (msg.indexOf("권남")==0 || msg.indexOf("권력")==0) {
CH.say("권남 쩔더라~ㅋ",replier);
}
  
if (msg.indexOf("뉴페")==0 || msg.indexOf("신입")==0) {
CH.say("뉴페? ㅇㄷ?",replier);
}
  
if (msg.indexOf("ㅎㅇ")==0 || msg.indexOf("안냥")==0 || msg.indexOf("안뇽")==0 || msg.indexOf("안녕")==0) {
CH.say("ㅂㅇ~!",replier);
}
  
if (msg == "ㅈㄱ") {
CH.say("빠잉~!",replier);
}
  
if (msg.indexOf("학교")==0 || msg.indexOf("수업")==0 || msg.indexOf("숙제")==0 || msg.indexOf("과제")==0) {
CH.say("앜ㅋㅋㅋㅋㅋㅋㅋㅋㅋ",replier);
}
  
if (msg.indexOf("게임")==0 || msg.indexOf("즐겜")==0) {
CH.say("즐겜~",replier);
}
  
if (msg.indexOf("강퇴")==0 || msg.indexOf("물갈")==0) {
CH.say("헐헐 누구 죽일거야??",replier);
}
  
}
  
}
