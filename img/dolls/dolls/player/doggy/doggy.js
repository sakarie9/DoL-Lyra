DoLHouse.add({ //IT IS VERY IMPORTANT THAT THE FIRST LINE IN YOUR FILE IS A COPY-PASTE OF THIS LINE
    doggy: {
        selected_variant: "active",
        inherit_filter: true,
        promulgate_sequence_info: true, //forces any descendant accessories to inherit sequence info by default
        frames: 4,
        width: 1024,
        sequences: { 
            deep: [2,3,3,3,0,1,1], //for deep penetration by big NPCs with 7 frames (eg horses)
            deepcum: [2,3,3,3,0,1,1,2,3,3,3,0,1,1], //double length to allow for cumshot animation
            active: [0,1,2,3],
            activecum: [0,1,2,3,0,1,2,3], // double length to allow for cumshot animation
            still: [0], //single frame
            idle: [0, 2] //two-frame idle animation
        },
        variants: {
            deep : {
                import: {variable: "base_doggy"},
                selected_sequence: "deep"
            }, 
            deepcum: {
                import: {variable: "base_doggy"},
                selected_sequence: "deepcum"
            },
            active: {
                import: {variable: "base_doggy"},
                selected_sequence: "active"
            },
            activecum: {
                import: {variable: "base_doggy"},
                selected_sequence: "activecum"
            },
            idle : {
                import: {variable: "base_doggy"},
                selected_sequence: "idle"
            },
            still: {
                import: {variable: "base_doggy"},
                selected_sequence: "still"
            }
        }
    },
    base_doggy: {        
        spritesheet: "doggyactivebase.png",
        translate: {x:0, y:0, depth: -5},
        inherit_filter: true,
        inherit_sequence_info: true,
        accessories: {
            bottom: {
                import: {
                    filepath: "bottom/bottom.js",
                    variable: "bottom"
                }
            },
            top: {
                import: {
                    filepath: "top/top.js",
                    variable: "top"
                }
            }
        }       
    }
});