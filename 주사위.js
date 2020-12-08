function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) { 
if (room == "지구b" || room == "오리b") { 

if (msg == "!주사위") {
replier.reply("(최빈이가 당신의 주사위를 뺏어서 냅다 던졌다)");
java.lang.Thread.sleep(600);
if (Math.floor(Math.random() * 12) == 0) {
replier.reply("엇! " + sender + " 친구가 던진 주사위가 시아를 벋어났어!\n주사위를 좀 더 살살 다뤄줘~!"); 
} else {
let dice = Math.floor(Math.random() * 6) + 1;
replier.reply((Math.floor(Math.random() * 2) ? "앗! " : "우왕! ") + sender + " 친구의 주사위에서 " + dice + (([1, 3, 6].indexOf(dice) != -1) ? "이" : "가") + " 나왔어~");
}
}
  
}
} 
