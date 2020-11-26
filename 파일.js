const sdcard = android.os.Environment.getExternalStorageDirectory().getAbsolutePath();
const CH = {};
const FT = {};
const DB = {}; 

FT.github = function(FileN) {
try {
var url = new java.net.URL("https://raw.githubusercontent.com/Rutheon/ChoiB_KKT/main/File/" + FileN + ".txt");
var con = url.openConnection();
if (con != null) {
con.setConnectTimeout(5000);
con.setUseCaches(false);
var isr = new java.io.InputStreamReader(con.getInputStream());
var br = new java.io.BufferedReader(isr);
var str = br.readLine();
var line = "";
while ((line = br.readLine()) != null) {
str += "\n" + line;
}
isr.close();
br.close();
con.disconnect();
}
return str.toString();
} catch (e) {
return null;
}
};

CH.load = function(name, msg) { 
var data = DB.readData(name); 
DB.saveData(name, msg);
};

DB.createDir = function() { 
var folder = new java.io.File(sdcard + "/파일DB/"); 
folder.mkdirs(); 
};

DB.saveData = function(name, msg) {
try {
var file = new java.io.File(sdcard + "/파일DB/" + name + ".txt");
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

DB.createDir();

function response(room, msg, sender, isGroupChat, replier, ImageDB) {
msg = msg.trim(); 
room = room.trim();
sender = sender.trim(); 

if (msg == "파일DB리로드") {
CH.load("Blackmsg1", FT.github("Blackmsg1")); 
CH.load("Blackmsg2", FT.github("Blackmsg2"));
CH.load("Blackmsg3", FT.github("Blackmsg3"));
CH.load("Blackmsg4", FT.github("Blackmsg4"));
CH.load("Blackmsg5", FT.github("Blackmsg5"));
CH.load("Petlist", FT.github("Petlist"));
CH.load("꽃말", FT.github("꽃말"));
replier.reply("파일 불러오기 성공");
}
  
if (msg.indexOf("파일추가") == 0) {
var FileName = msg.substr(5);
var DataF = FT.github(FileName);
CH.load(FileName, DataF);
}

}
