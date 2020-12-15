const AuthorizationID = "a2V5OmNjMGE2MDcyM2UyZTI3NzA2MGQ4YzkyYWVhZjhiZGQ1";
const CH = {};

CH.say = function(msg, replier) {
replier.reply("[PP] " + msg);
}

CH.send = function(msg) {
try {
let url = new java.net.URL("https://builder.pingpong.us/api/builder/5e1a1c75e4b010b663d37764/integration/v0.2/custom/{sessionId}");
let con = url.openConnection();
con.setRequestMethod("POST"); 
con.setRequestProperty("Content-Type", "application/json; charset=utf-8"); 
con.setRequestProperty("Authorization", "Basic " + "a2V5OmNjMGE2MDcyM2UyZTI3NzA2MGQ4YzkyYWVhZjhiZGQ1"); 
con.setRequestProperty("User-Agent", "Mozilla");
con.setRequestProperty("Accpet", "*.*"); 
con.setDoOutput(true);
let jsondata = { "request": { "query": msg } };
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

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) { 

if (msg.startsWith("최빈아")==0) {
msg = msg.replace(/최빈아/,"");
let results = JSON.parse(CH.send(msg));
CH.say(results["response"]["replies"][0]["text"],replier);
}

if (room == "지구b") {
if ((Math.floor(Math.random() * 5)) == 0) {
let results = JSON.parse(CH.send(msg));
CH.say(results["response"]["replies"][0]["text"],replier);
}
}
  
if (room == "오리b") {
if ((Math.floor(Math.random() * 6)) == 0) {
let results = JSON.parse(CH.send(msg));
CH.say(results["response"]["replies"][0]["text"],replier);
}
}
  
}
