const sdcard = android.os.Environment.getExternalStorageDirectory().getAbsolutePath();
const CH = {};
const FT = {};
const DB = {}; 

FT.github = function(FileN) {
try {
var url = new java.net.URL("https://raw.githubusercontent.com/Rutheon/ChoiB_KakaoT/main/File/" + FileN + ".txt");
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

CH.add = function(folder, name, msg) { 
var data = DB.readData(folder, name); 
if (data == null) { 
DB.addData(folder, name, data + "\n" + msg); 
}
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
return null;
}
};

DB.addData = function(folder, name, msg) { 
try {
var file = new java.io.File(sdcard + "/" + folder + "/" + name + ".txt");
var fos = new java.io.FileOutputStream(file);
var str = new java.lang.String(msg);
fos.write(str.getBytes());
fos.close();
} catch (e) {
return null;
}
};

DB.readData = function(folder, name) { 
try { 
var file = new java.io.File(sdcard + "/" + folder + "/" + name + ".txt");
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

DB.readData2 = function(folder) { 
try { 
var file = new java.io.File(sdcard + "/" + folder + "/");
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
var data1 = DB.readData("파일DB","Blackmsg1");
var data2 = DB.readData("파일DB","Blackmsg2");
var data3 = DB.readData("파일DB","Blackmsg3");
var data4 = DB.readData("파일DB","Blackmsg4");
var data5 = DB.readData("파일DB","Blackmsg5");
var data6 = DB.readData("파일DB","Petlist");
var data7 = DB.readData("파일DB","꽃말");
var data8 = DB.readData("쌉소리DB",room);
var data9 = DB.readData("파일DB","invalidChat");
var data11 = (data1.split(", ").length);
var data22 = (data2.split(", ").length);
var data33 = (data3.split(", ").length);
var data44 = (data4.split(", ").length);
var data55 = (data5.split(", ").length);
var data66 = (data6.split("\n").length);
var data77 = (data7.split("\n").length);
var data88 = (data8.split("\n").length);
var data99 = (data9.split("\n").length);
var dataT = Number(data11 + data22 + data33 + data44 + data55 + data66 + data77 + data88 + data99);
replier.reply("파일 불러오기 성공");
}
  
if (msg.indexOf("파일추가") == 0) {
var FileName = msg.substr(5);
var DataF = FT.github(FileName);
CH.load(FileName, DataF);
}

}
