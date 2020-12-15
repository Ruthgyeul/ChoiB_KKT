// 맞춤법 꼽주기
  if (msg.indexOf("됬") !== -1) {
    var toReply = ""
    for (i = 0; i < 36; i++) {
      toReply += "됐"
    }
    replier.reply(toReply);
  }

  if (msg.indexOf("됌") !== -1) {
    var toReply = ""
    for (i = 0; i < 36; i++) {
      toReply += "됨"
    }
    replier.reply(toReply);
  }

  if (msg.indexOf("됀") !== -1) {
    var toReply = ""
    for (i = 0; i < 36; i++) {
      toReply += "된"
    }
    replier.reply(toReply);
  }
