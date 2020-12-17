const AuthURL = "https://builder.pingpong.us/api/builder/5fd8cb7ae4b07b8420aa1ed4/integration/v0.2/custom/{sessionId}";
const AuthID = "Basic a2V5OmNjMGE2MDcyM2UyZTI3NzA2MGQ4YzkyYWVhZjhiZGQ1";

function send(Idata) {
try {
let jsondata = { "request": { "query": Idata } };
let url = new java.net.URL("https://builder.pingpong.us/api/builder/5fd8cb7ae4b07b8420aa1ed4/integration/v0.2/custom/{sessionId}");
let con = url.openConnection();
con.setRequestMethod("POST");
con.setRequestProperty("Content-Type", "application/json; charset=utf-8"); 
con.setRequestProperty("Authorization", "Basic a2V5OmNjMGE2MDcyM2UyZTI3NzA2MGQ4YzkyYWVhZjhiZGQ1"); 
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
} else {
br = new java.io.BufferedReader(new java.io.InputStreamReader(con.getErrorStream()));
}
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

function isValidMsg(msg) {
var noValid = [".", "최빈", "최비", "빈", "비니", "/", "!", "\n", "이모티콘을 보냈습니다.", "이모티콘을", "사진을 보냈습니다.", "사진을", "동영상을 보냈습니다.", "동영상을", "음성메시지를 보냈습니다.", "음성메시지", "카카오톡 프로필", "샵검색:", "#", "@", "www.", "http:", "https:", ".com", ".gov", ".kr", ".org", "보이스톡", "페이스톡"]; 
for (var n = 0; n < noValid.length; n++) { 
if (msg.startsWith(noValid[n]) != -1) return false; 
}
return true;
};

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) { 

if (room.indexOf("b")) {
if (msg.startsWith(".") || msg.startsWith("최빈") || msg.startsWith("최비") || msg.startsWith("빈") || msg.startsWith("비니")) {
msg = msg.replace(/./,"");
let results = JSON.parse(send(msg));
replier.reply(results['response']['replies'][0]['text']);
} 
}

if (room == "지구b" && isValidMsg(msg)) {
let results = JSON.parse(send(msg));
if (Math.floor(Math.random() * 4) == 0) {
replier.reply(results['response']['replies'][0]['text']);
}
}
  
if (room == "삐약b" && isValidMsg(msg)) {
let results = JSON.parse(send(msg));
if (Math.floor(Math.random() * 5) == 0) {
replier.reply(results['response']['replies'][0]['text']);
}
}

if (room == "하트b" && isValidMsg(msg)) {
let results = JSON.parse(send(msg));
if (Math.floor(Math.random() * 7) == 0) {
replier.reply(results['response']['replies'][0]['text']);
}
}
  
}
