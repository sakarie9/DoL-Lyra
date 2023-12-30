DoLHouse.add({ //IT IS VERY IMPORTANT THAT THE FIRST LINE IN YOUR FILE IS A COPY-PASTE OF THIS LINE

    femme: {
        accessories: {
            moreHair: {
                inherit_sequence_info: true,
                inherit_filter: true,
                attach: "base",
                to: "end",
                width: 1520,                
                selected_variant: "trimmed",
                variants: {
                    buzz: {
                        scale: { x: 1, y: 3 },
                        import: {
                            variable: "tips"
                        }
                    },
                    short: {
                        scale: { x: 1, y: 3 },
                        import: { variable: "short" }
                    },
                    trimmed: {
                        scale: { x: 1, y: 3 },
                        import: { variable: "trimmed" }
                    },
                    flowing: {
                        scale: { x: 1, y: 3 },
                        import: { variable: "flowing" }
                    },
                    long: {
                        scale: { x: 1, y: 3 },
                        import: { variable: "long" }
                    },
                    luxurious: {
                        scale: { x: 1, y: 3 },
                        import: { variable: "luxurious" }
                    },
                    uncompromising: {
                        scale: { x: 1, y: 3 },
                        import: { variable: "uncompromising" }
                    },
                    repunzotic: {
                        scale: { x: 1, y: 3 },
                        import: { variable: "repunzotic" }
                    },
                    endless: {
                        scale: { x: 1, y: 3 },
                        import: { variable: "endless" }
                    }
                }
            }
        }
    },


    endless: {
        inherit_sequence_info: true,
        inherit_filter: true,
        phase: -1,
        spritesheet: "extension_h.png",
        magnets: {
            base: { x: 95, y: 35 },
            end: { x: 95, y: 55 }
        },
        accessories: {
            inter: {
                attach: "base",
                to: "end",
                import: { variable: "repunzotic" }
            }
        }
    },
    repunzotic: {
        inherit_sequence_info: true,
        inherit_filter: true,
        phase: -1,
        spritesheet: "extension_h.png",
        magnets: {
            base: { x: 95, y: 35 },
            end: { x: 95, y: 55 }
        },
        accessories: {
            inter: {
                attach: "base",
                to: "end",
                import: { variable: "uncompromising" }
            }
        }
    },
    uncompromising: {
        inherit_sequence_info: true,
        inherit_filter: true,
        phase: -1,
        spritesheet: "extension_h.png",
        magnets: {
            base: { x: 95, y: 35 },
            end: { x: 95, y: 55 }
        },
        accessories: {
            inter: {
                attach: "base",
                to: "end",
                import: { variable: "luxurious" }
            }
        }
    },
    luxurious: {
        inherit_sequence_info: true,
        inherit_filter: true,
        phase: -1,
        spritesheet: "extension_h.png",
        magnets: {
            base: { x: 95, y: 35 },
            end: { x: 95, y: 55 }
        },
        accessories: {
            inter: {
                attach: "base",
                to: "end",
                import: { variable: "long" }
            }
        }
    },
    long: {
        inherit_sequence_info: true,
        inherit_filter: true,
        phase: -1,
        spritesheet: "extension_h.png",
        magnets: {
            base: { x: 95, y: 35 },
            end: { x: 95, y: 55 }
        },
        accessories: {
            inter: {
                attach: "base",
                to: "end",
                import: { variable: "flowing" }
            }
        }
    },
    flowing: {
        inherit_sequence_info: true,
        inherit_filter: true,
        phase: -1,
        spritesheet: "extension_h.png",
        magnets: {
            base: { x: 95, y: 35 },
            end: { x: 95, y: 55 }
        },
        accessories: {
            inter: {
                attach: "base",
                to: "end",
                import: { variable: "trimmed" }
            }
        }
    },
    trimmed: {
        inherit_sequence_info: true,
        inherit_filter: true,
        phase: -1,
        spritesheet: "extension_h.png",
        magnets: {
            base: { x: 95, y: 35 },
            end: { x: 95, y: 55 }
        },
        accessories: {
            inter: {
                attach: "base",
                to: "end",
                import: { variable: "short" }
            }
        }
    },
    short: {
        inherit_sequence_info: true,
        inherit_filter: true,
        phase: -1,
        spritesheet: "extension_h.png",
        magnets: {
            base: { x: 95, y: 35 },
            end: { x: 95, y: 55 }
        },
        accessories: {
            short: {
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
        scale: { x: 1, y: 0.5 },
        magnets: {
            base: { x: 120, y: 0 },
            end: { x: 95, y: 40 }
        },
        accessories: {
            tipends: {
                inherit_sequence_info: true,
                attach: "base",
                to: "end",
                phase: 1,
                width: 1712,
                spritesheet: "tipend_h.png",
                scale: { x: 1, y: 0.5 },
                magnets: {
                    base: { x: 95, y: 0 }
                }
            }
        }
    },
    extension_magnets: {
        magnets: {
            base: { x: 95, y: 20 },
            end: { x: 95, y: 60 }
        }
    }
});  //IT IS VERY IMPORTANT THAT THE LAST LINE IN YOUR FILE IS A COPY-PASTE OF THIS LINE