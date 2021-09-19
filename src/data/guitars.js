// gsutil -m cp -R amps gs://my-bucket

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
		make: epiphone,
		model: 'Les Paul',
		description: none,
		imageName: 'epiphoneLPBlackWhite2.jpeg'
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
		make: epiphone,
		model: makeUnkown,
		description: none,
		imageName: 'epiJetBlack.jpeg'
	},
	{
		make: epiphone,
		model: makeUnkown,
		description: '335 remake',
		imageName: 'epi335remake.jpeg'
	},
	{
		make: epiphone,
		model: makeUnkown,
		description: 'Hollow body',
		imageName: 'ibanezhollowbodyburst.jpeg'
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
		make: 'Supro',
		model: 'Dual Tone',
		description: none,
		imageName: 'suproDualTone.jpeg'
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
		make: 'ESP LTD',
		model: 'GL-200MT',
		description: none,
		imageName: 'espltd.jpeg'
	},
	{
		make: fender,
		model: 'Stratocaster',
		description: none,
		imageName: 'fenderSunburstStrat2.jpeg'
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
];

export default guitarData;
