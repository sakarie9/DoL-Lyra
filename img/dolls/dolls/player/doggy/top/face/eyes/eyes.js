DoLHouse.add({ //IT IS VERY IMPORTANT THAT THE FIRST LINE IN YOUR FILE IS A COPY-PASTE OF THIS LINE
    eyes: {
        translate: { x: 0, y: 0, depth: 4},
        inherit_filter: true,
        accessories: {
            eyelids: {
                inherit_filter: true,
                sequences: {
                    still: [0, 0, 2, 2]
                },
                translate: {x:0, y:0, depth:2},
                spritesheet: "eyelids/doggyactiveeyelids.png",
                accessories: {
                    lashes : {
                        selected_variant: "natural",
                        translate: {x:0, y:0, depth:1},
                        variants: {
                            makeup: {                                
                                inherit_filter : true,
                                spritesheet : "eyelids/doggyactivelashesmakeup.png"
                            },
                            natural: {                
                                inherit_filter : true,                
                                spritesheet : "eyelids/doggyactivelashes.png"
                            }
                        }
                    }
                }
            },
            eyeballs: {
                selected_variant: "normal",
                translate: { x: 0, y: 0, depth: 1 },
                variants: {
                    normal: {                        
                        spritesheet: "doggyactiveeyes.png"
                    },
                    empty: {
                        spritesheet: "doggyactiveeyesempty.png"
                    }
                }
            },
            sclera: {
                selected_variant: "normal",
                translate: { x: 0, y: 0, depth: 2 },
                variants: {
                    normal: {},
                    bloodshot: {                        
                        spritesheet: "doggyactivesclerabloodshot.png"
                    }
                }
            },
            tears: {
                translate: {x:0, y:0, depth:4},
                selected_variant: "tears5",
                variants: {                    
                    tears0: {},
                    tears1: {                        
                        spritesheet: "tears/doggyactivetears1.png"
                    },
                    tears2: {
                        spritesheet: "tears/doggyactivetears2.png"
                    },
                    tears3: {
                        spritesheet: "tears/doggyactivetears3.png"
                    },
                    tears4: {
                        spritesheet: "tears/doggyactivetears4.png"
                    },
                    tears5: {
                        spritesheet: "tears/doggyactivetears5.png"
                    }
                }
            },
        }
    }
});