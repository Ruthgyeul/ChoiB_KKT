//실시간 채팅률
//리셋은 수동적으로만
//닉네임 텍스트로 분석하니 닉넴 변경시 채팅률 자료도 증발
//차후 imageDB 사용하여 프로필 id로 분리 예정


const sdcard = android.os.Environment.getExternalStorageDirectory().getAbsolutePath(); 
const CH = {}; 
const DB = {}; 

CH.say = function(msg, replier) { 
replier.reply(msg); 
};

CH.isValidSender = function(sender){
var noValid = ["방장봇"]; 
for (var n = 0; n < noValid.length; n++) { 
if (sender.indexOf(noValid[n]) != -1) return false; 
}
return true;
};

CH.study = function(room, msg) { 
var data = DB.readData(room); 
if (data == null) {
DB.saveData(room, msg);
} else {
DB.saveData(room, data + "\n" + msg); 
}
};

DB.createDir = function() { 
var folder = new java.io.File(sdcard + "/채팅률DB/"); 
folder.mkdirs(); 
};

DB.saveData = function(name, msg) {
try {
var file = new java.io.File(sdcard + "/채팅률DB/" + name + ".txt");
var fos = new java.io.FileOutputStream(file);
var str = new java.lang.String(msg);
fos.write(str.getBytes());
fos.close();
} catch (e) {
return "에러: " + e;
}
};

DB.readData = function(name) {
try { 
var file = new java.io.File(sdcard + "/채팅률DB/" + name + ".txt");
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
return "에러: " + e;
}
};

DB.createDir();

function response(room, msg, sender, isGroupChat, replier, ImageDB) {
msg = msg.trim();
room = room.trim();
sender = sender.trim();

if (CH.isValidSender(sender)) {
CH.study(room, sender);
}
  
if (msg == "!채팅") {
var data = DB.readData(room); 
for (var n = 0; n < data.split("\n").length; n++) { 
if (sender==(data[n])) {
var datal = data.split(sender).length; 
var dataw = data.indexOf(sender, 0);
CH.say(sender + " 친구는 지금껏 " + dataw + "개의 채팅을 쳤어. (12/14)", replier);
}
}
}
  
}
