// alert(1111)

// //****************************************
// //成功関数:　位置情報の取得に成功したときの処理
// //***************************************
function mapsInit(position) {
  console.log(position, "取得")
  //lat=緯度、lon=経度 を取得
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  //現在地の表示
  let map = new Bmap("#myMap");

  map.startMap(lat, lon, "load", 18);
  let pin = map.pin(lat, lon, "#dc143c");
  map.infobox(lat, lon, "現在地", "ここにいます");

// // *********************************************************************
// // 山崎先生のコードを参考にする
// // *********************************************************************
const options = [];
    options[0]={
        "lat":35.652048,
        "lon":139.704297,
        "title":"動物病院",
        "pinColor":"#9400d3",
        "height":300,
        "width":320,
        "description": '<a href="https://www.halu.vet/">HALU動物病院</a>',
        "show":false
    };
    options[1]={
        "lat":35.656909,
        "lon":139.704839,
        "title":"動物病院",
        "pinColor":"#9400d3",
        "height":300,
        "width":320,
        "description": '<a href="http://www.sjd.co.jp/hospital/">SHIBUYAフレンズ動物病院</a>',
        "show":false
    };
    options[2]={
        "lat":35.658812,
        "lon":139.697066,
        "title":"動物病院",
        "pinColor":"#9400d3",
        "height":300,
        "width":320,
        "description": '<a href="http://lulu-shibuya.com">道玄坂LULU PET CLINIC</a>',
        "show":false
    };
    options[3]={
        "lat":35.660666,
        "lon":139.671937,
        "title":"動物病院",
        "pinColor":"#9400d3",
        "height":300,
        "width":320,
        "description": '<a href="https://cac-animal.jp/amc.html">アニマルメディカルセンター</a>',
        "show":false
    };
    options[4]={
        "lat":35.673944,
        "lon":139.721686,
        "title":"動物病院",
        "pinColor":"#9400d3",
        "height":300,
        "width":320,
        "description": '<a href="https://sasazuka.fennel-ah.com">フェンネル動物病院 笹塚本院</a>',
        "show":false
    };
    options[5]={
        "lat":35.679853,
        "lon":139.694216,
        "title":"動物病院",
        "pinColor":"#9400d3",
        "height":300,
        "width":320,
        "description": '<a href="https://www.reef-vet.com">リーフ動物病院</a>',
        "show":false
    };
    options[6]={
        "lat":35.675252,
        "lon":139.705158,
        "title":"動物病院",
        "pinColor":"#9400d3",
        "height":300,
        "width":320,
        "description": '<a href="https://www.harajuku-ah.com">原宿どうぶつ病院</a>',
        "show":false
    };
    options[7]={
        "lat":35.680989,
        "lon":139.694746,
        "title":"動物病院",
        "pinColor":"#9400d3",
        "height":300,
        "width":320,
        "description": '<a href="https://www.wanko-no-haisha.jp">わんこの歯医者さん</a>',
        "show":false
    };
    options[8]={
        "lat":35.672449,
        "lon":139.713177,
        "title":"動物病院",
        "pinColor":"#9400d3",
        "height":300,
        "width":320,
        "description": '<a href="http://www.ukai-hp.jp/tokyo.html">うかい動物病院 東京神宮前診療室</a>',
        "show":false
    };
    options[9]={
        "lat":35.649132,
        "lon":139.700133,
        "title":"動物病院",
        "pinColor":"#9400d3",
        "height":300,
        "width":320,
        "description": '<a href="https://www.vec-j.com/dky/">代官山動物病院</a>',
        "show":false
    };
    options[10]={
        "lat":35.676365,
        "lon":139.712479,
        "title":"動物病院",
        "pinColor":"#9400d3",
        "height":300,
        "width":320,
        "description": '<a href="https://www.cathospital.tokyo">キャットホスピタル</a>',
        "show":false
    };
    options[11]={
        "lat":35.651085,
        "lon":139.707392,
        "title":"動物病院",
        "pinColor":"#9400d3",
        "height":300,
        "width":320,
        "description": '<a href="https://higashi3-pc.com">東３丁目ペットクリニック</a>',
        "show":false
    };
    options[12]={
        "lat":35.672694,
        "lon":139.691118,
        "title":"動物病院",
        "pinColor":"#9400d3",
        "height":300,
        "width":320,
        "description": '<a href="https://www.hospital-yoyogi.com">代々木公園犬猫病院</a>',
        "show":false
    };
    options[13]={
        "lat":35.668327,
        "lon":139.682359,
        "title":"動物病院",
        "pinColor":"#9400d3",
        "height":300,
        "width":320,
        "description": '<a href="https://cat-yoyogiuehara.com">ねこの病院代々木上原</a>',
        "show":false
    };
    options[14]={
        "lat":35.663501,
        "lon":139.681938,
        "title":"動物病院",
        "pinColor":"#9400d3",
        "height":300,
        "width":320,
        "description": '<a href="https://www.rire-r.com">Rire</a>',
        "show":false
    };
    options[15]={
        "lat":35.665455,
        "lon":139.688226,
        "title":"動物病院",
        "pinColor":"#9400d3",
        "height":300,
        "width":320,
        "description": '<a href="http://www.daktari.gr.jp">ダクタリ動物病院 代々木</a>',
        "show":false
    };
    options[16]={
        "lat":35.682241,
        "lon":139.695742,
        "title":"動物病院",
        "pinColor":"#9400d3",
        "height":300,
        "width":320,
        "description": '<a href="https://www.celebre.co.jp">セレブル動物病院</a>',
        "show":false
    };
    options[17]={
        "lat":35.646303,
        "lon":139.703164,
        "title":"動物病院",
        "pinColor":"#9400d3",
        "height":300,
        "width":320,
        "description": '<a href="http://www.daikanyama-pc.com">代官山ペットクリニック</a>',
        "show":false
    };
    options[18]={
        "lat":35.648793,
        "lon":139.719641,
        "title":"動物病院",
        "pinColor":"#9400d3",
        "height":300,
        "width":320,
        "description": '<a href="https://www.hiroo-ah.com">広尾の森どうぶつ病院</a>',
        "show":false
    };
    options[19]={
        "lat":35.644555,
        "lon":139.715922,
        "title":"動物病院",
        "pinColor":"#9400d3",
        "height":300,
        "width":320,
        "description": '<a href="http://www.clover-a-h.com/index.php">クローバー動物病院</a>',
        "show":false
    };
    options[20]={
        "lat":35.663981,
        "lon":139.693757,
        "title":"動物病院",
        "pinColor":"#9400d3",
        "height":300,
        "width":320,
        "description": '<a href="https://shibuya-inuneko-hospital.com">渋谷犬猫病院</a>',
        "show":false
    };
    options[21]={
        "lat":35.674283,
        "lon":139.680363,
        "title":"動物病院",
        "pinColor":"#9400d3",
        "height":300,
        "width":320,
        "description": '<a href="https://www.tsuchida-ah.com">土田動物病院</a>',
        "show":false
    };
    options[22]={
        "lat":35.673068,
        "lon":139.666497,
        "title":"動物病院",
        "pinColor":"#9400d3",
        "height":300,
        "width":320,
        "description": '<a href="https://www.allieys.com">アリーズ動物病院</a>',
        "show":false
    };
    options[23]={
        "lat":35.648073,
        "lon":139.70656,
        "title":"動物病院",
        "pinColor":"#9400d3",
        "height":300,
        "width":320,
        "description": '<a href="http://ebis-bird.com">恵比寿 小動物と小鳥の病院</a>',
        "show":false
    };
    options[24]={
        "lat":35.668406,
        "lon":139.711971,
        "title":"動物病院",
        "pinColor":"#9400d3",
        "height":300,
        "width":320,
        "description": '<a href="https://oacc.amebaownd.com">表参道アニマルケアクリニック</a>',
        "show":false
    };
    options[25]={
        "lat":35.654089,
        "lon":139.713932,
        "title":"動物病院",
        "pinColor":"#9400d3",
        "height":300,
        "width":320,
        "description": '<a href="https://doyupetclinic.com">どうゆうペットクリニック</a>',
        "show":false
    };
    options[26]={
        "lat":35.68098,
        "lon":139.679273,
        "title":"動物病院",
        "pinColor":"#9400d3",
        "height":300,
        "width":320,
        "description": '<a href="https://jamc.co.jp">日本動物医療センター</a>',
        "show":false
    };
    options[27]={
        "lat":35.67831,
        "lon":139.6678,
        "title":"動物病院",
        "pinColor":"#9400d3",
        "height":300,
        "width":320,
        "description": '<a href="https://www.sasazuka-animal.com">ささづか動物病院</a>',
        "show":false
    };
    options[28]={
        "lat":35.677941,
        "lon":139.68705,
        "title":"動物病院",
        "pinColor":"#9400d3",
        "height":300,
        "width":320,
        "description": '<a href="https://peter-vet.com">ペーター動物病院</a>',
        "show":false
    };
    options[29]={
        "lat":35.680454,
        "lon":139.669943,
        "title":"動物病院",
        "pinColor":"#9400d3",
        "height":300,
        "width":320,
        "description": '<a href="http://www.takama-ah.com">タカマ動物病院</a>',
        "show":false
    };
    options[30]={
        "lat":35.670362,
        "lon":139.70534,
        "title":"動物病院",
        "pinColor":"#9400d3",
        "height":300,
        "width":320,
        "description": '<a href="https://hjk.jamc.co.jp">原宿犬猫クリニック</a>',
        "show":false
    };
    options[31]={
        "lat":35.681775,
        "lon":139.698237,
        "title":"動物病院",
        "pinColor":"#9400d3",
        "height":300,
        "width":320,
        "description": '<a href="https://yoyogiuehara-ah.com">代々木上原動物病院</a>',
        "show":false
    };
    options[32]={
        "lat":35.673565,
        "lon":139.704862,
        "title":"動物病院",
        "pinColor":"#9400d3",
        "height":300,
        "width":320,
        "description": '<a href="https://peco-japan.com/hospital">動物医療センターPeco</a>',
        "show":false
    };
    options[33]={
        "lat":35.650223,
        "lon":139.7203,
        "title":"動物病院",
        "pinColor":"#9400d3",
        "height":300,
        "width":320,
        "description": '<a href="https://pfirst-ah.jp/hospital/hiroo/">ペッツファースト動物病院 広尾医院</a>',
        "show":false
    };
    options[34]={
        "lat":35.649776,
        "lon":139.721544,
        "title":"動物病院",
        "pinColor":"#9400d3",
        "height":300,
        "width":320,
        "description": '<a href="https://www.hirooterrace-ac.com">広尾テラス動物病院</a>',
        "show":false
    };
    options[35]={
        "lat":35.660645,
        "lon":139.702555,
        "title":"動物病院",
        "pinColor":"#9400d3",
        "height":300,
        "width":320,
        "description": '<a href="https://samc.co.jp">渋谷動物医療センター</a>',
        "show":false
    };

    map.infoboxLayers(options,true);
};
