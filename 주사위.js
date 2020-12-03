function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) { 
if (room == "뱁새봇") { 

if (msg == "뱁새주사위") {
let dice = Math.floor(Math.random() * 6) + 1;
replier.reply("[뱁새i] 주사위 결과 : " + dice); 
}

}
} 
