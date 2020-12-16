var msgSenderForCalcQuiz = null; 
var getCalcQuizOn = null; 
var answerForCalcQuiz = null;

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {

if (msg == "!수학게임") {
replier.reply("스테이지를 선택해주세요!\n\n!수학게임1 = n + n\n!수학게임2 = n - n\n!수학게임3 = n × n\n!수학게임4 = n / n\n!수학게임5 = ???");
}

if (msg == "!수학게임1") {
if (msgSenderForCalcQuiz == null) {
msgSenderForCalcQuiz = sender;
var Num1 = Math.floor(Math.random() * 100 + 1);
var Num2 = Math.floor(Math.random() * 100 + 1);
answerForCalcQuiz = Num1 + Num2;
replier.reply("문제: " + Num1 + " + " + Num2 + " = ?\n\n명령어: !정답 (숫자)");
getCalcQuizOn = 1;
} else {
replier.reply("현재 진행 중인 게임이 있습니다.\n초기화 명령어: !수학게임초기화");
}
}
  
if (msg == "!수학게임2") {
if (msgSenderForCalcQuiz == null) {
msgSenderForCalcQuiz = sender;
var Num1 = Math.floor(Math.random() * 100 + 1);
var Num2 = Math.floor(Math.random() * 10 + 1);
answerForCalcQuiz = Num1 - Num2;
replier.reply("문제: " + Num1 + " - " + Num2 + " = ?\n\n명령어: !정답 (숫자)");
getCalcQuizOn = 1;
} else {
replier.reply("현재 진행 중인 게임이 있습니다.\n초기화 명령어: !수학게임초기화");
}
}
  
if (msg == "!수학게임3") {
if (msgSenderForCalcQuiz == null) {
msgSenderForCalcQuiz = sender;
var Num1 = Math.floor(Math.random() * 100 + 1);
var Num2 = Math.floor(Math.random() * 10 + 1);
answerForCalcQuiz = Num1 * Num2;
replier.reply("문제: " + Num1 + " × " + Num2 + " = ?\n\n명령어: !정답 (숫자)");
getCalcQuizOn = 1;
} else {
replier.reply("현재 진행 중인 게임이 있습니다.\n초기화 명령어: !수학게임초기화");
}
}
  
if (msg == "!수학게임4") {
if (msgSenderForCalcQuiz == null) {
msgSenderForCalcQuiz = sender;
var Num1 = Math.floor(Math.random() * 100 + 1);
var Num2 = Math.floor(Math.random() * 10 + 1);
answerForCalcQuiz = Num1 / Num2;
replier.reply("문제: " + Num1 + " / " + Num2 + " = ?\n\n명령어: !정답 (숫자)");
getCalcQuizOn = 1;
} else {
replier.reply("현재 진행 중인 게임이 있습니다.\n초기화 명령어: !수학게임초기화");
}
}
  
if (msg == "!수학게임5") {
if (msgSenderForCalcQuiz == null) {
msgSenderForCalcQuiz = sender;
var Num1 = Math.floor(Math.random() * 100 + 1);
var Num2 = Math.floor(Math.random() * 10 + 1);
var Num3 = Math.floor(Math.random() * 10 + 1);
answerForCalcQuiz = Num1 + (Num2 * Num3);
replier.reply("문제: " + Num1 + " + " + Num2 + " × " + Num3 + " = ?\n\n명령어: !정답 (숫자)");
getCalcQuizOn = 1;
} else {
replier.reply("현재 진행 중인 게임이 있습니다.\n초기화 명령어: !수학게임초기화");
}
}

if (msg.startsWith("!정답")) {
var asw = Number(msg.split(" ")[1].replace(/[^0-9]/g,""));
if (asw == answerForCalcQuiz) {
replier.reply(sender + " 친구, 정답이야!");
} else {
replier.reply("헐.. " + sender + " 이샛끼 이것도 계산 못하누ㅋ!");
}
msgSenderForCalcQuiz = null;
answerForCalcQuiz = null;
getCalcQuizOn = null;
}

if (msg == "!수학게임초기화") {
msgSenderForCalcQuiz = null;
replier.reply("수학 게임 진행 상황을 초기화했어~");
}

}
