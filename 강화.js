var list = {}

var 랜덤강화=["% 확률로 강화에 실패했습니다!💥","% 확률로 강화에 성공하였습니다!💫"];
var 텀={};
function response(room, msg, sender, isGroup, replier) {
 var 강화랜덤 = 랜덤강화[Math.floor(Math.random()*랜덤강화.length)]
확률=Math.floor((Math.random()*99)+1);
레벨=Math.floor((Math.random()*15)+1);
var 수치={"% 확률로 강화에 실패했습니다!💥":"실패","% 확률로 강화에 성공하였습니다!💫":"성공"};
if(msg=="/도움말 강화"){
  replier.reply ("/강화 ~~로 강화합니다.\n한 번 할때마다 쿨타임 1분이 생깁니다")
}
if(msg.startsWith("/강화 ")){
if(list[msg.substr(4)]==undefined){
list[msg.substr(4)] = {강화: 0};
        
}
if(텀[sender]==undefined){
텀[sender] = true;
}
if(수치[강화랜덤]=="성공"&&텀[sender]==true){
var 더하기 = parseInt(list[msg.substr(4)].강화) + parseInt(레벨); 
   list[msg.substr(4)].강화 =더하기;
replier.reply (확률+강화랜덤+"\n"+msg.substr(4)+"Lv."+list[msg.substr(4)].강화)
텀[sender] = false;
java.lang.Thread.sleep(60000);
텀[sender] = true;

}else if(수치[강화랜덤]=="실패"&&텀[sender]==true){
  var 빼기 =  list[msg.substr(4)].강화 -=레벨;
  list[msg.substr(4)].강화 =빼기;
  replier.reply(확률+강화랜덤+"\n"+msg.substr(4)+"Lv."+list[msg.substr(4)].강화)
텀[sender] = false;
java.lang.Thread.sleep(60000);
텀[sender] = true; }}
if(텀[sender]==false&&msg.startsWith("/강화 ")){
  replier.reply ("쿨타임이 작동중입니다. 잠시 뒤 해주세요.")
}
if (msg == "/초기화 강화"&&sender=="주인") {

list=[];
        replier.reply("초기화 했습니다");
}

        
    }
