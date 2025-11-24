const POKEMON_NAMES_CSV_RAW = `pokemonId,en,ja,fr,de,es,it,ko,zh_HK,zh
1,Bulbasaur,フシギダネ,Bulbizarre,Bisasam,Bulbasaur,Bulbasaur,이상해씨,妙蛙種子,妙蛙种子
2,Ivysaur,フシギソウ,Herbizarre,Bisaknosp,Ivysaur,Ivysaur,이상해풀,妙蛙草,妙蛙草
3,Venusaur,フシギバナ,Florizarre,Bisaflor,Venusaur,Venusaur,이상해꽃,妙蛙花,妙蛙花
4,Charmander,ヒトカゲ,Salamèche,Glumanda,Charmander,Charmander,파이리,小火龍,小火龙
5,Charmeleon,リザード,Reptincel,Glutexo,Charmeleon,Charmeleon,리자드,火恐龍,火恐龙
6,Charizard,リザードン,Dracaufeu,Glurak,Charizard,Charizard,리자몽,噴火龍,喷火龙
7,Squirtle,ゼニガメ,Carapuce,Schiggy,Squirtle,Squirtle,꼬부기,傑尼龜,杰尼龟
8,Wartortle,カメール,Carabaffe,Schillok,Wartortle,Wartortle,어니부기,卡咪龜,卡咪龟
9,Blastoise,カメックス,Tortank,Turtok,Blastoise,Blastoise,거북왕,水箭龜,水箭龟
10,Caterpie,キャタピー,Chenipan,Raupy,Caterpie,Caterpie,캐터피,綠毛蟲,绿毛虫
11,Metapod,トランセル,Chrysacier,Safcon,Metapod,Metapod,단데기,鐵甲蛹,铁甲蛹
12,Butterfree,バタフリー,Papilusion,Smettbo,Butterfree,Butterfree,버터플,巴大蝶,巴大蝶
13,Weedle,ビードル,Aspicot,Hornliu,Weedle,Weedle,뿔충이,獨角蟲,独角虫
14,Kakuna,コクーン,Coconfort,Kokuna,Kakuna,Kakuna,딱충이,獨角蟲,独角虫
15,Beedrill,スピアー,Dardargnan,Bibor,Beedrill,Beedrill,독침붕,大针蜂,大针蜂
16,Pidgey,ポッポ,Roucool,Taubsi,Pidgey,Pidgey,구구,波波,波波
17,Pidgeotto,ピジョン,Roucoups,Tauboga,Pidgeotto,Pidgeotto,피죤,比比鳥,比比鸟
18,Pidgeot,ピジョット,Roucarnage,Tauboss,Pidgeot,Pidgeot,피죤투,大比鳥,大比鸟
19,Rattata,コラッタ,Rattata,Rattfratz,Rattata,Rattata,꼬렛,小拉達,小拉达
20,Raticate,ラッタ,Rattatac,Rattikarl,Raticate,Raticate,레트라,拉達,拉达
21,Spearow,オニスズメ,Piafabec,Habitak,Spearow,Spearow,깨비참,烈雀,烈雀
22,Fearow,オニドリル,Rapasdepic,Ibitak,Fearow,Fearow,깨비드릴조,大嘴雀,大嘴雀
23,Ekans,アーボ,Abo,Rettan,Ekans,Ekans,아보,阿柏蛇,阿柏蛇
24,Arbok,アーボック,Arbok,Arbok,Arbok,Arbok,아보크,阿柏怪,阿柏怪
25,Pikachu,ピカチュウ,Pikachu,Pikachu,Pikachu,Pikachu,피카츄,皮卡丘,皮卡丘
26,Raichu,ライチュウ,Raichu,Raichu,Raichu,Raichu,라이츄,雷丘,雷丘
27,Sandshrew,サンド,Sabelette,Sandan,Sandshrew,Sandshrew,모래두지,穿山鼠,穿山鼠
28,Sandslash,サンドパン,Sablaireau,Sandamer,Sandslash,Sandslash,고지,穿山王,穿山王
29,Nidoran♀,ニドラン♀,Nidoran♀,Nidoran♀,Nidoran♀,Nidoran♀,니드런♀,尼多蘭,尼多兰
30,Nidorina,ニドリーナ,Nidorina,Nidorina,Nidorina,Nidorina,니드리나,尼多娜,尼多娜
31,Nidoqueen,ニドクイン,Nidoqueen,Nidoqueen,Nidoqueen,Nidoqueen,니드퀸,尼多后,尼多后
32,Nidoran♂,ニドラン♂,Nidoran♂,Nidoran♂,Nidoran♂,Nidoran♂,니드런♂,尼多朗,尼多朗
33,Nidorino,ニドリーノ,Nidorino,Nidorino,Nidorino,Nidorino,니드리노,尼多力諾,尼多力诺
34,Nidoking,ニドキング,Nidoking,Nidoking,Nidoking,Nidoking,니드킹,尼多王,尼多王
35,Clefairy,ピッピ,Mélofée,Piepi,Clefairy,Clefairy,삐삐,皮皮,皮皮
36,Clefable,ピクシー,Mélodelfe,Pixi,Clefable,Clefable,픽시,皮可西,皮可西
37,Vulpix,ロコン,Goupix,Vulpix,Vulpix,Vulpix,식스테일,六尾,六尾
38,Ninetales,キュウコン,Feunard,Vulnona,Ninetales,Ninetales,나인테일,九尾,九尾
39,Jigglypuff,プリン,Rondoudou,Pummeluff,Jigglypuff,Jigglypuff,푸린,胖丁,胖丁
40,Wigglytuff,プクリン,Grodoudou,Knuddeluff,Wigglytuff,Wigglytuff,푸크린,胖可丁,胖可丁
41,Zubat,ズバット,Nosferapti,Zubat,Zubat,Zubat,주뱃,超音蝠,超音蝠
42,Golbat,ゴルバット,Nosferalto,Golbat,Golbat,Golbat,골뱃,大嘴蝠,大嘴蝠
43,Oddish,ナゾノクサ,Mystherbe,Myrapla,Oddish,Oddish,뚜벅쵸,走路草,走路草
44,Gloom,クサイハナ,Ortide,Duflor,Gloom,Gloom,냄새꼬,臭臭花,臭臭花
45,Vileplume,ラフレシア,Rafflesia,Giflor,Vileplume,Vileplume,라플레시아,霸王花,霸王花
46,Paras,パラス,Paras,Paras,Paras,Paras,파라스,派拉斯,派拉斯
47,Parasect,パラセクト,Parasect,Parasek,Parasect,Parasect,파라섹트,派拉斯特,派拉斯特
48,Venonat,コンパン,Mimitoss,Bluzuk,Venonat,Venonat,콘팡,毛球,毛球
49,Venomoth,モルフォン,Aéromite,Omot,Venomoth,Venomoth,도나리,摩魯蛾,摩鲁蛾
50,Diglett,ヂィグダ,Taupiqueur,Digda,Diglett,Diglett,디그다,地鼠,地鼠
51,Dugtrio,ダグトリオ,Triopikeur,Digdri,Dugtrio,Dugtrio,닥트리오,三地鼠,三地鼠
52,Meowth,ニャース,Miaouss,Mauzi,Meowth,Meowth,나옹,喵喵,喵喵
53,Persian,ペルシアン,Persian,Snobilikat,Persian,Persian,페르시온,貓老大,貓老大
54,Psyduck,コダック,Psykokwak,Enton,Psyduck,Psyduck,고라파덕,可達鴨,可达鸭
55,Golduck,ゴルダック,Akwakwak,Entoron,Golduck,Golduck,골덕,哥達鴨,哥达鸭
56,Mankey,マンキー,Férosinge,Mankey,Mankey,Mankey,망키,猴怪,猴怪
57,Primeape,オコリザル,Colosinge,Rasaff,Primeape,Primeape,성원숭,火爆猴,火爆猴
58,Growlithe,ガーヂィ,Caninos,Fuakno,Growlithe,Growlithe,가디,卡蒂狗,卡蒂狗
59,Arcanine,ウインヂィ,Arcanin,Arkani,Arcanine,Arcanine,윈디,風速狗,风速狗
60,Poliwag,ニョロモ,Ptitard,Quapsel,Poliwag,Poliwag,발챙이,蚊香蝌蚪,蚊香蝌蚪
61,Poliwhirl,ニョロゾ,Têtarte,Quaputzi,Poliwhirl,Poliwhirl,슈륙챙이,蚊香君,蚊香君
62,Poliwrath,ニョロボン,Tartard,Quappo,Poliwrath,Poliwrath,강챙이,蚊香泳士,蚊香泳士
63,Abra,ケーシィ,Abra,Abra,Abra,Abra,캐이시,凱西,凯西
64,Kadabra,ユンゲラー,Kadabra,Kadabra,Kadabra,Kadabra,윤겔라,勇基拉,勇基拉
65,Alakazam,フーヂィン,Alakazam,Simsala,Alakazam,Alakazam,후디,胡地,胡地
66,Machop,ワンリキー,Machoc,Machollo,Machop,Machop,알통몬,腕力,腕力
67,Machoke,ゴーリキー,Machopeur,Maschock,Machoke,Machoke,근육몬,豪力,豪力
68,Machamp,カイリキー,Mackogneur,Machomei,Machamp,Machamp,괴력몬,怪力,怪力
69,Bellsprout,マダツボミ,Chétiflor,Knofensa,Bellsprout,Bellsprout,모다피,喇叭芽,喇叭芽
70,Weepinbell,ウツドン,Boustiflor,Ultrigaria,Weepinbell,Weepinbell,우츠동,口呆花,口呆花
71,Victreebel,ウツボット,Empiflor,Sarzenia,Victreebel,Victreebel,우츠보트,大食花,大食花
72,Tentacool,メノクラゲ,Tentacool,Tentacha,Tentacool,Tentacool,왕눈해,瑪瑙水母,玛瑙水母
73,Tentacruel,ドククラゲ,Tentacruel,Tentoxa,Tentacruel,Tentacruel,독파리,毒刺水母,毒刺水母
74,Geodude,イシツブテ,Racaillou,Kleinstein,Geodude,Geodude,꼬마돌,小拳石,小拳石
75,Graveler,ゴローン,Gravalanch,Georok,Graveler,Graveler,데구리,隆隆石,隆隆石
76,Golem,ゴローニャ,Grolem,Geowaz,Golem,Golem,딱구리,隆隆岩,隆隆岩
77,Ponyta,ポニータ,Ponyta,Ponyta,Ponyta,Ponyta,포니타,小火馬,小火马
78,Rapidash,ギャロップ,Galopa,Gallopa,Rapidash,Rapidash,날쌩마,烈焰馬,烈焰马
79,Slowpoke,ヤドン,Ramoloss,Flegmon,Slowpoke,Slowpoke,야돈,呆呆獸,呆呆兽
80,Slowbro,ヤドラン,Flagadoss,Lahmus,Slowbro,Slowbro,야도란,呆殼獸,呆壳兽
81,Magnemite,コイル,Magnéti,Magnetilo,Magnemite,Magnemite,코일,小磁怪,小磁怪
82,Magneton,レアコイル,Magnéton,Magneton,Magneton,Magneton,레어코일,三合一磁怪,三合一磁怪
83,Farfetch'd,カモネギ,Canarticho,Porenta,Farfetch'd,Farfetch'd,파오리,大蔥鴨,大葱鸭
84,Doduo,ドードー,Doduo,Dodu,Doduo,Doduo,두두,嘟嘟,嘟嘟
85,Dodrio,ドードリオ,Dodrio,Dodri,Dodrio,Dodrio,두트리오,嘟嘟利,嘟嘟利
86,Seel,パウワウ,Otaria,Jurob,Seel,Seel,쥬쥬,小海獅,小海狮
87,Dewgong,ジュゴン,Lamantine,Jugong,Dewgong,Dewgong,쥬레곤,白海獅,白海狮
88,Grimer,ベトベター,Tadmorv,Sleima,Grimer,Grimer,질퍽이,臭泥,臭泥
89,Muk,ベトベトン,Grotadmorv,Sleimok,Muk,Muk,질뻐기,臭臭泥,臭臭泥
90,Shellder,シェルダー,Kokiyas,Muschas,Shellder,Shellder,셀러,大舌貝,大舌贝
91,Cloyster,パルシェン,Crustabri,Austos,Cloyster,Cloyster,파르셀,刺甲貝,刺甲贝
92,Gastly,ゴース,Fantominus,Nebulak,Gastly,Gastly,고오스,鬼斯,鬼斯
93,Haunter,ゴースト,Spectrum,Apollo,Haunter,Haunter,고우스트,鬼斯通,鬼斯通
94,Gengar,ゲンガー,Ectoplasma,Gengar,Gengar,Gengar,팬텀,耿鬼,耿鬼
95,Onix,イワーク,Onix,Onix,Onix,Onix,롱스톤,大岩蛇,大岩蛇
96,Drowzee,スリープ,Soporifik,Traumato,Drowzee,Drowzee,슬리프,催眠貘,催眠貘
97,Hypno,スリーパー,Hypnomade,Hypno,Hypno,Hypno,슬리퍼,引夢貘人,引梦貘人
98,Krabby,クラブ,Krabby,Krabby,Krabby,Krabby,크랩,大鉗蟹,大钳蟹
99,Kingler,キングラー,Krabboss,Kingler,Kingler,Kingler,킹크랩,巨鉗蟹,巨钳蟹
100,Voltorb,ビリリダマ,Voltorbe,Voltobal,Voltorb,Voltorb,찌리리공,霹靂電球,霹雳电球
101,Electrode,マルマリン,Électrode,Lektrobal,Electrode,Electrode,붐볼,頑皮雷彈,顽皮雷弹
102,Exeggcute,タマタマ,Noeunoeuf,Owei,Exeggcute,Exeggcute,아라리,蛋蛋,蛋蛋
103,Exeggutor,ナッシー,Noadkoko,Kokowei,Exeggutor,Exeggutor,나시,椰蛋樹,椰蛋树
104,Cubone,カラカラ,Osselait,Tragosso,Cubone,Cubone,탕구리,卡拉卡拉,卡拉卡拉
105,Marowak,ガラガラ,Ossatueur,Knogga,Marowak,Marowak,텅구리,嘎啦嘎啦,嘎啦嘎啦
106,Hitmonlee,サワムラー,Kicklee,Kicklee,Hitmonlee,Hitmonlee,시라소몬,飛腿郎,飞腿郎
107,Hitmonchan,エビワラー,Tygnon,Nokchan,Hitmonchan,Hitmonchan,홍수몬,快拳郎,快拳郎
108,Lickitung,ベロリンガ,Excelangue,Schlurp,Lickitung,Lickitung,내루미,大舌頭,大舌头
109,Koffing,ドガース,Smogo,Smogon,Koffing,Koffing,또가스,瓦斯彈,瓦斯弹
110,Weezing,マタドカース,Smogogo,Smogmog,Weezing,Weezing,또도가스,雙彈瓦斯,双弹瓦斯
111,Rhyhorn,サイホーン,Rhinocorne,Rihorn,Rhyhorn,Rhyhorn,뿔카노,獨角犀牛,独角犀牛
112,Rhydon,サイドン,Rhinoféros,Rizeros,Rhydon,Rhydon,코뿌리,鑽角犀獸,钻角犀兽
113,Chansey,ラッキ,Leveinard,Chaneira,Chansey,Chansey,럭키,吉利蛋,吉利蛋
114,Tangela,モンジャラ,Saquedeneu,Tangela,Tangela,Tangela,덩구리,蔓藤怪,蔓藤怪
115,Kangaskhan,ガルーラ,Kangourex,Kangama,Kangaskhan,Kangaskhan,캥카,袋獸,袋兽
116,Horsea,タッツー,Hypotrempe,Seeper,Horsea,Horsea,쏘드라,墨海馬,墨海马
117,Seadra,シードラ,Hypocéan,Seemon,Seadra,Seadra,시드라,海刺龍,海刺龙
118,Goldeen,トサキント,Poissirène,Goldini,Goldeen,Goldeen,콘치,角金魚,角金鱼
119,Seaking,アズマオウ,Poissoroy,Golking,Seaking,Seaking,왕콘치,金魚王,金鱼王
120,Staryu,ヒトデマン,Stari,Sterndu,Staryu,Staryu,별가사리,海星星,海星星
121,Starmie,スターミー,Staross,Starmie,Starmie,Starmie,아쿠스타,寶石海星,宝石海星
122,Mr. Mime,バリヤード,M. Mime,Pantimos,Mr. Mime,Mr. Mime,마임맨,魔牆人偶,魔墙人偶
123,Scyther,ストライク,Insécateur,Sichlor,Scyther,Scyther,스라크,飛天螳螂,飞天螳螂
124,Jynx,ルージュラ,Lippoutou,Rossana,Jynx,Jynx,루주라,迷唇姐,迷唇姐
125,Electabuzz,エレブー,Élektek,Elektek,Electabuzz,Electabuzz,에레브,電擊獸,电击兽
126,Magmar,ブーバー,Magmar,Magmar,Magmar,Magmar,마그마,鴨嘴火獸,鸭嘴火兽
127,Pinsir,カイロス,Scarabrute,Pinsir,Pinsir,Pinsir,쁘사이저,凱羅斯,凯罗斯
128,Tauros,ケンタロス,Tauros,Tauros,Tauros,Tauros,켄타로스,肯泰羅,肯泰罗
129,Magikarp,コイキング,Magicarpe,Magikarp,Magikarp,Magikarp,잉어킹,鯉魚王,鲤鱼王
130,Gyarados,ギャラドス,Léviator,Garados,Gyarados,Gyarados,갸라도스,暴鯉龍,暴鲤龙
131,Lapras,ラプラス,Lokhlass,Lapras,Lapras,Lapras,라프라스,拉普拉斯,拉普拉斯
132,Ditto,メタモン,Métamorph,Ditto,Ditto,Ditto,메타몽,百變怪,百变怪
133,Eevee,イーブイ,Évoli,Evoli,Eevee,Eevee,이브이,伊布,伊布
134,Vaporeon,シャワーズ,Aquali,Aquana,Vaporeon,Vaporeon,샤미드,水伊布,水伊布
135,Jolteon,サンダース,Voltali,Blitza,Jolteon,Jolteon,쥬피썬더,雷伊布,雷伊布
136,Flareon,ブースター,Pyroli,Flamara,Flareon,Flareon,부스터,火伊布,火伊布
137,Porygon,ポリゴン,Porygon,Porygon,Porygon,Porygon,폴리곤,多邊獸,多边兽
138,Omanyte,オムナイト,Amonita,Amonitas,Omanyte,Omanyte,암나이트,菊石獸,菊石兽
139,Omastar,オムスター,Amonistar,Amoroso,Omastar,Omastar,암스타,多刺菊石獸,多刺菊石兽
140,Kabuto,カブト,Kabuto,Kabuto,Kabuto,Kabuto,투구,化石盔,化石盔
141,Kabutops,カブトプス,Kabutops,Kabutops,Kabutops,Kabutops,투구푸스,鐮刀盔,镰刀盔
142,Aerodactyl,プテラ,Ptéra,Aerodactyl,Aerodactyl,Aerodactyl,프테라,化石翼龍,化石翼龙
143,Snorlax,カビゴン,Ronflex,Relaxo,Snorlax,Snorlax,잠만보,卡比獸,卡比兽
144,Articuno,フリーザー,Artikodin,Arktos,Articuno,Articuno,프리져,急凍鳥,急冻鸟
145,Zapdos,サンダー,Électhor,Zapdos,Zapdos,Zapdos,썬더,閃電鳥,闪电鸟
146,Moltres,ファイヤー,Sulfura,Lavados,Moltres,Moltres,파이어,火焰鳥,火焰鸟
147,Dratini,ミニリュウ,Minidraco,Dratini,Dratini,Dratini,미뇽,迷你龍,迷你龙
148,Dragonair,ハクリュウ,Draco,Dragonir,Dragonair,Dragonair,신뇽,哈克龍,哈克龙
149,Dragonite,カイリュウ,Dracolosse,Dragoran,Dragonite,Dragonite,망나뇽,快龍,快龙
150,Mewtwo,ミュウツー,Mewtwo,Mewtu,Mewtwo,Mewtwo,뮤츠,超夢,超梦
151,Mew,ミュウ,Mew,Mew,Mew,Mew,뮤,夢幻,梦幻
152,Chikorita,チコリータ,Germinion,Endivie,Chikorita,Chikorita,치코리타,菊草葉,菊草叶
153,Bayleef,ベイリーフ,Macronium,Lorblatt,Bayleef,Bayleef,베이리프,月桂葉,月桂叶
154,Meganium,メガニウム,Méganium,Meganie,Meganium,Meganium,메가니움,大竺葵,大竺葵
155,Cyndaquil,ヒノアラシ,Héricendre,Feuriegel,Cyndaquil,Cyndaquil,브케인,火球鼠,火球鼠
156,Quilava,マグマラシ,Feurisson,Igelavar,Quilava,Quilava,마그케인,火岩鼠,火岩鼠
157,Typhlosion,バクフーン,Typhlosion,Tornupto,Typhlosion,Typhlosion,블레이범,火爆獸,火爆兽
158,Totodile,ワニノコ,Kaiminus,Karnimani,Totodile,Totodile,리아코,小鋸鱷,小锯鳄
159,Croconaw,アリゲイツ,Crocrodil,Tyracroc,Croconaw,Croconaw,엘리게이,藍鱷,蓝鳄
160,Feraligatr,オーダイル,Aligatueur,Impergator,Feraligatr,Feraligatr,장크로다일,大力鱷,大力鳄
161,Sentret,オタチ,Fouinette,Wiesor,Sentret,Sentret,꼬리선,尾立,尾立
162,Furret,オオタチ,Fouinar,Wiesenior,Furret,Furret,다꼬리,大尾立,大尾立
163,Hoothoot,ホホーホー,Hoothoot,Hoothoot,Hoothoot,Hoothoot,부우부,咕咕,咕咕
164,Noctowl,ヨルノズク,Noarfang,Noctuh,Noctowl,Noctowl,야부엉,貓頭夜鷹,猫头夜鹰
165,Ledyba,レヂィバ,Coxy,Ledyba,Ledyba,Ledyba,레디바,芭瓢蟲,芭瓢虫
166,Ledian,レヂィアン,Coxyclaque,Ledian,Ledian,Ledian,레디안,安瓢蟲,安瓢虫
167,Spinarak,イトマル,Mimigal,Webarak,Spinarak,Spinarak,페이검,圓絲蛛,圆丝蛛
168,Ariados,アリアドス,Migalos,Ariados,Ariados,Ariados,아리아도스,阿利多斯,阿利多斯
169,Crobat,クロバット,Nostenfer,Iksbat,Crobat,Crobat,크로뱃,叉字蝠,叉字蝠
170,Chinchou,チョンチー,Loupio,Lampi,Chinchou,Chinchou,초라기,燈籠魚,灯笼鱼
171,Lanturn,ランターン,Lanturn,Lanturn,Lanturn,Lanturn,랜턴,電燈怪,电灯怪
172,Pichu,ピチュウ,Pichu,Pichu,Pichu,Pichu,피츄,皮丘,皮丘
173,Cleffa,ピィ,Mélo,Pii,Cleffa,Cleffa,삐,皮寶寶,皮宝宝
174,Igglybuff,ププリン,Toudoudou,Fluffefeluff,Igglybuff,Igglybuff,푸푸린,寶寶丁,宝宝丁
175,Togepi,トゲピー,Togepi,Togepi,Togepi,Togepi,토게피,波克比,波克比
176,Togetic,トゲチック,Togetic,Togetic,Togetic,Togetic,토게틱,波克基古,波克基古
177,Natu,ネイチィ,Natu,Natu,Natu,Natu,네이티,天然雀,天然雀
178,Xatu,ネイチィオ,Xatu,Xatu,Xatu,Xatu,네이티오,天然鳥,天然鸟
179,Mareep,メリープ,Wattouat,Voltilamm,Mareep,Mareep,메리프,咩利羊,咩利羊
180,Flaaffy,モココ,Lainergie,Waaty,Flaaffy,Flaaffy,보송송,茸茸羊,茸茸羊
181,Ampharos,デンリュウ,Pharamp,mpharos,Ampharos,Ampharos,전룡,電龍,电龙
182,Bellossom,キレイハナ,Joliflor,Blubella,Bellossom,Bellossom,아르코,美麗花,美丽花
183,Marill,マリル,Marill,Marill,Marill,Marill,마릴,瑪力露,玛力露
184,Azumarill,マリルリ,Azumarill,Azumarill,Azumarill,Azumarill,마릴리,瑪力露麗,玛力露丽
185,Sudowoodo,ウソッキー,Simularbre,Mogelbaum,Sudowoodo,Sudowoodo,꼬지모,樹才怪,树才怪
186,Politoed,ニョロトノ,Tarpaud,Quaxo,Politoed,Politoed,왕구리,蚊香蛙皇,蚊香蛙皇
187,Hoppip,ハネッコ,Granivol,Hoppspross,Hoppip,Hoppip,통통코,毽子草,毽子草
188,Skiploom,ポポッコ,Floravol,Hubelupf,Skiploom,Skiploom,두코,毽子花,毽子花
189,Jumpluff,ワタッコ,Cotovol,Papungha,Jumpluff,Jumpluff,솜솜코,毽子棉,毽子棉
190,Aipom,エイパム,Capumain,Griffel,Aipom,Aipom,에이팜,長尾怪手,长尾怪手
191,Sunkern,ヒマナッツ,Tournegrain,Sonnkern,Sunkern,Sunkern,해너츠,向日種子,向日种子
192,Sunflora,キミワリ,Héliatronc,Sonflora,Sunflora,Sunflora,해루미,向日花怪,向日花怪
193,Yanma,ヤンヤンマ,Yanma,Yanma,Yanma,Yanma,왕자리,蜻蜻蜓,蜻蜻蜓
194,Wooper,ウパー,Axoloto,Felino,Wooper,Wooper,우파,烏波,乌波
195,Quagsire,ヌオー,Maraiste,Morlord,Quagsire,Quagsire,누오,沼王,沼王
196,Espeon,エーフィ,Mentali,Psiana,Espeon,Espeon,에브이,太陽伊布,太阳伊布
197,Umbreon,ブラッキー,Noctali,Nachtara,Umbreon,Umbreon,블래키,月亮伊布,月亮伊布
198,Murkrow,ヤミカラス,Cornèbre,Kramurx,Murkrow,Murkrow,니로우,黑暗鴉,黑暗鸦
199,Slowking,ヤドキング,Roigada,Laschoking,Slowking,Slowking,야도킹,呆呆王,呆呆王
200,Misdreavus,ムウマ,Feuforève,Traunmagil,Misdreavus,Misdreavus,무우마,夢妖,梦妖
201,Unown,アンノーン,Zarbi,Icognito,Unown,Unown,안농,未知圖騰,未知图腾
202,Wobbuffet,ソーナンス,Qulbutoké,Woingenau,Wobbuffet,Wobbuffet,마자용,果然翁,果然翁
203,Girafarig,キリンリキ,Girafarig,Girafarig,Girafarig,Girafarig,키링키,麒麟奇,麒麟奇
204,Pineco,クヌギダマ,Pomdepik,Tanza,Pineco,Pineco,피콘,榛果球,榛果球
205,Forretress,フォレトス,Foretress,Forstellka,Forretress,Forretress,쏘콘,佛烈托斯,佛烈托斯
206,Dunsparce,ノコッチ,Insolourdo,Dummisel,Dunsparce,Dunsparce,노고치,土龍弟弟,土龙弟弟
207,Gligar,グライガー,Scorplane,Skorgla,Gligar,Gligar,글라이거,天蠍,天蝎
208,Steelix,ハガネール,Steelix,Stahlos,Steelix,Steelix,강철톤,大鋼蛇,大钢蛇
209,Snubbull,ブルー,Snubbull,Snubbull,Snubbull,Snubbull,블루,布魯,布鲁
210,Granbull,グランブル,Granbull,Granbull,Granbull,Granbull,그랑블루,布魯皇,布鲁皇
211,Qwilfish,ハリーセン,Qwilfish,Baldorfish,Qwilfish,Qwilfish,침바루,千針魚,千针鱼
212,Scizor,ハッサム,Cizayox,Scherox,Scizor,Scizor,핫삼나,巨鉗螳螂,巨钳螳螂
213,Shuckle,ツボツボ,Caratroc,Pottrott,Shuckle,Shuckle,단단지,壺壺,壶壶
214,Heracross,ヘラクロス,Scarhino,Skarabon,Heracross,Heracross,헤라크로스,赫拉克羅斯,赫拉克罗斯
215,Sneasel,ニューラ,Farfuret,Sniebel,Sneasel,Sneasel,포푸니,狃拉,狃拉
216,Teddiursa,ヒメグマ,Teddiursa,Teddiursa,Teddiursa,Teddiursa,깜지곰,熊寶寶,熊宝宝
217,Ursaring,リングマ,Ursaring,Ursaring,Ursaring,Ursaring,링곰,圈圈熊,圈圈熊
218,Slugma,マグマッグ,Limagma,Schneckmag,Slugma,Slugma,마그마그,熔岩蟲,熔岩虫
219,Magcargo,マグカルゴ,Volcaropod,Magcargo,Magcargo,Magcargo,마그카르고,熔岩蝸牛,熔岩蜗牛
220,Swinub,ウリムー,Marcacrin,Quiekel,Swinub,Swinub,꾸꾸리,小山豬,小山猪
221,Piloswine,イノムー,Cochignon,Keifel,Piloswine,Piloswine,메꾸리,長毛豬,长毛猪
222,Corsola,サニーゴ,Corayon,Corasonn,Corsola,Corsola,코산호,太陽珊瑚,太阳珊瑚
223,Remoraid,テッポウオ,Rémoraid,Remoraid,Remoraid,Remoraid,총어,鐵炮魚,铁炮鱼
224,Octillery,オクタン,Octillery,Octillery,Octillery,Octillery,대포무노,章魚桶,章鱼桶
225,Delibird,デリバード,Cadoizo,Botogel,Delibird,Delibird,딜리버드,信使鳥,信使鸟
226,Mantine,マンタイン,Démanta,mantax,Mantine,Mantine,만타인,巨翅飛魚,巨翅飞鱼
227,Skarmory,エアームド,Airmure,Panzaeron,Skarmory,Skarmory,무장조,盔甲鳥,盔甲鸟
228,Houndoor,デルビル,Malosse,Hunduster,Houndoor,Houndoor,델빌,戴魯比,戴鲁比
229,Houndoom,ヘルガー,Démolosse,Hundemon,Houndoom,Houndoom,헬가,黑魯加,黑鲁加
230,Kingdra,キングドラ,Hyporoi,Seedraking,Kingdra,Kingdra,킹드라,刺龍王,刺龙王
231,Phanpy,ゴマゾウ,Phanpy,Phanpy,Phanpy,Phanpy,코코리,小小象,小小象
232,Donphan,ドンファン,Donphan,Donphan,Donphan,Donphan,코리갑,頓甲,顿甲
233,Porygon2,ポリゴン２,Porygon2,Porygon2,Porygon2,Porygon2,폴리곤２,多邊獸Ⅱ,多边兽２型
234,Stantler,オドシシ,Cerfrousse,Damhirplex,Stantler,Stantler,노라키,驚角鹿,惊角鹿
235,Smeargle,ドーブル,Queulorior,Farbeagle,Smeargle,Smeargle,루브도,圖圖犬,图图犬
236,Tyrogue,バルキー,Debugant,Rabauz,Tyrogue,Tyrogue,배루키,無畏小子,无畏小子
237,Hitmontop,カポエラー,Kapoera,Kapoera,Hitmontop,Hitmontop,카포에라,戰舞郎,战舞郎
238,Smoochum,ムチュール,Lippouti,Kussilla,Smoochum,Smoochum,뽀뽀라,迷唇娃,迷唇娃
239,Elekid,エレキッド,Élékid,Elekid,Elekid,Elekid,에레키드,電擊怪,电击怪
240,Magby,ブビィ,Magby,Magby,Magby,Magby,마그비,鴨嘴寶寶,鸭嘴宝宝
241,Miltank,ミルタンク,Écrémeuh,Miltank,Miltank,Miltank,밀탱크,大奶罐,大奶罐
242,Blissey,ハピナス,Leuphorie,Heiteira,Blissey,Blissey,해피너스,幸福蛋,幸福蛋
243,Raikou,ライコウ,Raikou,Raikou,Raikou,Raikou,라이코,雷公,雷公
244,Entei,エンテイ,Entei,Entei,Entei,Entei,앤테이,炎帝,炎帝
245,Suicune,スイクン,Suicune,Suicune,Suicune,Suicune,앤테이,水君,水君
246,Larvitar,ヨーギラス,Embrylex,Larvitar,Larvitar,Larvitar,애버라스,幼基拉斯,幼基拉斯
247,Pupitar,サナギラス,Ymphect,Pupitar,Pupitar,Pupitar,데기라스,沙基拉斯,沙基拉斯
248,Tyranitar,バンギラス,Tyranocif,Despotar,Tyranitar,Tyranitar,마기라스,班基拉斯,班基拉斯
249,Lugia,ルギア,Lugia,Lugia,Lugia,Lugia,루기아,洛奇亞,洛奇亚
250,Ho-Oh,ホウオウ,Ho-Oh,Ho-Oh,Ho-Oh,Ho-Oh,칠색조,鳳王,凤王
251,Celebi,セリビィ,Celebi,Celebi,Celebi,Celebi,세레비,時拉比,时拉比
252,Treecko,キモリ,Arcko,Geckabor,Treecko,Treecko,나무지기,木守宮,木守宫
253,Grovyle,ジュプトル,Massko,Reptain,Grovyle,Grovyle,나무돌이,森林蜥蜴,森林蜥蜴
254,Sceptile,ジュカイン,Jungko,Gewaldro,Sceptile,Sceptile,나무킹,蜥蜴王,蜥蜴王
255,Torchic,アチャモ,Poussifeu,Flemmli,Torchic,Torchic,아차모,火稚雞,火稚鸡
256,Combusken,ワカシャモ,Galifeu,Jungglut,Combusken,Combusken,영치코,力壯雞,力壮鸡
257,Blaziken,バシャーモ,Braségali,Lohgock,Blaziken,Blaziken,번치코,火焰雞,火焰鸡
258,Mudkip,ミズゴロウ,Gobou,Hydropi,Mudkip,Mudkip,물짱이,水躍魚,水跃鱼
259,Marshtomp,ヌマクロー,Flobio,Moorabble,Marshtomp,Marshtomp,늪짱이,沼躍魚,沼跃鱼
260,Swampert,ラグラージ,Laggron,Sumpex,Swampert,Swampert,대짱이,巨沼怪,巨沼怪
261,Poochyena,ポチエナ,Medhyèna,Fiffyen,Poochyena,Poochyena,포챠나,土狼犬,土狼犬
262,Mightyena,グラエナ,Grahyèna,Magnayen,Mightyena,Mightyena,그라에나,大狼犬,大狼犬
263,Zigzagoon,ジグザグマ,Zigzaton,Zigzachs,Zigzagoon,Zigzagoon,지그제구리,蛇紋熊,蛇纹熊
264,Linoone,マッスグマ,Linéon,Geradaks,Linoone,Linoone,직구리,直衝熊,直冲熊
265,Wurmple,ケムッソ,Chenipotte,Waumpel,Wurmple,Wurmple,개무소,刺尾蟲,刺尾虫
266,Silcoon,カラサリス,Armulys,Schaloko,Silcoon,Silcoon,실쿤,甲殼繭,甲壳茧
267,Beautifly,アゲハント,Charmillon,Papinella,Beautifly,Beautifly,뷰티플라이,狩獵鳳蝶,狩猎凤蝶
268,Cascoon,マユルド,Blindalys,Panekon,Cascoon,Cascoon,카스쿤,盾甲繭,盾甲茧
269,Dustox,ドクケイル,Papinox,Pudox,Dustox,Dustox,독케일,毒粉蛾,毒粉蛾
270,Lotad,ハスボー,Nénupiot,Loturzel,Lotad,Lotad,연꽃몬,蓮葉童子,莲叶童子
271,Lombre,ハスブレロ,Lombre,Lombrero,Lombre,Lombre,로토스,蓮帽小童,莲帽小童
272,Ludicolo,ルンパッパ,Ludicolo,Kappalores,Ludicolo,Ludicolo,로파파,樂天河童,乐天河童
273,Seedot,タネボー,Grainipiot,Samurzel,Seedot,Seedot,도토링,橡實果,橡实果
274,Nuzleaf,コノハナ,Pifeuil,Blanas,Nuzleaf,Nuzleaf,잎새코,長鼻葉,长鼻叶
275,Shiftry,ダーテング,Tengalice,Tengulist,Shiftry,Shiftry,다탱구,狡猾天狗,狡猾天狗
276,Tailow,スバメ,Nirondelle,Schwalbini,Tailow,Tailow,테일로,傲骨燕,傲骨燕
277,Swellow,オオスバメ,Hélédelle,Schwalboss,Swellow,Swellow,스왈로,大王燕,大王燕
278,Wingull,キャモメ,Goélise,Wingull,Wingull,Wingull,갈모매,長翅鷗,长翅鸥
279,Pelipper,ペリッパー,Bekipan,Pelipper,Pelipper,Pelipper,패리퍼,大嘴鷗,大嘴鸥
280,Ralts,ラルトス,Tarsal,Trasla,Ralts,Ralts,랄토스,拉魯拉絲,拉鲁拉丝
281,Kirlia,キルリア,Kirlia,Kirlia,Kirlia,Kirlia,킬리아,奇魯莉安,奇鲁莉安
282,Gardevoir,サーナイト,Gardevoir,Guardevoir,Gardevoir,Gardevoir,가디안,沙奈朵,沙奈朵
283,Surskit,アメタマ,Arakdo,Gehweiher,Surskit,Surskit,비구술,溜溜糖球,溜溜糖球
284,Masquerain,アメモース,Maskadra,Maskeregen,Masquerain,Masquerain,비나방,雨翅蛾,雨翅蛾
285,Shroomish,キノココ,Balignon,Knilz,Shroomish,Shroomish,버섯꼬,蘑蘑菇,蘑蘑菇
286,Breloom,キノガッサ,Chapignon,Kapilz,Breloom,Breloom,버섯모,斗笠菇,斗笠菇
287,Slakoth,ナマケロ,Parecool,Bummelz,Slakoth,Slakoth,게을로,懶人獺,懒人獭
288,Vigoroth,ヤルキモノ,Vigoroth,Muntier,Vigoroth,Vigoroth,발바로,過動猿,过动猿
289,Slaking,ケッキング,Monaflèmit,Letarking,Slaking,Slaking,게을킹,請假王,请假王
290,Nincada,ツチニン,Ningale,Nincada,Nincada,Nincada,토중몬,土居忍士,土居忍士
291,Ninjask,テッカニン,Ninjask,Ninjask,Ninjask,Ninjask,아이스크,鐵面忍者,铁面忍者
292,Shedinja,ヌケニン,Munja,Ninjatom,Shedinja,Shedinja,껍질몬,脫殼忍者,脱壳忍者
293,Whismur,ゴニョニョ,Chuchmur,Flurmel,Whismur,Whismur,소곤룡,咕妞妞,咕妞妞
294,Loudred,ドゴーム,Ramboum,Krakeelo,Loudred,Loudred,노공룡,吼爆彈,吼爆弹
295,Exploud,バクオング,Brouhabam,Krawumms,Exploud,Exploud,폭음룡,爆音怪,爆音怪
296,Makuhita,マクノシタ,Makuhita,Makuhita,Makuhita,Makuhita,마크탕,幕下力士,幕下力士
297,Hariyama,ハリテヤマ,Hariyama,Hariyama,Hariyama,Hariyama,하리뭉,鐵掌力士,铁掌力士
298,Azurill,ルリリ,Azurill,Azurill,Azurill,Azurill,루리리,露力麗,露力丽
299,Nosepass,ノズパス,Tarinor,Nasgnet,Nosepass,Nosepass,코코파스,朝北鼻,朝北鼻
300,Skitty,エネコ,Skitty,Eneco,Skitty,Skitty,에나비,向尾喵,向尾喵
301,Delcatty,エネコロロ,Delcatty,Enekoro,Delcatty,Delcatty,델케티,優雅貓,优雅猫
302,Sableye,ヤミラミ,Ténéfix,Zobiris,Sableye,Sableye,깜까미,勾魂眼,勾魂眼
303,Mawile,クチート,Mysdibule,Flunkifer,Mawile,Mawile,입치트,大嘴娃,大嘴娃
304,Aron,ココドラ,Galekid,Stollunior,Aron,Aron,가보리,可可多拉,可可多拉
305,Lairon,コドラ,Galegon,Stollrak,Lairon,Lairon,갱도라,可多拉,可多拉
306,Aggron,バスゴドラ,Galeking,Stolloss,Aggron,Aggron,보스로라,波士可多拉,波士可多拉
307,Meditite,アサナン,Méditikka,Meditie,Meditite,Meditite,요가랑,瑪沙那,玛沙那
308,Medicham,チャーレム,Charmina,Meditalis,Medicham,Medicham,요가램,恰雷姆,恰雷姆
309,Electrike,ラクライ,Dynavolt,Frizelbliz,Electrike,Electrike,썬더라이,落雷獸,落雷兽
310,Manectric,ライボルト,Élecsprint,Voltenso,Manectric,Manectric,썬더볼트,雷電獸,雷电兽
311,Plusle,プラスル,Posipi,Plusle,Plusle,Plusle,플러시,正電拍拍,正电拍拍
312,Minum,マイナン,Négapi,Minun,Minum,Minum,마이농,負電拍拍,负电拍拍
313,Volbeat,バルビート,Muciole,Volbeat,Volbeat,Volbeat,볼비트,電螢蟲,电萤虫
314,Illumise,イルミーゼ,Lumivole,Illumise,Illumise,Illumise,네오비트,甜甜螢,甜甜萤
315,Roselia,ロゼリア,Rosélia,Roselia,Roselia,Roselia,로젤리아,毒薔薇,毒蔷薇
316,Gulpin,ゴクリン,Gloupti,Schluppuck,Gulpin,Gulpin,꼴깍몬,溶食獸,溶食兽
317,Swalot,マルノーム,Avaltout,Schluckwech,Swalot,Swalot,꿀꺽몬,吞食獸,吞食兽
318,Carvanha,キバニア,Carvanha,kanivanha,Carvanha,Carvanha,샤프니아,吞食獸,吞食兽
319,Sharpedo,サメハダー,Sharpedo,Tohaido,Sharpedo,Sharpedo,샤크니아,巨牙鯊,巨牙鲨
320,Wailmer,ホエルコ,Wailmer,Wailmer,Wailmer,Wailmer,고래왕자,吼吼鯨,吼吼鲸
321,Wailord,ホエルオー,Wailord,Wailord,Wailord,Wailord,고래왕자,吼鯨王,吼鲸王
322,Numel,ドンメル,Chamallot,Camaub,Numel,Numel,둔타,呆火駝,呆火驼
323,Camerupt,バクーダ,Camerupt,Camerupt,Camerupt,Camerupt,폭타,噴火駝,喷火驼
324,Torkoal,コータス,Chartor,Qurtel,Torkoal,Torkoal,코터스,煤炭龜,煤炭龟
325,Spoink,バネブー,Spoink,Spoink,Spoink,Spoink,피그점프,跳跳豬,跳跳猪
326,Grumpig,ブーピッグ,Groret,Groink,Grumpig,Grumpig,피그킹,噗噗豬,噗噗猪
327,Spinda,パッチール,Spinda,Pandir,Spinda,Spinda,얼루기,晃晃斑,晃晃斑
328,Trapinch,ナックラー,Kraknoix,Knacklion,Trapinch,Trapinch,톱치,大顎蟻,大颚蚁
329,Vibrava,ビブラーバ,Vibraninf,Vibrara,Vibrava,Vibrava,비브라바,超音波幼蟲,超音波幼虫
330,Flygon,フライゴン,Libégon,Libelldra,Flygon,Flygon,플라이곤,沙漠蜻蜓,沙漠蜻蜓
331,Cacnea,サボネア,Cacnéa,Tuska,Cacnea,Cacnea,선인왕,刺球仙人掌,刺球仙人掌
332,Cacturne,ノクタス,Cacturne,Noktuska,Cacturne,Cacturne,밤선인,夢歌仙人掌,梦歌仙人掌
333,Swablu,チルット,Tylton,Wablu,Swablu,Swablu,파비코,青綿鳥,青绵鸟
334,Altaria,チルタリス,Altaria,Altaria,Altaria,Altaria,파비코리,七夕青鳥,七夕青鸟
335,Zangoose,ザングース,Mangriff,Sengo,Zangoose,Zangoose,쟝고,貓鼬斬,猫鼬斩
336,Seviper,ハブネーク,Séviper,Vipitis,Seviper,Seviper,세비퍼,飯匙蛇,飯匙蛇
337,Lunatone,ルナトーン,Séléroc,Lunastein,Lunatone,Lunatone,루나톤,月石,月石
338,Solrock,ソルロック,Solaroc,Sonnfel,Solrock,Solrock,솔록,太陽岩,太阳岩
339,Barboach,ドジョッチ,Barloche,Schmerbe,Barboach,Barboach,미꾸리,泥泥鰍,泥泥鳅
340,Whiscash,ナマズン,Barbicha,Welsar,Whiscash,Whiscash,메깅,鯰魚王,鲶鱼王
341,Corphish,ヘイガニ,Écrapince,Krebscorps,Corphish,Corphish,가재군,龍蝦小兵,龙虾小兵
342,Crawdaunt,シザリガー,Colhomard,Krebutack,Crawdaunt,Crawdaunt,가재장군,鐵螯龍蝦,铁螯龙虾
343,Baltoy,ヤジロン,Balbuto,Puppance,Baltoy,Baltoy,오뚝군,天秤偶,天秤偶
344,Claydol,ネンドール,Kaorine,Lepumentas,Claydol,Claydol,점토도리,念力土偶,念力土偶
345,Lileep,リリーヤ,Lilia,Liliep,Lileep,Lileep,릴링,觸手百合,触手百合
346,Cradily,ユレイドル,Vacilys,Wielie,Cradily,Cradily,릴리요,搖籃百合,摇篮百合
347,Anorith,アノプス,Anorith,Anorith,Anorith,Anorith,아노딥스,太古羽蟲,太古羽虫
348,Armaldo,アーマルド,Armaldo,Armaldo,Armaldo,Armaldo,아말도,太古盔甲,太古盔甲
349,Feebas,ヒンバス,Barpau,Barschwa,Feebas,Feebas,빈티나,醜醜魚,丑丑鱼
350,Milotic,ミロカロス,Milobellus,Milotic,Milotic,Milotic,밀로틱,美納斯,美纳斯
351,Castform,ポワルン,Morphéo,Formeo,Castform,Castform,캐스퐁,飄浮泡泡,飘浮泡泡
352,Kecleon,カクレオン,Kecleon,Kecleon,Kecleon,Kecleon,켈리몬,變隱龍,变隐龙
353,Shuppet,カゲボオズ,Polichombr,Bannette,Shuppet,Shuppet,어둠대신,怨影娃娃,怨影娃娃
354,Banette,ジュペッタ,Branette,Zwirllicht,Banette,Banette,다크펫,詛咒娃娃,诅咒娃娃
355,Duskull,ヨマワル,Skelénox,Zwirrklop,Duskull,Duskull,해골몽,夜巡靈,夜巡灵
356,Dusclops,サマヨール,Téraclope,Zwirrfinst,Dusclops,Dusclops,미라몽,彷徨夜靈,彷徨夜灵
357,Tropius,トロピウス,Tropius,Tropius,Tropius,Tropius,트로피우스,熱帶龍,热带龙
358,Chimecho,チリーン,Éoko,Palimpalim,Chimecho,Chimecho,치렁,風鈴鈴,风铃铃
359,Absol,アブソル,Absol,Absol,Absol,Absol,앱솔,阿勃梭魯,阿勃梭鲁
360,Wynaut,ソーナノ,Okéoké,Isso,Wynaut,Wynaut,마자,小果然,小果然
361,Snorunt,ユキワラシ,Stalgamin,Schneppke,Snorunt,Snorunt,눈꼬마,雪童子,雪童子
362,Glalie,オニゴーリ,Oniglali,Fimontor,Glalie,Glalie,얼음귀신,冰鬼護,冰鬼护
363,Spheal,タマザラシ,Obalie,Seemops,Spheal,Spheal,대굴레오,海豹球,海豹球
364,Sealeo,トドグラ,Phogleur,Seejong,Sealeo,Sealeo,씨레오,海魔獅,海魔狮
365,Walrein,トドゼルガ,Kaimorse,Walraisa,Walrein,Walrein,씨카이저,帝牙海獅,帝牙海狮
366,Clamperl,パールル,Coquiperl,Perlu,Clamperl,Clamperl,진주몽,珍珠貝,珍珠貝
367,Huntail,ハンテール,Serpang,Aalabyss,Huntail,Huntail,헌테일,獵斑魚,猎斑鱼
368,Gorebyss,サクラビス,Rosabyss,Saganbyss,Gorebyss,Gorebyss,분홍장이,櫻花魚,樱花鱼
369,Relicanth,ジーランス,Relicanth,Relicanth,Relicanth,Relicanth,시라칸,古空棘魚,古空棘鱼
370,Luvdisc,ラブカス,Lovdisc,Liebiskuss,Luvdisc,Luvdisc,사랑동이,愛心魚,爱心鱼
371,Bagon,タツベイ,Draby,Kindwurm,Bagon,Bagon,아공이,寶貝龍,宝贝龙
372,Shelgon,コモルー,Drackhaus,Draschel,Shelgon,Shelgon,쉘곤,甲殼龍,甲壳龙
373,Salamence,ボーマンダ,Drattak,Brutalanda,Salamence,Salamence,보만다,暴飛龍,暴飞龙
374,Beldum,ダンバル,Terhal,Tanhel,Beldum,Beldum,메탕,鐵啞鈴,铁哑铃
375,Metang,メタング,Métang,Metang,Metang,Metang,메탕구,金屬怪,金属怪
376,Metagross,メタグロス,Métalosse,Metagross,Metagross,Metagross,메타그로스,巨金怪,巨金怪
377,Regirock,レジロック,Regirock,Regirock,Regirock,Regirock,레지락,雷吉洛克,雷吉洛克
378,Regice,レジアイス,Regice,Regice,Regice,Regice,레지아이스,雷吉艾斯,雷吉艾斯
379,Registeel,レジスチル,Registeel,Registeel,Registeel,Registeel,레지스틸,雷吉斯奇魯,雷吉斯奇鲁
380,Latias,ラティアス,Latias,Latias,Latias,Latias,라티아스,拉帝亞斯,拉帝亚斯
381,Latios,ラティオス,Latios,Latios,Latios,Latios,라티오스,拉帝歐斯,拉帝欧斯
382,Kyogre,カイオーガ,Kyogre,Kyogre,Kyogre,Kyogre,가이오가,蓋歐卡,盖欧卡
383,Groudon,グラードン,Groudon,Groudon,Groudon,Groudon,그란돈,固拉多,固拉多
384,Rayquaza,レックウザ,Rayquaza,Rayquaza,Rayquaza,Rayquaza,레쿠쟈,烈空坐,烈空坐
385,Jirachi,ジラーチ,Jirachi,Jirachi,Jirachi,Jirachi,지라치,基拉祈,基拉祈
386,Deoxys,ヂオキシス,Deoxys,Deoxys,Deoxys,Deoxys,테오키스,代歐奇希斯,代欧奇希斯
387,Turtwig,ナエトル,Tortipouss,Chelast,Turtwig,Turtwig,모부기,草苗龜,草苗龟
388,Grotle,ハヤシガメ,Boskara,Chelcarain,Grotle,Grotle,수풀부기,樹林龜,树林龟
389,Torterra,ドダイトス,Torterra,Chelterrar,Torterra,Torterra,토대부기,土台龜,土台龟
390,Chimchar,ヒコザル,Ouisticram,Panflam,Chimchar,Chimchar,불꽃숭이,小火焰猴,小火焰猴
391,Monferno,モウカザル,Chimpenfeu,Panpyro,Monferno,Monferno,파이숭이,猛火猴,猛火猴
392,Infernape,ゴウカザル,Simiabraz,Panferno,Infernape,Infernape,초염몽,烈焰猴,烈焰猴
393,Piplup,ポッチャマ,Tiplouf,Plinfa,Piplup,Piplup,팽도리,波加曼,波加曼
394,Prinplup,ポッタイシ,Prinplouf,Pliprin,Prinplup,Prinplup,팽태자,波皇子,波皇子
395,Empoleon,エンペルト,Pingoléon,Impoleon,Empoleon,Empoleon,엠페르트,帝王拿波,帝王拿波
396,Starly,ムックル,Étourmi,Staralili,Starly,Starly,찌르꼬,姆克兒,姆克儿
397,Staravia,ムクバード,Étourvol,Staravia,Staravia,Staravia,찌르버드,姆克鳥,姆克鸟
398,Staraptor,ムクホーク,Étouraptor,Staraptor,Staraptor,Staraptor,찌르호크,姆克鷹,姆克鹰
399,Bidoof,ビッパ,Keunotor,Bidiza,Bidoof,Bidoof,비버니,大牙狸,大牙狸
400,Bibarel,ビーダル,Castorno,Bidifas,Bibarel,Bibarel,비버통,大尾狸,大尾狸
401,Kricketot,コロボーシ,Crikzik,Zirpurze,Kricketot,Kricketot,귀뚤뚜기,圓法師,圆法师
402,Kricketune,コロトック,Mélokrik,Zirpeise,Kricketune,Kricketune,귀뚤톡크,音箱蟀,音箱蟀
403,Shinx,コリンク,Lixy,Sheinux,Shinx,Shinx,꼬링크,小貓怪,小猫怪
404,Luxio,ルクシオ,Luxio,Luxio,Luxio,Luxio,럭시오,勒克貓,勒克猫
405,Luxray,レントラー,Luxray,Luxtra,Luxray,Luxray,렌트라,倫琴貓,伦琴猫
406,Budew,スボミー,Rozbouton,Knospi,Budew,Budew,꼬몽울,含羞苞,含羞苞
407,Roserade,ロズレイド,Roserade,Roserade,Roserade,Roserade,로즈레이드,羅絲雷朵,罗丝雷朵
408,Cranidos,ズガイドス,Kranidos,Koknodon,Cranidos,Cranidos,두개도스,頭蓋龍,头盖龙
409,Rampardos,ラムパルド,Charkos,Rameidon,Rampardos,Rampardos,램펄드,戰槌龍,战槌龙
410,Shieldon,タテトプス,Dinoclier,Schilterus,Shieldon,Shieldon,방패톱스,盾甲龍,盾甲龙
411,Bastiodon,トリデプス,Bastiodon,Bollterus,Bastiodon,Bastiodon,바리톱스,護城龍,护城龙
412,Burmy,ミノムッチ,Cheniti,Burmy,Burmy,Burmy,도롱충이,結草兒,结草儿
413,Wormadam,ミノマダム,Cheniselle,Burmadame,Wormadam,Wormadam,도롱마담,結草貴婦,结草贵妇
414,Mothim,ガーメイル,Papilord,Moterpel,Mothim,Mothim,나메일,紳士蛾,绅士蛾
415,Combee,ミツハニー,Apitrini,Wadribie,Combee,Combee,세꿀버리,三蜜蜂,三蜜蜂
416,Vespiquen,ビークイン,Apireine,Honweisel,Vespiquen,Vespiquen,비퀸,蜂女王,蜂女王
417,Pachirisu,パチリス,Pachirisu,Pachirisu,Pachirisu,Pachirisu,파치리스,帕奇利茲,帕奇利茲
418,Buizel,ブイゼル,Mustébouée,Bamelin,Buizel,Buizel,브이젤,泳圈鼬,泳圈鼬
419,Floatzel,フローゼル,Mustéflott,Bojelin,Floatzel,Floatzel,플로젤,浮潛鼬,浮潜鼬
420,Cherubi,チェリンボ,Ceribou,Kikugi,Cherubi,Cherubi,체리버,櫻花寶,樱花宝
421,Cherrim,チェリム,Ceriflor,Kinoso,Cherrim,Cherrim,체리꼬,櫻花兒,樱花儿
422,Shellos,カラナクシ,Sancoki,Schalellos,Shellos,Shellos,깝질무,無殼海兔,无壳海兔
423,Gastrodon,トリトソン,Tritosor,Gastrodon,Gastrodon,Gastrodon,트리토돈,海兔獸,海兔兽
424,Ambipom,エテボース,Capidextre,Ambidiffel,Ambipom,Ambipom,겟핸보숭,雙尾怪手,双尾怪手
425,Drifloon,フワンテ,Baudrive,Driftlon,Drifloon,Drifloon,흔들풍손,飄飄球,飘飘球
426,Drifblim,フワライド,Grodrive,Drifzepeli,Drifblim,Drifblim,둥실라이드,隨風球,随风球
427,Buneary,ミミロル,Laporeille,Haspiror,Buneary,Buneary,이어롤,捲捲耳,卷卷耳
428,Lopunny,ミミロップ,Lockpin,Schlapor,Lopunny,Lopunny,이어롭,長耳兔,长耳兔
429,Mismagius,ムウマージ,Magirêve,Traunmagil,Mismagius,Mismagius,무우마직,夢妖魔,梦妖魔
430,Honchkrow,ドンカラス,Corboss,Kramshef,Honchkrow,Honchkrow,돈크로우,烏鴉頭頭,乌鸦头头
431,Glameow,ミャルマー,Chaglam,Charmian,Glameow,Glameow,나옹마,魅力喵,魅力喵
432,Purugly,ブニャット,Chaffreux,Shnurgarst,Purugly,Purugly,몬냥이,東施喵,东施喵
433,Chingling,リーシャン,Korillon,Klingplim,Chingling,Chingling,랑딸랑,鈴鐺響,铃铛响
434,Stunky,スカンプー,Moufouette,Skunkapuh,Stunky,Stunky,스컹뿡,臭鼬噗,臭鼬噗
435,Skuntank,スカタンク,Moufflair,Skuntank,Skuntank,Skuntank,스컹탱크,坦克臭鼬,坦克臭鼬
436,Bronzor,ドーミラー,Archéomire,Bronzel,Bronzor,Bronzor,동미러,銅鏡怪,铜镜怪
437,Bronzong,ドータクン,Archéodong,Bronzong,Bronzong,Bronzong,동탁군,青銅鐘,青铜钟
438,Bonsly,ウソハチ,Manzaï,Mobai,Bonsly,Bonsly,꼬지지,盆才怪,盆才怪
439,Mime Jr.,マネネ,Mime Jr.,Pantimimi,Mime Jr.,Mime Jr.,흉내내,魔尼尼,魔尼尼
440,Happiny,ピンプク,Ptiravi,Wonneira,Happiny,Happiny,핑복,小福蛋,小福蛋
441,Chatot,ペラップ,Pijako,Plaudagei,Chatot,Chatot,페라페,聒噪鳥,聒噪鸟
442,Spiritomb,ミカルゲ,Spiritomb,Kryppuk,Spiritomb,Spiritomb,화강돌,花岩怪,花岩怪
443,Gible,フカマル,Griknot,Kaumalat,Gible,Gible,딥상어동,圓陸鯊,圆陆鲨
444,Gabite,ガバイト,Carmache,Knarksel,Gabite,Gabite,한바이트,尖牙陸鯊,尖牙陆鲨
445,Garchomp,ガブリアス,Carchacrok,Knakrack,Garchomp,Garchomp,한카리아스,烈咬陸鯊,烈咬陆鲨
446,Munchlax,ゴンベ,Goinfrex,Mampfaxo,Munchlax,Munchlax,먹고자,小卡比獸,小卡比兽
447,Riolu,リオル,Riolu,Riolu,Riolu,Riolu,리오르,利歐路,利欧路
448,Lucario,ルカリオ,Lucario,Lucario,Lucario,Lucario,루카리오,路卡利歐,路卡利欧
449,Hippopotas,ヒポポタス,Hippopotas,Hippopotas,Hippopotas,Hippopotas,히포포타스,沙河馬,沙河马
450,Hippowdon,カバルドン,Hippodocus,Hippoterus,Hippowdon,Hippowdon,하마돈,河馬獸,河马兽
451,Skorupi,スコルピ,Rapion,Pionskora,Skorupi,Skorupi,스콜피,鉗尾蠍,钳尾蝎
452,Drapion,ドラピオン,Drascore,Piondragi,Drapion,Drapion,드래피온,龍王蠍,龙王蝎
453,Croagunk,グレッグル,Cradopaud,Glibunkel,Croagunk,Croagunk,삐딱구리,不良蛙,不良蛙
454,Toxicroak,ドクロッグ,Coatox,Toxiquak,Toxicroak,Toxicroak,독개굴,毒骷蛙,毒骷蛙
455,Carnivine,マスキッパ,Vortente,Venuflibis,Carnivine,Carnivine,무스틈니,尖牙籠,尖牙笼
456,Finneon,ケイコウオ,Écayon,Finneon,Finneon,Finneon,형광어,螢光魚,萤光鱼
457,Lumineon,ネオラント,Luminéon,Lumineon,Lumineon,Lumineon,네오라이트,霓虹魚,霓虹鱼
458,Mantyke,タマンタ,Babimanta,Mantirps,Mantyke,Mantyke,타만타,小球飛魚,小球飞鱼
459,Snover,ユキカブリ,Blizzi,Shnebedeck,Snover,Snover,눈쓰개,雪笠怪,雪笠怪
460,Abomasnow,ユキノオー,Blizzaroi,Rexblisar,Abomasnow,Abomasnow,눈설왕,暴雪王,暴雪王
461,Weavile,マニューラ,Dimoret,Snibunna,Weavile,Weavile,포푸니라,瑪狃拉,玛狃拉
462,Magnezone,ジバコイル,Magnézone,Magnezone,Magnezone,Magnezone,자포코일,自爆磁怪,自爆磁怪
463,Lickilicky,ベロベルト,Coudlangue,Schlurplek,Lickilicky,Lickilicky,내룸벨트,大舌舔,大舌舔
464,Rhyperior,ドサイドン,Rhinastoc,Rihornior,Rhyperior,Rhyperior,거대코뿌리,超甲狂犀,超甲狂犀
465,Tangrowth,モジャンボ,Bouldeneu,Tangoloss,Tangrowth,Tangrowth,덩쿠림보,巨蔓藤,巨蔓藤
466,Electivire,エレキブル,Élékable,Elevoltek,Electivire,Electivire,에레키블,電擊魔獸,电击魔兽
467,Magmortar,ブーバーン,Maganon,Magbrant,Magmortar,Magmortar,마그마번,鴨嘴炎獸,鸭嘴炎兽
468,Togekiss,トゲキッス,Togekiss,Togekiss,Togekiss,Togekiss,토게키스,波克基斯,波克基斯
469,Yanmega,メガヤンマ,Yanmega,Yanmega,Yanmega,Yanmega,메가자리,遠古巨蜓,远古巨蜓
470,Leafeon,リーフィア,Phyllali,Folipurba,Leafeon,Leafeon,리피아,葉伊布,叶伊布
471,Glaceon,グレイシア,Givrali,Glaziola,Glaceon,Glaceon,글레이시아,冰伊布,冰伊布
472,Gliscor,グライオン,Scorvol,Skorgro,Gliscor,Gliscor,글라이온,天蠍王,天蝎王
473,Mamoswine,マンムー,Mammochon,Mamutel,Mamoswine,Mamoswine,맘모꾸리,象牙豬,象牙猪
474,Porygon-Z,ポリゴンＺ,Porygon-Z,Porygon-Z,Porygon-Z,Porygon-Z,폴리곤Ｚ,多邊獸Ｚ,多边兽乙型
475,Gallade,エルレイド,Gallame,Galagladi,Gallade,Gallade,엘레이드,艾路雷朵,艾路雷朵
476,Probopass,ダイノーズ,Tarinorme,Voluminas,Probopass,Probopass,대코파스,大朝北鼻,大朝北鼻
477,Dusknoir,ヨノワール,Noctunoir,Zwirrfinst,Dusknoir,Dusknoir,야느와르몽,黑夜魔靈,黑夜魔灵
478,Froslass,ユキメノコ,Momartik,Frosdedje,Froslass,Froslass,눈여아,雪妖女,雪妖女
479,Rotom,ロトム,Motisma,Rotom,Rotom,Rotom,로토무,洛托姆,洛托姆
480,Uxie,ユクシー,Créhelf,Selfe,Uxie,Uxie,유크시,由克希,由克希
481,Mesprit,エムリット,Créfollet,Vesprit,Mesprit,Mesprit,엠라이트,艾姆利多,艾姆利多
482,Azelf,アグノム,Créfadet,Tobutz,Azelf,Azelf,아그놈,亞克諾姆,亚克诺姆
483,Dialga,ヂィアルガ,Dialga,Dialga,Dialga,Dialga,디아루가,帝牙盧卡,帝牙卢卡
484,Palkia,パルキア,Palkia,Palkia,Palkia,Palkia,펄기아,帕路奇亞,帕路奇亚
485,Heatran,ヒードラン,Heatran,Heatran,Heatran,Heatran,히드런,席多藍恩,席多蓝恩
486,Regigigas,レジギガス,Regigigas,Regigigas,Regigigas,Regigigas,레지기가스,雷吉奇卡斯,雷吉奇卡斯
487,Giratina,ギラティナ,Giratina,Giratina,Giratina,Giratina,기라티나,騎拉帝納,骑拉帝纳
488,Cresselia,クレセリア,Cresselia,Cresselia,Cresselia,Cresselia,크레세리아,克雷色利亞,克雷色利亚
489,Phione,フィオネ,Phione,Phione,Phione,Phione,피오네,霏歐納,霏欧纳
490,Manaphy,マナフィ,Manaphy,Manaphy,Manaphy,Manaphy,마나피,瑪納霏,玛纳霏
491,Darkrai,ダークライ,Darkrai,Darkrai,Darkrai,Darkrai,다크라이,達克萊伊,达克莱伊
492,Shaymin,シェイミ,Shaymin,Shaymin,Shaymin,Shaymin,쉐이미,謝米,谢米
493,Arceus,アルセウス,Arceus,Arceus,Arceus,Arceus,아르세우스,阿爾宙斯,阿尔宙斯
494,Victini,ビクチイニ,Victini,Victini,Victini,Victini,아르세우스,比克提尼,比克提尼
495,Snivy,ツタージャ,Vipélierre,Serpifeu,Snivy,Snivy,주리비얀,藤藤蛇,藤藤蛇
496,Servine,ジャノビー,Lianaja,Efoserp,Servine,Servine,샤비,青藤蛇,青藤蛇
497,Serperior,ジャローダ,Majaspic,Serpiroyal,Serperior,Serperior,샤로다,君主蛇,君主蛇
498,Tepig,ポカブ,Gruikui,Floink,Tepig,Tepig,뚜꾸리,暖暖豬,暖暖猪
499,Pignite,チャオブー,Grotichon,Ferkokel,Pignite,Pignite,챠오꿀,炒炒豬,炒炒猪
500,Emboar,エンブオー,Roitiflam,Flambirex,Emboar,Emboar,염무왕,炎武王,炎武王
501,Oshawott,ミジュマル,Moustillon,Ottaro,Oshawott,Oshawott,수댕이,水水獺,水水獺
502,Dewott,フタチマル,Mateloutre,Zwottronin,Dewott,Dewott,쌍검자비,雙刃丸,双刃丸
503,Samurott,ダイケンキ,Clamiral,Admurai,Samurott,Samurott,대검귀,大劍鬼,大剑鬼
504,Patrat,ミネズミ,Ratentif,Nagelotz,Patrat,Patrat,보르쥐,探探鼠,探探鼠
505,Watchog,ミルホッグ,Miradar,Kukmarda,Watchog,Watchog,보르그,步哨鼠,步哨鼠
506,Lillipup,ヨーテリー,Ponchiot,Yorkleff,Lillipup,Lillipup,요테리,小約克,小约克
507,Herdier,ハーヂリア,Ponchien,Terribark,Herdier,Herdier,하데리어,哈約克,哈约克
508,Stoutland,ムーランド,Mastouffe,Bissbark,Stoutland,Stoutland,바랜드,長毛狗,长毛狗
509,Purrloin,チョロネコ,Chacripan,Felilou,Purrloin,Purrloin,쌔비냥,扒手貓,扒手猫
510,Liepard,レパルダス,Léopardus,Kleoparda,Liepard,Liepard,레파르다스,酷豹,酷豹
511,Pansage,ヤナップ,Feuillajou,Vegimak,Pansage,Pansage,야나프,花椰猴,花椰猴
512,Simisage,ヤナッキー,Feuiloutan,Vegichita,Simisage,Simisage,야나키,花椰猿,花椰猿
513,Pansear,バオップ,Flamajou,Grillmak,Pansear,Pansear,바오프,爆香猴,爆香猴
514,Simisear,バオッキー,Flamoutan,Grillchita,Simisear,Simisear,바오키,爆香猿,爆香猿
515,Panpour,ヒヤップ,Flotajou,Sodamak,Panpour,Panpour,앗차프,冷水猴,冷水猴
516,Simipour,ヒヤッキー,Flotoutan,Sodachita,Simipour,Simipour,앗차키,冷水猿,冷水猿
517,Munna,ムンナ,Munna,Somniam,Munna,Munna,몽나,食夢夢,食梦梦
518,Musharna,ムシャーナ,Mushana,Somnivora,Musharna,Musharna,몽얌나,夢夢蝕,梦梦蚀
519,Pidove,マメパト,Poichigeon,Dusselgurr,Pidove,Pidove,콩둘기,豆豆鴿,豆豆鸽
520,Tranquill,ハトーポー,Colombeau,Navitaub,Tranquill,Tranquill,유토브,咕咕鴿,咕咕鸽
521,Unfezant,ケンホロウ,Déflaisan,Fasasnob,Unfezant,Unfezant,켄호로우,高傲雉雞,高傲雉鸡
522,Blitzle,シママ,Zébibron,Elezeba,Blitzle,Blitzle,줄뮤마,斑斑馬,斑斑马
523,Zebstrika,ゼブライカ,Zéblitz,Zebritz,Zebstrika,Zebstrika,제브라이카,雷電斑馬,雷电斑马
524,Roggenrola,ダンゴロ,Nodulithe,Kiesling,Roggenrola,Roggenrola,단굴,石丸子,石丸子
525,Boldore,ガントル,Géolithe,Sedimantur,Boldore,Boldore,암트르,地幔岩,地幔岩
526,Gigalith,ギガイアス,Gigalithe,Brockoloss,Gigalith,Gigalith,기가이어스,龐岩怪,庞岩怪
527,Woobat,コロモリ,Chovsourir,Fleknoil,Woobat,Woobat,또르박쥐,滾滾蝙蝠,滚滚蝙蝠
528,Swoobat,ココロモリ,Rhinolove,Fletiano,Swoobat,Swoobat,맘박쥐,心蝙蝠,心蝙蝠
529,Drilbur,モグリュー,Rototaupe,Rotomurf,Drilbur,Drilbur,두더류,螺釘地鼠,螺钉地鼠
530,Excadrill,ドリュウズ,Minotaupe,Stalobor,Excadrill,Excadrill,몰드류,龍頭地鼠,龙头地鼠
531,Audino,タブンネ,Nanméouïe,Ohrdoch,Audino,Audino,다부니,差不多娃娃,差不多娃娃
532,Timburr,ドッコラー,Charpenti,Praktibalk,Timburr,Timburr,으랏차,搬運小匠,搬运小匠
533,Gurdurr,ドテッコツ,Ouvrifier,Strepoli,Gurdurr,Gurdurr,토쇠골,鐵骨土人,铁骨土人
534,Conkeldurr,ローブシン,Bétochef,Meistagrif,Conkeldurr,Conkeldurr,노보청,修建老匠,修建老匠
535,Tympole,オタマロ,Tritonde,Schallquap,Tympole,Tympole,동챙이,圓蝌蚪,圆蝌蚪
536,Palpitoad,ガマガル,Batracné,Mebrana,Palpitoad,Palpitoad,두까비,藍蟾蜍,蓝蟾蜍
537,Seismitoad,ガマゲロゲ,Crapustule,Branawarz,Seismitoad,Seismitoad,두빅굴,蟾蜍王,蟾蜍王
538,Throh,ナゲキ,Judokrak,Jiutesto,Throh,Throh,던지미,投摔鬼,投摔鬼
539,Sawk,ダゲキ,Karaclée,Karadonis,Sawk,Sawk,타격귀,打擊鬼,打击鬼
540,Sewaddle,クルミル,Larvayette,Strawickl,Sewaddle,Sewaddle,두르보,蟲寶包,虫宝包
541,Swadloon,クルマユ,Couverdure,Folikon,Swadloon,Swadloon,두르쿤,寶包繭,宝包茧
542,Leavanny,ハハコモリ,Manternel,Matrifol,Leavanny,Leavanny,모아머,保母蟲,保母虫
543,Venipede,フシデ,Venipatte,Toxiped,Venipede,Venipede,마디네,百足蜈蚣,百足蜈蚣
544,Whirlipede,ホイーガ,Scobolide,Rollum,Whirlipede,Whirlipede,휠구,車輪毬,车轮毬
545,Scoliopede,ペンドラー,Brutapode,Cerapendra,Scoliopede,Scoliopede,펜드라,蜈蚣王,蜈蚣王
546,Cottonee,モンメン,Doudouvet,Waumboll,Cottonee,Cottonee,소미안,木棉球,木棉球
547,Whimsicott,エルフーン,Farfaduvet,Elfun,Whimsicott,Whimsicott,엘풍,風妖精,风妖精
548,Petilil,チュリネ,Chlorobule,Lilminip,Petilil,Petilil,치릴리,百合根娃娃,百合根娃娃
549,Lilligant,ドレヂィア,Fragilady,Dressella,Lilligant,Lilligant,드레디어,裙兒小姐,裙儿小姐
550,Basculin,バスラオ,Bargantua,Barschuft,Basculin,Basculin,배쓰나이,野蠻鱸魚,野蛮鲈鱼
551,Sandile,メグロコ,Mascaïman,Ganovil,Sandile,Sandile,깜눈크,黑眼鱷,黑眼鳄
552,Krokorok,ワルビル,Escroco,Rokkaiman,Krokorok,Krokorok,악비르,混混鱷,混混鳄
553,Krookodile,ワルビアル,Crocorible,Rabigator,Krookodile,Krookodile,악비아르,流氓鱷,流氓鳄
554,Darumaka,ダルマッカ,Darumarond,Flampion,Darumaka,Darumaka,달막화,火紅不倒翁,火红不倒翁
555,Darmanitan,ヒヒダルマ,Darumacho,Flampivian,Darmanitan,Darmanitan,불비달마,達摩狒狒,达摩狒狒
556,Maractus,マラカッチ,Maracachi,Maracamba,Maractus,Maractus,마라카치,沙鈴仙人掌,沙铃仙人掌
557,Dwebble,イシズマイ,Crabicoque,Lithomith,Dwebble,Dwebble,돌살이,石居蟹,石居蟹
558,Crustle,イワパレス,Crabaraque,Castellith,Crustle,Crustle,암팰리스,岩殿居蟹,岩殿居蟹
559,Scraggy,ズルッグ,Baggiguane,Zurrokex,Scraggy,Scraggy,곤율랭,滑滑小子,滑滑小子
560,Scrafty,ズルズキン,Baggaïd,Irokex,Scrafty,Scrafty,곤율거니,頭巾混混,头巾混混
561,Sigilyph,シンボラー,Cryptéro,Symvolara,Sigilyph,Sigilyph,심보러,象徵鳥,象征鸟
562,Yamask,デスマス,Tutafeh,Makabaja,Yamask,Yamask,데스마스,哭哭面具,哭哭面具
563,Cofagrigus,デスカーン,Tutankafer,Echnatoll,Cofagrigus,Cofagrigus,데스니칸,死神棺,迭失棺
564,Tirtouga,プロトーガ,Carapagos,Galapaflos,Tirtouga,Tirtouga,프로토가,原蓋海龜,原盖海龟
565,Carracosta,アバゴーラ,Mégapagos,Karippas,Carracosta,Carracosta,늑골라,肋骨海龜,肋骨海龟
566,Archen,アーケン,Arkéapti,Flapteryx,Archen,Archen,아켄,始祖小鳥,始祖小鸟
567,Archeops,アーケオス,Aéroptéryx,Aeropteryx,Archeops,Archeops,아케오스,始祖大鳥,始祖大鸟
568,Trubbish,ヤブクロン,Miamiasme,Unratütox,Trubbish,Trubbish,깨봉이,破破袋,破破袋
569,Garbodor,ダストダス,Miasmax,Deponitox,Garbodor,Garbodor,더스트나,灰塵山,灰尘山
570,Zorua,ゾロア,Zorua,Zorua,Zorua,Zorua,조로아,索羅亞,索罗亚
571,Zoroark,ゾロアーク,Zoroark,Zoroark,Zoroark,Zoroark,조로아크,索羅亞克,索罗亚克
572,Minccino,チラーミィ,Chinchidou,Picochilla,Minccino,Minccino,치라미,泡沫栗鼠,泡沫栗鼠
573,Cinccino,チラチーノ,Pashmilla,Chillabell,Cinccino,Cinccino,치라치노,奇諾栗鼠,奇诺栗鼠
574,Gothita,ゴチム,Scrutella,Mollimorba,Gothita,Gothita,고디탱,哥德寶寶,哥德宝宝
575,Gothorita,ゴチミル,Mesmérella,Hypnomorba,Gothorita,Gothorita,고디보미,哥德小童,哥德小童
576,Gothitelle,ゴチルゼル,Sidérella,Morbitesse,Gothitelle,Gothitelle,고디모아젤,哥德小姐,哥德小姐
577,Solosis,ユニラン,Nucléos,Monozyto,Solosis,Solosis,유니란,單卵細胞球,单卵细胞球
578,Duosion,ダブラン,Méios,Mitodos,Duosion,Duosion,듀란,雙卵細胞球,双卵细胞球
579,Reuniclus,ランクルス,Symbios,Zytomega,Reuniclus,Reuniclus,란쿨루스,人造細胞卵,人造细胞卵
580,Ducklett,コアルヒー,Couaneton,Piccolente,Ducklett,Ducklett,꼬지보리,鴨寶寶,鸭宝宝
581,Swanna,スワンナ,Lakmécygne,Swaroness,Swanna,Swanna,스완나,舞天鵝,舞天鹅
582,Vanillite,バニプッチ,Sorbébé,Gelatini,Vanillite,Vanillite,바닐프티,迷你冰,迷你冰
583,Vanillish,バニリッチ,Sorboul,Gelatroppo,Vanillish,Vanillish,바닐리치,多多冰,多多冰
584,Vanilluxe,バイバニラ,Sorbouboul,Gelatwino,Vanilluxe,Vanilluxe,배바닐라,雙倍多多冰,双倍多多冰
585,Deerling,シキジカ,Vivaldaim,Sesokitz,Deerling,Deerling,사철록,四季鹿,四季鹿
586,Sawsbuck,メブキジカ,Haydaim,Kronjuwild,Sawsbuck,Sawsbuck,바라철록,萌芽鹿,萌芽鹿
587,Emolga,エモンガ,Emolga,Emolga,Emolga,Emolga,에몽가,電飛鼠,电飞鼠
588,Karrablast,カブルモ,Carabing,Laukaps,Karrablast,Karrablast,딱정곤,蓋蓋蟲,盖盖虫
589,Escavalier,シュバルゴ,Lançargot,Cavalanzas,Escavalier,Escavalier,슈바르고,騎士蝸牛,骑士蜗牛
590,Foongus,タマゲタケ,Trompignon,Tarnpignon,Foongus,Foongus,깜놀버슬,哎呀球菇,哎呀球菇
591,Amoongus,モロバレル,Gaulet,Hutsassa,Amoongus,Amoongus,뽀록나,敗露球菇,败露球菇
592,Frillish,プルリル,Viskuse,Quabbel,Frillish,Frillish,탱그릴,輕飄飄,轻飘飘
593,Jellicent,ブルンゲル,Moyade,Apoquallyp,Jellicent,Jellicent,탱탱겔,胖嘟嘟,胖嘟嘟
594,Alomomola,ママンボウ,Mamambo,Mamolida,Alomomola,Alomomola,맘복치,保母曼波,保母曼波
595,Joltik,バチュル,Statitik,Wattzapf,Joltik,Joltik,피쪼옥,電電蟲,电电虫
596,Galvantula,デンチュラ,Mygavolt,Voltula,Galvantula,Galvantula,전툴라,電蜘蛛,电蜘蛛
597,Ferroseed,テッシード,Grindur,Kastadur,Ferroseed,Ferroseed,철시드,種子鐵球,种子铁球
598,Ferrothorn,ナットレイ,Noacier,Tentantel,Ferrothorn,Ferrothorn,너트령,堅果啞鈴,坚果哑铃
599,Klink,ギアル,Tic,Klikk,Klink,Klink,기어르,齒輪兒,齿轮儿
600,Klang,ギギアル,Clic,Kliklak,Klang,Klang,기기어르,齒輪組,齿轮组
601,Klinklang,ギギギアル,Cliticlic,Klikdiklak,Klinklang,Klinklang,기기기어르,齒輪怪,齿轮怪
602,Tynamo,シビシラス,Anchwatt,Zapplardin,Tynamo,Tynamo,저리어,麻麻小魚,麻麻小鱼
603,Eelektrik,シビビール,Lampéroie,Zapplalek,Eelektrik,Eelektrik,저리릴,麻麻鰻,麻麻鳗
604,Eelektross,シビルドン,Ohmassacre,Zapplarang,Eelektross,Eelektross,저리더프,麻麻鰻魚王,麻麻鳗鱼王
605,Elgyem,リグレー,Lewsor,Pygraulon,Elgyem,Elgyem,리그레,小灰怪,小灰怪
606,Beheeyem,オーベム,Neitram,Megalon,Beheeyem,Beheeyem,벰크,大宇怪,大宇怪
607,Litwick,ヒトモシ,Funécire,Lichtel,Litwick,Litwick,불켜미,燭光靈,烛光灵
608,Lampent,ランプラー,Mélancolux,Laternecto,Lampent,Lampent,램프라,燈火幽靈,灯火幽灵
609,Chandelure,シャンデラ,Lugulabre,Skelabra,Chandelure,Chandelure,샹델라,水晶燈火靈,水晶灯火灵
610,Axew,キバゴ,Coupenotte,Milza,Axew,Axew,터검니,牙牙,牙牙
611,Fraxure,オノンド,Incisache,Sharfax,Fraxure,Fraxure,액슨도,斧牙龍,斧牙龙
612,Haxorus,オノノクス,Tranchodon,Maxax,Haxorus,Haxorus,액스라이즈,雙斧戰龍,双斧战龙
613,Cubchoo,クマシュン,Polarhume,Petznief,Cubchoo,Cubchoo,코고미,噴嚏熊,喷嚏熊
614,Beartic,ツンビアー,Polagriffe,Siberio,Beartic,Beartic,툰베어,凍原熊,冻原熊
615,Cryogonal,フリージオ,Hexagel,Frigometri,Cryogonal,Cryogonal,프리지오,幾何雪花,几何雪花
616,Shelmet,チョボマキ,Escargaume,Schnuthelm,Shelmet,Shelmet,쪼마리,小嘴蝸,小嘴蜗
617,Accelgor,アギルダー,Limaspeed,Hydragil,Accelgor,Accelgor,어지리더,敏捷蟲,敏捷虫
618,Stunfisk,マッギョ,Limonde,Flunschlik,Stunfisk,Stunfisk,메더,泥巴魚,泥巴鱼
619,Mienfoo,コジョフー,Kungfouine,Lin-Fu,Mienfoo,Mienfoo,비조푸,功夫鼬,功夫鼬
620,Mienshao,コジョンド,Shaofouine,Wie-Shu,Mienshao,Mienshao,비조도,師父鼬,师父鼬
621,Druddigon,クリムガン,Drakkarmin,Shardrago,Druddigon,Druddigon,크리만,赤面龍,赤面龙
622,Golett,ゴビット,Gringolem,Golbit,Golett,Golett,골비람,泥偶小人,泥偶小人
623,Golurk,ゴルーグ,Golemastoc,Golgantes,Golurk,Golurk,골루그,泥偶巨人,泥偶巨人
624,Pawniard,コマタナ,Scalpion,Gladiantri,Pawniard,Pawniard,자망칼,駒刀小兵,驹刀小兵
625,Bisharp,キルキザン,Scalproie,Caesurio,Bisharp,Bisharp,절각참,劈斬司令,劈斩司令
626,Bouffalant,バッフロン,Frison,Bisofank,Bouffalant,Bouffalant,버프론,爆炸頭水牛,爆炸头水牛
627,Rufflet,ワシボン,Furaiglon,Geronimatz,Rufflet,Rufflet,수리둥보,毛頭小鷹,毛头小鹰
628,Braviary,ウォーグル,Gueriaigle,Washakwil,Braviary,Braviary,워글,勇士雄鷹,勇士雄鹰
629,Vullaby,バルチャイ,Vostourno,Skallyk,Vullaby,Vullaby,벌차이,禿鷹丫頭,秃鹰丫头
630,Mandibuzz,バルジーナ,Vaututrice,Grypheldis,Mandibuzz,Mandibuzz,버랜지나,禿鷹娜,秃鹰娜
631,Heatmor,クイタラン,Aflamanoir,Furnifraß,Heatmor,Heatmor,앤티골,熔蟻獸,熔蚁兽
632,Durant,アイアント,Fermite,Fermicula,Durant,Durant,아이앤트,鐵蟻,铁蚁
633,Deino,モノズ,Solochi,Kapuno,Deino,Deino,모노두,單首龍,单首龙
634,Zweilous,ジヘッド,Diamat,Duodino,Zweilous,Zweilous,디헤드,雙首暴龍,双首暴龙
635,Hydreigon,サザンドラ,Trioxhydre,Trikephalo,Hydreigon,Hydreigon,삼삼드래,三首惡龍,三首恶龙
636,Larvesta,メラルバ,Pyronille,Ignivor,Larvesta,Larvesta,활화르바,燃燒蟲,燃烧虫
637,Volcarona,ウルガモス,Pyrax,Ramoth,Volcarona,Volcarona,불카모스,火神蛾,火神蛾
638,Cobalion,コバルオン,Cobaltium,Kobalium,Cobalion,Cobalion,코바르온,勾帕路翁,勾帕路翁
639,Terrakion,テラキオン,Terrakium,Terrakium,Terrakion,Terrakion,테라키온,代拉基翁,代拉基翁
640,Virizion,ビリジオン,Viridium,Viridium,Virizion,Virizion,비리디온,畢力吉翁,毕力吉翁
641,Tornadus,トルネロス,Boréas,Boreos,Tornadus,Tornadus,토네로스,龍捲雲,龙卷云
642,Thundurus,ボルトロス,Fulguris,Voltolos,Thundurus,Thundurus,볼트로스,雷電雲,雷电云
643,Reshiram,レシラム,Reshiram,Reshiram,Reshiram,Reshiram,레시라무,萊希拉姆,萊希拉姆
644,Zekrom,ゼクロム,Zekrom,Zekrom,Zekrom,Zekrom,제크로무,捷克羅姆,捷克罗姆
645,Landorus,ランドロス,Démétéros,Demeteros,Landorus,Landorus,랜드로스,土地雲,土地云
646,Kyurem,キュレム,Kyurem,Kyurem,Kyurem,Kyurem,큐레무,酋雷姆,酋雷姆
647,Keldeo,ケルヂィオ,Keldeo,Keldeo,Keldeo,Keldeo,케르디오,凱路迪歐,凯路迪欧
648,Meloetta,メロエッタ,Meloetta,Meloetta,Meloetta,Meloetta,메로엣타,美洛耶塔,美洛耶塔
649,Genesect,ゲノセクト,Genesect,Genesect,Genesect,Genesect,게노세크트,蓋諾賽克特,盖诺赛克特
650,Chespin,ハリマロン,Marisson,Igamaro,Chespin,Chespin,도치마론,哈力栗,哈力栗
651,Quilladin,ハリボーグ,Boguérisse,Igastarnish,Quilladin,Quilladin,도치보구,胖胖哈力,胖胖哈力
652,Chesnaught,ブリガロン,Blindépique,Brigaron,Chesnaught,Chesnaught,브리가론,布里卡隆,布里卡隆
653,Fennekin,フォッコ,Feunnec,Fynx,Fennekin,Fennekin,푸호꼬,火狐狸,火狐狸
654,Braixen,テールナー,Roussil,Rutena,Braixen,Braixen,테르나,長尾火狐,长尾火狐
655,Delphox,マフォクシー,Goupelin,Fennexis,Delphox,Delphox,마폭시,妖火紅狐,妖火红狐
656,Froakie,ケロマツ,Grenousse,Froxy,Froakie,Froakie,개구마르,呱呱泡蛙,呱呱泡蛙
657,Frogadier,ゲコガシラ,Crôaporal,Amphizel,Frogadier,Frogadier,개굴반장,呱頭蛙,呱头蛙
658,Greninja,ゲッコウガ,Amphinobi,Quajutsu,Greninja,Greninja,개굴닌자,甲賀忍蛙,甲贺忍蛙
659,Bunnelby,ホルビー,Sapereau,Scoppel,Bunnelby,Bunnelby,파르빗,掘掘兔,掘掘兔
660,Diggersby,ホルード,Excavarenne,Grebbit,Diggersby,Diggersby,파르토,掘地兔,掘地兔
661,Fletchling,ヤヤコマ,Passerouge,Dartiri,Fletchling,Fletchling,화살꼬빈,小箭雀,小箭雀
662,Fletchinder,ヒノヤコマ,Braisillon,Dartignis,Fletchinder,Fletchinder,불화살빈,火箭雀,火箭雀
663,Talonflame,ファイアロー,Flambuzard,Fiaro,Talonflame,Talonflame,파이어로,烈箭鷹,烈箭鹰
664,Scatterbug,コフキムシ,Lépidonille,Purmel,Scatterbug,Scatterbug,분이벌레,粉蝶蟲,粉蝶虫
665,Spewpa,コフーライ,Pérégrain,Puponcho,Spewpa,Spewpa,분떠도리,粉蝶蛹,粉蝶蛹
666,Vivillon,ビビヨン,Prismillon,Vivillon,Vivillon,Vivillon,비비용,彩粉蝶,彩粉蝶
667,Litleo,シシコ,Hélionceau,Leufeo,Litleo,Litleo,레오꼬,小獅獅,小狮狮
668,Pyroar,カエンジシ,Némélios,Pyroleo,Pyroar,Pyroar,화염레오,火炎獅,火炎狮
669,Flabébé,フラベベ,Flabébé,Flabébé,Flabébé,Flabébé,플라베베,花蓓蓓,花蓓蓓
670,Floette,フラエッテ,Floette,Floette,Floette,Floette,플라엣테,花葉蒂,花叶蒂
671,Florges,フラージェス,Florges,Florges,Florges,Florges,플라제스,花潔夫人,花洁夫人
672,Skiddo,メェークル,Cabriolaine,Mähikel,Skiddo,Skiddo,메이클,坐騎小羊,坐骑小羊
673,Gogoat,ゴーゴート,Chevroum,Chevrumm,Gogoat,Gogoat,고고트,坐騎小羊,坐骑小羊
674,Pancham,ヤンチャム,Pandespiègle,Pam-Pam,Pancham,Pancham,판짱,頑皮熊貓,顽皮熊猫
675,Pangoro,ゴロンダ,Pandarbare,Pandagro,Pangoro,Pangoro,부란다,流氓熊貓,霸道熊猫
676,Furfrou,トリミアン,Couafarel,Coiffwaff,Furfrou,Furfrou,트리미앙,多麗米亞,多丽米亚
677,Espurr,ニャスパー,Psystigri,Psiau,Espurr,Espurr,냐스퍼,妙喵,妙喵
678,Meowstic,ニャオニクス,Mistigrix,Psiaugon,Meowstic,Meowstic,냐오닉스,超能妙喵,超能妙喵
679,Honedge,ヒトツキ,Monorpale,Gramokles,Honedge,Honedge,단칼빙,獨劍鞘,独剑鞘
680,Doublade,ニダンギル,Dimoclès,Duokles,Doublade,Doublade,쌍검킬,雙劍鞘,双剑鞘
681,Aegislash,ギルガルド,Exagide,Durengard,Aegislash,Aegislash,킬가르도,堅盾劍怪,坚盾剑怪
682,Spritzee,シュシュプ,Fluvetin,Parfi,Spritzee,Spritzee,슈쁘,粉香香,粉香香
683,Aromatisse,フレフワン,Cocotine,Parfinesse,Aromatisse,Aromatisse,프레프티르,芳香精,芳香精
684,Swirlix,ペロッパフ,Sucroquin,Flauschling,Swirlix,Swirlix,나룸퍼프,綿綿泡芙,绵绵泡芙
685,Slurpuff,ペロリーム,Cupcanaille,Sabbaione,Slurpuff,Slurpuff,나루림,胖甜妮,胖甜妮
686,Inkay,マーイーカ,Sepiatop,Iscalar,Inkay,Inkay,오케이징,好啦魷,好啦鱿
687,Malamar,カラマネロ,Sepiatroce,Calamanero,Malamar,Malamar,칼라마네로,烏賊王,乌贼王
688,Binacle,カメテテ,Opermine,Bithora,Binacle,Binacle,거북손손,龜腳腳,龟脚脚
689,Barbaracle,ガメノデス,Golgopathe,Thanathora,Barbaracle,Barbaracle,거북손데스,龜足巨鎧,龟足巨铠
690,Skrelp,クズモー,Venalgue,Algitt,Skrelp,Skrelp,수레기,垃垃藻,垃垃藻
691,Dragalge,ドラミドロ,Kravarech,Tandrak,Dragalge,Dragalge,드래캄,毒藻龍,毒藻龙
692,Clauncher,ウデッポウ,Flingouste,Scampisto,Clauncher,Clauncher,완철포,鐵臂槍蝦,铁臂枪虾
693,Clawitzer,ブロスター,Gamblast,Wummer,Clawitzer,Clawitzer,블로스터,鋼炮臂蝦,钢炮臂虾
694,Helioptile,エリキテル,Galvaran,Eguana,Helioptile,Helioptile,목도리키텔,傘電蜥,伞电蜥
695,Heliolisk,エレザード,Iguolta,Elezard,Heliolisk,Heliolisk,일레도리자드,光電傘蜥,光电伞蜥
696,Tyrunt,チゴラス,Ptyranidur,Balgoras,Tyrunt,Tyrunt,티고라스,寶寶暴龍,宝宝暴龙
697,Tyrantrum,ガチゴラス,Rexilius,Monargoras,Tyrantrum,Tyrantrum,견고라스,怪顎龍,怪颚龙
698,Amaura,アマルス,Amagara,Amarino,Amaura,Amaura,아마루스,冰雪龍,冰雪龙
699,Aurorus,アマルルガ,Dragmara,Amagarga,Aurorus,Aurorus,아마루르가,冰雪巨龍,冰雪巨龙
700,Sylveon,ニンフィア,Nymphali,Feelinara,Sylveon,Sylveon,님피아,仙子伊布,仙子伊布
701,Hawlucha,ルチャブル,Brutalibré,Resladero,Hawlucha,Hawlucha,루차불,摔角鷹人,摔角鹰人
702,Dedenne,デデンネ,Dédenne,Dedenne,Dedenne,Dedenne,데덴네,咚咚鼠,咚咚鼠
703,Carbink,メレシー,Strassie,Rocara,Carbink,Carbink,멜리시,小碎鑽,小碎钻
704,Goomy,ヌメラ,Mucuscule,Viscora,Goomy,Goomy,미끄메라,黏黏寶,黏黏宝
705,Sliggoo,ヌメイル,Colimucus,Viscargot,Sliggoo,Sliggoo,미끄네일,黏美兒,黏美儿
706,Goodra,ヌメルゴン,Muplodocus,Viscogon,Goodra,Goodra,미끄래곤,黏美龍,黏美龙
707,Klefki,クレッフィ,Trousselin,Clavion,Klefki,Klefki,클레피,鑰圈兒,钥圈儿
708,Phantump,ボクレー,Brocélôme,Paragoni,Phantump,Phantump,나목령,小木靈,小木灵
709,Trevenant,オーロット,Desséliandre,Trombork,Trevenant,Trevenant,대로트,朽木妖,朽木妖
710,Pumpkaboo,バケッチャ,Pitrouille,Irrbis,Pumpkaboo,Pumpkaboo,호바귀,南瓜精,南瓜精
711,Gourgeist,パンプジン,Banshitrouye,Pumpdjinn,Gourgeist,Gourgeist,펌킨인,南瓜怪人,南瓜怪人
712,Bergmite,カチコール,Grelaçon,Arktip,Bergmite,Bergmite,꽁어름,冰寶,冰宝
713,Avalugg,クレベース,Séracrawl,Arktilas,Avalugg,Avalugg,크레베이스,冰岩怪,冰岩怪
714,Noibat,オンバット,Sonistrelle,eF-eM,Noibat,Noibat,음뱃,嗡蝠,嗡蝠
715,Noivern,オンバーン,Bruyverne,UHaFnir,Noivern,Noivern,음번,音波龍,音波龙
716,Xerneas,ゼルネアス,Xerneas,Xerneas,Xerneas,Xerneas,제르네아스,哲爾尼亞斯,哲尔尼亚斯
717,Yveltal,イベルタル,Yveltal,Yveltal,Yveltal,Yveltal,이벨타르,伊裴爾塔爾,伊裴尔塔尔
718,Zygarde,ジガルデ,Zygarde,Zygarde,Zygarde,Zygarde,지가르데,基格爾德,基格尔德
719,Diancie,ヂィアンシー,Diancie,Diancie,Diancie,Diancie,디안시,蒂安希,蒂安希
720,Hoopa,フーパ,Hoopa,Hoopa,Hoopa,Hoopa,후파,胡帕,胡帕
721,Volcanion,ボルケニオン,Volcanion,Volcanion,Volcanion,Volcanion,볼케니온,波爾凱尼恩,波尔凯尼恩
722,Rowlet,モクロー,Brindibou,Bauz,Rowlet,Rowlet,나몰빼미,木木梟,木木枭
723,Dartrix,フクスロー,Efflèche,Arboretoss,Dartrix,Dartrix,빼미스로우,投羽梟,投羽枭
724,Decidueye,ジュナイパー,Archéduc,Silvarro,Decidueye,Decidueye,모크나이퍼,狙射樹梟,狙射树枭
725,Litten,ニャビー,Flamiaou,Flamiau,Litten,Litten,냐오불,火斑喵,火斑喵
726,Torracat,ニャヒート,Matoufeu,Miezunder,Torracat,Torracat,냐오히트,炎熱喵,炎热喵
727,Incineroar,ガオガエン,Félinferno,Fuegro,Incineroar,Incineroar,어흥염,熾焰咆哮虎,炽焰咆哮虎
728,Popplio,アシマリ,Otaquin,Robball,Popplio,Popplio,누리공,球球海獅,球球海狮
729,Brionne,オシャマリ,Otarlette,Marikeck,Brionne,Brionne,키요공,花漾海獅,花漾海狮
730,Primarina,アシレーヌ,Oratoria,Primarene,Primarina,Primarina,누리레느,西獅海壬,西狮海壬
731,Pikipek,ツツケラ,Picassaut,Peppeck,Pikipek,Pikipek,콕코구리,小篤兒,小笃儿
732,Trumbeak,ケララッパ,Piclairon,Trompeck,Trumbeak,Trumbeak,크라파,喇叭啄鳥,喇叭啄鸟
733,Toucannon,ドデカバシ,Bazoukan,Tukanon,Toucannon,Toucannon,왕큰부리,銃嘴大鳥,铳嘴大鸟
734,Yungoos,ヤングース,Manglouton,Mangunior,Yungoos,Yungoos,영구스,貓鼬少,猫鼬少
735,Gumchoos,デカグース,Argouste,Manguspektor,Gumchoos,Gumchoos,형사구스,貓鼬探長,猫鼬探长
736,Grubbin,アゴジムシ,Larvibule,Mabula,Grubbin,Grubbin,턱지충이,強顎雞母蟲,强颚鸡母虫
737,Charjabug,デンジムシ,Chrysapile,Akkup,Charjabug,Charjabug,전지충이,蟲電寶,虫电宝
738,Vikavolt,クワガノン,Lucanon,Donarion,Vikavolt,Vikavolt,투구뿌논,鍬農炮蟲,锹农炮虫
739,Crabrawler,マケンカニ,Crabagarre,Krabbox,Crabrawler,Crabrawler,오기지게,好勝蟹,好胜蟹
740,Crabominable,ケケンカニ,Crabominable,Krawell,Crabominable,Crabominable,모단단게,好勝毛蟹,好胜毛蟹
741,Oricorio,オドリドリ,Plumeline,Choreogel,Oricorio,Oricorio,춤추새,花舞鳥,花舞鸟
742,Cutiefly,アブリー,Bombydou,Wommel,Cutiefly,Cutiefly,에블리,萌虻,萌虻
743,Ribombee,アブリボン,Rubombelle,Bandelby,Ribombee,Ribombee,에리본,蝶結萌虻,蝶结萌虻
744,Rockruff,イワンコ,Rocabot,Wufffels,Rockruff,Rockruff,암멍이,岩狗狗,岩狗狗
745,Lycanroc,ルガルガン,Lougaroc,Wolwerock,Lycanroc,Lycanroc,루가루암,鬃岩狼人,鬃岩狼人
746,Wishiwashi,ヨワシ,Froussardine,Lusardin,Wishiwashi,Wishiwashi,약어리,弱丁魚,弱丁鱼
747,Mareanie,ヒドイデ,Vorastérie,Garstella,Mareanie,Mareanie,시마사리,好壞星,好坏星
748,Toxapex,ドヒドイデ,Prédastérie,Aggrostella,Toxapex,Toxapex,더시마사리,超壞星,超坏星
749,Mudbray,ドロバンコ,Tiboudet,Pampuli,Mudbray,Mudbray,머드나기,泥驢仔,泥驴仔
750,Mudsdale,バンバドロ,Bourrinos,Pampross,Mudsdale,Mudsdale,만마드,重泥挽馬,重泥挽马
751,Dewpider,シズクモ,Araqua,Araqua,Dewpider,Dewpider,물거미,滴蛛,滴蛛
752,Araquanid,オニシズクモ,Tarembulle,Aranestro,Araquanid,Araquanid,깨비물거미,滴蛛霸,滴蛛霸
753,Fomantis,カリキリ,Mimantis,Imantis,Fomantis,Fomantis,짜랑랑,偽螳草,伪螳草
754,Lurantis,ラランテス,Floramantis,Mantidea,Lurantis,Lurantis,라란티스,蘭螳花,兰螳花
755,Morelull,ネマシュ,Spododo,Bubungus,Morelull,Morelull,자마슈,睡睡菇,睡睡菇
756,Shiinotic,マシェード,Lampignon,Lamellux,Shiinotic,Shiinotic,마셰이드,燈罩夜菇,灯罩夜菇
757,Salandit,ヤトウモリ,Tritox,Molunk,Salandit,Salandit,야도뇽,夜盜火蜥,夜盜火蜥
758,Salazzle,エンニュート,Malamandre,Amfira,Salazzle,Salazzle,염뉴트,焰后蜥,焰后蜥
759,Stufful,ヌイコグマ,Nounourson,Velirsi,Stufful,Stufful,포곰곰,童偶熊,童偶熊
760,Bewear,キテルグマ,Chelours,Kosturso,Bewear,Bewear,이븐곰,穿著熊,穿着熊
761,Bounsweet,アマカジ,Croquine,Frubberl,Bounsweet,Bounsweet,달콤아,甜竹竹,甜竹竹
762,Steenee,アママイコ,Candine,Frubaila,Steenee,Steenee,달무리나,甜舞妮,甜舞妮
763,Tsareena,アマージョ,Sucreine,Fruyal,Tsareena,Tsareena,달코퀸,甜冷美后,甜冷美后
764,Comfey,キュワワー,Guérilande,Curelei,Comfey,Comfey,큐아링,花療環環,花疗环环
765,Oranguru,ヤレユータン,Gouroutan,Kommandutan,Oranguru,Oranguru,하랑우탄,智揮猩,智挥猩
766,Passimian,ナゲツケサル,Quartermac,Quartermak,Passimian,Passimian,내던숭이,投擲猴,投掷猴
767,Wimpod,コソクムシ,Sovkipou,Reißlaus,Wimpod,Wimpod,꼬시레,膽小蟲,胆小虫
768,Golisopod,グソクムシャ,Sarmuraï,Tectass,Golisopod,Golisopod,갑주무사,具甲武者,具甲武者
769,Sandygast,スナバァ,Bacabouh,Sankabuh,Sandygast,Sandygast,모래꿍,沙丘娃,沙丘娃
770,Palosand,シロデスナ,Trépassable,Colossand,Palosand,Palosand,모래성이당,噬沙堡爺,噬沙堡爺
771,Pyukumuku,ナマコブシ,Concombaffe,Gufa,Pyukumuku,Pyukumuku,해무기,拳海參,拳海参
772,Type: Null,タイプ：ヌル,Type:0,Typ:Null,Código Cero,Tipo Zero,타입：널,屬性：空,属性：空
773,Silvally,シルヴァヂィ,Silvallié,Amigento,Silvally,Silvally,실버디,銀伴戰獸,银伴战兽
774,Minior,メテノ,Météno,Meteno,Minior,Minior,메테노,小隕星,小陨星
775,Komala,ネッコアラ,Dodoala,Koaleul,Komala,Komala,자말라,樹枕尾熊,树枕尾熊
776,Turtonator,バクガメス,Boumata,Turtonator,Turtonator,Turtonator,폭거북스,爆焰龜獸,爆焰龟兽
777,Togedemaru,トゲデマル,Togedemaru,Togedemaru,Togedemaru,Togedemaru,토게데마루,托戈德瑪爾,托戈德玛尔
778,Mimikyu,ミミッキュ,Mimiqui,Mimigma,Mimikyu,Mimikyu,따라큐,謎擬Ｑ,谜拟丘
779,Bruxish,ハギギシリ,Denticrisse,Knirfish,Bruxish,Bruxish,치갈기,磨牙彩皮魚,磨牙彩皮鱼
780,Drampa,ジジーロン,Draïeul,Sen-Long,Drampa,Drampa,할비롱,老翁龍,老翁龙
781,Dhelmise,ダダリン,Sinistrail,Moruda,Dhelmise,Dhelmise,타타륜,破破舵輪,破破舵轮
782,Jangmo-o,ジャラコ,Bébécaille,Miniras,Jangmo-o,Jangmo-o,짜랑꼬,心鱗寶,心鳞宝
783,Hakamo-o,ジャランゴ,Ékaïd,Mediras,Hakamo-o,Hakamo-o,짜랑고우거,鱗甲龍,鳞甲龙
784,Kommo-o,ジャラランガ,Ékaiser,Grandiras,Kommo-o,Kommo-o,짜랑고우거,杖尾鱗甲龍,杖尾鳞甲龙
785,Tapu Koko,カプ・コケコ,Tokoriko,Kapu-Riki,Tapu Koko,Tapu Koko,카푸꼬꼬꼭,卡璞・鳴鳴,卡璞・鸣鸣
786,Tapu Lele,カプ・テテフ,Tokopiyon,Kapu-Fala,Tapu Lele,Tapu Lele,카푸나비나,卡璞・蝶蝶,卡璞・蝶蝶
787,Tapu Bulu,カプ・ブルル,Tokotoro,Kapu-Toro,Tapu Bulu,Tapu Bulu,카푸브루루,卡璞・哞哞,卡璞・哞哞
788,Tapu Fini,カプ・レヒレ,Tokopisco,Kapu-Kime,Tapu Fini,Tapu Fini,카푸느지느,卡璞・鰭鰭,卡璞・鳍鳍
789,Cosmog,コスモッグ,Cosmog,Cosmog,Cosmog,Cosmog,코스모그,科斯莫古,科斯莫古
790,Cosmoem,コスモウム,Cosmovum,Cosmovum,Cosmoem,Cosmoem,코스모움,科斯莫姆,科斯莫姆
791,Solgaleo,ソルガレオ,Solgaleo,Solgaleo,Solgaleo,Solgaleo,솔가레오,索爾迦雷歐,索尔迦雷欧
792,Lunala,ルナアーラ,Lunala,Lunala,Lunala,Lunala,루나아라,露奈雅拉,露奈雅拉
793,Nihilego,ウツロイド,Zeroïd,Anego,Nihilego,Nihilego,텅비드,虛吾伊德,虚吾伊德
794,Buzzwole,マッシブーン,Mouscoto,Masskito,Buzzwole,Buzzwole,매시붕,爆肌蚊,爆肌蚊
795,Pheromosa,フェローチェ,Cancrelove,Schabelle,Pheromosa,Pheromosa,페로코체,費洛美螂,费洛美螂
796,Xurkitree,デンジュモク,Câblifère,Voltriant,Xurkitree,Xurkitree,전수목,電束木,电束木
797,Celesteela,テッカグヤ,Bamboiselle,Kaguron,Celesteela,Celesteela,철화구야,鐵火輝夜,铁火辉夜
798,Kartana,カミツルギ,Katagami,Katagami,Kartana,Kartana,종이신도,紙御劍,纸御剑
799,Guzzlord,アクジキング,Engloutyran,Schlingking,Guzzlord,Guzzlord,악식킹,惡食大王,恶食大王
800,Necrozma,ネクロスマ,Necrozma,Necrozma,Necrozma,Necrozma,네크로즈마,奈克洛茲瑪,奈克洛兹玛
801,Magearna,マギアナ,Magearna,Magearna,Magearna,Magearna,마기아나,瑪機雅娜,玛机雅娜
802,Marshadow,マーシャドー,Marshadow,Marshadow,Marshadow,Marshadow,마샤도,瑪夏多,玛夏多
803,Poipole,ベベノム,Vémini,Venicro,Poipole,Poipole,베베놈,毒貝比,毒贝比
804,Naganadel,アーゴヨン,Mandrillon,Agoyon,Naganadel,Naganadel,아고용,四顎針龍,四颚针龙
805,Stakataka,ツンデツンデ,Ama-Ama,Muramura,Stakataka,Stakataka,차곡차곡,壘磊石,垒磊石
806,Blacephalon,ズガドーン,Pierroteknik,Kopplosio,Blacephalon,Blacephalon,두파팡,砰頭小丑,砰头小丑
807,Zeraora,ゼラオラ,Zeraora,Zeraora,Zeraora,Zeraora,제라오라,捷拉奧拉,捷拉奥拉
808,Meltan,メルタン,Meltan,Meltan,Meltan,Meltan,멜탄,美錄坦,美录坦
809,Melmetal,メルメタル,Melmetal,Melmetal,Melmetal,Melmetal,멜메탈,美錄梅塔,美录梅塔
810,Grookey,サルノリ,Ouistempo,Chimpep,Grookey,Grookey,흥나숭,敲音猴,敲音猴
811,Thwakey,バチンキー,Badabouin,Chimstix,Thwakey,Thwakey,채키몽,啪咚猴,啪咚猴
812,Rillaboom,ゴリランダー,Gorythmic,Gortrom,Rillaboom,Rillaboom,고릴타,轟擂金剛猩,轰擂金刚猩
813,Scorbunny,ヒバニー,Flambino,Hopplo,Scorbunny,Scorbunny,염버니,炎兔兒,炎兔儿
814,Raboot,ラビフット,Lapyro,Kickerlo,Raboot,Raboot,래비풋,騰蹴小將,腾蹴小将
815,Cinderace,エースバーン,Pyrobut,Liberlo,Cinderace,Cinderace,에이스번,閃焰王牌,闪焰王牌
816,Sobble,メッソン,Larméléon,Memmeon,Sobble,Sobble,울머기,淚眼蜥,泪眼蜥
817,Drizzile,ジメレオン,Arrozard,Phlegleon,Drizzile,Drizzile,누겔레온,變澀蜥,变涩蜥
818,Inteleon,インテレオン,Lézargus,Intelleon,Inteleon,Inteleon,인텔리레온,千面避役,千面避役
819,Skowvet,ホシガリス,Rongourmand,Raffel,Skowvet,Skowvet,탐리스,貪心栗鼠,贪心栗鼠
820,Greedent,ヨクバリス,Rongrigou,Schlaraffel,Greedent,Greedent,요씽리스,藏飽栗鼠,藏饱栗鼠
821,Rookidee,ココガラ,Minisange,Meikro,Rookidee,Rookidee,파라꼬,稚山雀,稚山雀
822,Corvisquire,アオガラス,Bleuseille,Kranoviz,Corvisquire,Corvisquire,파크로우,藍鴉,蓝鸦
823,Corviknight,アーマーガア,Corvaillus,Krarmor,Corviknight,Corviknight,아머까오,鋼鎧鴉,钢铠鸦
824,Blipbug,サッチミシ,Larvadar,Sensect,Blipbug,Blipbug,두루지벌레,索偵蟲,索侦虫
825,Dottler,レドームシ,Coléodôme,Keradar,Dottler,Dottler,레돔벌레,天罩蟲,天罩虫
826,Orbeetle,イオルブ,Astronelle,Maritellit,Orbeetle,Orbeetle,이올브,以歐路普,以欧路普
827,Nickit,クスネ,Goupilou,Kleptifux,Nickit,Nickit,훔처우,偷兒狐,狡小狐
828,Thievul,フォクスライ,Roublenard,Gaunux,Thievul,Thievul,폭슬라이,狐大盜,猾大狐
829,Gossifleur,ヒメンカ,Tournicoton,Cottini,Gossifleur,Gossifleur,꼬모카,幼棉棉,幼棉棉
830,Eldegoss,ワタシラガ,Blancoton,Cottomi,Eldegoss,Eldegoss,백솜모카,白蓬蓬,白蓬蓬
831,Wooloo,ウールー,Moumouton,Wolly,Wooloo,Wooloo,우르,毛辮羊,毛辫羊
832,Dubwool,バイウールー,Moumouflon,Zwollock,Dubwool,Dubwool,배우르,毛毛角羊,毛毛角羊
833,Chewtle,カムカメ,Khélocrok,Kamehaps,Chewtle,Chewtle,깨물부기,咬咬龜,咬咬龟
834,Drednaw,カジリガメ,Torgamord,Kamalm,Drednaw,Drednaw,갈가부기,暴噬龜,暴噬龟
835,Yamper,ワンパチ,Voltoutou,Voldi,Yamper,Yamper,멍파치,來電汪,来电汪
836,Boltund,パルスワン,Fulgudog,Bellektro,Boltund,Boltund,펄스멍,逐電犬,逐电犬
837,Rolycoly,タンドン,Charbi,Klonkette,Rolycoly,Rolycoly,탄동,小炭仔,小炭仔
838,Carkol,トロッゴン,Wagomine,Wagong,Carkol,Carkol,탄차곤,大炭車,大炭车
839,Coalossal,セキタンザン,Monthracite,Montecarbo,Coalossal,Coalossal,석탄산,巨炭山,巨炭山
840,Applin,カジッチュ,Verpom,Knapfel,Applin,Applin,과사삭벌레,啃果蟲,啃果虫
841,Flapple,アップリュー,Pomdrapi,Drapfel,Flapple,Flapple,애프룡,蘋裹龍,苹裹龙
842,Appletun,タルップル,Dratatin,Schlapfel,Appletun,Appletun,단지래플,豐蜜龍,丰蜜龙
843,Silicobra,スナヘビ,Dunaja,Salanga,Silicobra,Silicobra,모래뱀,沙包蛇,沙包蛇
844,Sandaconda,サダイジャ,Dunaconda,Sanaconda,Sandaconda,Sandaconda,사다이사,沙螺蟒,沙螺蟒
845,Cramorant,ウッウ,Nigosier,Urgl,Cramorant,Cramorant,윽우지,古月鳥,古月鸟
846,Arrokuda,サシカマス,Embrochet,Pikuda,Arrokuda,Arrokuda,찌로꼬치,刺梭魚,刺梭鱼
847,Barraskewda,カマスジョー,Hastacuda,Barrakiefa,Barraskewda,Barraskewda,꼬치조,戽斗尖梭,戽斗尖梭
848,Toxel,エレゼン,Toxizap,Toxel,Toxel,Toxel,일레즌,毒電嬰,电音婴
849,Toxtricity,ストリンダー,Salarsen,Riffex,Toxtricity,Toxtricity,스트린더,顫弦蠑螈,颤弦蝾螈
850,Sizzlipede,ヤクデ,Grillepattes,Thermopod,Sizzlipede,Sizzlipede,태우지네,燒火蚣,烧火蚣
851,Centiskorch,マルヤクデ,Scolocendre,Infernopod,Centiskorch,Centiskorch,다태우지네,焚焰蚣,焚焰蚣
852,Clobbopus,タタッコ,Poulpaf,Klopptopus,Clobbopus,Clobbopus,때때무노,拳拳蛸,拳拳蛸
853,Grapploct,オトスパス,Krakos,Kaocto,Grapploct,Grapploct,케오퍼스,八爪武師,八爪武师
854,Sinistea,ヤバチャ,Théffroi,Fatalitee,Sinistea,Sinistea,데인차,來悲茶,來悲茶
855,Polteageist,ポットデス,Polthégeist,Mortipot,Polteageist,Polteageist,포트데스,怖思壺,怖思壶
856,Hatenna,ミブリム,Bibichut,Brimova,Hatenna,Hatenna,몸지브림,迷布莉姆,迷布莉姆
857,Hattrem,テブリム,Chapotus,Brimano,Hattrem,Hattrem,손지브림,提布莉姆,提布莉姆
858,Hatterene,ブリムオン,Sorcilence,Silembrim,Hatterene,Hatterene,브리무음,布莉姆溫,布莉姆温
859,Impidimp,ベロバー,Grimalin,Bähmon,Impidimp,Impidimp,메롱꿍,搗蛋小妖,捣蛋小妖
860,Morgrem,ギモー,Fourbelin,Pelzebub,Morgrem,Morgrem,쏘겨모,詐唬魔,诈唬魔
861,Grimmsnarl,オーロンゲ,Angoliath,Olangaar,Grimmsnarl,Grimmsnarl,오롱털,長毛巨魔,长毛巨魔
862,Obstagoon,タチフサグマ,Ixon,Barrikadax,Obstagoon,Obstagoon,가로막구리,堵攔熊,堵拦熊
863,Perrserker,ニャイキング,Berserkatt,Mauzinger,Perrserker,Perrserker,나이킹,喵頭目,喵头目
864,Cursola,サニゴーン,Corayôme,Gorgasonn,Cursola,Cursola,산호르곤,魔靈珊瑚,魔灵珊瑚
865,Sirfetch'd,ネギガナイト,Palarticho,Lauchzelot,Sirfetch'd,Sirfetch'd,창파나이트,蔥遊兵,葱游兵
866,Mr. Rime,バリコオル,M. Glaquette,Pantifrost,Mr. Rime,Mr. Rime,마임꽁꽁,踏冰人偶,踏冰人偶
867,Runerigus,デスバーン,Tutétékri,Oghnatoll,Runerigus,Runerigus,데스판,死神板,迭失板
868,Milcery,マホミル,Crèmy,Hokumil,Milcery,Milcery,마빌크,小仙奶,小仙奶
869,Alcremie,マホイップ,Charmilly,Pokusan,Alcremie,Alcremie,마휘핑,霜奶仙,霜奶仙
870,Falinks,タイレーツ,Hexadron,Legios,Falinks,Falinks,대여르,列陣兵,列阵兵
871,Pincurchin,バチンウニ,Wattapik,Britzigel,Pincurchin,Pincurchin,찌르성게,啪嚓海膽,啪嚓海胆
872,Snom,ユキハミ,Frissonille,Snomnom,Snom,Snom,누니머기,雪吞蟲,雪吞虫
873,Frosmoth,モスノウ,Beldeneige,Mottineva,Frosmoth,Frosmoth,모스노우,雪絨蛾,雪绒蛾
874,Stonjourner,イシヘンジン,Dolman,Humanolith,Stonjourner,Stonjourner,돌헨진,巨石丁,巨石丁
875,Eiscue,コオリッポ,Bekaglaçon,Kubuin,Eiscue,Eiscue,빙큐보,冰砌鵝,冰砌鹅
876,Indeedee,イエッサン,Wimessir,Servol,Indeedee,Indeedee,에써르,愛管侍,爱管侍
877,Morpeko,モモルペコ,Morpeko,Morpeko,Morpeko,Morpeko,모르페코,莫魯貝可,莫鲁贝可
878,Cufant,ゾウドウ,Charibari,Kupfanti,Cufant,Cufant,끼리동,銅象,铜象
879,Copperajah,ダイオウドウ,Pachyradjah,Patinaraja,Copperajah,Copperajah,대왕끼리동,大王銅象,大王铜象
880,Dracozolt,パッチラゴン,Galvagon,Lectragon,Dracozolt,Dracozolt,파치래곤,雷鳥龍,雷鸟龙
881,Arctozolt,パッチルドン,Galvagla,Lecryodon,Arctozolt,Arctozolt,파치르돈,雷鳥海獸,雷鸟海兽
882,Dracovish,ウオノラゴン,Hydragon,Pescragon,Dracovish,Dracovish,어래곤,鰓魚龍,鳃鱼龙
883,Arctovish,ウオノルドン,Hydragla,Pescryodon,Arctovish,Arctovish,어치르돈,鰓魚海獸,鳃鱼海兽
884,Duraludon,ジュラルドン,Duralugon,Duraludon,Duraludon,Duraludon,두랄루돈,鋁鋼龍,铝钢龙
885,Dreepy,ドラメシヤ,Fantyrm,Grolldra,Dreepy,Dreepy,드라꼰,多龍梅西亞,多龙梅西亚
886,Drakloak,ドロンチ,Dispareptil,Phandra,Drakloak,Drakloak,드래런치,多龍奇,多龙奇
887,Dragapult,ドラパルト,Lanssorien,Katapuldra,Dragapult,Dragapult,드래펄트,多龍巴魯托,多龙巴鲁托
888,Zacian,ザシアン,Zacian,Zacian,Zacian,Zacian,자시안,蒼響,苍响
889,Zamazanta,ザマゼンタ,Zamazanta,Zamazanta,Zamazanta,Zamazanta,자마젠타,藏瑪然特,藏玛然特
890,Eternatus,ムゲンダイナ,Éthernatos,Endynalos,Eternatus,Eternatus,무한다이노,無極汰那,无极汰那
891,Kubfu,ダクマ,Wushours,Dakuma,Kubfu,Kubfu,치고마,熊徒弟,熊徒弟
892,Urshifu,ウーラオス,Shifours,Wulaosu,Urshifu,Urshifu,우라오스,武道熊師,武道熊师
893,Zarude,ザルード,Zarude,Zarude,Zarude,Zarude,자루도,薩戮德,萨戮德
894,Regieleki,レジイレキ,Regieleki,Regieleki,Regieleki,Regieleki,레지에레키,雷吉艾勒奇,雷吉艾勒奇
895,Regidrago,レジドラゴ,Regidrago,Regidrago,Regidrago,Regidrago,레지드래고,雷吉鐸拉戈,雷吉铎拉戈
896,Glastrier,ブラザポス,Blizzeval,Polaross,Glastrier,Glastrier,블리자포스,雪暴馬,雪暴马
897,Spectrier,ライスポス,Spectreval,Phantoross,Spectrier,Spectrier,레이스포스,靈幽馬,灵幽马
898,Calyrex,バドレックス,Sylveroy,Coronospa,Calyrex,Calyrex,버드렉스,蕾冠王,蕾冠王
899,Wyrdeer,アヤシシ,Cerbyllin,Damythir,Wyrdeer,Wyrdeer,신비록,詭角鹿,诡角鹿
900,Kleavor,バサギリ,Hachécateur,Axantor,Kleavor,Kleavor,사마자르,劈斧螳螂,劈斧螳螂
901,Ursaluna,ガチグマ,Ursaking,Ursaluna,Ursaluna,Ursaluna,다투곰,月月熊,月月熊
902,Basculegion,イヤイトウ,Paragruel,Salmagnis,Basculegion,Basculegion,대쓰여너,幽尾玄魚,幽尾玄鱼
903,Sneasler,オオニューラ,Farfurex,Snieboss,Sneasler,Sneasler,포푸니크,大狃拉,大狃拉
904,Overqwil,ハリーマン,Qwilpik,Myriador,Overqwil,Overqwil,장침바루,萬針魚,万针鱼
905,Enamorus,ラブトロス,Amovénus,Cupidos,Enamorus,Enamorus,러브로스,眷戀雲,眷恋云
906,Sprigatito,ニャオハ,Poussacha,Felori,Sprigatito,Sprigatito,나오하,新葉喵,新叶喵
907,Floragato,ニャローテ,Matourgeon,Feliospa,Floragato,Floragato,나로테,蒂蕾喵,蒂蕾喵
908,Meowscarda,マスカーニャ,Miascarade,Maskagato,Meowscarda,Meowscarda,마스카나,魔幻假面喵,魔幻假面喵
909,Fuecoco,ホゲータ,Chochodile,Krokel,Fuecoco,Fuecoco,뜨아거,呆火鱷,呆火鳄
910,Crocalor,アチゲータ,Crocogril,Lokroko,Crocalor,Crocalor,악뜨거,炙燙鱷,炙烫鳄
911,Skeledirge,ラウドボーン,Flâmigator,Skelokrok,Skeledirge,Skeledirge,라우드본,骨紋巨聲鱷,骨纹巨声鳄
912,Quaxly,クワッス,Coiffeton,Kwaks,Quaxly,Quaxly,꾸왁스,潤水鴨,润水鸭
913,Quaxwell,ウェルカモ,Canarbello,Fuentente,Quaxwell,Quaxwell,아꾸왁,湧躍鴨,涌跃鸭
914,Quaquaval,ウェーニバル,Palmaval,Bailonda,Quaquaval,Quaquaval,웨이니발,狂歡浪舞鴨,狂欢浪舞鸭
915,Lechonk,グルトン,Gourmelet,Ferkuli,Lechonk,Lechonk,맛보돈,愛吃豚,爱吃豚
916,Oinkologne,パフュートン,Fragroin,Fragrunz,Oinkologne,Oinkologne,퍼퓨돈,飄香豚,飘香豚
917,Tarountula,タマンチュラ,Tissenboule,Tarundel,Tarountula,Tarountula,타랜툴라,團珠蛛,团珠蛛
918,Spidops,ワナイダー,Filentrappe,Spinsidias,Spidops,Spidops,트래피더,操陷蛛,操陷蛛
919,Nymble,マメバッタ,Lilliterelle,Micrick,Nymble,Nymble,콩알뚜기,豆蟋蟀,豆蟋蟀
920,Lokix,エクスレッグ,Gamblex,Lextremo,Lokix,Lokix,엑스레그,烈腿蝗,烈腿蝗
921,Pawmi,パモ,Pohm,Pamo,Pawmi,Pawmi,빠모,布撥,布拨
922,Pawmo,パモット,Pohmotte,Pamamo,Pawmo,Pawmo,빠모트,布土撥,布土拨
923,Pawmot,パーモット,Pohmarmotte,Pamomamo,Pawmot,Pawmot,빠르모트,巴布土撥,巴布土拨
924,Tandemaus,ワッカネズミ,Compagnol,Zwieps,Tandemaus,Tandemaus,두리쥐,一對鼠,一对鼠
925,Maushold,イッカネズミ,Famignol,Famieps,Maushold,Maushold,파밀리쥐,一家鼠,一家鼠
926,Fidough,パピモッチ,Pâtachiot,Hefel,Fidough,Fidough,쫀도기,狗仔包,狗仔包
927,Dachsbun,バウッツエル,Briochien,Backel,Dachsbun,Dachsbun,바우첼,麻花犬,麻花犬
928,Smoliv,ミニーブ,Olivini,Olini,Smoliv,Smoliv,미니브,迷你芙,迷你芙
929,Dolliv,オリーニョ,Olivado,Olivinio,Dolliv,Dolliv,올리뇨,奧利紐,奥利纽
930,Arboliva,オリーヴァ,Arboliva,Olithena,Arboliva,Arboliva,올리르바,奧利瓦,奥利瓦
931,Squawkabilly,イキリンコ,Tapatoès,Krawalloro,Squawkabilly,Squawkabilly,시비꼬,怒鸚哥,怒鹦哥
932,Nacli,コジオ,Selutin,Geosali,Nacli,Nacli,베베솔트,鹽石寶,盐石宝
933,Naclstack,ジオヅム,Amassel,Sedisal,Naclstack,Naclstack,스태솔트,鹽石壘,盐石垒
934,Garganacl,キョジオーン,Gigansel,Saltigant,Garganacl,Garganacl,콜로솔트,鹽石巨靈,盐石巨灵
935,Charcadet,カルボウ,Charbambin,Knarbon,Charcadet,Charcadet,카르본,炭小侍,炭小侍
936,Armarouge,グレンアルマ,Carmadura,Crimanzo,Armarouge,Armarouge,카디나르마,紅蓮鎧騎,红莲铠骑
937,Ceruledge,ソウブレイズ,Malvalame,Azugladis,Ceruledge,Ceruledge,파라블레이즈,蒼炎刃鬼,苍炎刃鬼
938,Tadbulb,ズピカ,Têtampoule,Blipp,Tadbulb,Tadbulb,빈나두,光蚪仔,光蚪仔
939,Bellibolt,ハラバリー,Ampibidou,Wampitz,Bellibolt,Bellibolt,찌리배리,電肚蛙,电肚蛙
940,Wattrel,カイデン,Zapétrel,Voltrel,Wattrel,Wattrel,찌리비,電海燕,电海燕
941,Kilowattrel,タイカイデン,Fulgulairo,Voltrean,Kilowattrel,Kilowattrel,찌리비크,大電海燕,大电海燕
942,Maschiff,オラチフ,Grondogue,Mobtiff,Maschiff,Maschiff,오라티프,偶叫獒,偶叫獒
943,Mabosstiff,マフィティフ,Dogrino,Mastifioso,Mabosstiff,Mabosstiff,마피티프,獒教父,獒教父
944,Shroodle,シルシュルー,Gribouraigne,Sproxi,Shroodle,Shroodle,땃쭈르,滋汁鼴,滋汁鼹
945,Grafaiai,タギングル,Tag-Tag,Affiti,Grafaiai,Grafaiai,태깅구르,塗標客,涂标客
946,Bramblin,アノクサ,Virovent,Weherba,Bramblin,Bramblin,그푸리,納噬草,纳噬草
947,Brambleghast,アノホラグサ,Virevorreur,Horrerba,Brambleghast,Brambleghast,공푸리,麋納噬草,怖纳噬草
948,Toedscool,ノノクラゲ,Terracool,Tentagra,Toedscool,Toedscool,들눈해,原野水母,原野水母
949,Toadscruel,リククラゲ,Terracruel,Tenterra,Toadscruel,Toadscruel,육파리,陸地水母,陆地水母
950,Klawf,ガケガニ,Craparoi,Klibbe,Klawf,Klawf,절벼게,毛崖蟹,毛崖蟹
951,Capsakid,カプサイジ,Pimito,Chilingel,Capsakid,Capsakid,캡싸이,熱辣娃,热辣娃
952,Scovillain,スコヴィラン,Scovilain,Halupenjo,Scovillain,Scovillain,스코빌런,狠辣椒,狠辣椒
953,Rellor,シガロコ,Léboulérou,Relluk,Rellor,Rellor,구르데,蟲滾泥,虫滚泥
954,Rabsca,ベラカス,Bérasca,Skarabaks,Rabsca,Rabsca,베라카스,蟲甲聖,虫甲圣
955,Flittle,ヒラヒナ,Flotillon,Flattutu,Flittle,Flittle,하느라기,飄飄雛,飘飘雏
956,Espathra,クエスパトラ,Cléopsytra,Psiopatra,Espathra,Espathra,클레스퍼트라,超能艷鴕,超能艳鸵
957,Tinkatink,カヌチャン,Forgerette,Forgita,Tinkatink,Tinkatink,어리짱,小鍛匠,小锻匠
958,Tinkatuff,ナカヌチャン,Forgella,Tafforgita,Tinkatuff,Tinkatuff,벼리짱,巧鍛匠,巧锻匠
959,Tinkaton,デカヌチャン,Forgelina,Granforgita,Tinkaton,Tinkaton,두드리짱,大鍛匠,巨锻匠
960,Wiglett,ウミヂィグダ,Taupikeau,Schligda,Wiglett,Wiglett,바다그다,海地鼠,海地鼠
961,Wugtrio,ウミトリオ,Triopikeau,Schligdri,Wugtrio,Wugtrio,바닥트리오,三海地鼠,三海地鼠
962,Bombirdier,オトシドリ,Lestombaile,Adebom,Bombirdier,Bombirdier,떨구새,下石鳥,下石鸟
963,Finizen,ナミイルカ,Dofin,Normifin,Finizen,Finizen,맨돌핀,波普海豚,波普海豚
964,Palafin,イルカマン,Superdofin,Delfinator,Palafin,Palafin,돌핀맨,海豚俠,海豚侠
965,Varoom,ブロロン,Vrombi,Knattox,Varoom,Varoom,부르롱,噗隆隆,噗隆隆
966,Revavroom,ブロロローム,Vrombotor,Knattatox,Revavroom,Revavroom,부르르룸,普隆隆姆,普隆隆姆
967,Cyclizar,モトトカゲ,Motorizard,Mopex,Cyclizar,Cyclizar,모토마,摩托蜥,摩托蜥
968,Orthworm,ミミズズ,Ferdeter,Schlurm,Orthworm,Orthworm,꿈트렁,拖拖蚓,拖拖蚓
969,Glimmet,キラーメ,Germéclat,Lumispross,Glimmet,Glimmet,초롱순,晶光芽,晶光芽
970,Glimmora,キラフロル,Floréclat,Lumiflora,Glimmora,Glimmora,킬라플로르,晶光花,晶光花
971,Greavard,ボチ,Toutombe,Gruff,Greavard,Greavard,망망이,墓仔狗,墓仔狗
972,Houndstone,ハカドッグ,Tomberro,Friedwuff,Houndstone,Houndstone,묘두기,墓揚犬,墓扬犬
973,Flamigo,カラミンゴ,Flamenroule,Flaminkno,Flamigo,Flamigo,꼬이밍고,纏紅鶴,缠红鹤
974,Cetoddle,アルクジラ,Piétacé,Flaniwal,Cetoddle,Cetoddle,터벅고래,走鯨,走鲸
975,Cetitan,ハルクジラ,Balbalèze,Kolowal,Cetitan,Cetitan,우락고래,浩大鯨,浩大鲸
976,Veluza,ミミガルーサ,Délestin,Agiluza,Veluza,Veluza,가비루사,輕身鱈,轻身鳕
977,Dondozo,ヘイラッシャ,Oyacata,Heerashai,Dondozo,Dondozo,어써러셔,吃吼霸,吃吼霸
978,Tatsugiri,シャリタツ,Nigirigon,Nigiragi,Tatsugiri,Tatsugiri,싸리용,米立龍,米立龙
979,Annihilape,コノヨザル,Courrousinge,Epitaff,Annihilape,Annihilape,저승갓숭,棄世猴,弃世猴
980,Clodsire,ドオー,Terraiste,Suelord,Clodsire,Clodsire,토오,土王,土王
981,Farigiraf,リキキリン,Farigiraf,Farigiraf,Farigiraf,Farigiraf,키키링,奇麒麟,奇麒麟
982,Dudunsparce,ノココッチ,Deusolourdo,Dummimisel,Dudunsparce,Dudunsparce,노고고치,土龍節節,土龙节节
983,Kingambit,ドドゲザン,Courrousinge,Gladimperio,Kingambit,Kingambit,대도각참,僕刀將軍,仆刀将军
984,Great Tusk,イダイナキバ,Fort-Ivoire,Riesenzahn,Colmilargo,Grandizanne,위대한엄니,雄偉牙,雄伟牙
985,Scream Tail,サケブシッポ,Hurle-Queue,Brüllschweif,Colagrito,Crinealato,우렁찬꼬리,吼叫尾,吼叫尾
986,Brute Bonnet,アラブルタケ,Fongus-Furie,Wutpilz,Furioseta,Fungofurioso,사나운버섯,猛惡菇,猛恶菇
987,Flutter Mane,ハバタクカミ,Flotte-Mèche,Flatterhaar,Melenaleto,Codaurlante,날개치는머리,振翼發,振翼发
988,Slither Wing,チヲハウハネ,Rampe-Ailes,Kriechflügel,Reptalada,Alirasenti,땅을기는날개,爬地翅,爬地翅
989,Sandy Shocks,スナノケガワ,Pelage-Sablé,Sandfell,Sandy Shocks,Peldisabbia,모래털가죽,沙鐵皮,沙铁皮
990,Iron Treads,テツノワダチ,Roue-de-Fer,Eisenrad,Ferrodada,Solcoferreo,무쇠바퀴,鐵轍跡,铁辙迹
991,Iron Bundle,テツノツツミ,Hotte-de-Fer,Eisenbündel,Ferrosaco,Saccoferreo,무쇠보따리,鐵包袱,铁包袱
992,Iron Hands,テツノカイナ,Paume-de-Fer,Eisenhand,Ferropalmas,Manoferrea,무쇠손,鐵臂膀,铁臂膀
993,Iron Jugulis,テツノコウベ,Têtes-de-Fer,Eisenhals,Ferrocuello,Colloferreo,무쇠머리,鐵脖頸,铁脖颈
994,Iron Moth,テツノドクガ,Mite-de-Fer,Eisenfalter,Ferropolilla,Falenaferrea,무쇠독나방,鐵毒蛾,铁毒蛾
995,Iron Thorns,テツノイバラ,Épine-de-Fer,Eisendorn,Ferropúas,Spineferree,무쇠가시,鐵荊棘,铁荆棘
996,Frigibax,セビエ,Frigodo,Frospino,Frigibax,Frigibax,드니차,涼脊龍,凉脊龙
997,Arctibax,セゴール,Cryodo,Cryospino,Arctibax,Arctibax,드니꽁,凍脊龍,冻脊龙
998,Baxcalibur,セグレイブ,Glaivodo,Espinodon,Baxcalibur,Baxcalibur,드닐레이브,戟脊龍,戟脊龙
999,Gimmighoul,コレクレー,Mordudor,Gierspenst,Gimmighoul,Gimmighoul,모으령,索財靈,索财灵
1000,Gholdengo,サーフゴー,Gromago,Monetigo,Gholdengo,Gholdengo,타부자고,褰富豪,褰富豪
1001,Wo-Chien,チオンジェン,Chongjian,Chongjian,Wo-Chien,Wo-Chien,총지엔,古簡蝸,古简蜗
1002,Chien-Pao,パオジアン,Baojian,Baojian,Chien-Pao,Chien-Pao,파오젠,古劍豹,古剑豹
1003,Ting-Lu,ディンルー,Dinglu,Dinglu,Ting-Lu,Ting-Lu,딩루,古鼎鹿,古鼎鹿
1004,Chi-Yu,イーユイ,Yuyu,Yuyu,Chi-Yu,Chi-Yu,위유이,古玉魚,古玉鱼
1005,Roaring Moon,トドロクツキ,Rugit-Lune,Donnersichel,Bramaluna,Lunaruggente,고동치는달,轟鳴月,轰鸣月
1006,Iron Valiant,テツノブジン,Garde-de-Fer,Eisenkrieger,Ferropaladin,Eroeferreo,무쇠무인,鐵武者,铁武者
1007,Koraidon,コライドン,Koraidon,Koraidon,Koraidon,Koraidon,코라이돈,故勒頓,故勒顿
1008,Miraidon,ミライドン,Miraidon,Miraidon,Miraidon,Miraidon,미라이돈,密勒頓,密勒顿
1009,Walking Wake,ウネルミナモ,Serpente-Eau,Windewoge,Ondulagua,Acquecrespe,굽이치는물결,波蕩水,波荡水
1010,Iron Leaves,テツノイサハ,Vert-de-Fer,Eisenblatt,Bramaluna,Lunaruggente,무쇠잎새,鐵斑葉,铁斑叶
1011,Dipplin,カミッチュ,Pomdramour,Sirapfel,Ferropaladin,Eroeferreo,과미르,裹蜜蟲,裹蜜虫
1012,Poltchageist,チャデス,Poltchageist,Mortcha,Poltchageist,Poltchageist,차데스,斯魔茶,斯魔茶
1013,Sinistcha,ヤバソチャ,Théffroyable,Fatalitcha,Sinistcha,Sinistcha,그우린차,來悲粗茶,来悲粗茶
1014,Okidogi,イイネイヌ,Félicanis,Boninu,Ondulagua,Acquecrespe,조타구,夠贊狗,够赞狗
1015,Munkidori,マシマシラ,Fortusimia,Benesaru,Bramaluna,Lunaruggente,이야후,願增猿,愿增猿
1016,Fezandipiti,キチキギス,Favianos,Beatori,Ferropaladin,Eroeferreo,기로치,吉雉雞,吉雉鸡
1017,Ogerpon,オーガポン,Ogerpon,Ogerpon,Ogerpon,Ogerpon,오거폰,厄詭椪,厄诡椪
1018,Archaludon,ブリジュラス,Pondraclugon,Briduradon,Archaludon,Archaludon,브리두라스,鋁鋼橋龍,铝钢桥龙
1019,Hydrapple,カミツオロチ,Pomdorochi,Hydrapfel,Hydrapple,Hydrapple,과미드라,蜜集大蛇,蜜集大蛇
1020,Gouging Fire,ウガツホムラ,Feu-Perçant,Keilflamme,Flamariete,Vampeaguzze,꿰뚫는화염,破空焰,破空焰
1021,Raging Bolt,タケルライコ,Ire-Foudre,Furienblitz,Electrofuria,Furiatonante,날뛰는우레,猛雷鼓,猛雷鼓
1022,Iron Boulder,テツノイワオ,Roc-de-Fer,Eisenfels,Ferromole,Massoferreo,무쇠암석,鐵磐岩,铁磐岩
1023,Iron Crown,テツノカシラ,Chef-de-Fer,Eisenhaupt,Ferrotesta,Capoferreo,무쇠감투,鐵頭殼,铁头壳
1024,Terapagos,テラパゴス,Terapagos,Terapagos,Terapagos,Terapagos,테라파고스,太樂巴戈斯,太乐巴戈斯
1025,Pecharunt,モモワロウ,Pêchaminus,Infamomo,Pecharunt,Pecharunt,복숭악동,桃歹郎,桃歹郎`;
             const POKEMON_CSV = `
1,Bulbasaur,Grass,Poison,1
2,Ivysaur,Grass,Poison,1
3,Venusaur,Grass,Poison,1
4,Charmander,Fire,,1
5,Charmeleon,Fire,,1
6,Charizard,Fire,Flying,1
7,Squirtle,Water,,1
8,Wartortle,Water,,1
9,Blastoise,Water,,1
10,Caterpie,Bug,,1
11,Metapod,Bug,,1
12,Butterfree,Bug,Flying,1
13,Weedle,Bug,Poison,1
14,Kakuna,Bug,Poison,1
15,Beedrill,Bug,Poison,1
16,Pidgey,Normal,Flying,1
17,Pidgeotto,Normal,Flying,1
18,Pidgeot,Normal,Flying,1
19,Rattata,Normal,,1
20,Raticate,Normal,,1
21,Spearow,Normal,Flying,1
22,Fearow,Normal,Flying,1
23,Ekans,Poison,,1
24,Arbok,Poison,,1
25,Pikachu,Electric,,1
26,Raichu,Electric,,1
27,Sandshrew,Ground,,1
28,Sandslash,Ground,,1
29,Nidoran♀,Poison,,1
30,Nidorina,Poison,,1
31,Nidoqueen,Poison,Ground,1
32,Nidoran♂,Poison,,1
33,Nidorino,Poison,,1
34,Nidoking,Poison,Ground,1
35,Clefairy,Fairy,,1
36,Clefable,Fairy,,1
37,Vulpix,Fire,,1
38,Ninetales,Fire,,1
39,Jigglypuff,Normal,Fairy,1
40,Wigglytuff,Normal,Fairy,1
41,Zubat,Poison,Flying,1
42,Golbat,Poison,Flying,1
43,Oddish,Grass,Poison,1
44,Gloom,Grass,Poison,1
45,Vileplume,Grass,Poison,1
46,Paras,Bug,Grass,1
47,Parasect,Bug,Grass,1
48,Venonat,Bug,Poison,1
49,Venomoth,Bug,Poison,1
50,Diglett,Ground,,1
51,Dugtrio,Ground,,1
52,Meowth,Normal,,1
53,Persian,Normal,,1
54,Psyduck,Water,,1
55,Golduck,Water,,1
56,Mankey,Fighting,,1
57,Primeape,Fighting,,1
58,Growlithe,Fire,,1
59,Arcanine,Fire,,1
60,Poliwag,Water,,1
61,Poliwhirl,Water,,1
62,Poliwrath,Water,Fighting,1
63,Abra,Psychic,,1
64,Kadabra,Psychic,,1
65,Alakazam,Psychic,,1
66,Machop,Fighting,,1
67,Machoke,Fighting,,1
68,Machamp,Fighting,,1
69,Bellsprout,Grass,Poison,1
70,Weepinbell,Grass,Poison,1
71,Victreebel,Grass,Poison,1
72,Tentacool,Water,Poison,1
73,Tentacruel,Water,Poison,1
74,Geodude,Rock,Ground,1
75,Graveler,Rock,Ground,1
76,Golem,Rock,Ground,1
77,Ponyta,Fire,,1
78,Rapidash,Fire,,1
79,Slowpoke,Water,Psychic,1
80,Slowbro,Water,Psychic,1
81,Magnemite,Electric,Steel,1
82,Magneton,Electric,Steel,1
83,Farfetch'd,Normal,Flying,1
84,Doduo,Normal,Flying,1
85,Dodrio,Normal,Flying,1
86,Seel,Water,,1
87,Dewgong,Water,Ice,1
88,Grimer,Poison,,1
89,Muk,Poison,,1
90,Shellder,Water,,1
91,Cloyster,Water,Ice,1
92,Gastly,Ghost,Poison,1
93,Haunter,Ghost,Poison,1
94,Gengar,Ghost,Poison,1
95,Onix,Rock,Ground,1
96,Drowzee,Psychic,,1
97,Hypno,Psychic,,1
98,Krabby,Water,,1
99,Kingler,Water,,1
100,Voltorb,Electric,,1
101,Electrode,Electric,,1
102,Exeggcute,Grass,Psychic,1
103,Exeggutor,Grass,Psychic,1
104,Cubone,Ground,,1
105,Marowak,Ground,,1
106,Hitmonlee,Fighting,,1
107,Hitmonchan,Fighting,,1
108,Lickitung,Normal,,1
109,Koffing,Poison,,1
110,Weezing,Poison,,1
111,Rhyhorn,Ground,Rock,1
112,Rhydon,Ground,Rock,1
113,Chansey,Normal,,1
114,Tangela,Grass,,1
115,Kangaskhan,Normal,,1
116,Horsea,Water,,1
117,Seadra,Water,,1
118,Goldeen,Water,,1
119,Seaking,Water,,1
120,Staryu,Water,,1
121,Starmie,Water,Psychic,1
122,Mr. Mime,Psychic,Fairy,1
123,Scyther,Bug,Flying,1
124,Jynx,Ice,Psychic,1
125,Electabuzz,Electric,,1
126,Magmar,Fire,,1
127,Pinsir,Bug,,1
128,Tauros,Normal,,1
129,Magikarp,Water,,1
130,Gyarados,Water,Flying,1
131,Lapras,Water,Ice,1
132,Ditto,Normal,,1
133,Eevee,Normal,,1
134,Vaporeon,Water,,1
135,Jolteon,Electric,,1
136,Flareon,Fire,,1
137,Porygon,Normal,,1
138,Omanyte,Rock,Water,1
139,Omastar,Rock,Water,1
140,Kabuto,Rock,Water,1
141,Kabutops,Rock,Water,1
142,Aerodactyl,Rock,Flying,1
143,Snorlax,Normal,,1
144,Articuno,Ice,Flying,1
145,Zapdos,Electric,Flying,1
146,Moltres,Fire,Flying,1
147,Dratini,Dragon,,1
148,Dragonair,Dragon,,1
149,Dragonite,Dragon,Flying,1
150,Mewtwo,Psychic,,1
151,Mew,Psychic,,1
152,Chikorita,Grass,,2
153,Bayleef,Grass,,2
154,Meganium,Grass,,2
155,Cyndaquil,Fire,,2
156,Quilava,Fire,,2
157,Typhlosion,Fire,,2
158,Totodile,Water,,2
159,Croconaw,Water,,2
160,Feraligatr,Water,,2
161,Sentret,Normal,,2
162,Furret,Normal,,2
163,Hoothoot,Normal,Flying,2
164,Noctowl,Normal,Flying,2
165,Ledyba,Bug,Flying,2
166,Ledian,Bug,Flying,2
167,Spinarak,Bug,Poison,2
168,Ariados,Bug,Poison,2
169,Crobat,Poison,Flying,2
170,Chinchou,Water,Electric,2
171,Lanturn,Water,Electric,2
172,Pichu,Electric,,2
173,Cleffa,Fairy,,2
174,Igglybuff,Normal,Fairy,2
175,Togepi,Fairy,,2
176,Togetic,Fairy,Flying,2
177,Natu,Psychic,Flying,2
178,Xatu,Psychic,Flying,2
179,Mareep,Electric,,2
180,Flaaffy,Electric,,2
181,Ampharos,Electric,,2
182,Bellossom,Grass,,2
183,Marill,Water,Fairy,2
184,Azumarill,Water,Fairy,2
185,Sudowoodo,Rock,,2
186,Politoed,Water,,2
187,Hoppip,Grass,Flying,2
188,Skiploom,Grass,Flying,2
189,Jumpluff,Grass,Flying,2
190,Aipom,Normal,,2
191,Sunkern,Grass,,2
192,Sunflora,Grass,,2
193,Yanma,Bug,Flying,2
194,Wooper,Water,Ground,2
195,Quagsire,Water,Ground,2
196,Espeon,Psychic,,2
197,Umbreon,Dark,,2
198,Murkrow,Dark,Flying,2
199,Slowking,Water,Psychic,2
200,Misdreavus,Ghost,,2
201,Unown,Psychic,,2
202,Wobbuffet,Psychic,,2
203,Girafarig,Normal,Psychic,2
204,Pineco,Bug,,2
205,Forretress,Bug,Steel,2
206,Dunsparce,Normal,,2
207,Gligar,Ground,Flying,2
208,Steelix,Steel,Ground,2
209,Snubbull,Fairy,,2
210,Granbull,Fairy,,2
211,Qwilfish,Water,Poison,2
212,Scizor,Bug,Steel,2
213,Shuckle,Bug,Rock,2
214,Heracross,Bug,Fighting,2
215,Sneasel,Dark,Ice,2
216,Teddiursa,Normal,,2
217,Ursaring,Normal,,2
218,Slugma,Fire,,2
219,Magcargo,Fire,Rock,2
220,Swinub,Ice,Ground,2
221,Piloswine,Ice,Ground,2
222,Corsola,Water,Rock,2
223,Remoraid,Water,,2
224,Octillery,Water,,2
225,Delibird,Ice,Flying,2
226,Mantine,Water,Flying,2
227,Skarmory,Steel,Flying,2
228,Houndour,Dark,Fire,2
229,Houndoom,Dark,Fire,2
230,Kingdra,Water,Dragon,2
231,Phanpy,Ground,,2
232,Donphan,Ground,,2
233,Porygon2,Normal,,2
234,Stantler,Normal,,2
235,Smeargle,Normal,,2
236,Tyrogue,Fighting,,2
237,Hitmontop,Fighting,,2
238,Smoochum,Ice,Psychic,2
239,Elekid,Electric,,2
240,Magby,Fire,,2
241,Miltank,Normal,,2
242,Blissey,Normal,,2
243,Raikou,Electric,,2
244,Entei,Fire,,2
245,Suicune,Water,,2
246,Larvitar,Rock,Ground,2
247,Pupitar,Rock,Ground,2
248,Tyranitar,Rock,Dark,2
249,Lugia,Psychic,Flying,2
250,Ho-oh,Fire,Flying,2
251,Celebi,Psychic,Grass,2
252,Treecko,Grass,,3
253,Grovyle,Grass,,3
254,Sceptile,Grass,,3
255,Torchic,Fire,,3
256,Combusken,Fire,Fighting,3
257,Blaziken,Fire,Fighting,3
258,Mudkip,Water,,3
259,Marshtomp,Water,Ground,3
260,Swampert,Water,Ground,3
261,Poochyena,Dark,,3
262,Mightyena,Dark,,3
263,Zigzagoon,Normal,,3
264,Linoone,Normal,,3
265,Wurmple,Bug,,3
266,Silcoon,Bug,,3
267,Beautifly,Bug,Flying,3
268,Cascoon,Bug,,3
269,Dustox,Bug,Poison,3
270,Lotad,Water,Grass,3
271,Lombre,Water,Grass,3
272,Ludicolo,Water,Grass,3
273,Seedot,Grass,,3
274,Nuzleaf,Grass,Dark,3
275,Shiftry,Grass,Dark,3
276,Taillow,Normal,Flying,3
277,Swellow,Normal,Flying,3
278,Wingull,Water,Flying,3
279,Pelipper,Water,Flying,3
280,Ralts,Psychic,Fairy,3
281,Kirlia,Psychic,Fairy,3
282,Gardevoir,Psychic,Fairy,3
283,Surskit,Bug,Water,3
284,Masquerain,Bug,Flying,3
285,Shroomish,Grass,,3
286,Breloom,Grass,Fighting,3
287,Slakoth,Normal,,3
288,Vigoroth,Normal,,3
289,Slaking,Normal,,3
290,Nincada,Bug,Ground,3
291,Ninjask,Bug,Flying,3
292,Shedinja,Bug,Ghost,3
293,Whismur,Normal,,3
294,Loudred,Normal,,3
295,Exploud,Normal,,3
296,Makuhita,Fighting,,3
297,Hariyama,Fighting,,3
298,Azurill,Normal,Fairy,3
299,Nosepass,Rock,,3
300,Skitty,Normal,,3
301,Delcatty,Normal,,3
302,Sableye,Dark,Ghost,3
303,Mawile,Steel,Fairy,3
304,Aron,Steel,Rock,3
305,Lairon,Steel,Rock,3
306,Aggron,Steel,Rock,3
307,Meditite,Fighting,Psychic,3
308,Medicham,Fighting,Psychic,3
309,Electrike,Electric,,3
310,Manectric,Electric,,3
311,Plusle,Electric,,3
312,Minun,Electric,,3
313,Volbeat,Bug,,3
314,Illumise,Bug,,3
315,Roselia,Grass,Poison,3
316,Gulpin,Poison,,3
317,Swalot,Poison,,3
318,Carvanha,Water,Dark,3
319,Sharpedo,Water,Dark,3
320,Wailmer,Water,,3
321,Wailord,Water,,3
322,Numel,Fire,Ground,3
323,Camerupt,Fire,Ground,3
324,Torkoal,Fire,,3
325,Spoink,Psychic,,3
326,Grumpig,Psychic,,3
327,Spinda,Normal,,3
328,Trapinch,Ground,,3
329,Vibrava,Ground,Dragon,3
330,Flygon,Ground,Dragon,3
331,Cacnea,Grass,,3
332,Cacturne,Grass,Dark,3
333,Swablu,Normal,Flying,3
334,Altaria,Dragon,Flying,3
335,Zangoose,Normal,,3
336,Seviper,Poison,,3
337,Lunatone,Rock,Psychic,3
338,Solrock,Rock,Psychic,3
339,Barboach,Water,Ground,3
340,Whiscash,Water,Ground,3
341,Corphish,Water,,3
342,Crawdaunt,Water,Dark,3
343,Baltoy,Ground,Psychic,3
344,Claydol,Ground,Psychic,3
345,Lileep,Rock,Grass,3
346,Cradily,Rock,Grass,3
347,Anorith,Rock,Bug,3
348,Armaldo,Rock,Bug,3
349,Feebas,Water,,3
350,Milotic,Water,,3
351,Castform,Normal,,3
352,Kecleon,Normal,,3
353,Shuppet,Ghost,,3
354,Banette,Ghost,,3
355,Duskull,Ghost,,3
356,Dusclops,Ghost,,3
357,Tropius,Grass,Flying,3
358,Chimecho,Psychic,,3
359,Absol,Dark,,3
360,Wynaut,Psychic,,3
361,Snorunt,Ice,,3
362,Glalie,Ice,,3
363,Spheal,Ice,Water,3
364,Sealeo,Ice,Water,3
365,Walrein,Ice,Water,3
366,Clamperl,Water,,3
367,Huntail,Water,,3
368,Gorebyss,Water,,3
369,Relicanth,Water,Rock,3
370,Luvdisc,Water,,3
371,Bagon,Dragon,,3
372,Shelgon,Dragon,,3
373,Salamence,Dragon,Flying,3
374,Beldum,Steel,Psychic,3
375,Metang,Steel,Psychic,3
376,Metagross,Steel,Psychic,3
377,Regirock,Rock,,3
378,Regice,Ice,,3
379,Registeel,Steel,,3
380,Latias,Dragon,Psychic,3
381,Latios,Dragon,Psychic,3
382,Kyogre,Water,,3
383,Groudon,Ground,,3
384,Rayquaza,Dragon,Flying,3
385,Jirachi,Steel,Psychic,3
386,Deoxys,Psychic,,3
387,Turtwig,Grass,,4
388,Grotle,Grass,,4
389,Torterra,Grass,Ground,4
390,Chimchar,Fire,,4
391,Monferno,Fire,Fighting,4
392,Infernape,Fire,Fighting,4
393,Piplup,Water,,4
394,Prinplup,Water,,4
395,Empoleon,Water,Steel,4
396,Starly,Normal,Flying,4
397,Staravia,Normal,Flying,4
398,Staraptor,Normal,Flying,4
399,Bidoof,Normal,,4
400,Bibarel,Normal,Water,4
401,Kricketot,Bug,,4
402,Kricketune,Bug,,4
403,Shinx,Electric,,4
404,Luxio,Electric,,4
405,Luxray,Electric,,4
406,Budew,Grass,Poison,4
407,Roserade,Grass,Poison,4
408,Cranidos,Rock,,4
409,Rampardos,Rock,,4
410,Shieldon,Rock,Steel,4
411,Bastiodon,Rock,Steel,4
412,Burmy,Bug,,4
413,Wormadam,Bug,Grass,4
414,Mothim,Bug,Flying,4
415,Combee,Bug,Flying,4
416,Vespiquen,Bug,Flying,4
417,Pachirisu,Electric,,4
418,Buizel,Water,,4
419,Floatzel,Water,,4
420,Cherubi,Grass,,4
421,Cherrim,Grass,,4
422,Shellos,Water,,4
423,Gastrodon,Water,Ground,4
424,Ambipom,Normal,,4
425,Drifloon,Ghost,Flying,4
426,Drifblim,Ghost,Flying,4
427,Buneary,Normal,,4
428,Lopunny,Normal,,4
429,Mismagius,Ghost,,4
430,Honchkrow,Dark,Flying,4
431,Glameow,Normal,,4
432,Purugly,Normal,,4
433,Chingling,Psychic,,4
434,Stunky,Poison,Dark,4
435,Skuntank,Poison,Dark,4
436,Bronzor,Steel,Psychic,4
437,Bronzong,Steel,Psychic,4
438,Bonsly,Rock,,4
439,Mime Jr.,Psychic,Fairy,4
440,Happiny,Normal,,4
441,Chatot,Normal,Flying,4
442,Spiritomb,Ghost,Dark,4
443,Gible,Dragon,Ground,4
444,Gabite,Dragon,Ground,4
445,Garchomp,Dragon,Ground,4
446,Munchlax,Normal,,4
447,Riolu,Fighting,,4
448,Lucario,Fighting,Steel,4
449,Hippopotas,Ground,,4
450,Hippowdon,Ground,,4
451,Skorupi,Poison,Bug,4
452,Drapion,Poison,Dark,4
453,Croagunk,Poison,Fighting,4
454,Toxicroak,Poison,Fighting,4
455,Carnivine,Grass,,4
456,Finneon,Water,,4
457,Lumineon,Water,,4
458,Mantyke,Water,Flying,4
459,Snover,Grass,Ice,4
460,Abomasnow,Grass,Ice,4
461,Weavile,Dark,Ice,4
462,Magnezone,Electric,Steel,4
463,Lickilicky,Normal,,4
464,Rhyperior,Ground,Rock,4
465,Tangrowth,Grass,,4
466,Electivire,Electric,,4
467,Magmortar,Fire,,4
468,Togekiss,Fairy,Flying,4
469,Yanmega,Bug,Flying,4
470,Leafeon,Grass,,4
471,Glaceon,Ice,,4
472,Gliscor,Ground,Flying,4
473,Mamoswine,Ice,Ground,4
474,Porygon-Z,Normal,,4
475,Gallade,Psychic,Fighting,4
476,Probopass,Rock,Steel,4
477,Dusknoir,Ghost,,4
478,Froslass,Ice,Ghost,4
479,Rotom,Electric,Ghost,4
480,Uxie,Psychic,,4
481,Mesprit,Psychic,,4
482,Azelf,Psychic,,4
483,Dialga,Steel,Dragon,4
484,Palkia,Water,Dragon,4
485,Heatran,Fire,Steel,4
486,Regigigas,Normal,,4
487,Giratina,Ghost,Dragon,4
488,Cresselia,Psychic,,4
489,Phione,Water,,4
490,Manaphy,Water,,4
491,Darkrai,Dark,,4
492,Shaymin,Grass,,4
493,Arceus,Normal,,4
494,Victini,Psychic,Fire,5
495,Snivy,Grass,,5
496,Servine,Grass,,5
497,Serperior,Grass,,5
498,Tepig,Fire,,5
499,Pignite,Fire,Fighting,5
500,Emboar,Fire,Fighting,5
501,Oshawott,Water,,5
502,Dewott,Water,,5
503,Samurott,Water,,5
504,Patrat,Normal,,5
505,Watchog,Normal,,5
506,Lillipup,Normal,,5
507,Herdier,Normal,,5
508,Stoutland,Normal,,5
509,Purrloin,Dark,,5
510,Liepard,Dark,,5
511,Pansage,Grass,,5
512,Simisage,Grass,,5
513,Pansear,Fire,,5
514,Simisear,Fire,,5
515,Panpour,Water,,5
516,Simipour,Water,,5
517,Munna,Psychic,,5
518,Musharna,Psychic,,5
519,Pidove,Normal,Flying,5
520,Tranquill,Normal,Flying,5
521,Unfezant,Normal,Flying,5
522,Blitzle,Electric,,5
523,Zebstrika,Electric,,5
524,Roggenrola,Rock,,5
525,Boldore,Rock,,5
526,Gigalith,Rock,,5
527,Woobat,Psychic,Flying,5
528,Swoobat,Psychic,Flying,5
529,Drilbur,Ground,,5
530,Excadrill,Ground,Steel,5
531,Audino,Normal,,5
532,Timburr,Fighting,,5
533,Gurdurr,Fighting,,5
534,Conkeldurr,Fighting,,5
535,Tympole,Water,,5
536,Palpitoad,Water,Ground,5
537,Seismitoad,Water,Ground,5
538,Throh,Fighting,,5
539,Sawk,Fighting,,5
540,Sewaddle,Bug,Grass,5
541,Swadloon,Bug,Grass,5
542,Leavanny,Bug,Grass,5
543,Venipede,Bug,Poison,5
544,Whirlipede,Bug,Poison,5
545,Scolipede,Bug,Poison,5
546,Cottonee,Grass,Fairy,5
547,Whimsicott,Grass,Fairy,5
548,Petilil,Grass,,5
549,Lilligant,Grass,,5
550,Basculin,Water,,5
551,Sandile,Ground,Dark,5
552,Krokorok,Ground,Dark,5
553,Krookodile,Ground,Dark,5
554,Darumaka,Fire,,5
555,Darmanitan,Fire,,5
556,Maractus,Grass,,5
557,Dwebble,Bug,Rock,5
558,Crustle,Bug,Rock,5
559,Scraggy,Dark,Fighting,5
560,Scrafty,Dark,Fighting,5
561,Sigilyph,Psychic,Flying,5
562,Yamask,Ghost,,5
563,Cofagrigus,Ghost,,5
564,Tirtouga,Water,Rock,5
565,Carracosta,Water,Rock,5
566,Archen,Rock,Flying,5
567,Archeops,Rock,Flying,5
568,Trubbish,Poison,,5
569,Garbodor,Poison,,5
570,Zorua,Dark,,5
571,Zoroark,Dark,,5
572,Minccino,Normal,,5
573,Cinccino,Normal,,5
574,Gothita,Psychic,,5
575,Gothorita,Psychic,,5
576,Gothitelle,Psychic,,5
577,Solosis,Psychic,,5
578,Duosion,Psychic,,5
579,Reuniclus,Psychic,,5
580,Ducklett,Water,Flying,5
581,Swanna,Water,Flying,5
582,Vanillite,Ice,,5
583,Vanillish,Ice,,5
584,Vanilluxe,Ice,,5
585,Deerling,Normal,Grass,5
586,Sawsbuck,Normal,Grass,5
587,Emolga,Electric,Flying,5
588,Karrablast,Bug,,5
589,Escavalier,Bug,Steel,5
590,Foongus,Grass,Poison,5
591,Amoonguss,Grass,Poison,5
592,Frillish,Water,Ghost,5
593,Jellicent,Water,Ghost,5
594,Alomomola,Water,,5
595,Joltik,Bug,Electric,5
596,Galvantula,Bug,Electric,5
597,Ferroseed,Grass,Steel,5
598,Ferrothorn,Grass,Steel,5
599,Klink,Steel,,5
600,Klang,Steel,,5
601,Klinklang,Steel,,5
602,Tynamo,Electric,,5
603,Eelektrik,Electric,,5
604,Eelektross,Electric,,5
605,Elgyem,Psychic,,5
606,Beheeyem,Psychic,,5
607,Litwick,Ghost,Fire,5
608,Lampent,Ghost,Fire,5
609,Chandelure,Ghost,Fire,5
610,Axew,Dragon,,5
611,Fraxure,Dragon,,5
612,Haxorus,Dragon,,5
613,Cubchoo,Ice,,5
614,Beartic,Ice,,5
615,Cryogonal,Ice,,5
616,Shelmet,Bug,,5
617,Accelgor,Bug,,5
618,Stunfisk,Ground,Electric,5
619,Mienfoo,Fighting,,5
620,Mienshao,Fighting,,5
621,Druddigon,Dragon,,5
622,Golett,Ground,Ghost,5
623,Golurk,Ground,Ghost,5
624,Pawniard,Dark,Steel,5
625,Bisharp,Dark,Steel,5
626,Bouffalant,Normal,,5
627,Rufflet,Normal,Flying,5
628,Braviary,Normal,Flying,5
629,Vullaby,Dark,Flying,5
630,Mandibuzz,Dark,Flying,5
631,Heatmor,Fire,,5
632,Durant,Bug,Steel,5
633,Deino,Dark,Dragon,5
634,Zweilous,Dark,Dragon,5
635,Hydreigon,Dark,Dragon,5
636,Larvesta,Bug,Fire,5
637,Volcarona,Bug,Fire,5
638,Cobalion,Steel,Fighting,5
639,Terrakion,Rock,Fighting,5
640,Virizion,Grass,Fighting,5
641,Tornadus,Flying,,5
642,Thundurus,Electric,Flying,5
643,Reshiram,Dragon,Fire,5
644,Zekrom,Dragon,Electric,5
645,Landorus,Ground,Flying,5
646,Kyurem,Dragon,Ice,5
647,Keldeo,Water,Fighting,5
648,Meloetta,Normal,Psychic,5
649,Genesect,Bug,Steel,5
650,Chespin,Grass,,6
651,Quilladin,Grass,,6
652,Chesnaught,Grass,Fighting,6
653,Fennekin,Fire,,6
654,Braixen,Fire,,6
655,Delphox,Fire,Psychic,6
656,Froakie,Water,,6
657,Frogadier,Water,,6
658,Greninja,Water,Dark,6
659,Bunnelby,Normal,,6
660,Diggersby,Normal,Ground,6
661,Fletchling,Normal,Flying,6
662,Fletchinder,Fire,Flying,6
663,Talonflame,Fire,Flying,6
664,Scatterbug,Bug,,6
665,Spewpa,Bug,,6
666,Vivillon,Bug,Flying,6
667,Litleo,Fire,Normal,6
668,Pyroar,Fire,Normal,6
669,Flabébé,Fairy,,6
670,Floette,Fairy,,6
671,Florges,Fairy,,6
672,Skiddo,Grass,,6
673,Gogoat,Grass,,6
674,Pancham,Fighting,,6
675,Pangoro,Fighting,Dark,6
676,Furfrou,Normal,,6
677,Espurr,Psychic,,6
678,Meowstic,Psychic,,6
679,Honedge,Steel,Ghost,6
680,Doublade,Steel,Ghost,6
681,Aegislash,Steel,Ghost,6
682,Spritzee,Fairy,,6
683,Aromatisse,Fairy,,6
684,Swirlix,Fairy,,6
685,Slurpuff,Fairy,,6
686,Inkay,Dark,Psychic,6
687,Malamar,Dark,Psychic,6
688,Binacle,Rock,Water,6
689,Barbaracle,Rock,Water,6
690,Skrelp,Poison,Water,6
691,Dragalge,Poison,Dragon,6
692,Clauncher,Water,,6
693,Clawitzer,Water,,6
694,Helioptile,Electric,Normal,6
695,Heliolisk,Electric,Normal,6
696,Tyrunt,Rock,Dragon,6
697,Tyrantrum,Rock,Dragon,6
698,Amaura,Rock,Ice,6
699,Aurorus,Rock,Ice,6
700,Sylveon,Fairy,,6
701,Hawlucha,Fighting,Flying,6
702,Dedenne,Electric,Fairy,6
703,Carbink,Rock,Fairy,6
704,Goomy,Dragon,,6
705,Sliggoo,Dragon,,6
706,Goodra,Dragon,,6
707,Klefki,Steel,Fairy,6
708,Phantump,Ghost,Grass,6
709,Trevenant,Ghost,Grass,6
710,Pumpkaboo,Ghost,Grass,6
711,Gourgeist,Ghost,Grass,6
712,Bergmite,Ice,,6
713,Avalugg,Ice,,6
714,Noibat,Flying,Dragon,6
715,Noivern,Flying,Dragon,6
716,Xerneas,Fairy,,6
717,Yveltal,Dark,Flying,6
718,Zygarde,Dragon,Ground,6
719,Diancie,Rock,Fairy,6
720,Hoopa,Psychic,Ghost,6
721,Volcanion,Fire,Water,6
722,Rowlet,Grass,Flying,7
723,Dartrix,Grass,Flying,7
724,Decidueye,Grass,Ghost,7
725,Litten,Fire,,7
726,Torracat,Fire,,7
727,Incineroar,Fire,Dark,7
728,Popplio,Water,,7
729,Brionne,Water,,7
730,Primarina,Water,Fairy,7
731,Pikipek,Normal,Flying,7
732,Trumbeak,Normal,Flying,7
733,Toucannon,Normal,Flying,7
734,Yungoos,Normal,,7
735,Gumshoos,Normal,,7
736,Grubbin,Bug,,7
737,Charjabug,Bug,Electric,7
738,Vikavolt,Bug,Electric,7
739,Crabrawler,Fighting,,7
740,Crabominable,Fighting,Ice,7
741,Oricorio,Fire,Flying,7
742,Cutiefly,Bug,Fairy,7
743,Ribombee,Bug,Fairy,7
744,Rockruff,Rock,,7
745,Lycanroc,Rock,,7
746,Wishiwashi,Water,,7
747,Mareanie,Poison,Water,7
748,Toxapex,Poison,Water,7
749,Mudbray,Ground,,7
750,Mudsdale,Ground,,7
751,Dewpider,Water,Bug,7
752,Araquanid,Water,Bug,7
753,Fomantis,Grass,,7
754,Lurantis,Grass,,7
755,Morelull,Grass,Fairy,7
756,Shiinotic,Grass,Fairy,7
757,Salandit,Poison,Fire,7
758,Salazzle,Poison,Fire,7
759,Stufful,Normal,Fighting,7
760,Bewear,Normal,Fighting,7
761,Bounsweet,Grass,,7
762,Steenee,Grass,,7
763,Tsareena,Grass,,7
764,Comfey,Fairy,,7
765,Oranguru,Normal,Psychic,7
766,Passimian,Fighting,,7
767,Wimpod,Bug,Water,7
768,Golisopod,Bug,Water,7
769,Sandygast,Ghost,Ground,7
770,Palossand,Ghost,Ground,7
771,Pyukumuku,Water,,7
772,Type: Null,Normal,,7
773,Silvally,Normal,,7
774,Minior,Rock,Flying,7
775,Komala,Normal,,7
776,Turtonator,Fire,Dragon,7
777,Togedemaru,Electric,Steel,7
778,Mimikyu,Ghost,Fairy,7
779,Bruxish,Water,Psychic,7
780,Drampa,Normal,Dragon,7
781,Dhelmise,Ghost,Grass,7
782,Jangmo-o,Dragon,,7
783,Hakamo-o,Dragon,Fighting,7
784,Kommo-o,Dragon,Fighting,7
785,Tapu Koko,Electric,Fairy,7
786,Tapu Lele,Psychic,Fairy,7
787,Tapu Bulu,Grass,Fairy,7
788,Tapu Fini,Water,Fairy,7
789,Cosmog,Psychic,,7
790,Cosmoem,Psychic,,7
791,Solgaleo,Psychic,Steel,7
792,Lunala,Psychic,Ghost,7
793,Nihilego,Rock,Poison,7
794,Buzzwole,Bug,Fighting,7
795,Pheromosa,Bug,Fighting,7
796,Xurkitree,Electric,,7
797,Celesteela,Steel,Flying,7
798,Kartana,Grass,Steel,7
799,Guzzlord,Dark,Dragon,7
800,Necrozma,Psychic,,7
801,Magearna,Steel,Fairy,7
802,Marshadow,Fighting,Ghost,7
803,Poipole,Poison,,7
804,Naganadel,Poison,Dragon,7
805,Stakataka,Rock,Steel,7
806,Blacephalon,Fire,Ghost,7
807,Zeraora,Electric,,7
808,Meltan,Steel,,7
809,Melmetal,Steel,,7
810,Grookey,Grass,,8
811,Thwackey,Grass,,8
812,Rillaboom,Grass,,8
813,Scorbunny,Fire,,8
814,Raboot,Fire,,8
815,Cinderace,Fire,,8
816,Sobble,Water,,8
817,Drizzile,Water,,8
818,Inteleon,Water,,8
819,Skwovet,Normal,,8
820,Greedent,Normal,,8
821,Rookidee,Flying,,8
822,Corvisquire,Flying,,8
823,Corviknight,Flying,Steel,8
824,Blipbug,Bug,,8
825,Dottler,Bug,Psychic,8
826,Orbeetle,Bug,Psychic,8
827,Nickit,Dark,,8
828,Thievul,Dark,,8
829,Gossifleur,Grass,,8
830,Eldegoss,Grass,,8
831,Wooloo,Normal,,8
832,Dubwool,Normal,,8
833,Chewtle,Water,,8
834,Drednaw,Water,Rock,8
835,Yamper,Electric,,8
836,Boltund,Electric,,8
837,Rolycoly,Rock,,8
838,Carkol,Rock,Fire,8
839,Coalossal,Rock,Fire,8
840,Applin,Grass,Dragon,8
841,Flapple,Grass,Dragon,8
842,Appletun,Grass,Dragon,8
843,Silicobra,Ground,,8
844,Sandaconda,Ground,,8
845,Cramorant,Flying,Water,8
846,Arrokuda,Water,,8
847,Barraskewda,Water,,8
848,Toxel,Electric,Poison,8
849,Toxtricity,Electric,Poison,8
850,Sizzlipede,Fire,Bug,8
851,Centiskorch,Fire,Bug,8
852,Clobbopus,Fighting,,8
853,Grapploct,Fighting,,8
854,Sinistea,Ghost,,8
855,Polteageist,Ghost,,8
856,Hatenna,Psychic,,8
857,Hattrem,Psychic,,8
858,Hatterene,Psychic,Fairy,8
859,Impidimp,Dark,Fairy,8
860,Morgrem,Dark,Fairy,8
861,Grimmsnarl,Dark,Fairy,8
862,Obstagoon,Dark,Normal,8
863,Perrserker,Steel,,8
864,Cursola,Ghost,,8
865,Sirfetch'd,Fighting,,8
866,Mr. Rime,Ice,Psychic,8
867,Runerigus,Ground,Ghost,8
868,Milcery,Fairy,,8
869,Alcremie,Fairy,,8
870,Falinks,Fighting,,8
871,Pincurchin,Electric,,8
872,Snom,Ice,Bug,8
873,Frosmoth,Ice,Bug,8
874,Stonjourner,Rock,,8
875,Eiscue,Ice,,8
876,Indeedee,Psychic,Normal,8
877,Morpeko,Electric,Dark,8
878,Cufant,Steel,,8
879,Copperajah,Steel,,8
880,Dracozolt,Electric,Dragon,8
881,Arctozolt,Electric,Ice,8
882,Dracovish,Water,Dragon,8
883,Arctovish,Water,Ice,8
884,Duraludon,Steel,Dragon,8
885,Dreepy,Dragon,Ghost,8
886,Drakloak,Dragon,Ghost,8
887,Dragapult,Dragon,Ghost,8
888,Zacian,Fairy,Steel,8
889,Zamazenta,Fighting,Steel,8
890,Eternatus,Poison,Dragon,8
891,Kubfu,Fighting,,8
892,Urshifu,Fighting,Dark,8
893,Zarude,Dark,Grass,8
894,Regieleki,Electric,,8
895,Regidrago,Dragon,,8
896,Glastrier,Ice,,8
897,Spectrier,Ghost,,8
898,Calyrex,Psychic,Grass,8
899,Wyrdeer,Normal,Psychic,8
900,Kleavor,Bug,Rock,8
901,Ursaluna,Ground,Normal,8
902,Basculegion,Water,Ghost,8
903,Sneasler,Fighting,Poison,8
904,Overqwil,Dark,Poison,8
905,Enamorus,Fairy,Flying,8
906,Sprigatito,Grass,,9
907,Floragato,Grass,,9
908,Meowscarada,Grass,Dark,9
909,Fuecoco,Fire,,9
910,Crocalor,Fire,,9
911,Skeledirge,Fire,Ghost,9
912,Quaxly,Water,,9
913,Quaxwell,Water,,9
914,Quaquaval,Water,Fighting,9
915,Lechonk,Normal,,9
916,Oinkologne,Normal,,9
917,Tarountula,Bug,,9
918,Spidops,Bug,,9
919,Nymble,Bug,,9
920,Lokix,Bug,Dark,9
921,Pawmi,Electric,,9
922,Pawmo,Electric,Fighting,9
923,Pawmot,Electric,Fighting,9
924,Tandemaus,Normal,,9
925,Maushold,Normal,,9
926,Fidough,Fairy,,9
927,Dachsbun,Fairy,,9
928,Smoliv,Grass,Normal,9
929,Dolliv,Grass,Normal,9
930,Arboliva,Grass,Normal,9
931,Squawkabilly,Normal,Flying,9
932,Nacli,Rock,,9
933,Naclstack,Rock,,9
934,Garganacl,Rock,,9
935,Charcadet,Fire,,9
936,Armarouge,Fire,Psychic,9
937,Ceruledge,Fire,Ghost,9
938,Tadbulb,Electric,,9
939,Bellibolt,Electric,,9
940,Wattrel,Electric,Flying,9
941,Kilowattrel,Electric,Flying,9
942,Maschiff,Dark,,9
943,Mabosstiff,Dark,,9
944,Shroodle,Poison,Normal,9
945,Grafaiai,Poison,Normal,9
946,Bramblin,Grass,Ghost,9
947,Brambleghast,Grass,Ghost,9
948,Toedscool,Ground,Grass,9
949,Toedscruel,Ground,Grass,9
950,Klawf,Rock,,9
951,Capsakid,Grass,,9
952,Scovillain,Grass,Fire,9
953,Rellor,Bug,,9
954,Rabsca,Bug,Psychic,9
955,Flittle,Psychic,,9
956,Espathra,Psychic,,9
957,Tinkatink,Fairy,Steel,9
958,Tinkatuff,Fairy,Steel,9
959,Tinkaton,Fairy,Steel,9
960,Wiglett,Water,,9
961,Wugtrio,Water,,9
962,Bombirdier,Flying,Dark,9
963,Finizen,Water,,9
964,Palafin,Water,,9
965,Varoom,Steel,Poison,9
966,Revavroom,Steel,Poison,9
967,Cyclizar,Dragon,Normal,9
968,Orthworm,Steel,,9
969,Glimmet,Rock,Poison,9
970,Glimmora,Rock,Poison,9
971,Greavard,Ghost,,9
972,Houndstone,Ghost,,9
973,Flamigo,Flying,Fighting,9
974,Cetoddle,Ice,,9
975,Cetitan,Ice,,9
976,Veluza,Water,Psychic,9
977,Dondozo,Water,,9
978,Tatsugiri,Dragon,Water,9
979,Annihilape,Fighting,Ghost,9
980,Clodsire,Poison,Ground,9
981,Farigiraf,Normal,Psychic,9
982,Dudunsparce,Normal,,9
983,Kingambit,Dark,Steel,9
984,Great Tusk,Ground,Fighting,9
985,Scream Tail,Fairy,Psychic,9
986,Brute Bonnet,Grass,Dark,9
987,Flutter Mane,Ghost,Fairy,9
988,Slither Wing,Bug,Fighting,9
989,Sandy Shocks,Electric,Ground,9
990,Iron Treads,Ground,Steel,9
991,Iron Bundle,Ice,Water,9
992,Iron Hands,Fighting,Electric,9
993,Iron Jugulis,Dark,Flying,9
994,Iron Moth,Fire,Poison,9
995,Iron Thorns,Rock,Electric,9
996,Frigibax,Dragon,Ice,9
997,Arctibax,Dragon,Ice,9
998,Baxcalibur,Dragon,Ice,9
999,Gimmighoul,Ghost,,9
1000,Gholdengo,Steel,Ghost,9
1001,Wo-Chien,Dark,Grass,9
1002,Chien-Pao,Dark,Ice,9
1003,Ting-Lu,Dark,Ground,9
1004,Chi-Yu,Dark,Fire,9
1005,Roaring Moon,Dragon,Dark,9
1006,Iron Valiant,Fairy,Fighting,9
1007,Koraidon,Fighting,Dragon,9
1008,Miraidon,Electric,Dragon,9
1009,Walking Wake,Water,Dragon,9
1010,Iron Leaves,Grass,Psychic,9
1011,Dipplin,Grass,Dragon,9
1012,Poltchageist,Grass,Ghost,9
1013,Sinistcha,Grass,Ghost,9
1014,Okidogi,Poison,Fighting,9
1015,Munkidori,Poison,Psychic,9
1016,Fezandipiti,Poison,Fairy,9
1017,Ogerpon,Grass,,9
1018,Archaludon,Steel,Dragon,9
1019,Hydrapple,Grass,Dragon,9
1020,Gouging Fire,Fire,Dragon,9
1021,Raging Bolt,Electric,Dragon,9
1022,Iron Boulder,Rock,Psychic,9
1023,Iron Crown,Steel,Psychic,9
1024,Terapagos,Normal,,9
1025,Pecharunt,Poison,Ghost,9
0,MissingNo.,Normal,,9
-1,Voltorb,Electric,Grass,8
-2,Electrode,Electric,Grass,8
-3,Exeggutor,Grass,Dragon,7
-4,Marowak,Fire,Ghost,7
-5,Weezing,Poison,Fairy,8
-6,Mr. Mime,Ice,Psychic,8
-7,Tauros,Fighting,,9
-8,Articuno,Psychic,Flying,8
-9,Zapdos,Fighting,Flying,8
-10,Moltres,Dark,Flying,8
-11,Typhlosion,Fire,Ghost,8
-12,Rattata,Dark,Normal,7
-13,Raticate,Dark,Normal,7
-14,Wooper,Poison,Ground,9
-15,Slowpoke,Psychic,,8
-16,Slowbro,Poison,Psychic,8
-17,Slowking,Poison,Psychic,8
-18,Qwilfish,Dark,Poison,8
-19,Sneasel,Fighting,Poison,8
-20,Corsola,Ghost,,8
-21,Raichu,Electric,Psychic,7
-22,Zigzagoon,Dark,Normal,8
-23,Linoone,Dark,Normal,8
-24,Sandshrew,Ice,Steel,7
-25,Sandslash,Ice,Steel,7
-26,Vulpix,Ice,,7
-27,Ninetales,Ice,Fairy,7
-28,Diglett,Ground,Steel,7
-29,Dugtrio,Ground,Steel,7
-30,Samurott,Water,Dark,8
-31,Meowth,Dark,,7
-32,Persian,Dark,,7
-33,Meowth,Steel,,8
-34,Lilligant,Grass,Fighting,8
-35,Darumaka,Ice,,8
-36,Darmanitan,Ice,,8
-37,Yamask,Ground,Ghost,8
-38,Zorua,Normal,Ghost,8
-39,Zoroark,Normal,Ghost,8
-40,Growlithe,Fire,Rock,8
-41,Arcanine,Fire,Rock,8
-42,Stunfisk,Ground,Steel,8
-43,Braviary,Psychic,Flying,8
-44,Sliggoo,Steel,Dragon,8
-45,Goodra,Steel,Dragon,8
-46,Avalugg,Ice,Rock,8
-47,Decidueye,Grass,Fighting,8
-48,Geodude,Rock,Electric,7
-49,Graveler,Rock,Electric,7
-50,Golem,Rock,Electric,7
-51,Ponyta,Psychic,,8
-52,Rapidash,Psychic,Fairy,8
-53,Farfetch'd,Fighting,,8
-54,Grimer,Poison,Dark,7
-55,Muk,Poison,Dark,7`;

        const TRANSLATIONS = {
            en: {
                types: {
                    bug: 'Bug', flying: 'Flying', ground: 'Ground', poison: 'Poison',
                    electric: 'Electric', rock: 'Rock', fighting: 'Fighting', steel: 'Steel',
                    fire: 'Fire', dragon: 'Dragon', psychic: 'Psychic', ice: 'Ice',
                    fairy: 'Fairy', dark: 'Dark', water: 'Water', normal: 'Normal',
                    grass: 'Grass', ghost: 'Ghost'
                },
                text: {
                    selectLanguage: '🌍 Language', quizTitle: 'Pokémon Type Quiz',
                    filterByGen: 'Filter by Generation', all: 'ALL', selectYourTypes: 'Select the Pokémon\'s Type(s):',
                    submit: 'Submit', next: 'Next', loading: 'Loading...', errorLoading: 'Error loading quiz',
                    submitting: 'Submitting...', evaluationComplete: 'Evaluation Complete', trainerRankRecorded: 'Your Trainer Rank has been recorded.',
                    yourScore: 'Your Score:', resultsBreakdown: 'Results Breakdown:', correct: 'Correct:', yourAnswer: 'Your answer:',
                    takeQuizAgain: 'Take Quiz Again', about: 'About'
                }
            },
            ja: {GEN_REGIONS: {1: 'カントー地方'},
                types: {
                    bug: 'むし', flying: 'ひこう', ground: 'じめん', poison: 'どく',
                    electric: 'でんき', rock: 'いわ', fighting: 'かくとう', steel: 'はがね',
                    fire: 'ほのお', dragon: 'ドラゴン', psychic: 'エスパー', ice: 'こおり',
                    fairy: 'フェアリー', dark: 'あく', water: 'みず', normal: 'ノーマル',
                    grass: 'くさ', ghost: 'ゴースト'
                },
                text: {
                    selectLanguage: '🌍 言語', quizTitle: 'ポケモン タイプ クイズ',
                    selectAtLeastOneGen: 'クイズを始めるには、少なくとも1つの世代を選択してください',
                    quizInstructions: '各ポケモンについて1～2つのカテゴリーを選んでください。正しいカテゴリーごとに1ポイント獲得できます。2つ選ぶとスコアが増減する場合があります。',
     
                    filterByGen: '世代で絞り込み', all: 'すべて', selectYourTypes: 'ポケモンのタイプを選択してください:',
                    submit: '送信', next: '次へ', loading: '読み込み中...', errorLoading: 'クイズの読み込みエラー',
                    submitting: '送信中...', evaluationComplete: '評価完了', trainerRankRecorded: 'トレーナーランクが記録されました。',
                    yourScore: 'あなたのスコア:', resultsBreakdown: '結果の内訳:', correct: '正解:', yourAnswer: 'あなたの答え:',
                    takeQuizAgain: 'もう一度クイズをする', about: '概要'
                }
            },
            es: {
                types: {
                    bug: 'Insecto', flying: 'Volador', ground: 'Tierra', poison: 'Veneno',
                    electric: 'Eléctrico', rock: 'Roca', fighting: 'Pelea', steel: 'Acero',
                    fire: 'Fuego', dragon: 'Dragón', psychic: 'Psíquico', ice: 'Hielo',
                    fairy: 'Hada', dark: 'Siniestro', water: 'Agua', normal: 'Normal',
                    grass: 'Planta', ghost: 'Fantasma'
                },
                text: {
                    selectLanguage: '🌍 Idioma', quizTitle: 'Cuestionario de Tipos Pokémon',
                    quizInstructions: 'Selecciona 1 o 2 categorías para cada Pokémon. Gana 1 punto por cada categoría correcta; elegir dos puede aumentar o disminuir tu puntuación.',
                    selectAtLeastOneGen: 'Selecciona al menos una generación para comenzar el cuestionario',
                    filterByGen: 'Filtrar por Generación', all: 'TODAS', selectYourTypes: 'Selecciona el(los) Tipo(s) del Pokémon:',
                    submit: 'Enviar', next: 'Siguiente', loading: 'Cargando...', errorLoading: 'Error al cargar el cuestionario',
                    submitting: 'Enviando...', evaluationComplete: 'Evaluación Completa', trainerRankRecorded: 'Tu Rango de Entrenador ha sido registrado.',
                    yourScore: 'Tu Puntuación:', resultsBreakdown: 'Desglose de Resultados:', correct: 'Correcto:', yourAnswer: 'Tu respuesta:',
                    takeQuizAgain: 'Tomar el Cuestionario de Nuevo', about: 'Acerca de'
                }
            },
            'zh-Hans': { // Simplified Chinese
                types: {
                    bug: '虫', flying: '飞行', ground: '地面', poison: '毒',
                    electric: '电', rock: '岩石', fighting: '格斗', steel: '钢',
                    fire: '火', dragon: '龙', psychic: '超能力', ice: '冰',
                    fairy: '妖精', dark: '恶', water: '水', normal: '一般',
                    grass: '草', ghost: '幽灵'
                },
                text: {
                    selectLanguage: '🌍 语言', quizTitle: '宝可梦属性测验',
                    quizInstructions: '为每只宝可梦选择1或2个类别。每个正确类别可获得1分；选择两个类别可能会提高或降低您的得分。',
    
                    selectAtLeastOneGen: '请至少选择一个世代以开始测验',
                    filterByGen: '按世代筛选', all: '全部', selectYourTypes: '选择宝可梦的属性:',
                    submit: '提交', next: '下一题', loading: '加载中...', errorLoading: '加载测验失败',
                    submitting: '提交中...', evaluationComplete: '评估完成', trainerRankRecorded: '您的训练家等级已记录。',
                    yourScore: '您的分数:', resultsBreakdown: '结果明细:', correct: '正确答案:', yourAnswer: '您的答案:',
                    takeQuizAgain: '再做一次测验', about: '关于'
                }
            },
            'zh-Hant': { // Traditional Chinese
                types: {
                    bug: '蟲', flying: '飛行', ground: '地面', poison: '毒',
                    electric: '電', rock: '岩石', fighting: '格鬥', steel: '鋼',
                    fire: '火', dragon: '龍', psychic: '超能力', ice: '冰',
                    fairy: '妖精', dark: '惡', water: '水', normal: '一般',
                    grass: '草', ghost: '幽靈'
                },
                text: {
                    selectLanguage: '🌍 語言 (傳統)', quizTitle: '寶可夢屬性測驗',
                    selectAtLeastOneGen: '請至少選擇一個世代以開始測驗',
                    quizInstructions: '為每隻寶可夢選擇1或2個類別。每個正確類別可獲得1分；選擇兩個類別可能會提高或降低您的分數。',
                    filterByGen: '按世代篩選', all: '全部', selectYourTypes: '選擇寶可夢的屬性:',
                    submit: '提交', next: '下一題', loading: '加載中...', errorLoading: '加載測驗失敗',
                    submitting: '提交中...', evaluationComplete: '評估完成', trainerRankRecorded: '您的訓練家等級已記錄。',
                    yourScore: '您的分數:', resultsBreakdown: '結果明細:', correct: '正確答案:', yourAnswer: '您的答案:',
                    takeQuizAgain: '再做一次測驗', about: '關於'
                }
            },
            fr: {
                types: {
                    bug: 'Insecte', flying: 'Vol', ground: 'Sol', poison: 'Poison',
                    electric: 'Électrik', rock: 'Roche', fighting: 'Combat', steel: 'Acier',
                    fire: 'Feu', dragon: 'Dragon', psychic: 'Psy', ice: 'Glace',
                    fairy: 'Fée', dark: 'Ténèbres', water: 'Eau', normal: 'Normal',
                    grass: 'Plante', ghost: 'Spectre'
                },
                text: {
                    selectLanguage: '🌍 Langue', quizTitle: 'Quiz Type Pokémon',
                    quizInstructions: 'Sélectionnez 1 ou 2 catégories pour chaque Pokémon. Gagnez 1 point par catégorie correcte ; en choisir deux peut augmenter ou diminuer votre score.',
                    selectAtLeastOneGen: 'Veuillez sélectionner au moins une génération pour commencer le quiz',
                    filterByGen: 'Filtrer par Génération ', all: 'TOUTES', selectYourTypes: 'Sélectionnez le(s) Type(s) du Pokémon:',
                    submit: 'Soumettre', next: 'Suivant', loading: 'Chargement...', errorLoading: 'Erreur de chargement du quiz',
                    submitting: 'Soumission...', evaluationComplete: 'Évaluation Terminée', trainerRankRecorded: 'Votre rang de Dresseur a été enregistré.',
                    yourScore: 'Votre Score:', resultsBreakdown: 'Détail des résultats:', correct: 'Correct:', yourAnswer: 'Votre réponse:',
                    takeQuizAgain: 'Refaire le Quiz', about: 'À propos'
                }
            },
            de: {
                types: {
                    bug: 'Käfer', flying: 'Flug', ground: 'Boden', poison: 'Gift',
                    electric: 'Elektro', rock: 'Gestein', fighting: 'Kampf', steel: 'Stahl',
                    fire: 'Feuer', dragon: 'Drache', psychic: 'Psycho', ice: 'Eis',
                    fairy: 'Fee', dark: 'Unlicht', water: 'Wasser', normal: 'Normal',
                    grass: 'Pflanze', ghost: 'Geist'
                },
                text: {
                    selectLanguage: '🌍 Sprache', quizTitle: 'Pokémon-Typ-Quiz',
                    quizInstructions: 'Wähle 1 oder 2 Kategorien für jedes Pokémon. Verdiene 1 Punkt pro korrekter Kategorie; zwei auswählen kann deine Punktzahl erhöhen oder verringern.',
                    selectAtLeastOneGen: 'Bitte wähle mindestens eine Generation aus, um das Quiz zu starten',
                    filterByGen: 'Nach Generation filtern', all: 'ALLE', selectYourTypes: 'Wählen Sie den/die Typ(en) des Pokémon:',
                    submit: 'Senden', next: 'Weiter', loading: 'Lädt...', errorLoading: 'Fehler beim Laden des Quiz',
                    submitting: 'Sendet...', evaluationComplete: 'Bewertung abgeschlossen', trainerRankRecorded: 'Ihr Trainer-Rang wurde aufgezeichnet.',
                    yourScore: 'Ihre Punktzahl:', resultsBreakdown: 'Ergebnisaufschlüsselung:', correct: 'Korrekt:', yourAnswer: 'Ihre Antwort:',
                    takeQuizAgain: 'Quiz wiederholen', about: 'Über'
                }
            },
            ko: {
                types: {
                    bug: '벌레', flying: '비행', ground: '땅', poison: '독',
                    electric: '전기', rock: '바위', fighting: '격투', steel: '강철',
                    fire: '불꽃', dragon: '드래곤', psychic: '에스퍼', ice: '얼음',
                    fairy: '페어리', dark: '악', water: '물', normal: '노말',
                    grass: '풀', ghost: '고스트'
                },
                text: {
                    selectLanguage: '🌍 언어', quizTitle: '포켓몬 타입 퀴즈',
                    quizInstructions: '각 포켓몬에 대해 1~2개의 카테고리를 선택하세요. 올바른 카테고리마다 1점을 획득합니다. 두 개를 선택하면 점수가 올라가거나 내려갈 수 있습니다.',
                    selectAtLeastOneGen: '퀴즈를始めるには、少なくとも1つの世代を選択してください',
                    filterByGen: '세대로 필터링', all: '전체', selectYourTypes: '포켓몬의 타입을 선택하세요:',
                    submit: '제출', next: '다음', loading: '로딩 중...', errorLoading: '퀴즈 로딩 오류',
                    submitting: '제출 중...', evaluationComplete: '평가 완료', trainerRankRecorded: '트레이너 순위가 기록되었습니다.',
                    yourScore: '당신의 점수:', resultsBreakdown: '결과 분석:', correct: '정답:', yourAnswer: '당신의 답변:',
                    takeQuizAgain: '퀴즈 다시 풀기', about: '정보'
                }
            }, pt: {
        types: {
            bug: 'Inseto', flying: 'Voador', ground: 'Terra', poison: 'Venenoso',
            electric: 'Elétrico', rock: 'Pedra', fighting: 'Lutador', steel: 'Aço',
            fire: 'Fogo', dragon: 'Dragão', psychic: 'Psíquico', ice: 'Gelo', fairy: 'Fada',
            dark: 'Sombrio', water: 'Água', normal: 'Normal', grass: 'Planta', ghost: 'Fantasma'
        },
        text: {
            selectLanguage: '🌍 Idioma',
        quizTitle: 'Quiz de Tipos Pokémon',
        quizInstructions: "Selecione 1 ou 2 categorias para cada Pokémon. Ganhe 1 ponto por categoria correta; escolher duas pode aumentar ou diminuir sua pontuação.",
        selectAtLeastOneGen: 'Selecione pelo menos uma geração para iniciar o quiz',
        filterByGen: 'Filtrar por geração:',
        all: 'TODOS',
        selectYourTypes: 'Selecione os tipos do Pokémon:',
        submit: 'Enviar',
        next: 'Próximo',
        loading: 'Carregando...',
        errorLoading: 'Erro ao carregar o quiz',
        submitting: 'Enviando...',
        evaluationComplete: 'Avaliação concluída',
        trainerRankRecorded: 'Classificação registrada.',
        yourScore: 'Sua pontuação:',
        resultsBreakdown: 'Detalhamento dos resultados:',
        correct: 'Correto:',
        yourAnswer: 'Sua resposta:',
        takeQuizAgain: 'Refazer quiz',
        about: 'Sobre'
    }
},
    id: {
        types: {
            bug: 'Serangga', flying: 'Terbang', ground: 'Tanah', poison: 'Racun',
            electric: 'Listrik', rock: 'Batu', fighting: 'Petarung', steel: 'Baja',
            fire: 'Api', dragon: 'Naga', psychic: 'Psikis', ice: 'Es', fairy: 'Peri',
            dark: 'Kegelapan', water: 'Air', normal: 'Normal', grass: 'Daun', ghost: 'Hantu'
        },
    text: {
        selectLanguage: '🌍 Bahasa',
        quizTitle: 'Kuis Tipe Pokémon',
        quizInstructions: 'Pilih 1 atau 2 kategori untuk setiap Pokémon. Anda mendapat 1 poin per kategori yang benar; memilih dua dapat menambah atau mengurangi skor.',
        selectAtLeastOneGen: 'Pilih minimal satu generasi untuk memulai kuis',
        filterByGen: 'Filter berdasarkan generasi:',
        all: 'SEMUA',
        selectYourTypes: 'Pilih tipe Pokémon:',
        submit: 'Kirim',
        next: 'Lanjut',
        loading: 'Memuat...',
        errorLoading: 'Gagal memuat kuis',
        submitting: 'Mengirim...',
        evaluationComplete: 'Penilaian selesai',
        trainerRankRecorded: 'Peringkat pelatih tercatat.',
        yourScore: 'Skor Anda:',
        resultsBreakdown: 'Rincian hasil:',
        correct: 'Benar:',
        yourAnswer: 'Jawaban Anda:',
        takeQuizAgain: 'Ulangi kuis',
        about: 'Tentang'
    }
},

    th: {
        types: {
            bug: 'แมลง', flying: 'บิน', ground: 'ดิน', poison: 'พิษ',
            electric: 'ไฟฟ้า', rock: 'หิน', fighting: 'ต่อสู้', steel: 'โลหะ',
            fire: 'ไฟ', dragon: 'มังกร', psychic: 'พลังจิต', ice: 'น้ำแข็ง', fairy: 'แฟรี่',
            dark: 'มืด', water: 'น้ำ', normal: 'ปกติ', grass: 'หญ้า', ghost: 'ผี'
      },
    text: {
        selectLanguage: '🌍 ภาษา',
        quizTitle: 'แบบทดสอบประเภทโปเกมอน',
        quizInstructions: 'เลือก 1 หรือ 2 หมวดสำหรับแต่ละโปเกมอน ได้ 1 คะแนนต่อหมวดที่ถูกต้อง; เลือกสองอาจเพิ่มหรือลดคะแนน',
        selectAtLeastOneGen: 'โปรดเลือกอย่างน้อยหนึ่งเจเนอเรชันเพื่อเริ่มแบบทดสอบ',
        filterByGen: 'กรองตามเจเนอเรชัน:',
        all: 'ทั้งหมด',
        selectYourTypes: 'เลือกประเภทของโปเกมอน:',
        submit: 'ส่ง',
        next: 'ถัดไป',
        loading: 'กำลังโหลด...',
        errorLoading: 'โหลดแบบทดสอบล้มเหลว',
        submitting: 'กำลังส่ง...',
        evaluationComplete: 'ประเมินผลเสร็จสิ้น',
        trainerRankRecorded: 'บันทึกแรงก์เทรนเนอร์แล้ว',
        yourScore: 'คะแนนของคุณ:',
        resultsBreakdown: 'สรุปผล:',
        correct: 'ถูกต้อง:',
        yourAnswer: 'คำตอบของคุณ:',
        takeQuizAgain: 'ทำแบบทดสอบอีกครั้ง',
        about: 'เกี่ยวกับ'
    }}
,
ru: {
    types: {
        bug: 'Насекомое',
        flying: 'Летающий',
        ground: 'Земля',
        poison: 'Яд',
        electric: 'Электро',
        rock: 'Камень',
        fighting: 'Боевой',
        steel: 'Сталь',
        fire: 'Огонь',
        dragon: 'Дракон',
        psychic: 'Психо',
        ice: 'Лёд',
        fairy: 'Фея',
        dark: 'Темнота',
        water: 'Вода',
        normal: 'Обычный',
        grass: 'Трава',
        ghost: 'Привидение'
    },
    text: {
        selectLanguage: '🌍 Язык',
        quizTitle: 'Викторина по типам Покемонов',
        quizInstructions: 'Выберите 1 или 2 категории для каждого Покемона. 1 балл за правильную категорию; выбор двух может увеличить или уменьшить результат.',
        selectAtLeastOneGen: 'Выберите хотя бы одно поколение, чтобы начать викторину',
        filterByGen: 'Фильтр по поколениям:',
        all: 'ВСЕ',
        selectYourTypes: 'Выберите типы Покемона:',
        submit: 'Отправить',
        next: 'Далее',
        loading: 'Загрузка...',
        errorLoading: 'Ошибка загрузки викторины',
        submitting: 'Отправка...',
        evaluationComplete: 'Оценка завершена',
        trainerRankRecorded: 'Ранг тренера записан.',
        yourScore: 'Ваш счёт:',
        resultsBreakdown: 'Разбор результатов:',
        correct: 'Верно:',
        yourAnswer: 'Ваш ответ:',
        takeQuizAgain: 'Пройти снова',
        about: 'О нас'
    }}
,
tr: {
        types: {
            bug: 'Böcek', flying: 'Uçan', ground: 'Yer', poison: 'Zehir',
            electric: 'Elektrik', rock: 'Kaya', fighting: 'Dövüş', steel: 'Çelik',
            fire: 'Ateş', dragon: 'Ejderha', psychic: 'Psişik', ice: 'Buz', fairy: 'Peri',
            dark: 'Karanlık', water: 'Su', normal: 'Normal', grass: 'Bitki', ghost: 'Hayalet'
        },
    text: {
        selectLanguage: '🌍 Dil',
        quizTitle: 'Pokémon Tip Quiz',
        quizInstructions: 'Her Pokémon için 1 veya 2 kategori seçin. Doğru kategori başına 1 puan kazanırsınız; iki seçim puanı artırabilir veya azaltabilir.',
        selectAtLeastOneGen: 'Teste başlamak için en az bir nesil seçin',
        filterByGen: 'Nesile göre filtrele:',
        all: 'TÜMÜ',
        selectYourTypes: 'Pokémon tiplerini seçin:',
        submit: 'Gönder',
        next: 'İleri',
        loading: 'Yükleniyor...',
        errorLoading: 'Test yüklenemedi',
        submitting: 'Gönderiliyor...',
        evaluationComplete: 'Değerlendirme tamamlandı',
        trainerRankRecorded: 'Eğitmen rütbeniz kaydedildi.',
        yourScore: 'Puanınız:',
        resultsBreakdown: 'Sonuç dökümü:',
        correct: 'Doğru:',
        yourAnswer: 'Cevabınız:',
        takeQuizAgain: 'Tekrar çöz',
        about: 'Hakkında'
    }
},

    hi: {
        types: {
            bug: 'कीड़ा', flying: 'उड़नेवाला', ground: 'भूमि', poison: 'ज़हर',
            electric: 'बिजली', rock: 'पथरीले', fighting: 'लड़ाई', steel: 'इस्पात',
            fire: 'आग', dragon: 'ड्रैगन', psychic: 'मानसिक', ice: 'बर्फ़', fairy: 'परी',
            dark: 'डार्क', water: 'पानी', normal: 'साधारण', grass: 'घास', ghost: 'भूत'
        },
    text: {
        selectLanguage: '🌍 भाषा',
        quizTitle: 'पोकेमोन प्रकार क्विज़',
        quizInstructions: 'प्रत्येक पोकेमोन के लिए 1 या 2 श्रेणियाँ चुनें। प्रत्येक सही श्रेणी के लिए 1 अंक मिलता है; दो चुनने से स्कोर बढ़ या घट सकता है।',
        selectAtLeastOneGen: 'क्विज़ शुरू करने के लिए कम से कम एक जनरेशन चुनें',
        filterByGen: 'पीढ़ी के अनुसार फ़िल्टर:',
        all: 'सभी',
        selectYourTypes: 'पोकेमोन के प्रकार चुनें:',
        submit: 'सबमिट',
        next: 'आगे',
        loading: 'लोड हो रहा है...',
        errorLoading: 'क्विज़ लोड विफल',
        submitting: 'सबमिट हो रहा है...',
        evaluationComplete: 'मूल्यांकन पूरा',
        trainerRankRecorded: 'ट्रेनर रैंक रिकॉर्ड किया गया।',
        yourScore: 'आपका स्कोर:',
        resultsBreakdown: 'परिणाम विवरण:',
        correct: 'सही:',
        yourAnswer: 'आपका उत्तर:',
        takeQuizAgain: 'क्विज़ फिर से करें',
        about: 'बारे में'
    }
}, bg: { types: { bug: 'Растителни', flying: 'Призрачни', ground: 'Земя', poison: 'Отровен', electric: 'Електро', rock: 'Камък', fighting: 'Бой', steel: 'Стомана', fire: 'Огнени', dragon: 'Дракон', psychic: 'Психомощни', ice: 'Лед', fairy: 'Фея', dark: 'Тъмен', water: 'Вода', normal: 'Нормален', grass: 'Растение', ghost: 'Призрачни' },     text: {
        selectLanguage: '🌍 Език',
        quizTitle: 'Покемон Тип Викторина',
        quizInstructions: 'Изберете 1 или 2 категории за всеки Покемон. Печелите 1 точка за всяка правилна категория; изборът на две може да увеличи или намали вашия резултат.',
        selectAtLeastOneGen: 'Изберете поне едно поколение, за да започнете викторината',
       
        filterByGen: 'Филтрирай по поколение:', all: 'ВСИЧКИ', selectYourTypes: 'Изберете тип(ове) на Покемон:',
        submit: 'Изпрати', next: 'Следващ', loading: 'Зареждане...', errorLoading: 'Грешка при зареждане на викторината',
        submitting: 'Изпращане...', evaluationComplete: 'Оценката е завършена', trainerRankRecorded: 'Вашият ранг на треньор е записан.',
        yourScore: 'Вашият резултат:', resultsBreakdown: 'Разбивка на резултатите:', correct: 'Вярно:', yourAnswer: 'Вашият отговор:',
        takeQuizAgain: 'Решете викторината отново', about: 'Относно'
    }
},
    cs: { types: { bug: 'Hmyzí', flying: 'Létající', ground: 'Zemní', poison: 'Jedovatý', electric: 'Elektrický', rock: 'Kamenný', fighting: 'Bojový', steel: 'Ocelový', fire: 'Ohnivý', dragon: 'Dračí', psychic: 'Psychický', ice: 'Ledový', fairy: 'Vílí', dark: 'Temný', water: 'Vodní', normal: 'Normální', grass: 'Travní', ghost: 'Duchový'  },
    text: {
        selectLanguage: '🌍 Jazyk',
        quizTitle: 'Pokémon Typ Kvíz',
        selectAtLeastOneGen: 'Vyberte alespoň jednu generaci pro spuštění kvízu',
      
        quizInstructions: 'Vyberte 1 nebo 2 kategorie pro každého Pokémona. Za každou správnou kategorii získáte 1 bod; výběr dvou může zvýšit nebo snížit váš výsledek.',
        filterByGen: 'Filtrovat podle generace:', all: 'VŠE', selectYourTypes: 'Vyberte typ(y) Pokémona:',
        submit: 'Odeslat', next: 'Další', loading: 'Načítání...', errorLoading: 'Chyba při načítání kvízu',
        submitting: 'Odesílání...', evaluationComplete: 'Hodnocení dokončeno', trainerRankRecorded: 'Váš trenérský rank byl zaznamenán.',
        yourScore: 'Váš Skóre:', resultsBreakdown: 'Rozpis výsledků:', correct: 'Správně:', yourAnswer: 'Vaše odpověď:',
        takeQuizAgain: 'Zopakovat kvíz', about: 'O aplikaci'
    }
},da: { types: { bug: 'Kryb', flying: 'Flyve', ground: 'Jord', poison: 'Gift', electric: 'Elektrisk', rock: 'Sten', fighting: 'Kamp', steel: 'Stål', fire: 'Ild', dragon: 'Drage', psychic: 'Synsk', ice: 'Is', fairy: 'Fe', dark: 'Mørke', water: 'Vand', normal: 'Normal', grass: 'Græs', ghost: 'Spøgelse'  },
    text: {
        selectLanguage: '🌍 Sprog',
        quizTitle: 'Pokémon Typequiz',
        quizInstructions: 'Vælg 1 eller 2 kategorier for hver Pokémon. Du får 1 point for hver korrekt kategori; to valg kan øge eller sænke din score.',
        selectAtLeastOneGen: 'Vælg mindst én generation for at starte quizzen',
        filterByGen: 'Filtrér efter generation:',
        all: 'ALLE',
        selectYourTypes: 'Vælg Pokémon typer:',
        submit: 'Indsend',
        next: 'Næste',
        loading: 'Indlæser...',
        errorLoading: 'Kunne ikke indlæse quiz',
        submitting: 'Indsender...',
        evaluationComplete: 'Evaluering fuldført',
        trainerRankRecorded: 'Træner rang registreret.',
        yourScore: 'Din score:',
        resultsBreakdown: 'Resultatoversigt:',
        correct: 'Korrekt:',
        yourAnswer: 'Dit svar:',
        takeQuizAgain: 'Tag quizzen igen',
        about: 'Om'
    }
},
    nl: { types: { bug: 'Insect', flying: 'Vliegsoort', ground: 'Grond', poison: 'Gif', electric: 'Elektrisch', rock: 'Steen', fighting: 'Vecht', steel: 'Staal', fire: 'Vuur', dragon: 'Draak', psychic: 'Psychisch', ice: 'IJs', fairy: 'Fairy', dark: 'Donker', water: 'Water', normal: 'Normaal', grass: 'Gras', ghost: 'Geest'  },
    text: {
        selectLanguage: '🌍 Taal',
        quizTitle: 'Pokémon Type Quiz',
        quizInstructions: 'Kies 1 of 2 categorieën per Pokémon. Je verdient 1 punt per juiste categorie; twee kiezen kan je score verhogen of verlagen.',
        selectAtLeastOneGen: 'Selecteer minstens één generatie om de quiz te starten',
        filterByGen: 'Filter op generatie:',
        all: 'ALLE',
        selectYourTypes: 'Selecteer Pokémon-typen:',
        submit: 'Verzenden',
        next: 'Volgende',
        loading: 'Laden...',
        errorLoading: 'Quiz laden mislukt',
        submitting: 'Verzenden...',
        evaluationComplete: 'Evaluatie voltooid',
        trainerRankRecorded: 'Trainer rang opgeslagen.',
        yourScore: 'Jouw score:',
        resultsBreakdown: 'Resultaten overzicht:',
        correct: 'Correct:',
        yourAnswer: 'Jouw antwoord:',
        takeQuizAgain: 'Quiz opnieuw doen',
        about: 'Over'
    }
},
    fi: { types: { bug: 'Ötökkä', flying: 'Lento', ground: 'Maa', poison: 'Myrkky', electric: 'Sähkö', rock: 'Kivi', fighting: 'Taistelu', steel: 'Teräs', fire: 'Tuli', dragon: 'Lohikäärme', psychic: 'Psyykkinen', ice: 'Jää', fairy: 'Keiju', dark: 'Pimeys', water: 'Vesi', normal: 'Normaali', grass: 'Ruoho', ghost: 'Haamu' },
    text: {
        selectLanguage: '🌍 Kieli',
        quizTitle: 'Pokémon-tyyppivisa',
        quizInstructions: 'Valitse 1 tai 2 kategoriaa jokaiselle Pokémonille. Saat 1 pisteen per oikea kategoria; kaksi valintaa voi nostaa tai laskea pistemäärää.',
        selectAtLeastOneGen: 'Valitse vähintään yksi sukupolvi aloittaaksesi visan',
        filterByGen: 'Suodata sukupolven mukaan:',
        all: 'KAIKKI',
        selectYourTypes: 'Valitse Pokémon-tyypit:',
        submit: 'Lähetä',
        next: 'Seuraava',
        loading: 'Ladataan...',
        errorLoading: 'Visan lataus epäonnistui',
        submitting: 'Lähetetään...',
        evaluationComplete: 'Arviointi valmis',
        trainerRankRecorded: 'Kouluttajan taso tallennettu.',
        yourScore: 'Pisteesi:',
        resultsBreakdown: 'Tulokset:',
        correct: 'Oikein:',
        yourAnswer: 'Vastauksesi:',
        takeQuizAgain: 'Tee visa uudelleen',
        about: 'Tietoa'
    }
},

    el: { types: { bug: 'Εντόμου', flying: 'Ιπτάμενος', ground: 'Εδάφους', poison: 'Δηλητηρίου', electric: 'Ηλεκτρισμού', rock: 'Πέτρας', fighting: 'Μαχητής', steel: 'Μετάλλου', fire: 'Φωτιάς', dragon: 'Δράκου', psychic: 'Μέντιουμ', ice: 'Πάγου', fairy: 'Νεράιδα', dark: 'Σκοταδιού', water: 'Νερού', normal: 'Φυσιολογικός', grass: 'Φυτού', ghost: 'Φάντασμα' },
    text: {
        selectLanguage: '🌍 Γλώσσα',
        quizTitle: 'Κουίζ Τύπων Pokémon',
        quizInstructions: 'Επιλέξτε 1 ή 2 κατηγορίες για κάθε Pokémon. Παίρνετε 1 βαθμό για σωστή κατηγορία· δύο επιλογές μπορεί να αυξήσουν ή να μειώσουν το σκορ.',
        selectAtLeastOneGen: 'Επιλέξτε τουλάχιστον μία γενιά για να ξεκινήσετε το κουίζ',
        filterByGen: 'Φιλτράρισμα ανά γενιά:',
        all: 'ΟΛΑ',
        selectYourTypes: 'Επιλέξτε τύπους Pokémon:',
        submit: 'Υποβολή',
        next: 'Επόμενο',
        loading: 'Φόρτωση...',
        errorLoading: 'Σφάλμα φόρτωσης κουίζ',
        submitting: 'Υποβολή...',
        evaluationComplete: 'Η αξιολόγηση ολοκληρώθηκε',
        trainerRankRecorded: 'Η κατάταξη εκπαιδευτή αποθηκεύτηκε.',
        yourScore: 'Το σκορ σας:',
        resultsBreakdown: 'Ανάλυση αποτελεσμάτων:',
        correct: 'Σωστό:',
        yourAnswer: 'Η απάντησή σας:',
        takeQuizAgain: 'Ξανακάντε το κουίζ',
        about: 'Σχετικά'
    }
},
    he: { types: { bug: 'חרק', flying: 'מעופף', ground: 'אדמה', poison: 'רעל', electric: 'חשמל', rock: 'אבן', fighting: 'לחימה', steel: 'פלדה', fire: 'אש', dragon: 'דרקון', psychic: 'על חושי', ice: 'קרח', fairy: 'פיה', dark: 'אופל', water: 'מים', normal: 'נורמאלי', grass: 'דשא', ghost: 'רוח רפאים'  },
    text: {
        selectLanguage: '🌍 שפה',
        quizTitle: 'חידון סוגי פוקימון',
        quizInstructions: 'בחרו 1 או 2 קטגוריות לכל פוקימון. כל קטגוריה נכונה מזכה בנקודה; שתי בחירות עשויות להעלות או להוריד את הניקוד.',
        selectAtLeastOneGen: 'בחרו לפחות דור אחד כדי להתחיל את החידון',
        filterByGen: 'סינון לפי דור:',
        all: 'הכול',
        selectYourTypes: 'בחרו את סוגי הפוקימון:',
        submit: 'שליחה',
        next: 'הבא',
        loading: 'טוען...',
        errorLoading: 'שגיאה בטעינת החידון',
        submitting: 'שולח...',
        evaluationComplete: 'ההערכה הושלמה',
        trainerRankRecorded: 'דירוג המאמן נשמר.',
        yourScore: 'הניקוד שלכם:',
        resultsBreakdown: 'פירוט תוצאות:',
        correct: 'נכון:',
        yourAnswer: 'תשובתכם:',
        takeQuizAgain: 'עשו את החידון שוב',
        about: 'אודות'
    }
},

      hu: { types: { bug: 'Bogár', flying: 'Repülő', ground: 'Föld', poison: 'Méreg', electric: 'Elektromos', rock: 'Szikla', fighting: 'Harcos', steel: 'Acél', fire: 'Tűz', dragon: 'Sárkány', psychic: 'Pszichikus', ice: 'Jég', fairy: 'Tündér', dark: 'Sötét', water: 'Víz', normal: 'Normál', grass: 'Fű', ghost: 'Szellem'  },
    text: {
        selectLanguage: '🌍 Nyelv',
        quizTitle: 'Pokémon Típus Kvíz',
        quizInstructions: 'Válasszon 1 vagy 2 kategóriát minden Pokémonhoz. Minden helyes kategória 1 pontot ér; két választás növelheti vagy csökkentheti a pontszámot.',
        selectAtLeastOneGen: 'Válasszon legalább egy generációt a kvíz indításához',
        filterByGen: 'Szűrés generáció szerint:',
        all: 'ÖSSZES',
        selectYourTypes: 'Válassza ki a Pokémon típusait:',
        submit: 'Küldés',
        next: 'Következő',
        loading: 'Betöltés...',
        errorLoading: 'A kvíz betöltése sikertelen',
        submitting: 'Küldés folyamatban...',
        evaluationComplete: 'Értékelés kész',
        trainerRankRecorded: 'A tréner rang rögzítve.',
        yourScore: 'Pontszáma:',
        resultsBreakdown: 'Eredmények:',
        correct: 'Helyes:',
        yourAnswer: 'Válasza:',
        takeQuizAgain: 'Kvíz újra',
        about: 'Névjegy'
    }
},

      ms: { types: { bug: 'Serangga', flying: 'Terbang', ground: 'Darat', poison: 'Racun', electric: 'Elektrik', rock: 'Batu', fighting: 'Berlawan', steel: 'Besi', fire: 'Api', dragon: 'Naga', psychic: 'Psikik', ice: 'Ais', fairy: 'Pari Pari', dark: 'Gelap', water: 'Air', normal: 'Biasa', grass: 'Rumput', ghost: 'Hantu'  },
    text: {
        selectLanguage: '🌍 Bahasa',
        quizTitle: 'Kuiz Jenis Pokémon',
        quizInstructions: 'Pilih 1 atau 2 kategori untuk setiap Pokémon. Anda mendapat 1 mata untuk kategori yang betul; dua pilihan boleh menaikkan atau menurunkan markah.',
        selectAtLeastOneGen: 'Pilih sekurang-kurangnya satu generasi untuk memulakan kuiz',
        filterByGen: 'Tapis mengikut generasi:',
        all: 'SEMUA',
        selectYourTypes: 'Pilih jenis Pokémon:',
        submit: 'Hantar',
        next: 'Seterusnya',
        loading: 'Memuatkan...',
        errorLoading: 'Gagal memuatkan kuiz',
        submitting: 'Menghantar...',
        evaluationComplete: 'Penilaian selesai',
        trainerRankRecorded: 'Pangkat jurulatih direkodkan.',
        yourScore: 'Markah anda:',
        resultsBreakdown: 'Perincian keputusan:',
        correct: 'Betul:',
        yourAnswer: 'Jawapan anda:',
        takeQuizAgain: 'Ulang kuiz',
        about: 'Mengenai'
    }
},

    no: { types: { bug: 'Insekt', flying: 'Flyvende', ground: 'Jord', poison: 'Gift', electric: 'Elektrisk', rock: 'Stein', fighting: 'Slåss', steel: 'Stål', fire: 'Ild', dragon: 'Drage', psychic: 'Psykisk', ice: 'Is', fairy: 'Fe', dark: 'Mørk', water: 'Vann', normal: 'Normal', grass: 'Gress', ghost: 'Spøkelse' },
    text: {
        selectLanguage: '🌍 Språk',
        quizTitle: 'Pokémon Typetest',
        quizInstructions: 'Velg 1 eller 2 kategorier for hver Pokémon. 1 poeng for riktig kategori; to valg kan øke eller senke poengsummen.',
        selectAtLeastOneGen: 'Velg minst én generasjon for å starte testen',
        filterByGen: 'Filtrer etter generasjon:',
        all: 'ALLE',
        selectYourTypes: 'Velg Pokémon-typer:',
        submit: 'Send',
        next: 'Neste',
        loading: 'Laster...',
        errorLoading: 'Kunne ikke laste test',
        submitting: 'Sender...',
        evaluationComplete: 'Vurdering fullført',
        trainerRankRecorded: 'Trenerrang registrert.',
        yourScore: 'Din poengsum:',
        resultsBreakdown: 'Resultatoversikt:',
        correct: 'Riktig:',
        yourAnswer: 'Ditt svar:',
        takeQuizAgain: 'Ta testen igjen',
        about: 'Om'
    }
},

    pl: { types: { bug: 'Robak', flying: 'Latający', ground: 'Ziemny', poison: 'Trujący', electric: 'Elektryczny', rock: 'Kamienny', fighting: 'Walczący', steel: 'Stalowy', fire: 'Ognisty', dragon: 'Smok', psychic: 'Psychiczny', ice: 'Lodowy', fairy: 'Baśniowy', dark: 'Mroczny', water: 'Wodny', normal: 'Normalny', grass: 'Trawiasty', ghost: 'Duch' },
    text: {
        selectLanguage: '🌍 Język',
        quizTitle: 'Quiz Typów Pokémon',
        quizInstructions: 'Wybierz 1 lub 2 kategorie dla każdego Pokémona. 1 punkt za poprawną kategorię; dwie kategorie mogą zwiększyć lub zmniejszyć wynik.',
        selectAtLeastOneGen: 'Wybierz przynajmniej jedną generację, aby rozpocząć quiz',
        filterByGen: 'Filtruj według generacji:',
        all: 'WSZYSTKIE',
        selectYourTypes: 'Wybierz typy Pokémona:',
        submit: 'Zatwierdź',
        next: 'Dalej',
        loading: 'Ładowanie...',
        errorLoading: 'Błąd ładowania quizu',
        submitting: 'Zatwierdzanie...',
        evaluationComplete: 'Ocena zakończona',
        trainerRankRecorded: 'Ranking zapisany.',
        yourScore: 'Twój wynik:',
        resultsBreakdown: 'Podsumowanie wyników:',
        correct: 'Poprawne:',
        yourAnswer: 'Twoja odpowiedź:',
        takeQuizAgain: 'Rozwiąż ponownie',
        about: 'O quizie'
    }
},

    ro: { types: { bug: 'Insectă', flying: 'Zbor', ground: 'Pământ', poison: 'Otravă', electric: 'Electricitate', rock: 'Piatră', fighting: 'Luptă', steel: 'Oțel', fire: 'Foc', dragon: 'Dragon', psychic: 'Psihic', ice: 'Gheață', fairy: 'Zână', dark: 'Întuneric', water: 'Apă', normal: 'Normal', grass: 'Iarbă', ghost: 'Fantomă' },
    text: {
        selectLanguage: '🌍 Limbă',
        quizTitle: 'Quiz Tipuri Pokémon',
        quizInstructions: 'Alegeți 1 sau 2 categorii pentru fiecare Pokémon. 1 punct pentru categoria corectă; două alegeri pot crește sau scădea scorul.',
        selectAtLeastOneGen: 'Alegeți cel puțin o generație pentru a începe quizul',
        filterByGen: 'Filtrați după generație:',
        all: 'TOATE',
        selectYourTypes: 'Selectați tipurile Pokémon:',
        submit: 'Trimite',
        next: 'Următorul',
        loading: 'Se încarcă...',
        errorLoading: 'Eroare la încărcarea quizului',
        submitting: 'Se trimite...',
        evaluationComplete: 'Evaluare completă',
        trainerRankRecorded: 'Rangul antrenorului a fost înregistrat.',
        yourScore: 'Scorul tău:',
        resultsBreakdown: 'Detalii rezultate:',
        correct: 'Corect:',
        yourAnswer: 'Răspunsul tău:',
        takeQuizAgain: 'Reia quizul',
        about: 'Despre'
    }
},
    sv: { types: { bug: 'Insekt', flying: 'Flygande', ground: 'Mark', poison: 'Gift', electric: 'Elektrisk', rock: 'Sten', fighting: 'Strids', steel: 'Stål', fire: 'Eld', dragon: 'Drake', psychic: 'Psykisk', ice: 'Is', fairy: 'Fe', dark: 'Mörker', water: 'Vatten', normal: 'Normal', grass: 'Gräs', ghost: 'Spöke'  },
    text: {
        selectLanguage: '🌍 Språk',
        quizTitle: 'Pokémon Typquiz',
        quizInstructions: 'Välj 1 eller 2 kategorier för varje Pokémon. 1 poäng per korrekt kategori; två val kan öka eller minska poängen.',
        selectAtLeastOneGen: 'Välj minst en generation för att börja quizet',
        filterByGen: 'Filtrera efter generation:',
        all: 'ALLA',
        selectYourTypes: 'Välj Pokémon-typer:',
        submit: 'Skicka',
        next: 'Nästa',
        loading: 'Laddar...',
        errorLoading: 'Kunde inte ladda quizet',
        submitting: 'Skickar...',
        evaluationComplete: 'Utvärdering klar',
        trainerRankRecorded: 'Tränarrank registrerad.',
        yourScore: 'Din poäng:',
        resultsBreakdown: 'Resultat:',
        correct: 'Rätt:',
        yourAnswer: 'Ditt svar:',
        takeQuizAgain: 'Gör quizet igen',
        about: 'Om'
    }
},
    vi: { types: { bug: 'Côn trùng', flying: 'Bay', ground: 'Đất', poison: 'Độc', electric: 'Điện', rock: 'Đá', fighting: 'Chiến đấu', steel: 'Thép', fire: 'Lửa', dragon: 'Rồng', psychic: 'Siêu năng', ice: 'Băng', fairy: 'Tiên', dark: 'Bóng tối', water: 'Nước', normal: 'Thường', grass: 'Cỏ', ghost: 'Ma'  },
    text: {
        selectLanguage: '🌍 Ngôn ngữ',
        quizTitle: 'Bài kiểm tra Loại Pokémon',
        quizInstructions: 'Chọn 1 hoặc 2 danh mục cho mỗi Pokémon. Bạn nhận 1 điểm cho danh mục đúng; chọn hai có thể tăng hoặc giảm điểm.',
        selectAtLeastOneGen: 'Chọn ít nhất một thế hệ để bắt đầu bài kiểm tra',
        filterByGen: 'Lọc theo thế hệ:',
        all: 'TẤT CẢ',
        selectYourTypes: 'Chọn loại Pokémon:',
        submit: 'Gửi',
        next: 'Tiếp theo',
        loading: 'Đang tải...',
        errorLoading: 'Tải bài kiểm tra thất bại',
        submitting: 'Đang gửi...',
        evaluationComplete: 'Đánh giá hoàn tất',
        trainerRankRecorded: 'Đã ghi nhận xếp hạng huấn luyện viên.',
        yourScore: 'Điểm của bạn:',
        resultsBreakdown: 'Phân tích kết quả:',
        correct: 'Đúng:',
        yourAnswer: 'Câu trả lời của bạn:',
        takeQuizAgain: 'Làm lại bài kiểm tra',
        about: 'Giới thiệu'
    }
},


            it: {
                types: {
                    bug: 'Coleottero', flying: 'Volante', ground: 'Terra', poison: 'Veleno',
                    electric: 'Elettro', rock: 'Roccia', fighting: 'Lotta', steel: 'Acciaio',
                    fire: 'Fuoco', dragon: 'Drago', psychic: 'Psico', ice: 'Ghiaccio',
                    fairy: 'Folletto', dark: 'Buio', water: 'Acqua', normal: 'Normale',
                    grass: 'Erba', ghost: 'Spettro'
                },
                text: {
                    selectLanguage: '🌍 Lingua', quizTitle: 'Quiz Tipo Pokémon',
                    quizInstructions: 'Seleziona 1 o 2 categorie per ogni Pokémon. Guadagna 1 punto per ogni categoria corretta; scegliere due può aumentare o diminuire il tuo punteggio.',
                    selectAtLeastOneGen: 'Seleziona almeno una generazione per iniziare il quiz',
                    filterByGen: 'Filtra per Generazione', all: 'TUTTE', selectYourTypes: 'Seleziona il/i Tipo/i del Pokémon:',
                    submit: 'Invia', next: 'Avanti', loading: 'Caricamento...', errorLoading: 'Errore nel caricamento del quiz',
                    submitting: 'Invio...', evaluationComplete: 'Valutazione Completata', trainerRankRecorded: 'Il tuo Rango Allenatore è stato registrato.',
                    yourScore: 'Il tuo Punteggio:', resultsBreakdown: 'Ripartizione dei risultati:', correct: 'Corretto:', yourAnswer: 'La tua risposta:',
                    takeQuizAgain: 'Rifai il Quiz', about: 'Informazioni'
                }
            }
        };
