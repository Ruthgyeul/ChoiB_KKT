const AuthURL = "https://builder.pingpong.us/api/builder/5fd8cb7ae4b07b8420aa1ed4/integration/v0.2/custom/{sessionId}";
const On = {};
const Pro = {};
let AuthID = "Basic a2V5OmNjMGE2MDcyM2UyZTI3NzA2MGQ4YzkyYWVhZjhiZGQ1";

function response(room, msg, sender, isGroupChat, replier) {
if (!On[room]) On[room] = false;

if (!Pro[room]) Pro[room] = 0;

if (msg == "!Talk On") {
On[room] = true;
replier.reply("[Project K]\nRoom : " + room + "\nTalk : On");
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
if (msg.starsWith(".")) {
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
