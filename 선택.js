function response(room, msg, sender, isGroupChat, replier, ImageDB){

if (msg.startsWith("!골라")) {
var a = msg.trim().substring(4);
var b = a.split(" ");
//replier.reply("음... 골라볼까?");
//java.lang.Thread.sleep(2000);
var N = Math.floor(Math.random()*b.length);
replier.reply("난 『 "+ b[N] + " 』(이)가 마음에 드는걸?");
}

}
