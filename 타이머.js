function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) { 
if (room == "뱁새봇") { 

if (sender == "R. 체른" || sender == "체온 05 남 🇺🇸" || sender == "난 정상 체온인데? 05 남 🇺🇸") {

if (msg.indexOf("뱁새타이머")==0){
replier.reply("[뱁새i] 체온이의 특별 타이머 시작!\n" + num + "분 뒤에 알림과 함께 타이머가 종료됩니다!");
let num=Number(msg.split(" ")[1].replace(/[^0-9]/g,""));
java.lang.Thread.sleep(num*60000);
Api.showToast("타이머: " + num + "분 끝!");
replier.reply("[뱁새i] 체온이의 " + num + "분이 끝났습니다.\n자동 알림 전송 완료!"); 
}

} else {

if (msg.indexOf("뱁새타이머")==0){
replier.reply("[뱁새i] " + sender + "님의 타이머 시작!\n" + num + "분 뒤에 타이머가 종료됩니다!");
let num=Number(msg.split(" ")[1].replace(/[^0-9]/g,""));
java.lang.Thread.sleep(num*60000);
replier.reply("[뱁새i] " + sender + "님의 " + num + "분이 끝났습니다."); 
}

}
  
} 
} 
