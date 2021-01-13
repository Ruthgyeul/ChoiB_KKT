const AuthURL = "https://builder.pingpong.us/api/builder/5fd8cb7ae4b07b8420aa1ed4/integration/v0.2/custom/{sessionId}";
const AuthID = "Basic a2V5OmNjMGE2MDcyM2UyZTI3NzA2MGQ4YzkyYWVhZjhiZGQ1";

const Url = "https://builder.pingpong.us/api/builder/5fd8cb7ae4b07b8420aa1ed4/integration/v0.2/custom/{sessionId}"; //URI 그대로 복사해서 넣으세요
const On = {};
const Pro = {};
let User = "Basic a2V5OmNjMGE2MDcyM2UyZTI3NzA2MGQ4YzkyYWVhZjhiZGQ1"; //주어지는 api 키 그대로 복사해서 넣으세요

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
con.setRequestProperty("Authorization", "Basic " + User); // 인증키 입력. 사이트에 따라 Basic 또는 Bearer 를 사용합니다.
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
