 
 
 if (msg == "?한국시간") {
    var d = new Date();

    // 오전 오후 표시
    var ampm = "오후 ";
    var hour = d.getHours();
    if (hour < 12) {
      ampm = "오전 ";
    }
    else if (hour > 12) {
      hour -= 12;
    }

    replier.reply("🇰🇷 " + d.getFullYear() + "년 " + (d.getMonth() + 1) + "월 " + d.getDate() + "일 " + ampm + hour + "시 " + d.getMinutes() + "분");
  }
