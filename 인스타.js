const Jsoup = org.jsoup.Jsoup;
const Lw = '\u200b'.repeat(1000);
const Ll = '⎼'.repeat(50);

function response (room, msg, sender, igc, replier) {
    
    if (msg.startsWith('/인스타')) {
        try {
            let nick = msg.substring(4).trim();
            let parse = Jsoup.connect('https://www.instagram.com/'+nick).get().html().split('_sharedData =')[1].split('<')[0].trim();
            let json = JSON.parse(parse.slice(0, parse.length-1));
            let info = json.entry_data.ProfilePage[0].graphql.user;
            with (info) {
                let articles = edge_owner_to_timeline_media.edges.map(e => {
                    let info2 = e.node;
                    let text = info2.edge_media_to_caption.edges[0]
                    text = text ? text.node.text : '설명글 없음.';
                    let url = info2.display_url;
                    let likes = info2.edge_liked_by.count;
                    let comments = info2.edge_media_to_comment.count;
                    return [
                    "대표 사진", url, text,
                    likes + '❤️' + ' '.repeat(3) + comments + '💬'
                    ].join('\n\n');
                }).join('\n\n'+Ll+'\n\n');
                replier.reply([
                '• ' + nick + ' 님의 인스타그램', Ll,
                '이름 : ' + full_name,
                '소개 : ' + biography,
                '팔로워 : ' + edge_followed_by.count + '명',
                '팔로잉 : ' + edge_follow.count + '명', Ll + Lw,
                '\n프로필 사진\n', profile_pic_url_hd, '\n',
                Ll, '\n' + articles + '\n' , Ll
                ].join('\n'));
            }
        } catch (e) {
            replier.reply('• 존재하지 않는 프로필입니다!');
        }
    }
    
}
