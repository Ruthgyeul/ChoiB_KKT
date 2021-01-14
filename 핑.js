const bot = BotManager.getCurrentBot();

function onCommand(msg) {

    if(msg.command != 'ping' || msg.args.length != 1) return;

    if(typeof(msg.args[0]) != 'string') return;

    if(msg.args[0].includes('/')) return;

    if(msg.args[0].includes(':')) return;

    msg.reply('ping 결과\n'+ping(msg.args[0]));

}

bot.setCommandPrefix("/"); ///로 시작하는 메시지를 command로 판단

bot.addListener(Event.COMMAND, onCommand);

function ping(target) {

    try{

        let t = java.lang.System.currentTimeMillis();

        let result = java.net.InetAddress.getByName(target).isReachable(1000);

        if(!result) return "접속할 수 없음";

        return java.lang.System.currentTimeMillis() - t + "ms";

    } catch (e){

        return '오류: ' + e;

    }

}
