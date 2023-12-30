DoLHouse.add({ //IT IS VERY IMPORTANT THAT THE FIRST LINE IN YOUR FILE IS A COPY-PASTE OF THIS LINE
    face: {         
        magnets: {
            mouth: {x: 40, y: 114},
            mouthentrance: {x: 15, y:114},
            mouthimminent: {x: 5, y:114}
        },
        accessories: {
            blush: {
                translate: {x:0, y:0, depth:3},
                selected_variant: "blush5",
                variants: {
                    blush0: {},
                    blush1: {
                        spritesheet: "blush/doggyactiveblush1.png"
                    },
                    blush2: {
                        spritesheet: "blush/doggyactiveblush2.png"
                    },
                    blush3: {
                        spritesheet: "blush/doggyactiveblush3.png"
                    },
                    blush4: {
                        spritesheet: "blush/doggyactiveblush4.png"
                    },
                    blush5: {
                        spritesheet: "blush/doggyactiveblush5.png"
                    }
                }
            },
            eyes : { 
                import: {
                    filepath: "eyes/eyes.js",
                    variable: "eyes"
                }
            },
            mouth: {
                selected_variant: "normal",
                variants: {                    
                    normal: {
                        translate: {x:0, y:0, depth:-1},
                        spritesheet: "mouth/doggyactivemouth.png"                        
                    },
                    oral: {
                        translate: {x:0, y:0, depth:-1},
                        spritesheet: "mouth/doggyactiveoral.png"
                    },
                    kissing: {
                        translate: {x:0, y:0, depth:-1},
                        spritesheet: "mouth/doggyactiveoralmouth.png"
                    }
                }
            }
        }
    }
});