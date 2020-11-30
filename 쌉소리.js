const sdcard = android.os.Environment.getExternalStorageDirectory().getAbsolutePath(); 
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
var noSave = ["사진을 보냈습니다.", "동영상을 보냇습니다.", "음성메시지를 보냈습니다.", "카카오톡 프로필", "www.", "샵검색:", "#", "@", "!", "//", "http:", "https:", "빈이", "비니", "빈", "최빈", "봇", "삐뽀", "이모티콘을 보냈습니다.", "!운세", "/", "|", ".", "관리자", "오리방", "지구방", "니셜이", "니셔리", "니셔", "?", "체온", "체오니"]; 
for (var n = 0; n < noSave.length; n++) { 
if (data == noSave[n]) return false;
}
noSave = ["\n", "/", "이모티콘", "사진", "음성메시지", "보이스톡", "페이스톡", "동영상", "카카오톡", "#", "//", "!운세", "삐뽀", "최빈", "체온", "뾰롱", "리보", "가현", "봇", "학습", "빈", "비니", "가혀", "빈은", "최빈이는", "빈이는", "DB", "운세", "/", "관리자", "지원서", "오리방", "지구방", "니셜이", "니셔리", "니셔", "뱁새", "뱁새야", "뱁새봇", "최빈봇", "버전", "업데이트", "DB", "친추", "정지", "-", "씨바", "븅신", "병신", "임티", "운세는", "@", "재현", "유나", "방장", "부방", "!!", "스샷", "캡처",  "(", "씨발", "수동", "자동", ")", "{", "}", "니스", "sat", "SAT", "최빙", "체빈", "채빈", "참치", "닉변", "공지", "깃헙", "내역", "*", "패치", "베타", "업데이트", "부방", "방장", "보노", "닉변", "공지", "게시판", "투표", "펫"];
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
if (chat != null && CH.isValidData(chat)) CH.say(chat, replier); 
}
}

if (msg == "!최빈쌉소리") {
var data = DB.readData(room); 
var datal = data.split("\n").length; 
CH.say("최비니는 지금껏 여기서 총 " + datal + "개의 채팅을 배웠어요!", replier);
}
  
}
