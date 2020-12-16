const AuthURL = "https://builder.pingpong.us/api/builder/5fd8cb7ae4b07b8420aa1ed4/integration/v0.2/custom/{sessionId}";
const AuthID = "Basic a2V5OmNjMGE2MDcyM2UyZTI3NzA2MGQ4YzkyYWVhZjhiZGQ1";

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) { 

if (msg.startsWith("최빈아")==0) {
try {
//msg = msg.substring(4).trim();
let jsondata = "{\"request\": {\"query\": \"" + msg + "\"}}";
//let jsondata = { "request": { "query": msg } }; 
let url = new java.net.URL("https://builder.pingpong.us/api/builder/5fd8cb7ae4b07b8420aa1ed4/integration/v0.2/custom/{sessionId}");
let con = url.openConnection();
con.setRequestMethod("POST"); 
con.setRequestProperty("Content-Type", "application/json"); 
//con.setRequestProperty("Content-Type", "application/json; charset=utf-8"); 
con.setRequestProperty("Authorization", "Basic a2V5OmNjMGE2MDcyM2UyZTI3NzA2MGQ4YzkyYWVhZjhiZGQ1");
//con.setRequestProperty("User-Agent", "Mozilla");
//con.setRequestProperty("Accpet", "*.*");
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
let results = JSON.parse(response);
return results;
replier.reply(results['response']['replies'][0]['text']);
} catch (e) {
return e;
replier.reply("에러: " + e);
}
}

}
