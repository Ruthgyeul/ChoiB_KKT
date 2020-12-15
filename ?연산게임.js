var msgSenderForCalcQuiz = null; // 참여자
var getCalcQuizOn = null; // 수학게임 작동
var answerForCalcQuiz = null; // 문제의 답

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {

if (msg == "!수학게임" || msg == "!연산게임" || msg == "!계산게임") {
if (msgSenderForCalcQuiz == null) {
msgSenderForCalcQuiz = sender;

var Num1 = Math.floor(Math.random() * 100 + 1);
var Num2 = Math.floor(Math.random() * 100 + 1);
var calcItem = ["+", "+", "+", "+", "×"]
var calcItemRandom = Math.floor(Math.random() * 5);
var calcItemToUse = calcItem[calcItemRandom];
if (calcItemRandom <= 4) {
answerForCalcQuiz = Num1 + Num2;
} else {
answerForCalcQuiz = Num1 * Num2;
}

replier.reply(sender + ", 문제 내어 주도록 하지.\n\n문제: " + Num1 + " " + calcItemToUse + " " + Num2 + " = ?");
getCalcQuizOn = 1;
} else {
replier.reply(sender + " 친구? 순서를 지켜요~");
}
}

if ((sender == msgSenderForCalcQuiz) && (getCalcQuizOn == 1) && (msg != "!수학게임" || msg != "!연산게임" || msg != "!계산게임")) {
msgSenderForCalcQuiz = null;
if (msg == answerForCalcQuiz) {
replier.reply(sender + " 친구, 정답이야!");
} else {
replier.reply("헐.. " + sender + " 이샛끼 이것도 계산 못하누ㅋ!");
}
answerForCalcQuiz = null;
getCalcQuizOn = null;
}

if (msg == "!수학게임초기화") {
msgSenderForCalcQuiz = null;
replier.reply("수학 게임 진행 상황을 초기화했어~");
}

}
