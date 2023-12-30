DoLHouse.add({ //IT IS VERY IMPORTANT THAT THE FIRST LINE IN YOUR FILE IS A COPY-PASTE OF THIS LINE

    pigtails: {
        inherit_sequence_info: true,
        accessories: {
            split: {
                translate: {x:-10, y: -25},
                inherit_filter: true,
                inherit_sequence_info: true,
                selected_sequence: "active",
                phase: 0,
                accessories: {
                    tail1: {
                        scale: {x: 0.6, y:1},
                        translate: { x: 60, y: -1, depth: -1 },
                        phase: 0,
                        inherit_filter: true,
                        inherit_sequence_info: true,
                        import: {
                            filepath: "ponytail.js",
                            variable: "ponytail"

                        }
                    },
                    tail2: {
                        filter: "brightness(0.9)",
                        scale: {x: -0.6, y:1},
                        inherit_filter: true,
                        inherit_sequence_info: true,
                        translate: { x: 180, y: -1, depth: -1 },
                        phase: -2,
                        import: {
                            filepath: "ponytail.js",
                            variable: "ponytail"
                        }
                    }
                }
            }
        }
    }

});  //IT IS VERY IMPORTANT THAT THE LAST LINE IN YOUR FILE IS A COPY-PASTE OF THIS LINE