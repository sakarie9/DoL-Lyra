DoLHouse.add({ //IT IS VERY IMPORTANT THAT THE FIRST LINE IN YOUR FILE IS A COPY-PASTE OF THIS LINE

    penis: {
        inherit_filter: true,
        /**NPC body size can be scaled by various factors
         * but penises should be in absolute size. 
         * If a penis is enormous, it should be just enormous on a tiny NPC as it 
         * is on a giant NPC, so we specifiy different 
         * penis scale variants dedicated to different body_size variants here. 
         * 
         * (this works because specifying a variant on Doll will cause the any variant of the same name
         *  to be activated on any child accessories)
         */
        selected_variant: "medium_body",
        variants: {
            joke_body: {
                scale: { x: 1.0 / 2.5, y: 1.0 / 2.5 },
                import: { variable: "penis_stance_variants" }
            },
			giant_body: {
                scale: { x: 1.0/1.5, y: 1.0/1.5 },
                import: { variable: "penis_stance_variants" }
            },
            huge_body: {
                scale: { x: 1.0/1.33, y: 1.0/1.33 },
                import: { variable: "penis_stance_variants" }
            },
            large_body: {
                scale: { x: 1.0/1.22, y: 1.0/1.22 },
                import: { variable: "penis_stance_variants" }
            },
            medium_body: {
                scale: { x: 1.0/1.11, y: 1.0/1.11 },
                import: { variable: "penis_stance_variants" }
            },
            petite_body: {
                scale: { x: 1.0/1.0, y: 1.0/1.0 },
                import: { variable: "penis_stance_variants" }
            },
            small_body: {
                scale: { x: 1.0/.88, y: 1.0/.88 },
                import: { variable: "penis_stance_variants" }
            },
            tiny_body: {
                scale: { x: 1.0/.775, y: 1.0/.775 },
                import: { variable: "penis_stance_variants" }
            },
        }
    },

    penis_stance_variants: {
        inherit_filter: true,
        selected_variant: "upright",
        variants: {
            laying: {},
            upright: {
                inherit_filter: true,
                selected_variant: "imminent",
                variants: {
                    imminent: {
                        import: {variable: "approaching"}
                    },
                    entrance: {
                        import: {variable: "approaching"}
                    },
                    active: {
                        frames: 8,
                        width: 2048,
                        attach: "base",
                        to: "penis_static",
                        selected_variant: "huge",
                        inherit_filter: true,
                        variants: {
                            huge: {
                                spritesheet: "upright/huge.png",
                                scale: { x: 4.0, y: 4.0 },
                                magnets: {
                                    base://[
                                        { x: 184 - (256 * 0), y: 130 }
                                    /* { x: 442-(256*1 ) , y: 130 },
                                     { x: 702-(256*2 ) , y: 130 },
                                     { x: 960-(256*3 ) , y: 130 },
                                     { x: 1222-(256*4 ) , y: 130 },
                                     { x: 1474-(256*5 ) , y: 130 },
                                     { x: 1728-(256*6 ) , y: 130 },
                                     { x: 1978-(256*7 ) , y: 130 }*/
                                    //]
                                }
                            },
                            large: {
                                spritesheet: "upright/huge.png",
                                scale: { x: 0.85 * 4.0, y: 0.85 * 4.0 },
                                magnets: {
                                    base: //[
                                        { x: 184 - (256 * 0), y: 130 }
                                    /* { x: 442-(256*1 ) , y: 130 },
                                     { x: 702-(256*2 ) , y: 130 },
                                     { x: 960-(256*3 ) , y: 130 },
                                     { x: 1222-(256*4 ) , y: 130 },
                                     { x: 1474-(256*5 ) , y: 130 },
                                     { x: 1728-(256*6 ) , y: 130 },
                                     { x: 1978-(256*7 ) , y: 130 }*/
                                    //]
                                }

                            },
                            medium: {
                                spritesheet: "upright/huge.png",
                                scale: { x: 0.7 * 4.0, y: 0.7 * 4.0 },
                                magnets: {
                                    base: //[
                                        { x: 184 - (256 * 0), y: 130 }
                                    /* { x: 442-(256*1 ) , y: 130 },
                                     { x: 702-(256*2 ) , y: 130 },
                                     { x: 960-(256*3 ) , y: 130 },
                                     { x: 1222-(256*4 ) , y: 130 },
                                     { x: 1474-(256*5 ) , y: 130 },
                                     { x: 1728-(256*6 ) , y: 130 },
                                     { x: 1978-(256*7 ) , y: 130 }*/
                                    //]
                                }
                            },
                            small: {
                                spritesheet: "upright/huge.png",
                                scale: { x: 0.55 * 4.0, y: 0.5 * 4.0 },
                                magnets: {
                                    base: //[
                                        { x: 184 - (256 * 0), y: 130 }
                                    /* { x: 442-(256*1 ) , y: 130 },
                                     { x: 702-(256*2 ) , y: 130 },
                                     { x: 960-(256*3 ) , y: 130 },
                                     { x: 1222-(256*4 ) , y: 130 },
                                     { x: 1474-(256*5 ) , y: 130 },
                                     { x: 1728-(256*6 ) , y: 130 },
                                     { x: 1978-(256*7 ) , y: 130 }*/
                                    //]
                                }
                            },
                            tiny: {
                                spritesheet: "upright/huge.png",
                                scale: { x: 0.4 * 4.0, y: 0.4 * 4.0 },
                                magnets: {
                                    base: //[
                                        { x: 184 - (256 * 0), y: 130 }
                                    /* { x: 442-(256*1 ) , y: 130 },
                                     { x: 702-(256*2 ) , y: 130 },
                                     { x: 960-(256*3 ) , y: 130 },
                                     { x: 1222-(256*4 ) , y: 130 },
                                     { x: 1474-(256*5 ) , y: 130 },
                                     { x: 1728-(256*6 ) , y: 130 },
                                     { x: 1978-(256*7 ) , y: 130 }*/
                                    //]
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    approaching: {
        inherit_filter: true,
        attach: "base",
        to: "penis_aligned",
        frames: 3,
        width: 224,
        selected_variant: "huge",
        variants: {
            huge: {
                scale: { x: 4.0, y: 4.0 },
                import: { variable: "fapping_upright" }
            },
            large: {
                scale: { x: 0.85 * 4.0, y: 0.85 * 4.0 },
                import: { variable: "fapping_upright" }
            },
            medium: {
                scale: { x: 0.7 * 4.0, y: 0.7 * 4.0 },
                import: { variable: "fapping_upright" }

            },
            small: {
                scale: { x: 0.55 * 4.0, y: 0.5 * 4.0 },
                import: { variable: "fapping_upright" }
            },
            tiny: {
                scale: { x: 0.4 * 4.0, y: 0.4 * 4.0 },
                import: { variable: "fapping_upright" }
            }
        }
    },
    fapping_upright: {
        inherit_filter: true,
        spritesheet: "upright/imminent_h.png",

        magnets: {
            base: [
                { x: 54, y: 26 },
                { x: 54, y: 26 },
                { x: 54, y: 26 }
            ]
            //{ x: 48, y: 25 }
        }
    }
});