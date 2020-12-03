var chatCount = {};

function response(room, msg, sender, isGroupChat, _replier, ImageDB) {
if (room == "뱁새봇") {

var replier = {};

replier.reply = function(msg) {
_replier.reply(msg);
chatCount[room] = 0;
};

if (chatCount[room] == undefined) chatCount[room] = 0;
chatCount[room]++;

if (chatCount[room] >= 300) {
replier.reply("[뱁새i] ㅅㅂㅍ!");
chatCount[room] = 0;
}

}
}
