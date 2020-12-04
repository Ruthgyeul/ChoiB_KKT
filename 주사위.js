function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) { 
if (room == "지구b") { 

if (msg == "!주사위") {
let dice = Math.floor(Math.random() * 6) + 1;
replier.reply(sender + "(이)가 던진 주사위에서 [" + dice + "](이)가 나왔어~"); 
}

}
} 
