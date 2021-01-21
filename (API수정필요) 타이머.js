function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) { 
  
if (sender == "R. 체른" || sender == "체온 05 남 🇺🇸" || sender == "난 정상 체온인데? 05 남 🇺🇸") {

if (msg.indexOf("!타이머초")==0){
let num=Number(msg.split(" ")[1].replace(/[^0-9]/g,""));
replier.reply("체온이 전용 특별 타이머 시작!\n" + num + "초 뒤에 진동과 함께 타이머가 종료될꺼야~");
java.lang.Thread.sleep(num*1000);
Utils.vibrate(1);
Api.showToast("타이머: " + num + "초 끝!");
replier.reply("체온이의 " + num + "초 타이머 끝!\n진동 알림 전송 완료!"); 
}

if (msg.indexOf("!타이머분")==0){
let num=Number(msg.split(" ")[1].replace(/[^0-9]/g,""));
replier.reply("체온이 전용 특별 타이머 시작!\n" + num + "분 뒤에 진동과 함께 타이머가 종료될꺼야~");
java.lang.Thread.sleep(num*60000);
Utils.vibrate(1);
Api.showToast("타이머: " + num + "분 끝!");
replier.reply("체온이의 " + num + "분 타이머 끝!\n진동 알림 전송 완료!"); 
}

} else {

if (msg.indexOf("!타이머초")==0){
let num = Number(msg.split(" ")[1].replace(/[^0-9]/g,""));
replier.reply(sender + " 친구의 타이머 시작!\n" + num + "초 뒤에 타이머가 종료될꺼야~");
java.lang.Thread.sleep(num*1000);
replier.reply(sender + "의 " + num + "초가 끝났다구~"); 
}

if (msg.indexOf("!타이머분")==0){
let num = Number(msg.split(" ")[1].replace(/[^0-9]/g,""));
replier.reply(sender + " 친구의 타이머 시작!\n" + num + "분 뒤에 타이머가 종료될꺼야~");
java.lang.Thread.sleep(num*60000);
replier.reply(sender + "의 " + num + "분이 끝났다구~"); 
}

}

} 
