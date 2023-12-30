
DoLHouse.add({//IT IS VERY IMPORTANT THAT THE FIRST LINE IN YOUR FILE IS A COPY-PASTE OF THIS LINE

    clothes: {
        //inherit_filter: true,
        translate: { x: 0, y: 0, depth: 9 },
        accessories: {
            lower: {
                inherit_filter: true,
                selected_variant: "naked",
                translate: { x: 0, y: 0, depth: 1 },
                variants: {
                    naked: {},
                    cyleshorts: {
                        import: { variable: "gymbloomers" }
                    },
                    towellarge: {
                        selected_variant: "hips",
                        import: { variable: "towel_variants" }
                    },
                   
                    boardshorts: {
                        import: { variable: "shorts" }
                    },
                    boyshorts: {
                        import: { variable: "shorts" }
                    },
                    schoolshorts: {
                        import: { variable: "shorts" }
                    },
                    schoolswimshorts: {
                        import: { variable: "gymbloomers" }
                    },
                    jorts: {
                        import: { variable: "shorts" }
                    },
                    shorts: {
                        import: { variable: "shorts" }
                    },
                    skirt: { 
                        import: { variable: "skirt"}
                    },
                    micropleatedskirt : {
                        import: { variable: 'micropleatedskirt'}
                    }

                }
            },
            under_lower: {
                inherit_filter: true,
                selected_variant: "plainpanties",
                translate: {x:0, y:0, depth: 0},
                variants: {
                    naked: {},
                    
                    bikini: {
                        import: {
                            variable: "risquepanties"
                        }
                    },
                    crotchlesspantis: {
                        import: {
                            variable: "risquepanties"
                        }
                    }, 
                    microkini: {
                        import: {
                            variable: "risquepanties"
                        }
                    },
                    lacepanties: {
                        import: {
                            variable: "risquepanties"
                        }
                    },
                    catgirlpanties: {
                        import: {
                            variable: "plainpanties"
                        }
                    },
                    plainpanties: {
                        import: {
                            variable: "plainpanties"
                        }
                    },
                    stripedpanties: {
                        import: {
                            variable: "plainpanties"
                        }
                    },
                    speedo: {
                        import: {
                            variable: "plainpanties"
                        }
                    },
                    
                }
            },
            /*over_lower: {
                 variants: {
                     hips: { spritesheet: "gymbloomers/doggyactive_delim_hips.png" },
                     thighs: { spritesheet: "gymbloomers/doggyactive_gymbloomers_thighs.png" },
                     knees: { spritesheet: "gymbloomers/doggyactive_gymbloomers_knees.png" },
                     ankles: { spritesheet: "gymbloomers/doggyactive_gymbloomers_ankles.png" },
                     anklesfootjob: { spritesheet: "gymbloomers/doggyactive_gymbloomers_anklesfootjob.png" },
                 }
 
             },*/
            genitals: {
                selected_variant: "naked",
                variants: {
                    naked: {},
                    chastitycage: {
                        spritesheet: "doggyactivechastitycage.png"
                    },
                    chastitycagepenis: {
                        spritesheet: "doggyactivechastitycagepenis.png"
                    },
                    chastitybelt: {
                        spritesheet: "doggyactivechastitybelt.png"
                    }
                }
            }
        }
    },
    towel_variants: {
        //inherit_filter: true,
        variants: {
            hips: {
                inherit_filter: true,
                spritesheet: "lowertowel/doggyactive_towel_waist.png"
            },
            thighs: {
                inherit_filter: true,
                spritesheet: "lowertowel/doggyactive_towel_thighs.png"
            },
            knees: {
                inherit_filter: true,
                spritesheet: "lowertowel/doggyactive_towel_knees.png"
            },
            ankles: {
                inherit_filter: true,
                translate: { x: 0, y: 0, depth: -6 },
                spritesheet: "lowertowel/doggyactive_towel_ankles.png"
            },
        }
    },
    shorts: {
        inherit_filter: true,
        selected_variant: "hips",
        variants: {
            hips: {
                inherit_filter: true,
                spritesheet: "shorts/doggyactive_shorts_hips.png"
            },
            thighs: {
                inherit_filter: true,
                spritesheet: "shorts/doggyactive_shorts_thighs.png"
            },
            knees: {
                inherit_filter: true,
                spritesheet: "shorts/doggyactive_shorts_knees.png"
            },
            ankles: {
                inherit_filter: true,
                translate: { x: 0, y: 0, depth: -6 },
                spritesheet: "shorts/doggyactive_shorts_ankles.png"
            },
            anklesfootjob: {
                inherit_filter: true,
                translate: { x: 0, y: 0, depth: -6 },
                spritesheet: "shorts/doggyactive_shorts_anklesfootjob.png"
            },
        }
    },
    gymbloomers: {
        inherit_filter: true,
        selected_variant: "hips",
        variants: {
            hips: {
                inherit_filter: true,
                spritesheet: "gymbloomers/doggyactive_shorts_hips.png"
            },
            thighs: {
                inherit_filter: true,
                spritesheet: "gymbloomers/doggyactive_shorts_thighs.png"
            },
            knees: {
                inherit_filter: true,
                spritesheet: "gymbloomers/doggyactive_shorts_knees.png"
            },
            ankles: {
                inherit_filter: true,
                translate: { x: 0, y: 0, depth: -6 },
                spritesheet: "gymbloomers/doggyactive_shorts_ankles.png"
            },
            anklesfootjob: {
                inherit_filter: true,
                translate: { x: 0, y: 0, depth: -6 },
                spritesheet: "gymbloomers/doggyactive_shorts_anklesfootjob.png"
            },
        }
    },
    risquepanties: {
        inherit_filter: true,
        selected_variant: "hips",
        variants: {
            hips: {
                inherit_filter: true,
                spritesheet: "bikinibottom/doggyactive_bikinibottom_waist.png"
            },
            thighs: {
                inherit_filter: true,
                spritesheet: "bikinibottom/doggyactive_bikinibottom_thighs.png"
            },
            knees: {
                inherit_filter: true,
                spritesheet: "bikinibottom/doggyactive_bikinibottom_knees.png"
            },
            ankles: {
                inherit_filter: true,
                translate: { x: 0, y: 0, depth: -5 },
                spritesheet: "bikinibottom/doggyactive_bikinibottom_ankles.png"
            },
            anklesfootjob: {
                inherit_filter: true,
                translate: { x: 0, y: 0, depth: -5 },
                spritesheet: "bikinibottom/doggyactive_bikinibottom_anklefootjob.png"
            },
        }
    },
    plainpanties: {
        inherit_filter: true,
        selected_variant: "hips",
        variants: {
            hips: {
                inherit_filter: true,
                spritesheet: "plainpanties/doggyactive_plainpanties_hips.png"
            },
            thighs: {
                inherit_filter: true,
                spritesheet: "plainpanties/doggyactive_plainpanties_thighs.png"
            },
            knees: {
                inherit_filter: true,
                spritesheet: "plainpanties/doggyactive_plainpanties_knees.png"
            },
            ankles: {
                inherit_filter: true,
                translate: { x: 0, y: 0, depth: -5 },
                spritesheet: "plainpanties/doggyactive_plainpanties_ankles.png"
            },
            anklesfootjob: {
                inherit_filter: true,
                translate: { x: 0, y: 0, depth: -5 },
                spritesheet: "plainpanties/doggyactive_plainpanties_anklesfootjob.png"
            },
        }
    }, 
    micropleatedskirt: {
        inherit_filter: true,
        selected_variant: "hips",
        variants: {
            hips: {
                inherit_filter: true,
                spritesheet: "micropleatedskirt/hips.png"
            },
            thighs: {
                inherit_filter: true,
                spritesheet: "micropleatedskirt/thighs.png"
            },
            knees: {
                inherit_filter: true,
                spritesheet: "micropleatedskirt/knees.png"
            },
            waist: {
                inherit_filter: true,
                spritesheet: "micropleatedskirt/waist.png"
            },
            ankles: {
                inherit_filter: true,
                translate: { x: 0, y: 0, depth: -6 },
                spritesheet: "micropleatedskirt/ankles.png"
            },
            anklesfootjob: {
                inherit_filter: true,
                translate: { x: 0, y: 0, depth: -6 },
                spritesheet: "micropleatedskirt/anklesfootjob.png"
            },
        }
    },
    skirt: {
        inherit_filter: true,
        selected_variant: "hips",
        variants: {
            hips: {
                inherit_filter: true,
                spritesheet: "skirt/doggyactive_skirt_hips.png"
            },
            thighs: {
                inherit_filter: true,
                spritesheet: "skirt/doggyactive_skirt_thighs.png"
            },
            knees: {
                inherit_filter: true,
                spritesheet: "skirt/doggyactive_skirt_knees.png"
            },
            ankles: {
                inherit_filter: true,
                translate: { x: 0, y: 0, depth: -6 },
                spritesheet: "skirt/doggyactive_skirt_ankles.png"
            },
            anklesfootjob: {
                inherit_filter: true,
                translate: { x: 0, y: 0, depth: -6 },
                spritesheet: "skirt/doggyactive_skirt_anklesfootjob.png"
            },
        }
    }
});