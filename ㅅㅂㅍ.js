var chatCount = {};

function response(room, msg, sender, isGroupChat, _replier, ImageDB) {
    if (room.indexOf("b")) {
        var replier = {};
        
        replier.reply = function(msg) {
            _replier.reply(msg);
            chatCount[room] = 0;
        };
        
        if (chatCount[room] == undefined) chatCount[room] = 0;
        chatCount[room]++;
        
        if (chatCount[room] >= 300) {
            replier.reply("우왕! ㅅㅂㅍ이다!");
            chatCount[room] = 0;
        }
    }
}
