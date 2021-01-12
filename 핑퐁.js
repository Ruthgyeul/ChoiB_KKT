const AuthURL = "https://builder.pingpong.us/api/builder/5fd8cb7ae4b07b8420aa1ed4/integration/v0.2/custom/{sessionId}";
const AuthID = "Basic a2V5OmNjMGE2MDcyM2UyZTI3NzA2MGQ4YzkyYWVhZjhiZGQ1";
const CH = {};
const On = {};
const Pro = {};

CH.Admin = function(sender) {
var Admin = ["체온", "가현", "니셜", "리보", "땃쥐"]; 
for (var n = 0; n < Admin.length; n++) { 
if (sender.indexOf(Admin[n]) != -1) return true; 
}
return false;
};

CH.isValidMsg = function(Data) {
var noValid = [".", "최빈", "최비", "빈", "비니", "/", "!", "이모티콘을 보냈습니다.", "이모티콘을", "사진을 보냈습니다.", "사진을", "동영상을 보냈습니다.", "동영상을", "음성메시지를 보냈습니다.", "음성메시지", "카카오톡 프로필", "샵검색:", "#", "@", "www.", "http:", "https:", ".com", ".gov", ".kr", ".org", "보이스톡", "페이스톡"]; 
for (var n = 0; n < noValid.length; n++) { 
if (Data.startsWith(noValid[n]) != -1) return false; 
}
return true;
};

function response(room, msg, sender, isGroupChat, replier) { 

if (!On[room]) On[room] = false;
if (!Pro[room]) Pro[room] = 0;

if (msg == "!Talk On") {
if (CH.Admin(sender)) {
On[room] = true;
replier.reply("[Project K]\nRoom : " + room + "\nTalk : On");
return;
} else if (CH.Admin(sender) == false) {
replier.reply("[Project K]\n\n관리진 전용 명령어입니다.\n관리진 등록이 되어 있지 않아,\n해당 명령어 실행이 불가합니다.");
}
}

if (!On[room]) return;

if (msg == "!Talk Off") {
if (CH.Admin(sender)) {
On[room] = false;
replier.reply("[Project K]\nRoom : " + room + "\nTalk : Off");
return;
} else if (CH.Admin(sender) == false) {
replier.reply("[Project K]\n\n관리진 전용 명령어입니다.\n관리진 등록이 되어 있지 않아,\n해당 명령어 실행이 불가합니다.");
}
}

if (msg.startsWith("!Talk ")) {
if (CH.Admin(sender)) {
msg = msg.replace("!Talk ", "");
if (isNaN(msg)) return;
if (msg < 0 || msg > 100) return;
Pro[room] = msg;
replier.reply("[Project K]\nRoom : " + room + "\nProbability : " + msg + "%");
return;
} else if (CH.Admin(sender) == false) {
replier.reply("[Project K]\n\n관리진 전용 명령어입니다.\n관리진 등록이 되어 있지 않아,\n해당 명령어 실행이 불가합니다.");
}
}

if (CH.isValidMsg(msg)) {
if (Math.random() * 100 << 0 > (99 - Pro[room])) {
AuthID = AuthID.replace("Basic ", "");
let jsondata = { "request": { "query": msg } };

send = function() {
try{
let url = new java.net.URL(AuthURL);
let con = url.openConnection();
con.setRequestMethod("POST"); //서버 접속 방법 설정 GET, POST, OPTIONS
con.setRequestProperty("Content-Type", "application/json; charset=utf-8"); //서버 연결시 가져올 데이터의 형식
con.setRequestProperty("Authorization", "Basic " + AuthID); //인증키 입력
con.setRequestProperty("User-Agent", "Mozilla"); //일부의 경우, User-Agent를 요구
con.setRequestProperty("Accpet", "*.*"); //일부의 경우, 이 헤더가 없으면 오류가 발생
con.setDoOutput(true);
let wr = new java.io.DataOutputStream(con.getOutputStream());
let writer = new java.io.BufferedWriter(new java.io.OutputStreamWriter(wr, "UTF-8"));
writer.write(JSON.stringify(jsondata));
writer.close();
wr.close();
let responseCode = con.getResponseCode();
let br;
if (responseCode == 200) {
br = new java.io.BufferedReader(new java.io.InputStreamReader(con.getInputStream()));
} else {
br = new java.io.BufferedReader(new java.io.InputStreamReader(con.getErrorStream()));
let inputLine;
let response = "";
while ((inputLine = br.readLine()) != null) {
response += inputLine;
}
br.close();
return response;
} catch (e) {
return e;
}
}
let results = JSON.parse(send());
replier.reply(results["response"]["replies"][0]["text"]);
}
}

if (room.indexOf("b")) {
if (msg.startsWith(".") || msg.startsWith("최빈") || msg.startsWith("최비") || msg.startsWith("빈") || msg.startsWith("비니")) {
msg = msg.replace(/./,"");
AuthID = AuthID.replace("Basic ", "");
let jsondata = { "request": { "query": msg } };

send {
try{
let url = new java.net.URL(AuthURL);
let con = url.openConnection();
con.setRequestMethod("POST"); //서버 접속 방법 설정 GET, POST, OPTIONS
con.setRequestProperty("Content-Type", "application/json; charset=utf-8"); //서버 연결시 가져올 데이터의 형식
con.setRequestProperty("Authorization", "Basic " + AuthID); //인증키 입력
con.setRequestProperty("User-Agent", "Mozilla"); //일부의 경우, User-Agent를 요구
con.setRequestProperty("Accpet", "*.*"); //일부의 경우, 이 헤더가 없으면 오류가 발생
con.setDoOutput(true);
let wr = new java.io.DataOutputStream(con.getOutputStream());
let writer = new java.io.BufferedWriter(new java.io.OutputStreamWriter(wr, "UTF-8"));
writer.write(JSON.stringify(jsondata));
writer.close();
wr.close();
let responseCode = con.getResponseCode();
let br;
if (responseCode == 200) {
br = new java.io.BufferedReader(new java.io.InputStreamReader(con.getInputStream()));
} else {
br = new java.io.BufferedReader(new java.io.InputStreamReader(con.getErrorStream()));
let inputLine;
let response = "";
while ((inputLine = br.readLine()) != null) {
response += inputLine;
}
br.close();
return response;
} catch (e) {
return e;
}
}
let results = JSON.parse(send());
replier.reply(results["response"]["replies"][0]["text"]);
}
}

}
