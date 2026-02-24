
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
                    includeGen2Button: 'Include Gen 2',
            modeRestrictionGen1Gen2: 'This mode only supports Gen 1 + Gen 2',
            restrictionGen1Gen2: 'Gen 1 + Gen 2',
            restrictionGen1Only: 'Gen 1 Only',
            imageMode: 'Image Mode:',
            artButton: 'Art',
            grayButton: 'Gray',
            colorButton: 'Color',
            '2dMotionButton': '2D Motion', // Quoted for consistency if key has numbers
            '3dMotionButton': '3D Motion', // Quoted for consistency if key has numbers
            paletteButton: 'Palette',
            plushButton: 'Plush',
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
                    includeGen2Button: '金銀版も含む',
                    modeRestrictionGen1Gen2: 'このモードは第1世代と第2世代のみをサポートします',
                    restrictionGen1Gen2: '第1世代 + 第2世代',
                    restrictionGen1Only: '第1世代のみ',
                    imageMode: '画像モード:',
                    artButton: 'イラスト',
                    grayButton: '白黒',
                    colorButton: 'カラー',
                    '2dMotionButton': '2D モーション',
                    '3dMotionButton': '3D モーション',
                    paletteButton: 'パレット',
                    plushButton: 'ぬいぐるみ',
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
                    includeGen2Button: 'Incluir Gen 2',
            modeRestrictionGen1Gen2: 'Este modo solo es compatible con la Gen 1 + Gen 2',
            restrictionGen1Gen2: 'Gen 1 + Gen 2',
            restrictionGen1Only: 'Solo Gen 1',
            imageMode: 'Modo de Imagen:',
            artButton: 'Arte',
            grayButton: 'Gris',
            colorButton: 'Color',
            '2dMotionButton': 'Movimiento 2D',
            '3dMotionButton': 'Movimiento 3D',
            paletteButton: 'Paleta',
            plushButton: 'Peluche',
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
                    includeGen2Button: '包含第二世代',
                    modeRestrictionGen1Gen2: '此模式仅支持第一世代 + 第二世代',
                    restrictionGen1Gen2: '第一世代 + 第二世代',
                    restrictionGen1Only: '仅限第一世代',
                    imageMode: '图像模式:',
                    artButton: '艺术图',
                    grayButton: '灰色',
                    colorButton: '彩色',
                    '2dMotionButton': '2D 动态',
                    '3dMotionButton': '3D 动态',
                    paletteButton: '调色板',
                    plushButton: '毛绒玩具',
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
                    includeGen2Button: '包含第二世代',
            modeRestrictionGen1Gen2: '此模式僅支持第一世代 + 第二世代',
            restrictionGen1Gen2: '第一世代 + 第二世代',
            restrictionGen1Only: '僅限第一世代',
            imageMode: '圖像模式:',
            artButton: '藝術圖',
            grayButton: '灰色',
            colorButton: '彩色',
            '2dMotionButton': '2D 動畫',
            '3dMotionButton': '3D 動畫',
            paletteButton: '調色板',
            plushButton: '絨毛玩具',
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
                    includeGen2Button: 'Inclure Gén 2',
            modeRestrictionGen1Gen2: 'Ce mode ne prend en charge que la Gén 1 + Gén 2',
            restrictionGen1Gen2: 'Gén 1 + Gén 2',
            restrictionGen1Only: 'Gén 1 Seulement',
            imageMode: 'Mode Image:',
            artButton: 'Art',
            grayButton: 'Gris',
            colorButton: 'Couleur',
            '2dMotionButton': 'Mouvement 2D',
            '3dMotionButton': 'Mouvement 3D',
            paletteButton: 'Palette',
            plushButton: 'Peluche',
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
                    includeGen2Button: 'Gen 2 einschließen',
            modeRestrictionGen1Gen2: 'Dieser Modus unterstützt nur Gen 1 + Gen 2',
            restrictionGen1Gen2: 'Gen 1 + Gen 2',
            restrictionGen1Only: 'Nur Gen 1',
            imageMode: 'Bildmodus:',
            artButton: 'Kunst',
            grayButton: 'Grau',
            colorButton: 'Farbe',
            '2dMotionButton': '2D Bewegung',
            '3dMotionButton': '3D Bewegung',
            paletteButton: 'Palette',
            plushButton: 'Plüsch',
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
                    includeGen2Button: '2세대 포함',
            modeRestrictionGen1Gen2: '이 모드는 1세대 + 2세대만 지원합니다',
            restrictionGen1Gen2: '1세대 + 2세대',
            restrictionGen1Only: '1세대만',
            imageMode: '이미지 모드:',
            artButton: '아트',
            grayButton: '회색',
            colorButton: '컬러',
            '2dMotionButton': '2D 모션',
            '3dMotionButton': '3D 모션',
            paletteButton: '팔레트',
            plushButton: '봉제인형',
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
        includeGen2Button: 'Incluir Geração 2',
            modeRestrictionGen1Gen2: 'Este modo suporta apenas Gen 1 + Gen 2',
            restrictionGen1Gen2: 'Gen 1 + Gen 2',
            restrictionGen1Only: 'Somente Gen 1',
            imageMode: 'Modo de Imagem:',
            artButton: 'Arte',
            grayButton: 'Cinza',
            colorButton: 'Cor',
            '2dMotionButton': 'Movimento 2D',
            '3dMotionButton': 'Movimento 3D',
            paletteButton: 'Paleta',
            plushButton: 'Pelúcia',
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
        includeGen2Button: 'Sertakan Gen 2',
            modeRestrictionGen1Gen2: 'Mode ini hanya mendukung Gen 1 + Gen 2',
            restrictionGen1Gen2: 'Gen 1 + Gen 2',
            restrictionGen1Only: 'Hanya Gen 1',
            imageMode: 'Mode Gambar:',
            artButton: 'Seni',
            grayButton: 'Abu-abu',
            colorButton: 'Warna',
            '2dMotionButton': 'Gerak 2D',
            '3dMotionButton': 'Gerak 3D',
            paletteButton: 'Palet',
            plushButton: 'Boneka',
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
        includeGen2Button: 'รวมเจเนอเรชัน 2',
            modeRestrictionGen1Gen2: 'โหมดนี้รองรับเฉพาะ Gen 1 + Gen 2',
            restrictionGen1Gen2: 'Gen 1 + Gen 2',
            restrictionGen1Only: 'Gen 1 เท่านั้น',
            imageMode: 'โหมดภาพ:',
            artButton: 'ภาพวาด',
            grayButton: 'ขาวดำ',
            colorButton: 'สี',
            '2dMotionButton': 'เคลื่อนไหว 2D',
            '3dMotionButton': 'เคลื่อนไหว 3D',
            paletteButton: 'จานสี',
            plushButton: 'ตุ๊กตาผ้า',
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
        includeGen2Button: 'Включить Пок. 2',
            modeRestrictionGen1Gen2: 'Этот режим поддерживает только Пок. 1 + Пок. 2',
            restrictionGen1Gen2: 'Пок. 1 + Пок. 2',
            restrictionGen1Only: 'Только Пок. 1',
            imageMode: 'Режим изображения:',
            artButton: 'Арт',
            grayButton: 'Серый',
            colorButton: 'Цветной',
            '2dMotionButton': '2D Движение',
            '3dMotionButton': '3D Движение',
            paletteButton: 'Палитра',
            plushButton: 'Плюш',
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
        includeGen2Button: '2. Nesli Dahil Et',
            modeRestrictionGen1Gen2: 'Bu mod sadece 1. + 2. Nesli destekler',
            restrictionGen1Gen2: '1. Nesil + 2. Nesil',
            restrictionGen1Only: 'Sadece 1. Nesil',
            imageMode: 'Görüntü Modu:',
            artButton: 'Sanat',
            grayButton: 'Gri',
            colorButton: 'Renkli',
            '2dMotionButton': '2D Hareket',
            '3dMotionButton': '3D Hareket',
            paletteButton: 'Palet',
            plushButton: 'Peluş',
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
        includeGen2Button: 'जनरेशन 2 शामिल करें',
            modeRestrictionGen1Gen2: 'यह मोड केवल जनरेशन 1 + जनरेशन 2 को सपोर्ट करता है',
            restrictionGen1Gen2: 'जनरेशन 1 + जनरेशन 2',
            restrictionGen1Only: 'केवल जनरेशन 1',
            imageMode: 'छवि मोड:',
            artButton: 'कलाकृति',
            grayButton: 'ग्रे',
            colorButton: 'रंग',
            '2dMotionButton': '2D गति',
            '3dMotionButton': '3D गति',
            paletteButton: 'पैलेट',
            plushButton: 'प्लश',
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
        includeGen2Button: 'Включи Пок. 2',
        modeRestrictionGen1Gen2: 'Този режим поддържа само Пок. 1 + Пок. 2',
        restrictionGen1Gen2: 'Пок. 1 + Пок. 2',
        restrictionGen1Only: 'Само Пок. 1',
        imageMode: 'Режим на изображение:',
        artButton: 'Арт',
        grayButton: 'Сиво',
        colorButton: 'Цветно',
        '2dMotionButton': '2D Движение',
        '3dMotionButton': '3D Движение',
        paletteButton: 'Палитра',
        plushButton: 'Плюшена играчка',
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
        includeGen2Button: 'Zahrnout Gen 2',
        modeRestrictionGen1Gen2: 'Tento režim podporuje pouze Gen 1 + Gen 2',
        restrictionGen1Gen2: 'Gen 1 + Gen 2',
        restrictionGen1Only: 'Pouze Gen 1',
        imageMode: 'Režim obrázku:',
        artButton: 'Umění',
        grayButton: 'Šedá',
        colorButton: 'Barva',
        '2dMotionButton': '2D Pohyb',
        '3dMotionButton': '3D Pohyb',
        paletteButton: 'Paleta',
        plushButton: 'Plyšák',
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
        includeGen2Button: 'Inkluder Gen 2',
            modeRestrictionGen1Gen2: 'Denne tilstand understøtter kun Gen 1 + Gen 2',
            restrictionGen1Gen2: 'Gen 1 + Gen 2',
            restrictionGen1Only: 'Kun Gen 1',
            imageMode: 'Billedtilstand:',
            artButton: 'Kunst',
            grayButton: 'Grå',
            colorButton: 'Farve',
            '2dMotionButton': '2D Bevægelse',
            '3dMotionButton': '3D Bevægelse',
            paletteButton: 'Palette',
            plushButton: 'Plys',
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
        includeGen2Button: 'Gen 2 Inclusief',
            modeRestrictionGen1Gen2: 'Deze modus ondersteunt alleen Gen 1 + Gen 2',
            restrictionGen1Gen2: 'Gen 1 + Gen 2',
            restrictionGen1Only: 'Alleen Gen 1',
            imageMode: 'Beeldmodus:',
            artButton: 'Kunst',
            grayButton: 'Grijs',
            colorButton: 'Kleur',
            '2dMotionButton': '2D Beweging',
            '3dMotionButton': '3D Beweging',
            paletteButton: 'Palet',
            plushButton: 'Pluche',
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
        includeGen2Button: 'Sisällytä Gen 2',
            modeRestrictionGen1Gen2: 'Tämä tila tukee vain Gen 1 + Gen 2',
            restrictionGen1Gen2: 'Gen 1 + Gen 2',
            restrictionGen1Only: 'Vain Gen 1',
            imageMode: 'Kuvatila:',
            artButton: 'Taide',
            grayButton: 'Harmaa',
            colorButton: 'Väri',
            '2dMotionButton': '2D Liike',
            '3dMotionButton': '3D Liike',
            paletteButton: 'Paletti',
            plushButton: 'Pehmo',
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
        includeGen2Button: 'Συμπερίληψη Gen 2',
            modeRestrictionGen1Gen2: 'Αυτή η λειτουργία υποστηρίζει μόνο Gen 1 + Gen 2',
            restrictionGen1Gen2: 'Gen 1 + Gen 2',
            restrictionGen1Only: 'Μόνο Gen 1',
            imageMode: 'Λειτουργία εικόνας:',
            artButton: 'Τέχνη',
            grayButton: 'Γκρι',
            colorButton: 'Χρώμα',
            '2dMotionButton': '2D Κίνηση',
            '3dMotionButton': '3D Κίνηση',
            paletteButton: 'Παλέτα',
            plushButton: 'Πλούσια',
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
        includeGen2Button: 'כלול דור 2',
            modeRestrictionGen1Gen2: 'מצב זה תומך רק בדור 1 + דור 2',
            restrictionGen1Gen2: 'דור 1 + דור 2',
            restrictionGen1Only: 'דור 1 בלבד',
            imageMode: 'מצב תמונה:',
            artButton: 'אומנות',
            grayButton: 'אפור',
            colorButton: 'צבע',
            '2dMotionButton': 'תנועה דו-ממדית',
            '3dMotionButton': 'תנועה תלת-ממדית',
            paletteButton: 'צבעים',
            plushButton: 'פלוש',
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
        includeGen2Button: 'Gen 2 Belefoglalása',
            modeRestrictionGen1Gen2: 'Ez a mód csak az 1. + 2. generációt támogatja',
            restrictionGen1Gen2: 'Gen 1 + Gen 2',
            restrictionGen1Only: 'Csak Gen 1',
            imageMode: 'Képmód:',
            artButton: 'Művészet',
            grayButton: 'Szürke',
            colorButton: 'Színes',
            '2dMotionButton': '2D Mozgás',
            '3dMotionButton': '3D Mozgás',
            paletteButton: 'Paletta',
            plushButton: 'Plüss',
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
        includeGen2Button: 'Sertakan Gen 2',
            modeRestrictionGen1Gen2: 'Mod ini hanya menyokong Gen 1 + Gen 2',
            restrictionGen1Gen2: 'Gen 1 + Gen 2',
            restrictionGen1Only: 'Hanya Gen 1',
            imageMode: 'Mod Imej:',
            artButton: 'Seni',
            grayButton: 'Kelabu',
            colorButton: 'Warna',
            '2dMotionButton': 'Gerakan 2D',
            '3dMotionButton': 'Gerakan 3D',
            paletteButton: 'Palet',
            plushButton: 'Plush',
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
        includeGen2Button: 'Inkluder Gen 2',
            modeRestrictionGen1Gen2: 'Denne modusen støtter kun Gen 1 + Gen 2',
            restrictionGen1Gen2: 'Gen 1 + Gen 2',
            restrictionGen1Only: 'Kun Gen 1',
            imageMode: 'Bildemodus:',
            artButton: 'Kunst',
            grayButton: 'Grå',
            colorButton: 'Farge',
            '2dMotionButton': '2D Bevegelse',
            '3dMotionButton': '3D Bevegelse',
            paletteButton: 'Palett',
            plushButton: 'Plysj',
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
        includeGen2Button: 'Uwzględnij Gen 2',
            modeRestrictionGen1Gen2: 'Ten tryb obsługuje tylko Gen 1 + Gen 2',
            restrictionGen1Gen2: 'Gen 1 + Gen 2',
            restrictionGen1Only: 'Tylko Gen 1',
            imageMode: 'Tryb obrazu:',
            artButton: 'Grafika',
            grayButton: 'Szary',
            colorButton: 'Kolor',
            '2dMotionButton': 'Ruch 2D',
            '3dMotionButton': 'Ruch 3D',
            paletteButton: 'Paleta',
            plushButton: 'Pluszak',
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
        includeGen2Button: 'Include Gen 2',
            modeRestrictionGen1Gen2: 'Acest mod suportă doar Gen 1 + Gen 2',
            restrictionGen1Gen2: 'Gen 1 + Gen 2',
            restrictionGen1Only: 'Doar Gen 1',
            imageMode: 'Mod Imagine:',
            artButton: 'Artă',
            grayButton: 'Gri',
            colorButton: 'Culoare',
            '2dMotionButton': 'Mișcare 2D',
            '3dMotionButton': 'Mișcare 3D',
            paletteButton: 'Paletă',
            plushButton: 'Pluș',
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
        includeGen2Button: 'Inkludera Gen 2',
            modeRestrictionGen1Gen2: 'Detta läge stöder endast Gen 1 + Gen 2',
            restrictionGen1Gen2: 'Gen 1 + Gen 2',
            restrictionGen1Only: 'Endast Gen 1',
            imageMode: 'Bildläge:',
            artButton: 'Konst',
            grayButton: 'Grå',
            colorButton: 'Färg',
            '2dMotionButton': '2D Rörelse',
            '3dMotionButton': '3D Rörelse',
            paletteButton: 'Palett',
            plushButton: 'Plysch',
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
        includeGen2Button: 'Bao gồm Thế hệ 2',
            modeRestrictionGen1Gen2: 'Chế độ này chỉ hỗ trợ Thế hệ 1 + Thế hệ 2',
            restrictionGen1Gen2: 'Thế hệ 1 + Thế hệ 2',
            restrictionGen1Only: 'Chỉ Thế hệ 1',
            imageMode: 'Chế độ Hình ảnh:',
            artButton: 'Ảnh minh họa',
            grayButton: 'Xám',
            colorButton: 'Màu',
            '2dMotionButton': 'Chuyển động 2D',
            '3dMotionButton': 'Chuyển động 3D',
            paletteButton: 'Bảng màu',
            plushButton: 'Thú nhồi bông',
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
                    includeGen2Button: 'Includi Gen 2',
            modeRestrictionGen1Gen2: 'Questa modalità supporta solo Gen 1 + Gen 2',
            restrictionGen1Gen2: 'Gen 1 + Gen 2',
            restrictionGen1Only: 'Solo Gen 1',
            imageMode: 'Modalità Immagine:',
            artButton: 'Arte',
            grayButton: 'Grigio',
            colorButton: 'Colore',
            '2dMotionButton': 'Movimento 2D',
            '3dMotionButton': 'Movimento 3D',
            paletteButton: 'Tavolozza',
            plushButton: 'Peluche',
                    submit: 'Invia', next: 'Avanti', loading: 'Caricamento...', errorLoading: 'Errore nel caricamento del quiz',
                    submitting: 'Invio...', evaluationComplete: 'Valutazione Completata', trainerRankRecorded: 'Il tuo Rango Allenatore è stato registrato.',
                    yourScore: 'Il tuo Punteggio:', resultsBreakdown: 'Ripartizione dei risultati:', correct: 'Corretto:', yourAnswer: 'La tua risposta:',
                    takeQuizAgain: 'Rifai il Quiz', about: 'Informazioni'
                }
            }
        };
