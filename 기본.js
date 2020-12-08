const sdcard = android.os.Environment.getExternalStorageDirectory().getAbsolutePath(); 
const CH = {}; 
const preMsg = {}; 

CH.say = function(msg) { 
replier.reply(msg); 
};

function response(room, msg, sender, isGroupChat, replier, ImageDB) {
msg = msg.trim();
room = room.trim();
sender = sender.trim();

if (preMsg[room] == msg) {
return; 
}

preMsg[room] = msg;

if (msg == "?") {
CH.say("갈고리 치우자~");
}

}
