//계산: 100(최소 포함/1000) - 100(최대 포함/1000)

// 5 등급 - 0.6%
// 4 등급 - 5.1%
// 3 등급 - 94.3%

// 5 등급 천장 - 1.6% (90연차 진행시 반드시 등장)
// 4 등급 천장 - 13% (10연차 진행시 반드시 등장)
// 3 등급 천장 - 85.4%

const sdcard = android.os.Environment.getExternalStorageDirectory().getAbsolutePath(); 
const CH = {}; 
const DB = {}; 
const preMsg = {}; 

CH.getRandomText = function(name) { 
var data = DB.readData(name); 
if (data == null) return null; 
data = data.split("\n"); 
var r = Math.floor(Math.random() * data.length); 
return data[r];
};

DB.readData = function(name) {
try { 
var file = new java.io.File(sdcard + "/파일DB/" + name + ".txt");
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

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) { 
msg = msg.trim();
room = room.trim();
sender = sender.trim();

if (preMsg[room] == msg) {
return; 
}

preMsg[room] = msg;

if (msg = "!가챠정보") {
replier.reply("[가챠 정보]" + Utils.compress() + "\n\n\n");
}
  
if (msg == "!가챠") {
for (int i = 1; i <= 9; i++) {
rand = (int) (Math.random() * (100 - 1 + 1) + 1);

if ( 1 <= rand && rand <=  3 ) {
replier.reply("희귀도: 5");
} else if ( 4 <= randombox && randombox <=  13) {
replier.reply("희귀도: 4");
} else {
replier.reply("희귀도: 3");
}
}

rand = (int) (Math.random() * (100 - 1 + 1) + 1);
if (1 <= rand && rand <=  3) {
replier.reply("희귀도: 5");
} else if (4 <= rand && rand <=  100) {
replier.reply("천장 희귀도: 4");
}
  
}
  
}
