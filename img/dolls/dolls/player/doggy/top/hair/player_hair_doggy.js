DoLHouse.add({ //IT IS VERY IMPORTANT THAT THE FIRST LINE IN YOUR FILE IS A COPY-PASTE OF THIS LINE
    hair: {
        width: 1024,
        frames: 4,
        accessories : {
            shimmer : {
                inherit_filter: true,
                translate: {x:0, y:0, depth: 4},
                spritesheet : "doggyactiveoverlay.png"
            }, 
            lengths : {
                inherit_filter: true,
                translate: {x:0, y:0, depth: 3},
                variants : {
                    short : {
                        inherit_filter: true,
                        spritesheet : "doggyactiveshort.png"
                    },
                    shoulder: {
                        inherit_filter: true,
                        spritesheet : "doggyactiveshoulder.png"                    
                    },
                    chest: {
                        inherit_filter: true,
                        spritesheet : "doggyactivechest.png"                    
                    }, 
                    navel: {
                        inherit_filter: true,
                        spritesheet : "doggyactivenavel.png"
                    }, 
                    thighs: {
                        inherit_filter: true,
                        spritesheet : "doggyactivethighs.png"
                    },
                    feet: {
                        inherit_filter: true,
                        spritesheet : "doggyactivefeet.png"
                    }
                }
            }
        }
    }
});
