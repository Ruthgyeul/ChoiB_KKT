function send() {
try {
let url = new java.net.URL("https://builder.pingpong.us/api/builder/5fd8cb7ae4b07b8420aa1ed4/integration/v0.2/custom/{sessionId}");
let con = url.openConnection();
con.setRequestMethod("POST"); // 서버 접속 방법: GET, POST, OPTIONS 등..
con.setRequestProperty("Content-Type", "application/json; charset=utf-8"); // 서버 접속시 가져올 데이터의 형식
con.setRequestProperty("Authorization", "Basic " + "a2V5OmNjMGE2MDcyM2UyZTI3NzA2MGQ4YzkyYWVhZjhiZGQ1"); // 인증키 입력
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
return "에러: " + e;
}
}
let results = JSON.parse(send());
replier.reply(results["response"]["replies"][0]["text"]);
}

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) { 

if (msg.indexOf("최빈아")==0 || msg.indexOf("빈아")==0) {
msg = msg.replace(/./,"");
let jsondata = {"request":{"query": msg}};
}
  
if (msg) {
if (Math.floor(Math.random() * 10) == 0) {
msg = msg.replace(/./,"");
let jsondata = {"request":{"query": msg}};
} else {
null;
}
}
  
}
