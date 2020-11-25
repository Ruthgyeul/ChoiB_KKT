const sdcard = android.os.Environment.getExternalStorageDirectory().getAbsolutePath(); //내장메모리 상위 경로 가져오기. 상수인데 소문자인건 기분탓.
const CH = {}; 
const DB = {}; 
const preMsg = {}; 

CH.say = function(msg, replier) { 
replier.reply(msg); 
};

CH.getRandomChat = function(room) { 
var data = DB.readData(room); 
if (data == null) return null; 
data = data.split("\n"); 
var r = Math.floor(Math.random() * data.length); 
return data[r];
};

CH.isValidData = function(data) {
var noSave = ["사진", "동영상", "음성메시지", "(이모티콘)", "카카오톡 프로필"]; 
for (var n = 0; n < noSave.length; n++) { 
if (data == noSave[n]) return false;
}
noSave = ["\n", "/"];
for (var n = 0; n < noSave.length; n++) { 
if (noSave[n].indexOf(data) != -1) return false; 
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
var folder = new java.io.File(sdcard + "/쌉소리DB/"); 
folder.mkdirs(); 
};

DB.saveData = function(name, msg) {
try {
var file = new java.io.File(sdcard + "/쌉소리DB/" + name + ".txt");
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
var file = new java.io.File(sdcard + "/쌉소리DB/" + name + ".txt");
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

if (preMsg[room] == msg) {
return; 
}

preMsg[room] = msg;

if (CH.isValidData(msg)) {
CH.study(room, msg); 
}

if (room == "지구b") {
if ((Math.floor(Math.random() * 5)) == 0) {
var chat = CH.getRandomChat(room);
if (chat != null) CH.say(chat, replier); 
}
}

}
