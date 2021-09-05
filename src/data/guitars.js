// gsutil -m cp -R guitars gs://my-bucket

// meta
const makeUnkown = 'Will find on inquiry';
const none = 'None';

const oscarShmidtt = 'Oscar Schmidtt';
const fender = 'Fender';
const gibson = 'Gibson';
const martin = 'Martin';
const ibanez = 'Ibanez';
const schecter = 'Schecter';
const epiphone = 'Epiphone';
const squire = 'squire';
const gretsch = 'Gretsch';
const prs = 'Paul Reed Smith';

const guitarData = [
	{
		make: martin,
		model: makeUnkown,
		description: 'Full body acoustic, not electric',
		imageName: 'martin_full_body.jpeg'
	},
	{
		make: 'Danelectric',
		model: makeUnkown,
		description: none,
		imageName: 'danelecric.jpeg'
	},
	{
		make: ibanez,
		model: 'JEM77P',
		description: 'Steve Vai signature edition',
		imageName: 'ibanez_steve_vai_jem77.jpeg'
	},
	{
		make: schecter,
		model: makeUnkown,
		description: 'Really Pink',
		imageName: 'schecter_electric_pink.jpeg'
	},
	{
		make: oscarShmidtt,
		model: makeUnkown,
		description: 'Les Paul copy',
		imageName: 'oscar_schmidtt_lp.jpeg'
	},
	{
		make: 'Daneleotro',
		model: makeUnkown,
		description: none,
		imageName: 'deneleotro.jpeg'
	},
	{
		make: 'Bad Cat',
		model: makeUnkown,
		description: 'Made of glass',
		imageName: 'bad_cat_glass.jpeg'
	},
	{
		make: gibson,
		model: 'SG',
		description: none,
		imageName: 'gibson_sg_maroon.jpeg'
	},
	{
		make: fender,
		model: 'Telecaster',
		description: none,
		imageName: 'fender_tele_gold.jpeg'
	},
	{
		make: 'Shuriken',
		model: makeUnkown,
		description: none,
		imageName: 'shuriken_grey.jpeg'
	},
	{
		make: fender,
		model: 'Stratocaster',
		description: 'I think this is American made',
		imageName: 'fender_strat_gold.jpeg'
	},
	{
		make: 'Kramer',
		model: makeUnkown,
		description: none,
		imageName: 'kramer_lion.jpeg'
	},
	{
		make: oscarShmidtt,
		model: makeUnkown,
		description: 'Les Paul Copy',
		imageName: 'oscar_smidt_marble.jpeg'
	},
	{
		make: epiphone,
		model: 'Les Paul',
		description: 'Les Paul edition',
		imageName: 'epihpne_les_paul_green.jpeg'
	},
	{
		make: 'Leo Jaymz',
		model: makeUnkown,
		description: 'Les Paul copy',
		imageName: 'leo_jaymz_america.jpeg'
	},
	{
		make: epiphone,
		model: makeUnkown,
		description: 'Not in view but think Les Paul editionep',
		imageName: 'epiphonelespaulblack.jpeg'
	},
	{
		make: gibson,
		model: 'Les Paul Custom',
		description: 'Sunburst',
		imageName: 'les_paul_sunburst.jpeg'
	},
	{
		make: squire,
		model: 'Stratocaster',
		description: none,
		imageName: 'squire_strat_red.jpeg'
	},
	{
		make: squire,
		model: 'Stratocaster',
		description: none,
		imageName: 'squire_strat_burst.jpeg'
	},
	{
		make: squire,
		model: 'Stratocaster',
		description: none,
		imageName: 'squire_white_strat.jpeg'
	},
	{
		make: squire,
		model: 'Stratocaster',
		description: none,
		imageName: 'squire_strat_black_white.jpeg'
	},
	{
		make: squire,
		model: 'Stratocaster',
		description: none,
		imageName: 'squire_strat_wood_grain.jpeg'
	},
	{
		make: squire,
		model: 'Stratocaster',
		description: none,
		imageName: 'squire_strat_red_woodgrain.jpeg'
	},
	{
		make: 'Jackson',
		model: 'Flying V',
		description: none,
		imageName: 'jackson_wood.jpeg'
	},
	{
		make: makeUnkown,
		model: makeUnkown,
		description: 'We can get info on this on inquiry',
		imageName: 'tile_thing.jpeg'
	},
	{
		make: fender,
		model: 'Stratocaster',
		description: 'Eric Calpton signature series',
		imageName: 'fender_strat_eric_clapton.jpeg'
	},
	{
		make: gretsch,
		model: makeUnkown,
		description: 'Hollow body',
		imageName: 'gretschMaroonHollowbody.jpeg'
	},
	{
		make: 'Jackson',
		model: makeUnkown,
		description: none,
		imageName: 'jacksonGray.jpeg'
	},
	{
		make: schecter,
		model: makeUnkown,
		description: none,
		imageName: 'schecterHollowBodyBlackGold.jpeg'
	},
	{
		make: epiphone,
		model: 'G-1275',
		description: none,
		imageName: 'epiphoneG1275.jpeg'
	},
	{
		make: 'Rickenbacker',
		model: makeUnkown,
		description: 'Some cosmetic damage on bottom',
		imageName: 'rickebackerGuitar.jpeg'
	},
	{
		make: gibson,
		model: 'Les Paul Standard',
		description: none,
		imageName: 'gibsonLPStandardSun.jpeg'
	},
	{
		make: 'Rickenbacker',
		model: makeUnkown,
		description: 'Bass guitar',
		imageName: 'rickenbackerBass.jpeg'
	},
	{
		make: gibson,
		model: 'SG Tribute',
		description: 'There might be 2 of these',
		imageName: 'gibsonSGTributeWood.jpeg'
	}, 
	{
		make: martin,
		model: makeUnkown,
		description: 'Full body no pickup',
		imageName: 'martin2.jpeg'
	},
	{
		make: epiphone,
		model: 'Les Paul',
		description: none,
		imageName: 'epiphone_woodGranLP.jpeg'
	},
	{
		make: gibson,
		model: 'SG',
		description: 'With wammy bar',
		imageName: 'gibsonSGWhammy.jpeg'
	},
	{
		make: gibson,
		model: 'Les Paul',
		description: 'Custom made solid maple',
		imageName: 'gibsonLesPaulMaple.jpeg'
	},
	{
		make: epiphone,
		model: 'Les Paul',
		description: none,
		imageName: 'epiphoneLPBlackWhite2.jpeg'
	},
	{
		make: fender,
		model: 'Telecaster Custom',
		description: none,
		imageName: 'fenderTeleCustomWood.jpeg'
	},
	{
		make: makeUnkown,
		model: makeUnkown,
		description: 'Nylon string acoustic.  Details on inquiry',
		imageName: 'nylonAcoustic.jpeg'
	},
	{
		make: fender,
		model: 'Stratocaster',
		description: none,
		imageName: 'fenderStratBalckWhite.jpeg'
	},
	{
		make: fender,
		model: 'Stratocaster',
		description: none,
		imageName: 'fenderStratPurple.jpeg'
	},
	{
		make: fender,
		model: 'Stratocaster',
		description: none,
		imageName: 'fenderStratWhite.jpeg'
	},
	{
		make: prs,
		model: 'Piezo SE',
		description: none,
		imageName: 'PRSpiezo.jpeg'
	},
	{
		make: fender,
		model: 'Stratocaster',
		description: 'Acoustic Stratocaster',
		imageName: 'fenderAcousticStrat.jpeg'
	},
	{
		make: epiphone,
		model: makeUnkown,
		description: none,
		imageName: 'epiJetBlack.jpeg'
	},
	{
		make: gibson,
		model: '335',
		description: 'Lucille (B.B. King remake)',
		imageName: 'lucille.jpeg'
	},
	{
		make: gibson,
		model: 'SG 1963 Les Paul SG',
		description: 'Reissue',
		imageName: 'gibsonSG1963.jpeg'
	},
	{
		make: epiphone,
		model: makeUnkown,
		description: '335 remake',
		imageName: 'epi335remake.jpeg'
	},
	{
		make: gibson,
		model: 'Les Paul Custom',
		description: none,
		imageName: 'gibsonLPCustomBlack.jpeg'
	},
	{
		make: epiphone,
		model: makeUnkown,
		description: 'Hollow body',
		imageName: 'ibanezhollowbodyburst.jpeg'
	},
	{
		make: gibson,
		model: makeUnkown,
		description: 'Acoustic no pickup',
		imageName: 'gibsonAcoustic.jpeg'
	},
	{
		make: makeUnkown,
		model: makeUnkown,
		description: none,
		imageName: 'nylonAcoustic.jpeg'
	},
	{
		make: 'Zager',
		model: makeUnkown,
		description: 'Acoustic',
		imageName: 'zagerAcoustic.jpeg'
	},
	{
		make: 'Ovation',
		model: 'Celebrity Elite',
		description: none,
		imageName: 'ovationBlue.jpeg'
	},
	{
		make: gibson,
		model: 'Les Paul Custom',
		description: none,
		imageName: 'lpCustomWHiteGold.jpeg'
	},
	{
		make: fender,
		model: makeUnkown,
		description: 'Curt Cobain signature edition',
		imageName: 'cobain.jpeg'
	},
	{
		make: squire,
		model: 'Jazz Bass',
		description: none,
		imageName: 'squireJazzBass.jpeg'
	},
	{
		make: squire,
		model: 'Stratocaster',
		description: none,
		imageName: 'squireStratGray2.jpeg'
	},
	{
		make: fender,
		model: 'Stratocaster',
		description: 'Tom Anderson edition',
		imageName: 'tomanderson.jpeg'
	},
	{
		make: epiphone,
		model: makeUnkown,
		description: none,
		imageName: 'epiAcoustic.jpeg'
	},
	{
		make: 'Jackson',
		model: makeUnkown,
		description: none,
		imageName: 'jacksonBlack.jpeg'
	},
	{
		make: epiphone,
		model: 'Les Paul',
		description: 'Hollow body',
		imageName: 'epiLPhollowbody.jpeg'
	},
	{
		make: gretsch,
		model: 'G6136T',
		description: 'White Falcon Players Edition',
		imageName: 'whiteFalcon.jpeg'
	},
	{
		make: 'Supro',
		model: 'Dual Tone',
		description: none,
		imageName: 'suproDualTone.jpeg'
	},
	{
		make: fender,
		model: 'Stratocaster',
		description: none,
		imageName: 'fenderStratWoodDeep.jpeg'
	},
	{
		make: fender,
		model: 'Stratocaster',
		description: none,
		imageName: 'fenderStratWhite3.jpeg'
	},
	{
		make: fender,
		model: 'Stratocaster',
		description: none,
		imageName: 'stratocasterRed2.jpeg'
	},
	{
		make: 'Taylor',
		model: makeUnkown,
		description: 'Acoustic',
		imageName: 'taylorAcoustic.jpeg'
	},
	{
		make: ibanez,
		model: makeUnkown,
		description: none,
		imageName: 'ibanzWhite.jpeg'
	},
	{
		make: 'Studabaker',
		model: makeUnkown,
		description: 'Travel guitar with built in capo',
		imageName: 'studabaker.jpeg'
	},
	{
		make: prs,
		model: 'SE Custom',
		description: none,
		imageName: 'prsSECustom.jpeg'
	},
	{
		make: 'Hofner',
		model: 'Ignition Series Violin BasshofnerBass',
		description: none,
		imageName: 'hofnerBass.jpeg'
	},
	{
		make: schecter,
		model: makeUnkown,
		description: 'Bass 5 string',
		imageName: 'schecterBassJIm.jpeg'
	},
	{
		make: 'ESP LTD',
		model: 'GL-200MT',
		description: none,
		imageName: 'espltd.jpeg'
	},
	{
		make: prs,
		model: makeUnkown,
		description: 'Acoustic',
		imageName: 'prsAcoustic.jpeg'
	},
	{
		make: fender,
		model: 'Stratocaster',
		description: none,
		imageName: 'fenderSunburstStrat2.jpeg'
	},
	{
		make: "D'Angelico",
		model: 'Gramercy S',
		description: 'Premier Series Gramercy CS Grand Auditorium Acoustic-Electric Guitar Vintage Sunburst',
		imageName: 'dangAcoustic.jpeg'
	},
	{
		make: gibson,
		model: 'Firebird',
		description: none,
		imageName: 'gibsonFirebird1.jpeg'
	},
	{
		make: gibson,
		model: 'Firebird',
		description: 'Neck broken and repaired at on point at the head',
		imageName: 'firebird2.jpeg'
	},
	{
		make: gibson,
		model: '335',
		description: none,
		imageName: 'gibson335red.jpeg'
	},
	{
		make: epiphone,
		model: makeUnkown,
		description: '335 remake',
		imageName: 'epi335black.jpeg'
	},
	{
		make: fender,
		model: 'Stratpcaster',
		description: none,
		imageName: 'fenderstratnaturalwood.jpeg'
	},
	{
		make: fender,
		model: 'Stratpcaster',
		description: none,
		imageName: 'stratCream.jpeg'
	},
	{
		make: fender,
		model: 'Telecaster',
		description: none,
		imageName: 'blueTelecaster.jpeg'
	},
	{
		make: fender,
		model: 'Stratocaster',
		description: none,
		imageName: 'startTurqu.jpeg'
	},
	{
		make: fender,
		model: 'Stratocaster',
		description: none,
		imageName: 'stratwooden4.jpeg'
	},
	{
		make: gretsch,
		model: makeUnkown,
		description: none,
		imageName: 'turqGretsch.jpeg'
	},
	{
		make: gretsch,
		model: makeUnkown,
		description: none,
		imageName: 'gretschBlack.jpeg'
	},
	{
		make: fender,
		model: 'Telecaster',
		description: none,
		imageName: 'telecasterBlackWhite.jpeg'
	},
	{
		make: fender,
		model: 'Telecaster',
		description: none,
		imageName: 'telewooden2.jpeg'
	},
	{
		make: fender,
		model: 'Stratocaster',
		description: none,
		imageName: 'fenderBlackGold.jpeg'
	},
	{
		make: 'Yamaha',
		model: makeUnkown,
		description: none,
		imageName: 'yamahaacoustic.jpeg'
	},
];

export default guitarData;
