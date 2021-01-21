const sdcard = android.os.Environment.getExternalStorageDirectory().getAbsolutePath(); 
const DB = {}; 

DB.readData = function(room, name) {
try { 
var file = new java.io.File(sdcard + "/Project K/" + room + "/" + name);
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

function response(room, msg, sender, isGroupChat, replier, ImageDB) {

if (sender.indexOf("체온 05 남")) {

if (msg == "!분석") {
var a = msg.trim().substring(4);
var b = a.split(" ");
let roomN = b[0];
let fileN = b[1];
let DataF = DB.readData(roomN, fileN);
let total = 
let member = 
replier.reply("채팅 파일 분석: " + roomN + "\n\n전체 채팅량 : " + total + "\n채팅한 인원 수 : " + member + );
}

}

}
