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

if ((room.indexOf("b")) && (msg.startsWith(".") || msg.startsWith("최빈") || msg.startsWith("최비") || msg.startsWith("빈") || msg.startsWith("비니"))) {
msg = msg.replace(/./,"");
AuthID = AuthID.replace("Basic ", "");
let jsondata = { "request": { "query": msg } };

send = _ => { 
try{
let url = new java.net.URL(AuthURL;
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
