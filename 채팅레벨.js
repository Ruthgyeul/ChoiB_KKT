const FS = FileStream, path = '/sdcard/lv.json';
if(!new java.io.File(path).canRead()) FS.write(path, '{}');
let lv = JSON.parse(FS.read(path));

function response(room, msg, sender, igc, replier){

    if(!lv[sender]) lv[sender] = {'lv':1, 'xp':0};
    ++lv[sender].xp;

    if(lv[sender].xp>=100){
        ++lv[sender].lv;
        lv[sender].xp -= 100;
        replier.reply('채팅 레벨업!\n현재레벨 : '+lv[sender].lv+'LV.');
    }

    if(msg=='!내 레벨') replier.reply('『 '+sender+' 』님의 레벨은 '+lv[sender].lv+'LV.');

    FS.write(path, JSON.stringify(lv));

}
[출처] 기본적인 채팅레벨 (카카오톡 봇 커뮤니티) | 작성자 Jwon0423
