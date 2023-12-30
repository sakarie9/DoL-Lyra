DoLHouse.add({ //IT IS VERY IMPORTANT THAT THE FIRST LINE IN YOUR FILE IS A COPY-PASTE OF THIS LINE
    top: {
        inherit_filter: true,
        translate: {x:0, y:0, depth:4},
        magnets: {ribs : {x: 130, y:115}},
        accessories: {
            head: {
                inherit_filter: true,
                accessories: {
                    face: {
                        inherit_filter: true,
                        import: {
                            filepath: "face/face.js",
                            variable: "face"
                        }
                    },
                    throat: {
                        translate: { x: 0, y: 0, depth: 2 },
                        selected_variant: "idle",
                        inherit_filter: true,
                        variants: {
                            idle: {},
                            oral: {
                                inherit_filter: true,
                                variants: {
                                    regular_load: {
                                        inherit_filter: true,
                                        spritesheet: "doggyactivebasefrontoral.png"
                                    },
                                    huge_load: {
                                        inherit_filter: true,
                                        spritesheet: "doggyactivebasefrontoralhuge.png"
                                    }
                                }
                            }
                        }
                    },
                    hair: {
                        import: {
                            filepath: "hair/player_hair_doggy.js",
                            variable: "hair"
                        }
                    }
                }
            },
            arm_right: {
                translate: { x: 0, y: 0, depth: -5 },
                selected_variant: "normal",
                inherit_filter: true,
                variants: {
                    normal: {
                        inherit_filter: true,
                        spritesheet: "arms/doggyactivebaserightarm.png"
                    },
                    bound: {

                    },
                    handjob: {
                        inherit_filter: true,
                        spritesheet: "arms/doggyactiverighthandjob.png"
                    }
                }
            },
            arm_left: {
                translate: { x: 0, y: 0, depth: 13 },
                inherit_filter: true,
                accessories: {
                    arm: {
                        selected_variant: "normal",
                        inherit_filter: true,
                        variants: {
                            normal: {
                                inherit_filter: true,
                                filter: "drop-shadow(#0006 -3px 3px 3px)",
                                spritesheet: "arms/doggyactivebaseleftarm.png"
                            },
                            bound: {
                                translate: {x:0, y:0, depth: -5},
                                inherit_filter: true,
                                spritesheet: "arms/doggyactiveleftarmbound.png"
                            },
                            handjob: {
                                inherit_filter: true,
                                spritesheet: "arms/doggyactivelefthandjob.png"
                            }
                        },
                        //a lot of the clothes seem to depend on arm state,
                        //so we attach the clothes as an accessory to the arm
                        //so that they end up autoadopting variant information
                        //when the arm is commanded to.
                        clothes: {
                            import: {
                                filepath: "breasts/clothes_top.js",
                                variable: "clothes"
                            }
                        }
                    }
                }
            },
            breasts: {
                inherit_filter: true,
                selected_variant: "flat",
                translate: { x: 0, y: 0, depth: 11 },
                variants: {
                    flat: {},
                    tiny: {
                        inherit_filter: true,
                        spritesheet: "breasts/doggyactivebreaststiny.png"
                    },
                    small: {
                        inherit_filter: true,
                        spritesheet: "breasts/doggyactivebreastssmall.png"
                    },
                    large: {
                        inherit_filter: true,
                        spritesheet: "breasts/doggyactivebreastslarge.png"
                    },
                    huge: {
                        inherit_filter: true,
                        spritesheet: "breasts/doggyactivebreastshuge.png"
                    }
                }
            }
        }

    }

});
