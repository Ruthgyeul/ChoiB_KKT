function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) { 

if (msg == "ChoiB") {
var fill=["알수없음", "충전중", "충전중 아님", "충전 완료 후 충전중이 아님", "충전 완료"];  
var ifilter = new android.content.IntentFilter( android.content.Intent.ACTION_BATTERY_CHANGED);
var batteryStatus = Api.getContext().registerReceiver(null, ifilter);
var battery = batteryStatus.getIntExtra( android.os.BatteryManager.EXTRA_STATUS, -1);
var voltage = batteryStatus.getIntExtra( android.os.BatteryManager.EXTRA_VOLTAGE, -1);
var level = batteryStatus.getIntExtra( android.os.BatteryManager.EXTRA_LEVEL, -1);
var scale = batteryStatus.getIntExtra( android.os.BatteryManager.EXTRA_SCALE, -1);
var am = Api.getContext().getSystemService(Api.getContext().ACTIVITY_SERVICE);
var mem = new android.app.ActivityManager.MemoryInfo();
am.getMemoryInfo(mem);
var temp = batteryStatus.getIntExtra( android.os.BatteryManager.EXTRA_TEMPERATURE, -1);
var ms1 = java.lang.System.currentTimeMillis();
var ms2 = java.lang.System.currentTimeMillis();
var ps = (((ms2-ms1)/1000) + "초");
replier.reply ("[ChoiB]\n전원: 켜짐\n충전 상태: " + fill[battery-1] + "\n램: " + (mem.availMem/mem.totalMem*100).toFixed(2) + "% 남음\n배터리: " + Math.round(level/scale*100) + "%\n온도: " + Math.round(temp)/10 + "°C\n전압: " + voltage + "mv" + "\u200b".repeat(500) + "\n\nProject ChoiBKaKaoT By R. 체른\nCopyright (C) 2020 ChoiB By R. 체른\nAll rights reserved"); 
}

}
}
