var msgSenderForCalcQuiz = null; // 이용자
var getCalcQuizOn = null; // 계산퀴즈 작동
var answerForCalcQuiz = null; // 문제의 답

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
 // 계산퀴즈
  if (msg == "?계산퀴즈") {
    if (msgSenderForCalcQuiz == null) {
      msgSenderForCalcQuiz = sender;

      var Num1 = Math.floor(Math.random() * 100 + 1);
      var Num2 = Math.floor(Math.random() * 100 + 1);
      var calcItem = ["+", "+", "+", "+", "×"]
      var calcItemRandom = Math.floor(Math.random() * 5);
      var calcItemToUse = calcItem[calcItemRandom];
      if (calcItemRandom == 4) {
        answerForCalcQuiz = Num1 * Num2;
      }
      else {
        answerForCalcQuiz = Num1 + Num2;
      }

      replier.reply(sender + "님 문제 드리겠습니다.\
    \n\n문제 : " + Num1 + " " + calcItemToUse + " " + Num2 + " = ?");
      getCalcQuizOn = 1;
    }
    else {
      replier.reply(sender + "님 순서를 지켜주세요.");
    }
  }

  if ((sender == msgSenderForCalcQuiz) && (getCalcQuizOn == 1) && (msg != "?계산퀴즈")) {
    msgSenderForCalcQuiz = null;
    if (msg == answerForCalcQuiz) {
      replier.reply(sender + "님 정답입니다!");
    }
    else {
      replier.reply(sender + " 이새끼 이것도 계산못함 ㅂㅅ");
    }
    answerForCalcQuiz = null;
    getCalcQuizOn = null;
  }

  // 계산퀴즈 초기화
  if (msg == "?계산퀴즈초기화") {
    msgSenderForCalcQuiz = null;
    replier.reply("정상적으로 초기화되었습니다.");
  }
  
  }
