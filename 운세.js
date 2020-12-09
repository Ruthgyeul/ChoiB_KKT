function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) { 

if (msg == "!운세") {
if (Math.floor(Math.random() * 30) == 0) {
replier.reply("엥? " + sender + " 친구한테는 보이는게 없어!\n운세가 측정 불가인걸?\n판단은 알어서 해~"); 
} else {
let dice = Math.floor(Math.random() * 100) + 0;
replier.reply((Math.floor(Math.random() * 2) ? "앗! " : "우왕! ") + sender + " 친구의 운세는 " + dice + "%가 나왔엉~");
}
}

}
