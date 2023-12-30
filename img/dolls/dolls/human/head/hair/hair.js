DoLHouse.add({ //IT IS VERY IMPORTANT THAT THE FIRST LINE IN YOUR FILE IS A COPY-PASTE OF THIS LINE
    hair: {
        //width: 2048,
        //frames: 8,
        attach: "base",
        to: "top",
        inherit_sequence_info: true,
        translate: { x: 0, y: 0, depth: 10 },
        variants: {
            upright: {
                inherit_sequence_info: true,
                accessories: {
                    front: {
                        width: 125,
                        frames: 1,
                        selected_variant: "swept",
                        variants: {
                            none: {},
                            bangs: {
                                spritesheet: "front/upright/bangs.png",
                                attach: "base",
                                to: "hairfront",
                                phase: -1,
                                magnets: {
                                    base: { x: 40, y: 74 }
                                }
                            },
                            pulledback: {
                                spritesheet: "front/upright/pulledback.png",
                                attach: "base",
                                to: "hairfront",
                                magnets: {
                                    base: { x: 40, y: 74 }
                                }
                            },
                            combed: {
                                spritesheet: "front/upright/combed.png",
                                attach: "base",
                                to: "hairfront",
                                magnets: {
                                    base: { x: 40, y: 74 }
                                }
                            },
                            swept: {
                                spritesheet: "front/upright/swept.png",
                                attach: "base",
                                to: "hairfront",
                                width: 222,
                                magnets: {
                                    base: { x: 40, y: 74 }
                                }
                            }
                        },

                    },
                    back: {
                        inherit_sequence_info: true,
                        inherit_filter: true,
                        selected_variant: "femme",
                        variants: {
                            femme: {
                                inherit_sequence_info: true,
                                inherit_filter: true,
                                accessories: {
                                    roots: {
                                        inherit_sequence_info: true,
                                        phase: 0,
                                        width: 2088,
                                        spritesheet: "bowl_h.png",
                                        magnets: {
                                            base: { x: 820 - 760, y: 0 },
                                            end: { x: 150, y: 158 }
                                        },

                                        import: {
                                            filepath: "back/upright/femme.js",
                                            variable: "femme"
                                        }
                                    }

                                }
                            },
                            braid: {
                                inherit_sequence_info: true,
                                inherit_filter: true,

                                accessories: {
                                    roots: {
                                        inherit_sequence_info: true,
                                        phase: 0,
                                        width: 2088,
                                        spritesheet: "bowl_h.png",
                                        magnets: {
                                            base: { x: 820 - 738, y: 0 },
                                            end: { x: 900 - 738, y: 80 }
                                        },
                                        import: {
                                            filepath: "back/upright/braid.js",
                                            variable: "braid"
                                        }
                                    }

                                }
                            },
                            pigtails: {
                                inherit_sequence_info: true,
                                inherit_filter: true,
                                accessories: {
                                    roots: {
                                        inherit_sequence_info: true,
                                        phase: 0,
                                        width: 2088,
                                        spritesheet: "bowl_h.png",
                                        magnets: {
                                            base: { x: 820 - 738, y: 0 },
                                            end: { x: 900 - 738, y: 80 }
                                        },
                                        import: {
                                            filepath: "back/upright/pigtails.js",
                                            variable: "pigtails"
                                        }
                                    }

                                }
                            },
                            ponytail: {
                                inherit_sequence_info: true,
                                inherit_filter: true,

                                accessories: {
                                    roots: {
                                        inherit_sequence_info: true,
                                        phase: 0,
                                        width: 2088,
                                        spritesheet: "bowl_h.png",
                                        magnets: {
                                            base: { x: 820 - 738, y: 0 },
                                            end: { x: 900 - 738, y: 80 }
                                        },

                                        import: {
                                            filepath: "back/upright/ponytail.js",
                                            variable: "ponytail"
                                        }
                                    }
                                }
                            }
                        }

                    }
                }
            },
            laying: {
                accessories: {
                    front: {
                        width: 104,
                        frames: 1,
                        selected_variant: "swept",
                        variants: {
                            none: {},
                            bangs: {
                                spritesheet: "front/laying/bangs.png",
                                attach: "base",
                                to: "hairfront",
                                phase: -1,
                                magnets: {
                                    base: { x: 74, y: 40 }
                                }
                            },
                            pulledback: {
                                spritesheet: "front/laying/pulledback.png",
                                attach: "base",
                                to: "hairfront",
                                magnets: {
                                    base: { x: 74, y: 40 }
                                }
                            },
                            combed: {
                                spritesheet: "front/laying/combed.png",
                                attach: "base",
                                to: "hairfront",
                                magnets: {
                                    base: { x: 74, y: 40 }
                                }
                            },
                            swept: {
                                spritesheet: "front/laying/swept.png",
                                attach: "base",
                                to: "hairfront",
                                width: 222,
                                magnets: {
                                    base: { x: 74, y: 40 }
                                }
                            }
                        },

                    },
                    back: {                                                
                        selected_variant: "trimmed", 
                        attach: "base",
                        to: "top",
                        magnets: {
                            base: {x: 160, y:168},
                        },
                        frames: 1,
                        variants: {
                            none: {},
                            bob: {
                                spritesheet: "back/laying/short.png"
                            },
                            short: {
                                spritesheet: "back/laying/short.png"
                            },
                            trimmed: {
                                spritesheet: "back/laying/medium.png"
                            },
                            flowing: {
                                spritesheet: "back/laying/medium.png"
                            }, 
                            long: {
                                spritesheet: "back/laying/long.png"
                            },
                            luxurious: {
                                spritesheet: "back/laying/long.png"
                            },
                            uncompromising: {
                                spritesheet: "back/laying/repunzotic.png"
                            },
                            repunzotic: {
                                spritesheet: "back/laying/repunzotic.png"
                            },
                            endless: {
                                spritesheet: "back/laying/repunzotic.png"
                            }
                        }
                        
                    }
                }
            }
        
        }
    }

}); //IT IS VERY IMPORTANT THAT THE LAST LINE IN YOUR FILE IS A COPY-PASTE OF THIS LINE
