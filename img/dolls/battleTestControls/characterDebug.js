var NPC1 =
{
  penis: "anus",
  vagina: "none",
  bodysize: 4,
  chest: 0,
  lactation: 0,
  lefthand: 0,
  righthand: "throat",
  anus: 0,
  mouth: 0,
  gender: "m",
  description: "toned",
  fullDescription: "toned woman",
  insecurity: "ethics",
  pronoun: "f",
  pronouns: {
    he: 0,
    his: 0
  },
  penissize: 4,
  breastsize: 7,
  bottomsize: 0,
  ballssize: 0,
  penisdesc: "humongous cock",
  hairlengthrear: 3,
  hairstylerear: "femme",
  hairstylefront: "bangs",
  health: 250,
  skincolour: "white",
  teen: 0,
  adult: 1,
  intro: 0,
  speechpenisescape: 0,
  speechvaginaescape: 0,
  speechanusescape: 0,
  type: 0,
  stance: 0,
  monster: 0,
  hasPriority: false
}
var NPC2 =
{
  penis: "mouthimminent",
  vagina: "none",
  bodysize: 2,
  chest: 0,
  lactation: 1,
  lefthand: 0,
  righthand: "pen_right_cheek",
  anus: 0,
  mouth: 0,
  gender: "m",
  description: "lithe",
  fullDescription: "lithe woman",
  insecurity: "ethics",
  pronoun: "f",
  pronouns: {
    he: 0,
    his: 0
  },
  penissize: 4,
  breastsize: 7,
  bottomsize: 0,
  ballssize: 0,
  penisdesc: "massive cock",
  hairlengthrear: 6,
  hairstylerear: "pigtails",
  hairstylefront: "swept",
  health: 175,
  skincolour: "white",
  teen: 0,
  adult: 1,
  intro: 0,
  speechpenisescape: 0,
  speechvaginaescape: 0,
  speechanusescape: 0,
  type: 0,
  stance: 0,
  monster: 0,
  hasPriority: false
};
var NPC3 =
{
  penis: "none",
  vagina: "none",
  breastsdesc: 0,
  chest: "none",
  lactation: 0,
  lefthand: "none",
  righthand: "none",
  hairlengthrear: 3,
  hairstylerear: "ponytail",
  hairstylefront: "bangs",
  bodysize: 3,
  anus: 0,
  mouth: "none",
  gender: 0,
  description: 0,
  fullDescription: "slight woman",
  insecurity: 0,
  pronoun: 0,
  pronouns: {
    he: 0,
    his: 0
  },
  penissize: 0,
  breastsize: 0,
  bottomsize: 0,
  ballssize: 0,
  penisdesc: 0,
  breastdesc: 0,
  health: 0,
  skincolour: "white",
  teen: 0,
  adult: 1,
  intro: 0,
  speechpenisescape: 0,
  speechvaginaescape: 0,
  speechanusescape: 0,
  type: 0,
  stance: 0,
  monster: 0
};
var NPC4 =
{
  penis: "none",
  vagina: "none",
  breastsdesc: 0,
  chest: "none",
  lactation: 0,
  lefthand: "none",
  hairstylefront: "bangs",
  hairstylerear: "ponytail",
  bodysize: 4,
  righthand: "none",
  anus: 0,
  mouth: "none",
  gender: 0,
  description: 0,
  fullDescription: "slender woman",
  insecurity: 0,
  pronoun: 0,
  pronouns: {
    he: 0,
    his: 0
  },
  penissize: 0,
  breastsize: 0,
  bottomsize: 0,
  ballssize: 0,
  penisdesc: 0,
  breastdesc: 0,
  health: 0,
  skincolour: "white",
  teen: 1,
  adult: 0,
  intro: 0,
  speechpenisescape: 0,
  speechvaginaescape: 0,
  speechanusescape: 0,
  type: 0,
  stance: 0,
  monster: 0
}
var NPC5 =
{
  penis: "none",
  vagina: "none",
  breastsdesc: 0,
  chest: "none",
  hairstylefront: "bangs",
  hairstylerear: "ponytail",
  bodysize: "medium",
  lactation: 3,
  lefthand: "none",
  righthand: "none",
  anus: 0,
  mouth: "none",
  gender: 0,
  description: 0,
  fullDescription: "graceful woman",
  insecurity: 0,
  pronoun: 0,
  pronouns: {
    he: 0,
    his: 0
  },
  penissize: 0,
  breastsize: 0,
  bottomsize: 0,
  ballssize: 0,
  penisdesc: 0,
  breastdesc: 0,
  health: 0,
  skincolour: "white",
  teen: 1,
  adult: 0,
  intro: 0,
  speechpenisescape: 0,
  speechvaginaescape: 0,
  speechanusescape: 0,
  type: 0,
  stance: 0,
  monster: 0
};
var NPC6 =
{
  penis: "none",
  vagina: "none",
  breastsdesc: 0,
  chest: "none",
  hairstylefront: "swept",
  hairstylerear: "ponytail",
  bodysize: 2,
  lactation: 0,
  lefthand: "none",
  righthand: "none",
  anus: 0,
  mouth: "none",
  gender: 0,
  description: 0,
  fullDescription: 0,
  insecurity: 0,
  pronoun: 0,
  pronouns: {
    he: 0,
    his: 0
  },
  penissize: 0,
  breastsize: 0,
  bottomsize: 0,
  ballssize: 0,
  penisdesc: 0,
  breastdesc: 0,
  health: 0,
  skincolour: 0,
  teen: 0,
  adult: 0,
  intro: 0,
  speechpenisescape: 0,
  speechvaginaescape: 0,
  speechanusescape: 0,
  type: 0,
  stance: 0,
  monster: 0
};



var player = {
  bodysize: 1,
  gender: "m",
  sex: "m",
  penis: 0,
  vagina: 0,
  penissize: 0,
  breastsize: 0,
  bottomsize: 0,
  ballssize: 0,
  pronoun: 0,
  pronouns: {
    he: 0,
    his: 0
  },
  virginity: {
    anal: false,
    oral: false,
    penile: true,
    vaginal: true,
    temple: true
  },
  gender_appearance: "m",
  gender_appearance_without_overwear: "m",
  penisExist: true,
  vaginaExist: false,
  ballsExist: true,
  gender_appearance_factors: [
    {
      femininity: -100000,
      factor: "Penis visible"
    },
    {
      femininity: -50,
      factor: "Exposed breasts"
    },
    {
      femininity: 19,
      factor: "Hair length"
    },
    {
      femininity: 50,
      factor: "Bottom size (100% visible)"
    },
    {
      femininity: -200,
      factor: "Body type"
    },
    {
      femininity: -119,
      factor: "Toned muscles"
    },
    {
      femininity: 0,
      factor: "Posture (x1 effectiveness due to English skill)"
    },
    {
      femininity: 50,
      factor: "Visible skin markings"
    }
  ],
  gender_appearance_without_overwear_factors: [
    {
      femininity: -100000,
      factor: "Penis visible"
    },
    {
      femininity: -50,
      factor: "Exposed breasts"
    },
    {
      femininity: 19,
      factor: "Hair length"
    },
    {
      femininity: 50,
      factor: "Bottom size (100% visible)"
    },
    {
      femininity: -200,
      factor: "Body type"
    },
    {
      femininity: -119,
      factor: "Toned muscles"
    },
    {
      femininity: 0,
      factor: "Posture (x1 effectiveness due to English skill)"
    },
    {
      femininity: 50,
      factor: "Visible skin markings"
    }
  ],
  gender_posture: "n",
  femininity: -100250,
  gender_body: "m",
  femininity_without_overwear: -100250
}



var skinColor = {
  tanLoc: ["body", "breasts", "penis", "swimshorts", "swimsuitTop", "swimsuitBottom", "bikiniTop", "bikiniBottom", "tshirt"],
  natural: "light",
  init: true,
  range: 17,
  current: {
    test: "",
    body: "hue-rotate(30.187deg) saturate(0.15) brightness(4.29)",
    breasts: "hue-rotate(30.187deg) saturate(0.15) brightness(4.29)",
    penis: "hue-rotate(30.187deg) saturate(0.15) brightness(4.29)",
    swimshorts: "hue-rotate(30.187deg) saturate(0.15) brightness(4.29)",
    swimsuitTop: "hue-rotate(30.187deg) saturate(0.15) brightness(4.29)",
    swimsuitBottom: "hue-rotate(30.187deg) saturate(0.15) brightness(4.29)",
    bikiniTop: "hue-rotate(30.187deg) saturate(0.15) brightness(4.29)",
    bikiniBottom: "hue-rotate(30.187deg) saturate(0.15) brightness(4.29)",
    tshirt: "hue-rotate(30.187deg) saturate(0.15) brightness(4.29)",
    mouth: "hue-rotate(30.187deg) saturate(0.15) brightness(4.29)"
  },
  tanValues: [1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1],
  overwriteEnable: false,
  sunBlock: false,
  overwrite: { hStart: 30, hEnd: 47, sStart: 0.15, sEnd: 0.3, bStart: 4.3, bEnd: 3.4 },
  overwriteValues: { hStart: 45, hEnd: 45, sStart: 0.2, sEnd: 0.4, bStart: 4.5, bEnd: 0.7 }
}


var worn = {
  upper:{
     index:14,
     name:"large towel",
     name_cap:"Large towel",
     variable:"towellarge",
     integrity:10,
     integrity_max:10,
     fabric_strength:20,
     reveal:800,
     word:"a",
     one_piece:1,
     strap:0,
     open:1,
     state:"waist",
     state_base:"waist",
     state_top:"chest",
     state_top_base:"chest",
     plural:0,
     colour:"tangerine",
     colour_options:[
        "black",
        "blue",
        "brown",
        "green",
        "pink",
        "purple",
        "red",
        "tangerine",
        "teal",
        "white",
        "yellow"
     ],
     exposed:0,
     exposed_base:0,
     type:[
        "normal"
     ],
     set:"towellarge",
     gender:"n",
     cost:0,
     description:"Not very secure.",
     shop:[
        
     ],
     accessory:0,
     accessory_colour:0,
     accessory_colour_options:[
        
     ],
     sleeve_img:0,
     breast_img:0,
     cursed:0,
     location:0,
     iconFile:0,
     accIcon:0,
     exposedcarry:0,
     outfitPrimary:{
        lower:"large towel bottom"
     }
  },
  lower:{
     index:15,
     name:"large towel bottom",
     name_cap:"Large towel bottom",
     variable:"gymbloomers",
     integrity:10,
     integrity_max:10,
     fabric_strength:30,
     reveal:800,
     word:"a",
     one_piece:1,
     skirt:1,
     skirt_down:1,
     state:"hips",
     state_base:"hips",
     plural:0,
     colour:"tangerine",
     colour_options:[
        "black",
        "blue",
        "brown",
        "green",
        "pink",
        "purple",
        "red",
        "tangerine",
        "teal",
        "white",
        "yellow"
     ],
     exposed:0,
     exposed_base:0,
     vagina_exposed:1,
     vagina_exposed_base:1,
     anus_exposed:1,
     anus_exposed_base:1,
     type:[
        "normal"
     ],
     set:"towellarge",
     gender:"n",
     cost:0,
     description:"Not very secure.",
     shop:[
        
     ],
     accessory:0,
     accessory_colour:0,
     accessory_colour_options:[
        
     ],
     high_img:0,
     back_img:0,
     cursed:0,
     location:0,
     iconFile:0,
     accIcon:0,
     exposedcarry:0,
     outfitSecondary:[
        "upper",
        "large towel"
     ]
  },
  under_upper:{
     index:0,
     name:"naked",
     name_cap:"Naked",
     variable:"naked",
     integrity:0,
     integrity_max:0,
     fabric_strength:0,
     reveal:1000,
     word:"n",
     one_piece:0,
     strap:0,
     open:0,
     state:0,
     state_base:0,
     state_top:0,
     state_top_base:0,
     plural:0,
     colour:0,
     colour_options:[
        "black",
        "blue",
        "brown",
        "green",
        "pink",
        "purple",
        "red",
        "tangerine",
        "teal",
        "white",
        "yellow",
        "custom"
     ],
     exposed:1,
     exposed_base:1,
     type:[
        "naked"
     ],
     set:"under_upper",
     gender:"n",
     cost:0,
     description:"naked",
     shop:[
        
     ],
     accessory:0,
     accessory_colour:0,
     accessory_colour_options:[
        
     ],
     sleeve_img:0,
     breast_img:0,
     cursed:0,
     location:0,
     iconFile:0,
     accIcon:0,
     exposedcarry:1,
     state_stop:0,
     mainImage:0
  },
  under_lower:{
     index:0,
     name:"naked",
     name_cap:"Naked",
     variable:"naked",
     integrity:-10,
     integrity_max:0,
     fabric_strength:0,
     reveal:1000,
     word:"n",
     one_piece:0,
     state:0,
     state_base:0,
     plural:0,
     colour:0,
     colour_options:[
        "black",
        "blue",
        "brown",
        "green",
        "pink",
        "purple",
        "red",
        "tangerine",
        "teal",
        "white",
        "yellow",
        "custom"
     ],
     exposed:1,
     exposed_base:1,
     vagina_exposed:1,
     vagina_exposed_base:1,
     anus_exposed:1,
     anus_exposed_base:1,
     type:[
        "naked"
     ],
     anal_shield:0,
     set:"under_lower",
     gender:"n",
     cost:0,
     description:"naked",
     shop:[
        
     ],
     accessory:0,
     accessory_colour:0,
     accessory_colour_options:[
        
     ],
     penis_img:0,
     high_img:0,
     cursed:0,
     location:0,
     iconFile:0,
     accIcon:0,
     exposedcarry:1,
     mainImage:0
  },
  genitals:{
     index:2,
     name:"chastity cage",
     name_cap:"Chastity cage",
     variable:"chastitycage",
     integrity:1540,
     integrity_max:2000,
     fabric_strength:15,
     reveal:1000,
     word:"a",
     one_piece:0,
     state:"waist",
     state_base:"waist",
     plural:1,
     colour:0,
     colour_options:[
        
     ],
     exposed:1,
     exposed_base:1,
     vagina_exposed:0,
     vagina_exposed_base:0,
     anus_exposed:1,
     anus_exposed_base:1,
     type:[
        "chastity",
        "cage"
     ],
     anal_shield:null,
     set:"genitals",
     gender:"m",
     cost:0,
     description:"Restrictive.",
     shop:[
        
     ],
     accessory:0,
     accessory_colour:0,
     accessory_colour_options:[
        
     ],
     penis_img:0,
     high_img:0,
     cursed:1,
     location:0,
     hideUnderLower:[
        "plain panties",
        "bikini bottoms",
        "lace panties",
        "briefs",
        "school swimsuit bottom",
        "school swim shorts",
        "leotard bottom",
        "full body leotard bottom",
        "skimpy leotard bottom",
        "foreign school swimsuit bottom",
        "swimsuit bottom",
        "bunny leotard bottom",
        "boyshorts",
        "catgirl panties",
        "G-string",
        "microkini bottom",
        "speedo",
        "striped panties",
        "thong"
     ],
     iconFile:0,
     accIcon:0,
     origin:"temple"
  },
  head:{
     index:0,
     name:"naked",
     name_cap:"Naked",
     variable:"naked",
     integrity:0,
     integrity_max:0,
     fabric_strength:0,
     reveal:1,
     word:"n",
     plural:0,
     colour:0,
     colour_options:[
        
     ],
     type:[
        "naked"
     ],
     gender:"n",
     cost:0,
     description:"naked",
     shop:[
        
     ],
     accessory:0,
     accessory_colour:0,
     accessory_colour_options:[
        
     ],
     back_img:0,
     cursed:0,
     location:0,
     iconFile:0,
     accIcon:0,
     mainImage:0
  },
  face:{
     index:0,
     name:"naked",
     name_cap:"Naked",
     variable:"naked",
     integrity:10,
     integrity_max:10,
     fabric_strength:20,
     reveal:1,
     word:"a",
     plural:0,
     colour:0,
     colour_options:[
        
     ],
     type:[
        "naked"
     ],
     gender:"n",
     cost:0,
     description:"naked",
     shop:[
        
     ],
     accessory:0,
     accessory_colour:0,
     accessory_colour_options:[
        
     ],
     cursed:0,
     location:0,
     iconFile:0,
     accIcon:0,
     mainImage:0
  },
  neck:{
     index:1,
     name:"collar",
     name_cap:"Collar",
     variable:"collar",
     integrity:400,
     integrity_max:400,
     fabric_strength:20,
     reveal:1000,
     word:"n",
     plural:1,
     colour:0,
     colour_options:[
        
     ],
     type:[
        "fetish"
     ],
     gender:"n",
     cost:20000,
     description:"Requires a special tool to unlock.",
     shop:[
        
     ],
     collared:1,
     accessory:0,
     accessory_colour:0,
     accessory_colour_options:[
        
     ],
     cursed:1,
     location:0,
     iconFile:"Collar.png",
     accIcon:0
  },
  legs:{
     index:0,
     name:"naked",
     name_cap:"Naked",
     variable:"naked",
     integrity:10,
     integrity_max:10,
     fabric_strength:20,
     reveal:1,
     word:"a",
     plural:0,
     colour:0,
     colour_options:[
        
     ],
     type:[
        "naked"
     ],
     gender:"n",
     cost:0,
     description:"naked",
     shop:[
        
     ],
     accessory:0,
     accessory_colour:0,
     accessory_colour_options:[
        
     ],
     cursed:0,
     location:0,
     iconFile:0,
     accIcon:0,
     state_base:0,
     mainImage:0
  },
  feet:{
     index:0,
     name:"naked",
     name_cap:"Naked",
     variable:"naked",
     integrity:10,
     integrity_max:10,
     fabric_strength:20,
     reveal:1,
     word:"a",
     plural:0,
     colour:0,
     colour_options:[
        
     ],
     type:[
        "naked"
     ],
     gender:"n",
     cost:0,
     description:"naked",
     shop:[
        
     ],
     accessory:0,
     accessory_colour:0,
     accessory_colour_options:[
        
     ],
     cursed:0,
     location:0,
     iconFile:0,
     accIcon:0,
     mainImage:0
  },
  over_upper:{
     index:0,
     name:"naked",
     name_cap:"Naked",
     variable:"naked",
     integrity:0,
     integrity_max:0,
     fabric_strength:0,
     reveal:1000,
     word:"n",
     strap:0,
     open:0,
     zip:0,
     state:0,
     state_base:0,
     state_top:0,
     state_top_base:0,
     plural:0,
     colour:0,
     colour_options:[
        "black",
        "blue",
        "brown",
        "green",
        "pink",
        "purple",
        "red",
        "tangerine",
        "teal",
        "white",
        "yellow",
        "custom"
     ],
     exposed:2,
     exposed_base:2,
     type:[
        "naked"
     ],
     gender:"n",
     cost:0,
     description:"naked",
     shop:[
        
     ],
     accessory:0,
     accessory_colour:0,
     accessory_colour_options:[
        
     ],
     sleeve_img:0,
     breast_img:0,
     cursed:0,
     location:0,
     iconFile:0,
     accIcon:0,
     mainImage:0
  },
  over_lower:{
     index:0,
     name:"naked",
     name_cap:"Naked",
     variable:"naked",
     integrity:0,
     integrity_max:0,
     fabric_strength:0,
     reveal:1000,
     word:"n",
     skirt:0,
     skirt_down:0,
     state:0,
     state_base:0,
     plural:0,
     colour:0,
     colour_options:[
        
     ],
     exposed:2,
     exposed_base:2,
     vagina_exposed:1,
     vagina_exposed_base:1,
     anus_exposed:1,
     anus_exposed_base:1,
     type:[
        "naked"
     ],
     gender:"n",
     cost:0,
     description:"naked",
     shop:[
        
     ],
     accessory:0,
     accessory_colour:0,
     accessory_colour_options:[
        
     ],
     high_img:0,
     back_img:0,
     cursed:0,
     location:0,
     iconFile:0,
     accIcon:0,
     mainImage:0
  },
  over_head:{
     index:0,
     name:"naked",
     name_cap:"Naked",
     variable:"naked",
     integrity:0,
     integrity_max:0,
     fabric_strength:0,
     reveal:1,
     word:"n",
     plural:0,
     colour:0,
     colour_options:[
        
     ],
     type:[
        "naked"
     ],
     gender:"n",
     cost:0,
     description:"naked",
     shop:[
        
     ],
     accessory:0,
     accessory_colour:0,
     accessory_colour_options:[
        
     ],
     back_img:0,
     cursed:0,
     location:0,
     iconFile:0,
     accIcon:0,
     mainImage:0
  }
}


var SugarCube = {
  State: {
    variables: {
      enemyno: 1,
      position: "doggy",
      skinColor: skinColor,
      hairlengthstage: "shoulder",
      haircolorfilter: "hue-rotate(40deg) saturate(60%) brightness(71%) contrast(100%)",
      arousal: 0,
      arousalmax: 10000,
      trauma: 0, 
      traumamax: 5000,
      pain: 0, 
      NPCList: [NPC1, NPC2, NPC3, NPC4, NPC5, NPC6],
      player: player,
      worn: worn
    }
  }
};



