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

response = (room, msg, sender, isGroupChat, replier) => {
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

if (room.indexOf("b")) {
if (msg.startsWith(".") || msg.startsWith("최빈") || msg.startsWith("최비") || msg.startsWith("빈") || msg.startsWith("비니")) {
msg = msg.replace(/./,"");
AuthID = AuthID.replace("Basic ", "");
let jsondata = { "request": { "query": msg } };

send = _ => { 
try{
let url = new java.net.URL(AuthURL);
let con = url.openConnection();
con.setRequestMethod("POST"); 
con.setRequestProperty("Content-Type", "application/json; charset=utf-8");
con.setRequestProperty("Authorization", "Basic " + AuthID); 
con.setRequestProperty("User-Agent", "Mozilla");
con.setRequestProperty("Accpet", "*.*"); 
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
}
else
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
