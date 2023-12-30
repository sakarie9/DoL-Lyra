DoLHouse.add({ //IT IS VERY IMPORTANT THAT THE FIRST LINE IN YOUR FILE IS A COPY-PASTE OF THIS LINE
horse : {
    translate: {x:0, y:0, depth: 20},
    frames: 7,
    selected_variant : "active", 
    variants : {
        active : {
            import : {variable: "horse_penetrated"}
        }
    }
},
horse_penetrated : 
{
    spritesheet: "penetrated.png", //the filename of the spriteesheet for this FDoll/accessory
    width : 1624, //width of the spritesheet, in pixels.
    frames : 7, //number of frames in the spritesheet.
    magnets: { //names and locations of spots we can attach accessories to
         penis_base : {x: 152, y: 108, depth: -20}, 
         penis_tip : {x: 130, y: 114},
         front_hoof : {x: 39, y: 54},
         cutoff : {x:128, y: 0, depth: -10},
         saddle: {x: 170, y:0}
    },
    accessories: {
        penis: {
            width : 1624,
            frames : 7, 
            spritesheet: "penetrated_penis.png",
            attach: "penis_base",
            to: "penis_base",
            magnets : {
                penis_base : {x: 152, y: 108}, 
            }
        }
        /*head : {
            attach: "hips",
            to: "cutoff",
            variants : {
                    centaur: {
                        specifier: "../human/human.js",
                        scale: {x:1.5, y: 1.2},
                        data: "human"
                    },
                    normal: {}
                }
            
        }, 
        rider : {
            attach: "hips",
            to: "saddle",            
            specifier: "../human/human.js",
            data: "human"
        }*/
    }
}
});