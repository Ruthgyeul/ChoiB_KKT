const Lw = "\u200b".repeat(1000);
const Ll = "⎼".repeat(50);

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) { 

if (msg == "!단톡검색") {
try {
let RoomS = msg.substring(6).trim();
let data = Utils.getWebText("https://api.develope.kr/search/room/list?query=" + RoomS + "&type=m&page=1&count=5");
let Rtotal = data.split("totalcount\":\"")[1].split("\"")[0];
let Rname = data.split("name\":\"")[1].split("\"")[0];
let Rprot = data.split("locked\":\"")[1].split("\"")[0];
let Rdesc = data.split("desc\":\"")[1].split("\"")[0];
let Rtag = data.split("ntags\":\"")[1].split("\"")[0];
let Rlink = data.split("openlink\":\"")[1].split("\"")[0];
let Rmaster = data.split("owner\":\"")[1].split("\"")[0];
let Rmember = data.split("headcount\":\"")[1].split("\"")[0];
let Rlike = data.split("like\":\"")[1].split("\"")[0];
let Rchat = data.split("lastchat\":\"")[1].split("\"")[0];
let d = Rchat.split(" ")[0].split("-");
let year = d[0];
let month = d[1];
let day = d[2];
let t = Rchat.split(" ")[1].split(":");
let hour = t[0];
let hourstr = hour <= 12 ? "오전 " + hour : "오후 " + (hour - 12);
let min = t[1];
let sec = t[2];
replier.reply([RoomS + " - 단톡 검색 결과" + Rtotal + "개", Ll, "방 이름: " + Rname, "방 공개: " + Rprot, "\n방장: " + Rmaster, "멤버: " + Rmember + "명", "방 하트: " + Rlike + "개", Ll + Lw, "설명: " + Rdesc, "\n태그: " + Rtag, Ll, "링크: " + Rlink]); 
replier.reply("최근 채팅: " + month + "월 " + day + "일 " + hourstr + "시 " + min + "분 " + sec + "초");
} catch(e) {
replier.reply("검색 결과가 없습니다!\n에러: " + e);
} 

}
