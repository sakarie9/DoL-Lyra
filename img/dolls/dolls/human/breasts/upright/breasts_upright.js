DoLHouse.add({ //IT IS VERY IMPORTANT THAT THE FIRST LINE IN YOUR FILE IS A COPY-PASTE OF THIS LINE

    breasts_upright: {
        inherit_sequence_info: true, /*signifies that this accessory should adopt whatever sequence is specified on the most immediate ancestor*/
        sequences: {
            imminent: [7,7,7]
        },
        variants: {
            flat: {
                /*lol, why woud there be a spritesheet for this?*/
            },
            budding: {
                inherit_sequence_info: true,
                width: 552,
                scale: { x: 1, y: 1 },
                magnets: {base: { x: 45, y: 62 }},
                spritesheet: "budding_h.png"
            },
            tiny: {
                inherit_sequence_info: true,
                width: 552,
                scale: { x: 1.2, y: 1.2 },
                magnets: { base: { x: 45, y: 62 } },
                spritesheet: "budding_h.png"
            },
            small: {
                inherit_sequence_info: true,
                width: 784,
                scale: { x: 1, y: 1 },
                magnets: { base: { x: 75, y: 75 } },
                spritesheet: "small_h.png"
            },
            pert: {
                inherit_sequence_info: true,
                width: 784,
                scale: { x: 1.1, y: 1.1 },
                magnets: { base: { x: 75, y: 73 } },
                spritesheet: "small_h.png"
            },
            modest: {
                inherit_sequence_info: true,
                width: 864,
                scale: { x: 0.9, y: 0.9 },
                magnets: { base: { x: 87, y: 78 } },
                spritesheet: "full_h.png"
            },
            full: {
                inherit_sequence_info: true,
                width: 864,
                scale: { x: 1, y: 1 },
                magnets: { base: { x: 87, y: 68 } },
                spritesheet: "full_h.png"
            }
            ,
            large: {
                inherit_sequence_info: true,
                width: 864,
                scale: { x: 1.1, y: 1.1 },
                magnets: { base: { x: 87, y: 68 } },
                spritesheet: "full_h.png"
            },
            ample: {
                inherit_sequence_info: true,
                width: 1282,
                scale: { x: 0.9, y: 0.9 },
                magnets: { base: { x: 101, y: 70 } },
                spritesheet: "ample_h.png"
            },
            massive: {
                inherit_sequence_info: true,
                width: 1282,
                scale: { x: 1.1, y: 1.1 },
                magnets: { base: { x: 101, y: 65 } },
                spritesheet: "ample_h.png"
            }
            ,
            huge: {
                inherit_sequence_info: true,
                width: 1488,
                scale: { x: 0.9, y: 0.9 },
                magnets: { base: { x: 129, y: 85 } },
                spritesheet: "huge_h.png"
            },
            gigantic: {
                inherit_sequence_info: true,
                width: 1488,
                scale: { x: 1, y: 1 },
                magnets: { base: { x: 129, y: 76 } },
                spritesheet: "huge_h.png"
            }
            ,
            enormous: {
                inherit_sequence_info: true,
                width: 1488,
                scale: { x: 1.2, y: 1.2 },
                magnets: { base: { x: 129, y: 72 } },
                spritesheet: "huge_h.png"
            }
        }
    }
}); //IT IS VERY IMPORTANT THAT THE LAST LINE IN YOUR FILE IS A COPY-PASTE OF THIS LINE
