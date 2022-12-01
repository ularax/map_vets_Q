alert(2222)

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
      "lat":35.67627,
      "lon":139.692434,
      "title":"ペットホテル",
      "pinColor":"#0000ff",
      "height":300,
      "width":320,
      "description": '<a href="https://azabupet.jp/">麻布PET代々木公園店</a>',
      "show":false
  };
  options[1]={
    "lat":35.65609,
    "lon":139.709231,
    "title":"ペットホテル",
    "pinColor":"#80000",
    "height":300,
    "width":320,
    "description": '<a href="http://birthday.jp.net/">ペットサロン バースデイ 渋谷店</a>',
    "show":false
};
options[2]={
    "lat":35.646088,
    "lon":139.705398,
    "title":"ペットホテル",
    "pinColor":"#80000",
    "height":300,
    "width":320,
    "description": '<a href="https://aoyamakennel.com/">青山ケンネル</a>',
    "show":false
};
options[3]={
    "lat":35.65641,
    "lon":139.713845,
    "title":"ペットホテル",
    "pinColor":"#80000",
    "height":300,
    "width":320,
    "description": '<a href="https://bliss-trimming.com/">BLISS 広尾店</a>',
    "show":false
};
options[4]={
    "lat":35.683266,
    "lon":139.681642,
    "title":"ペットホテル",
    "pinColor":"#80000",
    "height":300,
    "width":320,
    "description": '<a href="https://oakmont.jp/">Oakmont 初台店</a>',
    "show":false
};
options[5]={
    "lat":35.644187,
    "lon":139.718618,
    "title":"ペットホテル",
    "pinColor":"#80000",
    "height":300,
    "width":320,
    "description": '<a href="http://dogspalace.jp/">Dogs Palace</a>',
    "show":false
};
options[6]={
    "lat":35.642697,
    "lon":139.711937,
    "title":"ペットホテル",
    "pinColor":"#80000",
    "height":300,
    "width":320,
    "description": '<a href="https://andycafe.com/">Andy Cafe 恵比寿店</a>',
    "show":false
};
options[7]={
    "lat":35.678211,
    "lon":139.692188,
    "title":"ペットホテル",
    "pinColor":"#80000",
    "height":300,
    "width":320,
    "description": '<a href="https://furifuridogs.com/">furifuri 参宮橋</a>',
    "show":false
};
options[8]={
    "lat":35.646303,
    "lon":139.703164,
    "title":"ペットホテル",
    "pinColor":"#80000",
    "height":300,
    "width":320,
    "description": '<a href="http://www.daikanyama-pc.com/">代官山ペットクリニック</a>',
    "show":false
};
options[9]={
    "lat":35.679866,
    "lon":139.687652,
    "title":"ペットホテル",
    "pinColor":"#80000",
    "height":300,
    "width":320,
    "description": '<a href="https://blipara.com/">ペットサロン Bliss of Paradise</a>',
    "show":false
};
options[10]={
    "lat":35.683784,
    "lon":139.682503,
    "title":"ペットホテル",
    "pinColor":"#80000",
    "height":300,
    "width":320,
    "description": '<a href="https://plusbell.com/">ドッグビューティーサロン Plus Bell</a>',
    "show":false
};
options[11]={
    "lat":35.674283,
    "lon":139.680363,
    "title":"ペットホテル",
    "pinColor":"#80000",
    "height":300,
    "width":320,
    "description": '<a href="https://www.tsuchida-ah.com/">土田動物病院</a>',
    "show":false
};
options[12]={
    "lat":35.679853,
    "lon":139.694216,
    "title":"ペットホテル",
    "pinColor":"#80000",
    "height":300,
    "width":320,
    "description": '<a href="https://www.reef-vet.com/">リーフ動物病院</a>',
    "show":false
};
options[13]={
    "lat":35.673068,
    "lon":139.666497,
    "title":"ペットホテル",
    "pinColor":"#80000",
    "height":300,
    "width":320,
    "description": '<a href="https://www.allieys.com/">アリーズ動物病院</a>',
    "show":false
};
options[14]={
    "lat":35.682241,
    "lon":139.695742,
    "title":"ペットホテル",
    "pinColor":"#80000",
    "height":300,
    "width":320,
    "description": '<a href="https://www.celebre.co.jp/">セレブル動物病院</a>',
    "show":false
};
options[15]={
    "lat":35.680454,
    "lon":139.669943,
    "title":"ペットホテル",
    "pinColor":"#80000",
    "height":300,
    "width":320,
    "description": '<a href="http://www.takama-ah.com/">タカマ動物病院</a>',
    "show":false
};
options[16]={
    "lat":35.652591,
    "lon":139.713567,
    "title":"ペットホテル",
    "pinColor":"#80000",
    "height":300,
    "width":320,
    "description": '<a href="https://doyupetclinic.com/">どうゆうペットクリニック</a>',
    "show":false
};
options[17]={
    "lat":35.674118,
    "lon":139.674222,
    "title":"ペットホテル",
    "pinColor":"#80000",
    "height":300,
    "width":320,
    "description": '<a href="http://lovergoose.com/">pet house goose</a>',
    "show":false
};
options[18]={
    "lat":35.64954,
    "lon":139.704441,
    "title":"ペットホテル",
    "pinColor":"#80000",
    "height":300,
    "width":320,
    "description": '<a href="https://www.amulet-japan.com/">ペットショップ Amulet 代官山店</a>',
    "show":false
};
options[19]={
    "lat":35.677941,
    "lon":139.68705,
    "title":"ペットホテル",
    "pinColor":"#80000",
    "height":300,
    "width":320,
    "description": '<a href="https://peter-vet.com/">ペーター動物病院</a>',
    "show":false
};
options[20]={
    "lat":35.663981,
    "lon":139.693757,
    "title":"ペットホテル",
    "pinColor":"#80000",
    "height":300,
    "width":320,
    "description": '<a href="https://shibuya-inuneko-hospital.com/">渋谷犬猫病院</a>',
    "show":false
};
options[21]={
    "lat":35.648876,
    "lon":139.720602,
    "title":"ペットホテル",
    "pinColor":"#80000",
    "height":300,
    "width":320,
    "description": '<a href="http://grooming-tail.com/">grooming tail</a>',
    "show":false
};
options[22]={
    "lat":35.658809,
    "lon":139.697063,
    "title":"ペットホテル",
    "pinColor":"#80000",
    "height":300,
    "width":320,
    "description": '<a href="https://lulu-shibuya.net/">道玄坂 LuLu PET CLINIC</a>',
    "show":false
};
options[23]={
    "lat":35.673474,
    "lon":139.665019,
    "title":"ペットホテル",
    "pinColor":"#80000",
    "height":300,
    "width":320,
    "description": '<a href="https://andycafe.com/">Andy Cafe 笹塚店</a>',
    "show":false
};
options[24]={
    "lat":35.644555,
    "lon":139.715922,
    "title":"ペットホテル",
    "pinColor":"#80000",
    "height":300,
    "width":320,
    "description": '<a href="http://www.clover-a-h.com/">クローバー動物病院</a>',
    "show":false
};
options[25]={
    "lat":35.656954,
    "lon":139.704929,
    "title":"ペットホテル",
    "pinColor":"#80000",
    "height":300,
    "width":320,
    "description": '<a href="http://www.sjd.co.jp/hospital/">SHIBUYA フレンズ動物病院</a>',
    "show":false
};
options[26]={
    "lat":35.672694,
    "lon":139.691118,
    "title":"ペットホテル",
    "pinColor":"#80000",
    "height":300,
    "width":320,
    "description": '<a href="https://www.hospital-yoyogi.com/">LINDO 代々木公園犬猫病院</a>',
    "show":false
};
options[27]={
    "lat":35.673944,
    "lon":139.671937,
    "title":"ペットホテル",
    "pinColor":"#80000",
    "height":300,
    "width":320,
    "description": '<a href="https://sasazuka.fennel-ah.com/">フェンネル動物病院 笹塚本院</a>',
    "show":false
};
options[28]={
    "lat":35.665455,
    "lon":139.688226,
    "title":"ペットホテル",
    "pinColor":"#80000",
    "height":300,
    "width":320,
    "description": '<a href="http://www.daktari.gr.jp/">ダクタリ動物病院</a>',
    "show":false
};
options[29]={
    "lat":35.678046,
    "lon":139.705597,
    "title":"ペットホテル",
    "pinColor":"#80000",
    "height":300,
    "width":320,
    "description": '<a href="http://gaburi.info/">トリミングペットサロン GABURI</a>',
    "show":false
};

  map.infoboxLayers(options,true);
};


