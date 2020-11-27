function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) { 

if (msg == "!ChoiB") {
/*
var fill=["알수없음", "충전중", "충전중 아님", "충전 완료 후 충전중이 아님", "충전 완료"];  
var ifilter = new android.content.IntentFilter( android.content.Intent.ACTION_BATTERY_CHANGED);
var batteryStatus = Api.getContext().registerReceiver(null, ifilter);
replier.reply ("[ChoiB]\n전원: 켜짐\n충전 상태: " + fill[battery-1] + "\u200b".repeat(500) + "\n\nProject ChoiBKaKaoT By R. 체른\nCopyright (C) 2020 ChoiB By R. 체른\nAll rights reserved"); 
}
*/
var d1 = Device.getModelName(); //기기 모델명 반환
var d2 = Device.getAndroidVersion(); //안드로이드 버전 반환
var d3 = Device.isCharging(); //배터리가 충전중인지 반환
var d4 = Device.getBatteryLevel(); //배터리 % 잔량 반환
var d5 = Device.getBatteryIntent(); //배터리 관련 Intent 반환
var d6 = Device.getBatteryHealth(); //배터리 건강 상태 반환
var d7 = Device.getBatteryStatus(); //배터리 상태 반환
var d8 = Device.getBatteryTemp(); //배터리 섭씨 온도 반환
var d9 = Device.getBatteryVoltage(); //배터리 전압 반환
var mem = new android.app.ActivityManager.MemoryInfo();
am.getMemoryInfo(mem);
var d10 = (mem.availMem/mem.totalMem*100).toFixed(2);
replier.reply("[ChoiB]\n전원: On\n기기 모델명: " + d1 + "\n안드로이드 버전: " + d2 + "\n충전 상태: " + d3 + "\n배터리: " + d4 + "%\n배터리 Intent: " + d5 + "\n배터리 건강상태: " + d6 + "\n배터리 상태: " + d7 + "\n배터리 온도: " + d8 + "°C\n배터리전압: " + d9 + "v\n램: " + d10 + "%" + "\u200b".repeat(500) + "\n\nProject ChoiBKKT By R. 체른\nCopyright (C) 2020 ChoiB By R. 체른\nAll rights reserved");  
}
  
}
