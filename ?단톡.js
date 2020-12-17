function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) { 

if (msg == "!단톡") {
if (room == "삐약b") {
var RoomId = "g53tndHc";
}
if (room == "지구b") {
var RoomId = "gkzMG6Ic";
} 
if (room == "하트b") {
var RoomId = "gSE7VOsc";
} 
let data = Utils.getWebText("https://api.develope.kr/search/room?room=https://open.kakao.com/o/" + RoomId);
let RoomN = data.split("name\":\"")[1].split("\"")[0];
let RoomM = data.split("headcount\":\"")[1].split("\"")[0];
let RoomH = data.split("like\":\"")[1].split("\"")[0];
replier.reply(RoomN + "\n\n" + "멤버: " + RoomM + "명\n방 하트: " + RoomH + "개");
}

}
