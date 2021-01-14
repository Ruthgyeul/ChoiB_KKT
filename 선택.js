choose = function(str) {
str = str.split(" ");
const rand = Math.random();
for(let i = 1; i<=strlength; i++) {
if (rand<i/str.length) {
return str[i-1];
}
}
};

function response(room, msg, sender, igc, replier) {

if (msg.startsWith("!골라")) {
msg = msg.replace(/!골라/,"");
replier.reply(choose(msg.slice(4));
}

}
