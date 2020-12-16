importClass(org.jsoup.Jsoup);

const rooms = [["삐약b", "g53tndHc", 0], ["지구b", "gkzMG6Ic", 0], ["하트b", "gSE7VOsc", 0]]; // ["방 이름", "방 아이디", 0]
const
const
const
const entrance = true; // 입장 감지 후 메시지를 보낼 지, 보내지 않을 지 결정합니다. true일 경우 메시지를 보내고, false일 경우 메시지를 보내지 않습니다.
const walkout = true; // 퇴장 감지 후 메시지를 보낼 지, 보내지 않을 지 결정합니다. true일 경우 메시지를 보내고, false일 경우 메시지를 보내지 않습니다.
const showChange = true; // 인원수 변동을 표시할 지, 표시하지 않을 지 결정합니다. true일 경우 표시하고, false일 경우 표시하지 않습니다.

const e_msg = "뉴페뉴페 공지공지 닉변닉변 방핱방핱"; // 입장 감지 후 보낼 메시지
const w_msg = "ㅈㄱ"; // 퇴장 감지 후 보낼 메시지

function getRoomInfo(RoomId) {
return JSON.parse(Jsoup.connect("https://api.develope.kr/search/room?room=https://open.kakao.com/o/" + RoomId).ignoreContentType(true).get().text()).result;
}

function enter(e, w, s) {
for (let i in rooms) {
let inf = getRoomInfo(rooms[i][1]);
if (rooms[i][2] == 0) {
rooms[i][2] = inf.headcount;
return;
}
const change = s ? rooms[i][2] + '->' + inf.headcount + '\n' : '';
if (inf.headcount > rooms[i][2] && e) {
Api.replyRoom(rooms[i][0], e_msg + '\n\n' + change);
rooms[i][2] = inf.headcount;
return;
}
if (inf.headcount < rooms[i][2] && w) {
Api.replyRoom(rooms[i][0], w_msg + '\n\n' + change);
rooms[i][2] = inf.headcount;
return;
}
}
}

const loop = setInterval(function() {
try {
enter(entrance, walkout, showChange);
}
catch (er) {
return "에러: " + er;
}
}, 750);

function response(room, msg, sender, isGC, replier, imageDB) {}
