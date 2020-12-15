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

CH.isValidSender = function(sender){
var noValid = ["카카오톡", "카톡", "방장봇", "봇", ".", "ㅇ", "ㅎㅇ", "."]; 
for (var n = 0; n < noValid.length; n++) { 
if (sender.indexOf(noValid[n]) != -1) return false; 
}
return true;
};

CH.isValidWrite = function(data){
var noValid = ["\n", "카카오톡", "카톡", "이모티콘을 보냈습니다.", "이모티콘", "임티", "사진을 보냈습니다.", "사진", "동영상을 보냇습니다.", "동영상", "음성메시지를 보냈습니다.", "음성메시지", "카카오톡 프로필", "샵검색:", "#", "@", "www.", "http:", "https:", ".com", ".gov", "/", "보이스톡", "페이스톡", "영상", "검색"]; 
for (var n = 0; n < noValid.length; n++) { 
if (data.indexOf(noValid[n]) != -1) return false; 
}
return true;
};

CH.isValidData = function(data) {
var noSave = ["\n", "카카오톡", "카톡", "이모티콘을 보냈습니다.", "이모티콘", "사진을 보냈습니다.", "사진", "동영상을 보냇습니다.", "동영상", "음성메시지를 보냈습니다.", "음성메시지", "카카오톡 프로필", "샵검색:", "#", "@", "www.", "http:", "https:", ".com", ".gov", "/", "보이스톡", "페이스톡", "영상", "검색", "`", "@", "#", "$", "%", "^", "&", "*", "_", "-", "=", "{", "}", "[", "]", "₩", "|", ":", "'", "<", ">", "/"]; 
for (var n = 0; n < noSave.length; n++) { 
if (data.startsWith(noSave[n])) return false;
}
noSave = ["\n", "카카오톡", "카톡", "이모티콘을 보냈습니다.", "이모티콘", "임티", "사진을 보냈습니다.", "사진", "동영상을 보냇습니다.", "동영상", "음성메시지를 보냈습니다.", "음성메시지", "카카오톡 프로필", "샵검색:", "#", "@", "www.", "http:", "https:", ".com", ".gov", "/", "보이스톡", "페이스톡", "영상", "검색", "`", "@", "#", "$", "%", "^", "&", "*", "_", "-", "=", "{", "}", "[", "]", "₩", "|", ":", "'", "<", ">", "/", "!운세", "!기기정보", "!주사위", "!타이머", "!한강물", "!쌉소리", "최빈", "체빈", "채빈", "빈", "비니", "체온", "체오니", "재아", "민", "뱁새", "테온", "테오니", "체른", "R. 체른", "뾰롱", "삐뽀", "니셜", "니셔", "가현", "가혀니", "정원", "수연", "워니", "리보", "땃쥐", "보노", "채완", "다빈", "서은", "서으니", "방장", "부방장", "부방", "관리자", "관리진", "운영자", "운영진", "봇", "땃", "님", "공지", "닉변", "투표", "게시판", "닉넴", "봇", "응답", "답장", "대답", "필터링", "ㅅㅂㅍ", "300+", "삼백플", "친추", "아이디", "DB", "txt", "js", "github", "깃헙", "내역", "코로나", "확진", "자가격리", "자가 격리", "패치", "베타", "업뎃", "업데이트", "테스트", "확인", "규칙", "규정", "특별", "면제", "트럼프", "바이든", "사람", "타방", "단톡", "지구방", "오리", "오리방", "분", "사간", "한국", "미국", "현재", "갠", "갠톡" ,"톡", "카톡", "인스타", "인스타그램", "페북", "페이스북", "트위터", "메시지", "스냅", "챗", "삭제", "요일", "형", "오빠", "언니", "누나", "누님", "형님", "쌤", "선생님", "엄뻐", "엄마", "아빠", "어머니", "아버지", "부모", "코딩", "자바", "리로드", "스크립트", "뉴페", "신입", "장기매매", "장기", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "동갑", "욕", "입수", "자살", "살해", "살인", "살육", "디코", "딕호", "디스코드", "채널", "버그", "에러", "색", "초딩", "중딩", "고딩", "초등", "중등", "고등", "대학", "sat", "Sat", "SAT", "act", "Act", "ACT", "gift", "유학", "거주", "국가", "국기", "이모지", "일정", "일본", "한국", "북미", "유럽", "중동", "아시아", "캐나다", "미국", "개념", "학습", "씨발", "병신", "ㅂㅅ", "븅신", "애미", "애비", "디져", "뒤져", "죽어", "씹"];
for (var n = 0; n < noSave.length; n++) { 
if (data.indexOf(noSave[n]) != -1) return false; 
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

if (CH.isValidSender(sender) && CH.isValidWrite(msg)) {
if (msg.length(1)) {
null;
} else {
CH.study(room, msg); 
}
}

var noReply = ["/", "!운세", "!기기정보", "!주사위", "!타이머", "!타이머초", "!타이머분", "!한강물", "!쌉소리", "!코로나", "!채팅", "!수학게임", "!인스타", "!핑퐁", "!계산게임", "!연산게임"];
for (var n = 0; n < noReply.length; n++) {
if (msg.startsWith(noReply[n])) return;
}
  
if (room == "지구b") {
if ((Math.floor(Math.random() * 5)) == 0) {
var chat = CH.getRandomChat(room);
if (chat != null && CH.isValidData(chat)) {
CH.say(chat, replier); 
}
}
}
  
if (room == "오리b") {
if ((Math.floor(Math.random() * 5)) == 0) {
var chat = CH.getRandomChat(room);
if (chat != null && CH.isValidData(chat)) {
CH.say(chat, replier); 
}
}
}

if (msg == "!쌉소리") {
var data = DB.readData(room); 
var datal = data.split("\n").length; 
CH.say("난 지금껏 총 " + datal + "개의 채팅을 배웠어.", replier);
}
  
}
