function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) { 

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
