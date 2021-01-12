const AuthURL = "https://builder.pingpong.us/api/builder/5fd8cb7ae4b07b8420aa1ed4/integration/v0.2/custom/{sessionId}";
const AuthID = "Basic a2V5OmNjMGE2MDcyM2UyZTI3NzA2MGQ4YzkyYWVhZjhiZGQ1";
const On = {};
const Pro = {};

function response(room, msg, sender, isGroupChat, replier) { 

if (!On[room]) On[room] = false;
if (!Pro[room]) Pro[room] = 0;

if (msg == "!Talk On") {
On[room] = true;
replier.reply("[Bot]\nRoom : " + room + "\nTalk : On");
return;
}

if (!On[room]) return;

if (msg == "!Talk Off") {
On[room] = false;
replier.reply("[Bot]\nRoom : " + room + "\nTalk : Off");
return;
}

if (msg.startsWith("!Talk ")) {
msg = msg.replace("!Talk ", "");
if (isNaN(msg)) return;
if (msg < 0 || msg > 100) return;
Pro[room] = msg;
replier.reply("[Bot]\nRoom : " + room + "\nProbability : " + msg + "%");
return;
}

if (Math.random() * 100 << 0 > (99 - Pro[room])) {
User = User.replace("Basic ", "");
let jsondata = { "request": { "query": msg } };

send = _ => {

try{

let url = new java.net.URL(Url);

let con = url.openConnection();

con.setRequestMethod("POST"); // 서버 접속 방법을 설정하세요. GET, POST, OPTIONS 등..

con.setRequestProperty("Content-Type", "application/json; charset=utf-8"); // 서버 접속시 가져올 데이터의 형식을 지정

con.setRequestProperty("Authorization", "Basic " + "a2V5OmNjMGE2MDcyM2UyZTI3NzA2MGQ4YzkyYWVhZjhiZGQ1"); // 인증키 입력. 사이트에 따라 Basic 또는 Bearer 를 사용합니다.

con.setRequestProperty("User-Agent", "Mozilla"); // 일부 사이트의 경우 User-Agent 를 요구합니다.

con.setRequestProperty("Accpet", "*.*"); // 일부 사이트의 경우, 이 헤더가 없으면 오류가 발생합니다.

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











CH.say = function(msg, replier) {
let RData = CH.send(msg);
RData.replace(/\n/gi, "\n");
RData.replace(/\r/gi, "\r");
let results = JSON.parse(RData);
replier.reply(results['response']['replies'][0]['text']);
};

CH.rsay = function(R, msg, replier) {
let RData = CH.send(msg);
RData.replace(/\n/gi, "\n");
RData.replace(/\r/gi, "\r");
let results = JSON.parse(RData);
if (Math.floor(Math.random() * Number(R)) == 0) {
replier.reply(results['response']['replies'][0]['text']);
}
};

CH.send = function(Idata) {
try {
let jsondata = { "request": { "query": Idata } }; //서버로 전송하는 메시지
let url = new java.net.URL("https://builder.pingpong.us/api/builder/5e1a1c75e4b010b663d37764/integration/v0.2/custom/{sessionId}"); //AuthURL
let con = url.openConnection();
con.setRequestMethod("POST"); //GET, POST, OPTIONS
con.setRequestProperty("Content-Type", "application/json; charset=utf-8"); //서버 접속시 가져올 데이터 형식
con.setRequestProperty("Authorization", "Basic " + "a2V5OmNjMGE2MDcyM2UyZTI3NzA2MGQ4YzkyYWVhZjhiZGQ1"); //AuthID
con.setRequestProperty("User-Agent", "Mozilla"); //일부 사이트의 경우 User-Agent를 요구
con.setRequestProperty("Accpet", "*.*"); //일부 사이트의 경우 이 헤더가 없으면 오류가 발생
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
};

CH.isValidMsg = function(Data) {
var noValid = [".", "최빈", "최비", "빈", "비니", "/", "!", "이모티콘을 보냈습니다.", "이모티콘을", "사진을 보냈습니다.", "사진을", "동영상을 보냈습니다.", "동영상을", "음성메시지를 보냈습니다.", "음성메시지", "카카오톡 프로필", "샵검색:", "#", "@", "www.", "http:", "https:", ".com", ".gov", ".kr", ".org", "보이스톡", "페이스톡"]; 
for (var n = 0; n < noValid.length; n++) { 
if (Data.startsWith(noValid[n]) != -1) return false; 
}
return true;
};

CH.isValidSys = function(Data) {
var noValid = ["이모티콘을 보냈습니다.", "이모티콘을", "사진을 보냈습니다.", "사진을", "동영상을 보냈습니다.", "동영상을", "음성메시지를 보냈습니다.", "음성메시지", "카카오톡 프로필", "샵검색:", "#", "@", "www.", "http:", "https:", ".com", ".gov", ".kr", ".org", "보이스톡", "페이스톡"]; 
for (var n = 0; n < noValid.length; n++) { 
if (Data.startsWith(noValid[n]) != -1) return false; 
}
return true;
};

function response(room, msg, sender, isGroupChat, replier) { 

if (room.indexOf("b")) {
if (msg.startsWith(".") || msg.startsWith("최빈") || msg.startsWith("최비") || msg.startsWith("빈") || msg.startsWith("비니")) {
msg = msg.replace(/./,"");
CH.say(msg, replier);
} 
}

if (isGroupChat == false && CH.isValidSys(msg)) {
CH.say(msg, replier);
}
  
if (room == "지구b" && CH.isValidMsg(msg)) {
CH.rsay(4, msg, replier);
}
  
if (room == "삐약b" && CH.isValidMsg(msg)) {
CH.rsay(5, msg, replier);
}
  
if (room == "요정b" && CH.isValidMsg(msg)) {
CH.rsay(6, msg, replier);
}

}
