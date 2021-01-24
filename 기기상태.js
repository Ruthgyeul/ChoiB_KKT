var systemInfos = function() {
var SysMemInfo = java.lang.Runtime.getRuntime();
var SysDiskInfo = java.io.File.listRoots()[0];
var array = [];
array[0] = "코어 수 : " + SysMemInfo.availableProcessors() + "개";
array[1] = "메모리 여유 사용량 : " + (SysMemInfo.freeMemory()/1000000) + "MB";
array[2] = "메모리 사용량 : " + (SysMemInfo.totalMemory()/1000000) + "MB";
array[3] = "메모리 전체 용량 : " + (SysMemInfo.maxMemory()/1000000000) + "GB";
array[4] = "최대 저장 공간 : " + (SysDiskInfo.getTotalSpace()/1000000000) + "GB";
array[5] = "여유 저장 공간 : " + (SysDiskInfo.getUsableSpace()/1000000) + "MB";
return array.join("\n");
};

Api.getPing = function(pingN) {
var t = java.lang.System.currentTimeMillis();
var ping = java.net.InetAddress.getByName(pingN).isReachable(1000); 
if (ping) {
return (java.lang.System.currentTimeMillis() - t) + "ms";
} else { 
return "알수없음"; 
}
};

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) { 

if (msg == "!기기상태") {
var fill=["알수없음","충전중","충전중 아님","충전 완료 후 충전중 아님","충전 완료"];  
var ifilter = new android.content.IntentFilter( android.content.Intent.ACTION_BATTERY_CHANGED);
var batteryStatus = Api.getContext().registerReceiver(null, ifilter);
var battery = batteryStatus.getIntExtra( android.os.BatteryManager.EXTRA_STATUS, -1);
var temp = Device.getBatteryTemperature()/10;
var pbattery = Device.getBatteryLevel();
var version = Device.getAndroidVersionName();
var voltage = Device.getBatteryVoltage();
replier.reply ("[ 최빈봇 기기 정보 ]\n\n충전 상태 : " + fill[battery-1] + "\n온도 : " + temp + "°c\n배터리 : " + pbattery + "%\n안드로이드 버전 : " + version + "\n전압 : "+ voltage + "(단위 모름)" + "\n핑 : " + Api.getPing("143.59.187.162") + "\u200b".repeat(500) + "\n\n" + systemInfos());
}

}
