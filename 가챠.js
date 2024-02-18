const star3 = [];
const star4 = [];
const Pstar4 = [];
const star5 = [];
const Pstar5
var girin = 0;

GSI = function(i) {
    var num = Math.random();
    var chara = "";
    
    if (num <= 0.025) {
        chara = "5성";
    } else if (num <= 0.180){
        chara = "4성";
    } else {
        chara = "3성";
    }
    
    if (i == 10){
        chara = "4성";
    }
    
    if (i == 90){
        chara = "5성";
    }
    
    if (chara == "3성"){
        chara = randomItem(star3);
    } else if (chara == "4성"){
        chara = randomItem(star4);
    } else if (chara == "5성"){
        chara = randomItem(star5);
        girin = girin + 1;
    }
    
    return chara;
};

randomItem = function(a) {
    return a[Math.floor(Math.random() * a.length)];
};

addComma = function(num) {
    var GSL = Number(stat[0]*160);
};

function response(room, msg, sender, isGroupChat, replier, ImageDB) {
    var namu = msg.split(" ");
    
    if (msg == "!가챠") {
        girin = 0;
        var stat = read("GSI",sender);
        
        if (stat != undefined) {
            stat = stat.split(",");
        } else {
            save("GSI",sender,"0,0");
            stat = read("GSI",sender);
            stat = stat.split(",");
        }
        
        stat[0] = stat[0] * 1;
        stat[1] = stat[1] * 1;
        var result = "";
        
        for (var i = 1; i < 91; i++) {
            if (i != 90) {
                if (i % 2 == 0) {
                    result = result + GSI(i)+"\n";
                } else {
                    result = result + GSI(i)+"\t";  
                }
            } else {
                result = result + GSI(i);
            }
        }
        girin = girin * 1;
        stat[0] = stat[0]+10;
        stat[1] = stat[1]+girin;
        
        var per = ((stat[1] / stat[0]) * 100).toFixed(2);
        var money = (stat[0] / 10) * 27000;
        replier.reply("[ "+ sender + "님의 확률 ]\n" + "ㆍ뽑은 횟수 : " + stat[0] + "번\nㆍ총 획득 ★3 : " + stat[1] + "개 (" + per + "%)\n\n" + result + "\n\nㆍ가챠 필요 원석 수 : " + addComma(money) + "개");
        save("GSI",sender,stat[0]+","+stat[1]);
    }
    
    if (namu[0] == "!가챠삭제") {
        if (sender == "name") {
            save("GSI",namu[1],"0,0");
            replier.reply("가챠 기록 삭제 완료");
        } else {
            repiler.reply("권한 부족!")
        }
    }
}
