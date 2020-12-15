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
 /* 
if (msg) {
if (Math.floor(Math.random() * 10) == 0) {
msg = msg.replace(/./,"");
let jsondata = {"request":{"query": msg}};
} else {
null;
}
}
  */
}
