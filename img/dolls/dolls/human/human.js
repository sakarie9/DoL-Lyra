DoLHouse.add({ //IT IS VERY IMPORTANT THAT THE FIRST LINE IN YOUR FILE IS A COPY-PASTE OF THIS LINE


    human_arms: {
        selected_variant: "upright",
        inherit_filter: true,
        variants: {
            upright: {
                inherit_filter: true,
                selected_variant: "imminent",
                variants: {
                    active: {
                        inherit_filter: true,
                        translate: { x: 0, y: 0, depth: 10 },
                        spritesheet: "arms/arm_upright.png",
                        width: 3256, //width of the spritesheet, in pixels.
                        frames: 8, //number of frames in the spritesheet.
                        magnets: { //names and locations of spots we can attach accessories to
                            base: { x: 290, y: 55, depth: 2 },
                            //base: { x: 288, y: 62, depth: 2 },  
                            //hands: {x: 64, y: 226}                             
                        },
                        accessories: {
                            forearm: {
                                spritesheet: "arms/forearm_upright.png",
                                width: 3256, //width of the spritesheet, in pixels.
                                frames: 8, //number of frames in the spritesheet.
                                magnets: {
                                    hands: { x: 114, y: 250 }
                                }
                            }
                        }
                    },
                    imminent: {
                        inherit_filter: true,
                        translate: { x: 0, y: 0, depth: 10 },
                        spritesheet: "arms/imminent_h.png",
                        width: 918, //width of the spritesheet, in pixels.
                        frames: 3, //number of frames in the spritesheet.
                        magnets: { //names and locations of spots we can attach accessories to
                            base: { x: 158, y: 30, depth: 2 }
                        }
                    },
                    entrance: {
                        inherit_filter: true,
                        translate: { x: 0, y: 0, depth: 2 },
                        spritesheet: "arms/imminent_h.png",
                        width: 918, //width of the spritesheet, in pixels.
                        frames: 3, //number of frames in the spritesheet.
                        magnets: { //names and locations of spots we can attach accessories to
                            base: { x: 158, y: 30, depth: 2 }
                        }
                    }
                }
            },
            laying: {
                inherit_filter: true,
                selected_variant: "active",
                variants: {
                    active: {
                        inherit_filter: true,
                        translate: { x: 0, y: 0, depth: 10 },
                        filter: "drop-shadow(7px -13px 6px #0006)",
                        magnets: { //names and locations of spots we can attach accessories to
                            base: { x: 120, y: 300, depth: 0 },
                            hands: {x: 140, y: 90}
                            //base: { x: 288, y: 62, depth: 2 },  
                            //hands: {x: 64, y: 226}                             
                        },
                        selected_variant: "vaginal",
                        variants : {
                            vaginal : {
                                inherit_filter: true,
                                spritesheet: "arms/laying_h.png",
                                width: 1096, //width of the spritesheet, in pixels.
                                frames: 4, //number of frames in the spritesheet.
                            }, 
                            anal : {
                                inherit_filter: true,
                                spritesheet: "arms/laying_h.png",
                                width: 1096, //width of the spritesheet, in pixels.
                                frames: 4, //number of frames in the spritesheet.
                            }
                        }
                    }
                }
            }
        }
    },
    human_legs: {
        selected_variant: "upright",
        variants: {
            upright: {
                variants: {
                    active: {
                        import: { variable: "upright_leg" },
                        selected_sequence: "active"

                    },
                    imminent: {
                        import: { variable: "upright_leg" },
                        selected_sequence: "imminent"
                    },
                    entrance: {
                        import: { variable: "upright_leg" },
                        selected_sequence: "imminent"
                    }
                }
            },
            laying: {}
        }
    },
    human_head: {
        inherit_sequence_info: true,
        /**NPC body size can be scaled by various factors
         * but big people don't generally have proportionally 
         * large heads so we scale the head up or down to compensate a bit 
         * by specifiying different head scale variants for different body_size variants. 
         * 
         * (this works because specifying a variant on Doll will cause the any variant of the same name
         *  to be activated on any child accessories)
         */
        variants: {
            joke_body: {
                inherit_sequence_info: true,
                scale: { x: 0.6, y: 0.6 },
                import: { variable: "head_stance_variants" }
            },
            giant_body: {
                inherit_sequence_info: true,
                scale: { x: 0.76, y: 0.76 },
                import: { variable: "head_stance_variants" }
            },
            huge_body: {
                inherit_sequence_info: true,
                scale: { x: 0.83, y: 0.83 },
                import: { variable: "head_stance_variants" }
            },
            large_body: {
                inherit_sequence_info: true,
                scale: { x: 0.9, y: 0.9 },
                import: { variable: "head_stance_variants" }
            },
            medium_body: {
                inherit_sequence_info: true,
                scale: { x: 0.9, y: 0.9 },
                import: { variable: "head_stance_variants" }
            },
            petite_body: {
                inherit_sequence_info: true,
                scale: { x: 1, y: 1},
                import: { variable: "head_stance_variants" }
            },
            small_body: {
                inherit_sequence_info: true,
                scale: { x: 1.1, y: 1.1 },
                import: { variable: "head_stance_variants" }
            },
            tiny_body: {
                inherit_sequence_info: true,
                scale: { x: 1.2, y: 1.2 },
                import: { variable: "head_stance_variants" }
            }            
        }
    },
    defaultHumanAccessoriesList: {
        arms: {
            import: { variable: "human_arms" },
            attach: "base",
            to: "shoulders"
        },
        chest: {
            import: {
                filepath: "breasts/breasts.js",
                variable: "breast_variants"
            },
            attach: "base",
            to: "sternum"
        },
        legs: {
            import: { variable: "human_legs" },
            attach: "base",
            to: "hips"
        },
        head: {
            inherit_sequence_info: true,
            import: { variable: "human_head" },
            attach: "base",
            to: "neck"
        },
        penis: {
            import: {
                filepath: "penis/penis.js",
                variable: "penis"
            }
        }
    },
    human: {
        width: 1632,
        frames: 8,
        scale: { x: 0.25, y: 0.25 },
        selected_variant: "medium_body",
        variants: {
            joke_body: {
                scale: { x: 3, y: 3 },
                import: { variable: "stance_variants" }
            },
            giant_body: {
                scale: { x: 1.5, y: 1.5 },
                import: { variable: "stance_variants" }
            },
            huge_body: {
                scale: { x: 1.33, y: 1.33 },
                import: { variable: "stance_variants" }
            },
            large_body: {
                scale: { x: 1.22, y: 1.22 },
                import: { variable: "stance_variants" }
            },
            medium_body: {
                scale: { x: 1.11, y: 1.11 },
                import: { variable: "stance_variants" }
            }, 
            petite_body: {
                scale: { x: 1, y: 1 },
                import: { variable: "stance_variants" }
            },
            small_body: {
                scale: { x: 0.88, y: 0.88 },
                import: { variable: "stance_variants" }
            },
            tiny_body: {
                scale: { x: 0.775, y: 0.775 },
                import: { variable: "stance_variants" }
            }
        }
    },
    stance_variants: {
        selected_variant: "upright",
        variants: {
            upright: {
                selected_variant: "imminent",
                variants: {
                    active: {
                        import: { variable: "upright_torso" },
                        selected_sequence: "active"
                    },
                    imminent: {
                        import: { variable: "upright_torso" },
                        selected_sequence: "imminent"
                    },
                    entrance: {
                        import: { variable: "upright_torso" },
                        selected_sequence: "imminent"
                    }
                }
            },
            laying: {
                width: 3680,
                frames: 4,
                spritesheet: "torso/laying_h.png",
                accessories: {
                    import: { variable: "defaultHumanAccessoriesList" }
                },
                magnets: {
                    shoulders: { x: 420, y: 220 },
                    penis_aligned: [
                        { x: 631 - (3680 * 0), y: 97 },
                        { x: 1554 - (3680 * 1), y: 116 },
                        { x: 2500 - (3680 * 2), y: 120 },
                        { x: 3411 - (3680 * 3), y: 114 }
                    ],
                    sternum: { x: 430, y: 157 },
                    neck: {x:366, y:270}
                }
            }
            /*hunching: {
    
            },
            feedng: {
    
            }*/
        }
    },
    head_stance_variants: {
        inherit_sequence_info: true,
        selected_variant: "upright",
        variants: {
            upright: {
                inherit_sequence_info: true,
                spritesheet: "head/upright_h.png",
                width: 2400, //width of the spritesheet, in pixels.
                frames: 8, //number of frames in the spritesheet.
                magnets: { //names and locations of spots we can attach accessories to
                    base: { x: 840 - 672, y: 224 - 2 },
                    top: { x: 820 - 672, y: 0 - 2 },
                    hairfront:
                        [{ x: 40 - (300 * 0), y: 78, depth: 0 },
                        { x: 352 - (300 * 1), y: 78, depth: 0 },
                        { x: 656 - (300 * 2), y: 78, depth: 0 },
                        { x: 948 - (300 * 3), y: 78, depth: 0 },
                        { x: 1240 - (300 * 4), y: 78, depth: 0 },
                        { x: 1540 - (300 * 5), y: 78, depth: 0 },
                        { x: 1836 - (300 * 6), y: 78, depth: 0 },
                        { x: 2132 - (300 * 7), y: 78, depth: 0 }]
                },
                accessories: {
                    hair: {
                        inherit_sequence_info: true,
                        import: {
                            filepath: "head/hair/hair.js",
                            variable: "hair"
                        }                        
                    }
                }
            },
            laying: {
                spritesheet: "head/laying_h.png",
                frames: 1,
                magnets: {
                    base: {x: 236, y: 210},
                    hairfront: {x:85, y:50},
                    top: {x:21, y:120}
                },
                accessories: {
                    hair: {
                        inherit_sequence_info: true,
                        import: {
                            filepath: "head/hair/hair.js",
                            variable: "hair"
                        }
                    }
                },
               
            }

        }
    },
    upright_leg: {
        spritesheet: "legs/upright_h.png",
        width: 2696, //width of the spritesheet, in pixels.
        frames: 8, //number of frames in the spritesheet.
        magnets: { //names and locations of spots we can attach accessories to
            base: { x: 820 - 687, y: 0 }
        },
        filter: "drop-shadow(-9px 34px 15px #0006)",
        sequences: {
            active: [0, 1, 2, 3, 4, 5, 6, 7],
            imminent: [3, 4, 5]
        }
    },
    upright_torso: {
        /*the spritesheet for shadow enemies is 4x resolution as everything else
                            *to minimize aliasing for various body size, so we scale it down by a fourth here*/
        
        accessories: {
            import: { variable: "defaultHumanAccessoriesList" }
        },
        spritesheet: "torso/upright_h.png",
        width: 1632, //width of the spritesheet, in pixels.
        frames: 8, //number of frames in the spritesheet.
        magnets: { //names and locations of spots we can attach accessories to
            hips: { x: 820 - 726, y: 520 - 198 },
            penis_aligned: [
                { x: 15 - (204 * 0), y: 322 },
                { x: 224 - (204 * 1), y: 324 },
                { x: 446 - (204 * 2), y: 326 },
                { x: 658 - (204 * 3), y: 326 },
                { x: 878 - (204 * 4), y: 328 },
                { x: 1073 - (204 * 5), y: 326 },
                { x: 1268 - (204 * 6), y: 325 },
                { x: 1452 - (204 * 7), y: 322 }

            ],
            penis_static: { x: 30, y: 520 - 198 },
            sternum: { x: 66, y: 328 - 198 },
            shoulders: { x: 114, y: 280 - 198 },
            neck: { x: 114, y: 224 - 198 }
        },
        sequences: {
            active: [0, 1, 2, 3, 4, 5, 6, 7],
            imminent: [3, 4, 5]
        }
    }



}); //IT IS VERY IMPORTANT THAT THE LAST LINE IN YOUR FILE IS A COPY-PASTE OF THIS LINE





