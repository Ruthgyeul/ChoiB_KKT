ChatData = {};

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId) {

var info = {
name: "[" + sender + "]",str: msg
};

if (ChatData[room] == undefined)
ChatData[room] = [];
ChatData[room].push(info);
var word = msg.slice(1).split(" ");
if(msg.charAt(0) == "/" && word[0] == "채팅기록") {
var res = [];
var len = Object.keys(ChatData[room]).length;
var count = Math.min(len, word[1]);
for (var i = count; i > 0; i--) {
var chat = ChatData[room][len - i];
res.push(chat.name + " : " + chat.str);
}
var result = "◈ " + room + " ◈\n(방)의 채팅기록\n";
replier.reply(result + res.join("\n")); 
} 
}

-----

function response(room, msg, sender, isGroupChat, replier, ImageDB) {
  msg = msg.trim();
  sender = sender.trim();
  room = room.trim();
  
  if (msg == msg) {
    DataBase.appendDataBase(room, "\n" + new Date().toLocaleString().replace("GMT-05:00", "") + sender + " : " + msg);
  }
  
  if (msg.startsWith("!log")==0) {
    let logN = Number(msg.replace("!log ", ""));
    replier.reply(DataBAse.getDataBase(msg.substr(logN) + ".txt"));
  }

}
