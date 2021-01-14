function response(room, msg, sender, isGroupChat, replier, ImageDB){

if(msg.startsWith("ㅇ랜덤뽑기")){

var a = msg.trim().substring(6);

var b = a.split(",");

replier.reply("[엘사람봇]\n랜덤뽑기 중..");

java.lang.Thread.sleep(3000);

var N = Math.floor(Math.random()*b.length);

replier.reply("[엘사람봇]\n뽑기 완료!\n뽑힌 것은 "+b[N]+" 입니다!");

}

}
