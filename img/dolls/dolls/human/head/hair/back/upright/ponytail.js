DoLHouse.add({ //IT IS VERY IMPORTANT THAT THE FIRST LINE IN YOUR FILE IS A COPY-PASTE OF THIS LINE

    ponytail: {
        inherit_sequence_info: true,
        inherit_filter: true,
        accessories: {            
                    moreHair: {
                        inherit_sequence_info: true,
                        inherit_filter: true,
                        width: 1160,
                        attach: "base",
                        to: "end",
                        phase: 0,
                        
                        variants: {
                            buzz: { scale: {x:1 , y: 1},
                                import : { 
                                    variable: "short"
                                }
                            },
                            short: { 
                                scale: {x:1 , y: 1.7},
                                import : {variable: "short"}
                            },
                            trimmed: {
                                scale: {x:1 , y: 1.7},
                                import : {variable: "trimmed"}
                            },
                            flowing: { scale: {x:1 , y: 1.7},
                                import : {variable: "flowing"}
                            },
                            long: { scale: {x:1 , y: 1.7},
                                import : { variable: "long"}
                            },
                            luxurious: { scale: {x:1 , y: 1.7},
                                import : { variable: "luxurious"}
                            },
                            uncompromising: { scale: {x:1 , y: 1.7},
                                import : { variable: "uncompromising"}
                            },
                            repunzotic: { scale: {x:1 , y: 1.7},
                                import : { variable: "repunzotic"}
                            },
                            endless: { scale: {x:1 , y: 1.7},
                                import : { variable: "endless"}
                            }
                        }
                    }
                
             }
    },


    endless: {
        inherit_sequence_info: true,
        inherit_filter: true,
        phase: -1,
        spritesheet: "thinextension_h.png",
        magnets: {
            base: { x: 820-808, y: 30 },
            end: { x: 820-808, y: 50 }
        },
        accessories: {
            inter: {
                attach: "base",
                to: "end",
                import : { variable: "repunzotic"}
            }
        }
    },
    repunzotic: {
        inherit_sequence_info: true,
        inherit_filter: true,
        phase: -1,
        spritesheet: "thinextension_h.png",
        magnets: {
            base: { x: 820-808, y: 20 },
            end: { x: 820-808, y: 50 }
        },
        accessories: {
            inter: {
                attach: "base",
                to: "end",
                import : { variable: "uncompromising"}
            }
        }
    },
    uncompromising: {
        inherit_sequence_info: true,
        inherit_filter: true,
        phase: -1,
        spritesheet: "thinextension_h.png",
        magnets: {
            base: { x: 820-808, y: 20 },
            end: { x: 820-808, y: 50 }
        },
        accessories: {
            inter: {
                attach: "base",
                to: "end",
                import : { variable: "luxurious" }
            }
        }
    },
    luxurious: {
        inherit_sequence_info: true,
        inherit_filter: true,
        phase: -1,
        spritesheet: "thinextension_h.png",
        magnets: {
            base: { x: 820-808, y: 20 },
            end: { x: 820-808, y: 50 }
        },
        accessories: {
            inter: {
                attach: "base",
                to: "end",
                import : { variable: "long"}
            }
        }
    },
    long: {
        inherit_sequence_info: true,
        inherit_filter: true,
        phase: -1,
        spritesheet: "thinextension_h.png",
        magnets: {
            base: { x: 820-808, y: 20 },
            end: { x: 820-808, y: 50 }
        },
        accessories: {
            inter: {
                attach: "base",
                to: "end",
                import : { variable: "flowing"}
            }
        }
    },
    flowing: {
        inherit_sequence_info: true,
        inherit_filter: true,
        phase: -1,
        spritesheet: "thinextension_h.png",
        magnets: {
            base: { x: 820-808, y: 20 },
            end: { x: 820-808, y: 50 }
        },
        accessories: {
            inter: {
                attach: "base",
                to: "end",
                import : { variable: "trimmed"}
            }
        }
    },
    trimmed: {
        inherit_sequence_info: true,
        inherit_filter: true,
        phase: -1,
        spritesheet: "thinextension_h.png",
        magnets: {
            base: { x: 820-808, y: 20 },
            end: { x: 820-808, y: 50 }
        },
        accessories: {
            inter: {
                attach: "base",
                to: "end",
                import : {variable: "short"}
            }
        }
    },
    short: {
        inherit_sequence_info: true,
        inherit_filter: true,
        phase: -1,
        spritesheet: "thinextension_h.png",
        magnets: {
            base: { x: 820-808, y: 20 },
            end: { x: 820-808, y: 50 }
        },
        accessories: {
            tips: {
                attach: "base",
                to: "end",
                import: {
                    variable: "tips"
                }
            }
        }
    },
    tips: {
        inherit_sequence_info: true,
        inherit_filter: true,
        phase: 1,
        width: 1608,
        spritesheet: "tipstart_h.png",
        scale: { x: 0.5, y: 1 },
        magnets: {
            base: { x: 744-768, y: 5 },
            end: { x: 820-768, y: 40 }
        },
        accessories: {
            tipends: {
                inherit_filter: true,
                attach: "base",
                to: "end",
                phase: 1,
                width: 1712,
                spritesheet: "tipend_h.png",
                scale: { x: 0.9, y: 1 },
                magnets: {
                    base: { x: 820-769, y: 0 }
                }
            }

        }
    }
});  //IT IS VERY IMPORTANT THAT THE LAST LINE IN YOUR FILE IS A COPY-PASTE OF THIS LINE