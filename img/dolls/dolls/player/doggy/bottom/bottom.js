DoLHouse.add({ //IT IS VERY IMPORTANT THAT THE FIRST LINE IN YOUR FILE IS A COPY-PASTE OF THIS LINE
    bottom: {
        inherit_filter: true,
        inherit_sequence_info: true,
        translate: {x:0, y:0, depth:5},
        magnets: {
            anus: { x: 178, y: 120 },
            anusentrance: { x: 195, y: 122 },
            anusimminent: { x: 230, y: 122 },
            penis: { x: 150, y: 142 },
            vagina: { x: 173, y: 132 },
            vaginaimminent: { x: 263, y: 128 },
            vaginaentrance : { x: 188, y: 133 },
            footjob: { x: 205, y: 114 },
            waist: {x: 160, y: 110}
        },
        accessories: {
            clothes: {
                import: {
                    filepath: "clothes/clothes_bottom.js",
                    variable: "clothes"
                }
            },
            butt_front: {
                inherit_filter: true,
                inherit_sequence_info: true,
                selected_variant: "normal",
                variants: {
                    normal: {
                        inherit_filter: true,
                        filter: "drop-shadow(#0006 -3px 3px 3px)",
                        translate: { x: 0, y: 0, depth: 2 },
                        spritesheet: "doggyactivebasefrontrear.png",
                        accessories: {
                            import: { variable: "left_leg" }
                        }
                    },
                    inline_xray: {
                        inherit_filter: true,
                        translate: { x: 0, y: 0, depth: 2 },
                        spritesheet: "activeinlineanalxray.png",
                        accessories: {
                            import: { variable: "left_leg" }
                        }
                    }
                }
            },
            butt_back: {
                inherit_filter: true,
                translate: { x: 0, y: 0, depth: -2 },
                spritesheet: "doggyactivebaserightthigh.png",
                accessories: {
                    leg: {
                        inherit_filter: true,
                        selected_variant: "normal",
                        variants: {
                            normal: {
                                inherit_filter: true,
                                spritesheet: "/legs/doggyactivebaselegright.png"
                            },
                            footjob: {}
                        }
                    }
                }
            },
            penis: {
                inherit_filter: true,
                selected_variant: "small",
                variants: {
                    none: {

                    },
                    virgin: {
                        spritesheet: "/penis/doggyactivepenisvirgin.png"
                    },
                    tiny: {
                        spritesheet: "/penis/doggyactivepenis.png"
                    },
                    small: {
                        spritesheet: "/penis/doggyactivepenis.png"
                    },
                    large: {
                        spritesheet: "/penis/doggyactivepenis.png"
                    }
                }
            },
            bowels: {},
            uterus: {},
            clothing: {}
        }
    },
    left_leg: {
        leg: {
            selected_variant: "normal",
            inherit_filter: true,
           
            variants: {
                normal: {
                    translate: { x: 0, y: 0, depth: -1},
                    inherit_filter: true,
                    spritesheet: "/legs/doggyactivebaselegleft.png"
                },
                footjob: {
                    translate: { x: 0, y: 0, depth: 2 },
                    inherit_filter: true,
                    spritesheet: "/legs/doggyactivefeetjob.png"
                }
            }
        }
    }
});