const blank = "\u200b".repeat(500);

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
var players = JSON.parse(FileStream.read("/sdcard/ProjectK/" + room + "/player.json")); 

if (room.indexOf("b")){
try {
var mydata = JSON.parse(FileStream.read("/sdcard/ProjectK/" + java.lang.String(imageDB.getProfileImage()).hashCode() + ".json")); 
if(mydata.code!=undefined){
mydata.code=mydata.code;
}
} catch(e) {
players = JSON.parse(FileStream.read("/sdcard/톡방/설정/player.json"));
players.push(java.lang.String(imageDB.getProfileImage()).hashCode());
var playerdata={"name":sender,"code":java.lang.String(imageDB.getProfileImage()).hashCode(),"lvl":1,"exp":0,"maxexp":100,"exps":0};
var writedata = JSON.stringify(playerdata); // Json
FileStream.write("/sdcard/톡방/"+java.lang.String(imageDB.getProfileImage()).hashCode()+".json",writedata); // 파일 쓰기
var writedata1 = JSON.stringify(players); // Json
FileStream.write("/sdcard/톡방/설정/player.json",writedata1); // 파일 쓰기
replier.reply("회원가입 완료");
}

try {
mydata = JSON.parse(FileStream.read("/sdcard/톡방/" + java.lang.String(imageDB.getProfileImage()).hashCode() + ".json")); 

if (msg == "%내정보"){
replier.reply("[ "+sender+"님의 정보 ]\n코드: "+mydata.code+"\n레벨: "+mydata.lvl+"\n경험치("+mydata.exp+"/"+mydata.maxexp+")");
}

mydata.exp=Number(mydata.exp)+1;
mydata.exps=Number(mydata.exps)+1;
if(Number(mydata.exp)>=Number(mydata.maxexp)){
mydata.lvl=Number(mydata.lvl)+1;
mydata.exp=0;
replier.reply(mydata.name+"님 "+mydata.lvl+"(으)로 레벨업!");
mydata.maxexp=Number(mydata.maxexp)+10*Number(mydata.lvl);
}
if(msg=="%순위"){
arr=[];
players=JSON.parse(FileStream.read("/sdcard/톡방/설정/player.json"));
apush = name => {
arr.push(JSON.parse(FileStream.read("/sdcard/톡방/"+name+".json")));
return true;
}
for(i=0;i<players.length;i++){
apush(players[i]);
}
replier.reply("[레벨 순위]\n"+blank+"1등 "+arr.sort((a, b) => b.exps - a.exps).map(j =>["이름: "+j.name+"\n레벨: "+j.lvl]).join("\n\n"))
}
var finaldata = JSON.stringify(mydata);
FileStream.write("/sdcard/톡방/"+ java.lang.String(imageDB.getProfileImage()).hashCode()+".json", finaldata);
}
catch(e){
replier.reply(e);
}
}
}

//////





