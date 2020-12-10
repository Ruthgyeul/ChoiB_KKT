//계산: 100(최소 포함/1000) - 100(최대 포함/1000)
//0% - 0.3%
//1% ~ 30% - 14.3%
//31% ~70% - 53%
//71% ~ 85% - 20%
//86% ~ 99% - 12.2%
//100% - 0.2%

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) { 

if (msg == "!운세") {
let rand = Math.floor(Math.random() * (1001 - 1)) + 1; //100%

if (rand < 4) {
} 

if (rand > 3 && rand < 8) {
}

if (rand > 7 && rand < 131) {
}

if (rand > 130 && rand < 275) {
}

if (rand > 274 && rand < 476) {
}

if (rand > 475) {
}
  
}

}
