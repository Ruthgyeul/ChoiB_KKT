/*
curl -X POST \
  -H "Authorization: Basic a2V5OmNjMGE2MDcyM2UyZTI3NzA2MGQ4YzkyYWVhZjhiZGQ1" \
  -H "Content-Type:application/json" \
  -d "{\"request\": {\"query\": \"안녕하세요\"}}"\
  https://builder.pingpong.us/api/builder/5fd8cb7ae4b07b8420aa1ed4/integration/v0.2/custom/{sessionId}

*/


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

/*-----------------*/

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) { 

  if (msg.indexOf(".") == 0) {
    msg = msg.replace(/./,"");
    let jsondata = { "request": { "query": msg } };

    function send() {
      try {
        let url = new java.net.URL("https://builder.pingpong.us/api/builder/5e1a1c75e4b010b663d37764/integration/v0.2/custom/{sessionId}");
        let con = url.openConnection();
        con.setRequestMethod("POST"); // 서버 접속 방법을 설정하세요. GET, POST, OPTIONS 등..
        con.setRequestProperty("Content-Type", "application/json; charset=utf-8"); // 서버 접속시 가져올 데이터의 형식을 지정
        con.setRequestProperty("Authorization", "Basic " + "a2V5OjBlMDY2ZjJlZTUxNmZhY2JmZDFmMGQyMThmMDJkZjkz"); // 인증키 입력. 사이트에 따라 Basic 또는 Bearer 를 사용합니다.
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


    let results = JSON.parse(send());
    replier.reply(results['response']['replies'][0]['text']);
  }

}
  
/*----------------*/


const BufferedReader = java.io.BufferedReader
const DataOutputStream = java.io.DataOutputStream
const InputStreamReader = java.io.InputStreamReader
const HttpURLConnection = java.net.HttpURLConnection
const URL = java.net.URL
const URLEncoder = java.net.URLEncoder
NMT = (source, target, text) => {
clientId = "아이디"
clientSecret = "시크릿넘버"
try {
text = encodeURI(text);
apiURL = "https://openapi.naver.com/v1/papago/n2mt";
url = new URL(apiURL);
con = url.openConnection();
con.setRequestMethod("POST");
con.setRequestProperty("X-Naver-Client-Id", clientId);
con.setRequestProperty("X-Naver-Client-Secret", clientSecret);
postParams = "source="+source+"&target="+target+"&text=" + text;
con.setDoOutput(true);
wr = new DataOutputStream(con.getOutputStream());
wr.writeBytes(postParams);
wr.flush();
wr.close();
br = new BufferedReader(new InputStreamReader(con.getInputStream()))
var inputLine;
var res = ""
while ((inputLine = br.readLine()) != null) res += inputLine;
br.close();
return JSON.parse(res).message.result.translatedText
} catch (e) {
return "***번역 오류***"
}
}

function response (room, msg, sender, _, replier) {

if (msg.startsWith("!번역")) {
start = msg.split(" ")[1]
end = msg.split(" ")[2]
text = msg.split(" ")
text.splice(0, 3)
text = text.join(" ")
replier.reply(NMT(start, end, text))
}
}
