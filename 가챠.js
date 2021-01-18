var girin = 0;

function response(room, msg, sender, isGroupChat, replier, ImageDB)
{
 var namu = msg.split(" ");
 
 if(msg == "/프리코네"){ 
   girin = 0;
   var stat = read("priconne",sender);
   if (stat != undefined){
     stat = stat.split(",");
   } else {
       save("priconne",sender,"0,0");
    stat = read("priconne",sender);
    stat = stat.split(",");
   }
   stat[0] = stat[0] * 1;
   stat[1] = stat[1] * 1;
      var result = "";
      for (var i = 1; i < 11; i++){
     if(i != 10){
    if (i % 2 == 0){
      result = result + priconne(i)+"\n";
   } else {
   result = result + priconne(i)+"\t";  
   }
    } else {
   result = result + priconne(i);
    }
   }
   girin = girin * 1;
   
   stat[0] = stat[0]+10;
   stat[1] = stat[1]+girin;
   
   var per = ((stat[1] / stat[0]) * 100).toFixed(2);
   var money = (stat[0] / 10) * 27000;
   replier.reply("["+sender+"님의 확률]\n"+"ㆍ뽑은 횟수 : "+stat[0]+"번\nㆍ총 획득 ★3 : "+stat[1]+"개 ("+per+"%)\n\n"+result+"\n\nㆍ가챠 환산 금액 : "+addComma(money)+"원");
   save("priconne",sender,stat[0]+","+stat[1]);
 
    }
   
   if(namu[0] == "/가챠삭제"){
    if(sender == "name"){
      save("priconne",namu[1],"0,0");
      replier.reply("가챠기록 삭제 완료");
    } 
    else {
   repiler.reply("권한 부족!")
    }
   }
}

function priconne(i){
 var num = Math.random();
 var chara = "";
 if (num <= 0.025){
  chara = "3성";
 } else if (num <= 0.180){
  chara = "2성";
 } else {
  chara = "1성";
 }
 
 //마지막 뽑기는 1성안나옴
 if (i == 10){
  if(num <= 0.025){
   chara = "3성";
  } else {
   chara = "2성";
  }
 }
 
 if (chara == "1성"){
  chara = randomItem(star1);
 } else if (chara == "2성"){
  chara = randomItem(star2);
 } else if (chara == "3성"){
  chara = randomItem(star3);
  girin = girin + 1;
 }
 
 return chara;
}

function randomItem(a) {
  return a[Math.floor(Math.random() * a.length)];
}

function addComma(num) {
  var regexp = /\B(?=(\d{3})+(?!\d))/g;
  return num.toString().replace(regexp, ',');
}
[출처] 프리코네 가챠 시뮬레이터 (카카오톡 봇 커뮤니티) | 작성자 Findragon
