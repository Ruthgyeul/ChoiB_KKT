const sdcard = android.os.Environment.getExternalStorageDirectory().getAbsolutePath(); 
const CH = {};
const DB = {};

CH.say = function(msg,replier) {
replier.reply(msg);
}

CH.log = function(room,msg) {
Api.replyRoom(room,msg);
}

CH.Time = function() {
try {
var dt = new Date();
var mo = (dt.getMonth()+1);
var d = dt.getDate();
var h = dt.getHours();
var min = dt.getMinutes();
var sec = dt.getSeconds();
var time = (mo + "월 " + d + "일 " + h + "시 " + min + "분 " + sec + "초");
return time;
} catch(e) {
return "시간 표기 오류: " + e;
};

DB.createDir = function() {
var folder = new java.io.File(sdcard + "/수동DB/"); 
folder.mkdirs(); 
};

DB.saveData = function(name, msg) { 
try { 
var file = new java.io.File(sdcard + "/수동DB/" + name + ".txt");
var fos = new java.io.FileOutputStream(file);
var str = new java.lang.String(msg);
fos.write(str.getBytes());
fos.close();
} catch (e) {
return null;
}
};

DB.readData = function(name) {
try {
var file = new java.io.File(sdcard + "/수동DB/" + name + ".txt");
if (!file.exists()) return null;
var fis = new java.io.FileInputStream(file);
var isr = new java.io.InputStreamReader(fis);
var br = new java.io.BufferedReader(isr);
var str = br.readLine();
var line = "";
while ((line = br.readLine()) != null) {
str += "\n" + line;
}
fis.close();
isr.close();
br.close();
return str;
} catch (e) {
return null;
}
};

DB.createDir();

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) {
msg = msg.trim(); 
room = room.trim();
sender = sender.trim();
  
if (room == "지구b" || room == "R. 체른") {

if (msg.indexOf("최빈공부") == 0 || msg.indexOf("최빈학습") == 0) { 
var study0 = msg.substring(5,msg.length) 
var study1 = study0.split("/") 
var suy1 = study1[0] 
var suy2 = study1[1] 
//if (CH.isValidData1(suy1) && CH.isValidData2(suy2)) {
CH.say(sender + " 친구가 「" + suy1 + "」(은)는 「" +suy2 +"」(이)라고 알려줬어!",replier); 
DB.saveData("수동DB",suy1.trim(), suy2);
//} else if (CH.isValidData1(suy1) == false && CH.isValidData2(suy2)) {
//replier.reply("친구야? 「" + suy1 + "」여기 안에 쌉소리가 있어. \n이딴거 안 배울래."); 
//} else if (CH.isValidData1(suy1) && CH.isValidData2(suy2) == false) {
//replier.reply("친구야? 「" + suy2 + "」여기 안에 쌉소리가 있어. \n이딴거 안 배울래."); 
//} else if (CH.isValidData1(suy1) == false && CH.isValidData2(suy2) == false) {
//replier.reply("친구야? 너님이 가르칠려는 단어/문장 안에 쌉소리가 있어. \n이딴거 안 배울래."); 
}
  
let talk = read("수동DB", msg) 
if (talk !== null) { 
CH.say(talk, replier);
}
  
if (msg.indexOf("최빈삭제") == 0 || msg.indexOf("최빈잊어") == 0) { 
//java.io.File.remove("sdcard/수동DB/" + msg.substr(5));
//replier.reply(sender + " 친구 덕에 「" + msg.substr(5) + "」의 기억을 잊었어!"); 
Ch.log("R. 체른", msg.substr(5) + ".txt 파일 삭제 요청\nBy " + sender + "\n- " + CH.Time())
CH.say("파일 삭제 기능 구현 실패로 수동 삭제로 진행됩니다.\n체온에게 파일 삭제 요청 완료!", replier);
}
  
if (msg == "최빈수동내역") {
var file = new java.io.File(sdcard + "/수동DB/");
CH.say("난 지금껏 " + file.list().length + "개의 채팅을 수동으로 배웠어.",replier);
}
  
}
}
