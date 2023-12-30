

DoLHouse.add({//IT IS VERY IMPORTANT THAT THE FIRST LINE IN YOUR FILE IS A COPY-PASTE OF THIS LINE

    clothes: {
        translate: { x: 0, y: 0, depth: 9 },
        accessories: {
            upper: {
                inherit_filter: true,
                selected_variant: "naked",
                variants: {
                    naked: {},
                    bikinitop: {
                        inherit_filter: true,
                        selected_variant: "hips",
                        variants: {
                            chest: {
                                inherit_filter: true,
                                spritesheet: "bikinitop/doggyactive_bikinitop_chest.png"
                            },
                            midriff: {
                                inherit_filter: true,
                                spritesheet: "bikinitop/doggyactive_bikinitop_midriff.png"
                            },
                            thorax: {
                                inherit_filter: true,
                                spritesheet: "bikinitop/doggyactive_bikinitop_thorax.png"
                            },
                        }
                    },
                    dress: {
                        inherit_filter: true,
                        selected_variant: "thighs",
                        variants: {
                            hips: {
                                inherit_filter: true,
                                spritesheet: "dress/doggyactive_dress_hips.png"
                            },
                            thighs: {
                                inherit_filter: true,
                                spritesheet: "dress/doggyactive_dress_thighs.png"
                            },
                            tummy: {
                                inherit_filter: true,
                                spritesheet: "dress/doggyactive_dress_tummy.png"
                            },
                            neck: {
                                inherit_filter: true,
                                spritesheet: "dress/doggyactive_dress_neck.png"
                            },
                        }
                    },
                    gymshirt: {
                        inherit_filter: true,
                        selected_variant: "normal",
                        variants: {
                            normal: {
                                inherit_filter: true,
                                accessories: {
                                    cloth: {
                                        inherit_filter: true,
                                        selected_variant: "waist",
                                        variants: {
                                            waist: {
                                                inherit_filter: true,
                                                spritesheet: "gymshirt/waist.png",
                                            },
                                            neck: {
                                                inherit_filter: true,
                                                spritesheet: "gymshirt/neck.png"
                                            }
                                        }
                                    },
                                    accents: {
                                        selected_variant: "naked",
                                        variants: {
                                            naked: {},
                                            waist: {
                                                inherit_filter: true,
                                                spritesheet: "gymshirt/waist_acc.png",
                                            },
                                            neck: {
                                                inherit_filter: true,
                                                spritesheet: "gymshirt/neck_acc.png"
                                            }
                                        }
                                    }
                                }
                            },
                            bound: {
                                inherit_filter: true,
                                accessories: {
                                    cloth: {
                                        selected_variant: "waist",
                                        inherit_filter: true,
                                        variants: {
                                            waist: {
                                                inherit_filter: true,
                                                spritesheet: "gymshirt/boundwaist.png",
                                            },
                                            neck: {
                                                inherit_filter: true,
                                                spritesheet: "gymshirt/boundneck.png"
                                            }
                                        }
                                    },
                                    accents: {
                                        selected_variant: "waist",
                                        variants: {
                                            waist: {
                                                inherit_filter: true,
                                                spritesheet: "gymshirt/boundwaist_acc.png",
                                            },
                                            neck: {
                                                inherit_filter: true,
                                                spritesheet: "gymshirt/boundneck_acc.png"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    tanktop: {
                        inherit_filter: true,
                        selected_variant: "normal",
                        variants: {
                            normal: {
                                inherit_filter: true,
                                variants: {
                                    waist: {
                                        inherit_filter: true,
                                        spritesheet: "tanktop/doggyactive_tanktop_waist.png"
                                    },
                                    neck: {
                                        inherit_filter: true,
                                        spritesheet: "tanktop/doggyactive_tanktop_neck.png"
                                    }
                                }
                            },
                            bound: {
                                inherit_filter: true,
                                variants: {
                                    waist: {
                                        inherit_filter: true,
                                        spritesheet: "tanktop/doggyactive_tanktop_boundwaist.png"
                                    },
                                    neck: {
                                        inherit_filter: true,
                                        spritesheet: "tanktop/doggyactive_tanktop_boundneck.png"
                                    }
                                }
                            }

                        }
                    },
                    towel : {

                    },
                    tshirt : {
                        inherit_filter: true,
                        selected_variant: "normal",
                        variants: {
                            normal: {
                                inherit_filter: true,
                                variants: {
                                    waist: {
                                        inherit_filter: true,
                                        spritesheet: "tshirt/doggyactive_tshirt_waist.png"
                                    },
                                    neck: {
                                        inherit_filter: true,
                                        spritesheet: "tshirt/doggyactive_tshirt_neck.png"
                                    }
                                }
                            },
                            bound: {
                                inherit_filter: true,
                                variants: {
                                    waist: {
                                        inherit_filter: true,
                                        spritesheet: "tshirt/doggyactive_tshirt_boundwaist.png"
                                    },
                                    neck: {
                                        inherit_filter: true,
                                        spritesheet: "tshirt/doggyactive_tshirt_boundneck.png"
                                    }
                                }
                            }

                        }
                    }
                    
                }
            },
            under_upper: {
                inherit_filter: true,
                selected_variant: "naked",
                variants: {
                    naked: {},
                    chestwrap: {
                        inherit_filter: true,
                        selected_variant: "none",
                        variants: {
                            none: {
                                inherit_filter: true,
                                spritesheet: "chestwrap/none.png"
                            },
                            tiny: {
                                inherit_filter: true,
                                spritesheet: "chestwrap/tiny.png"
                            },
                            small: {
                                inherit_filter: true,
                                spritesheet: "chestwrap/small.png"
                            },
                            large: {
                                inherit_filter: true,
                                spritesheet: "chestwrap/large.png"
                            },
                            huge: {
                                inherit_filter: true,
                                spritesheet: "chestwrap/huge.png"
                            },
                        }
                    },
                    tiefronttop: {
                        inherit_filter: true,
                        selected_variant: "none",
                        variants: {
                            none: {
                                inherit_filter: true,
                                spritesheet: "tiefronttop/none.png"
                            },
                            tiny: {
                                inherit_filter: true,
                                spritesheet: "tiefronttop/tiny.png"
                            },
                            small: {
                                inherit_filter: true,
                                spritesheet: "tiefronttop/small.png"
                            },
                            large: {
                                inherit_filter: true,
                                spritesheet: "tiefronttop/large.png"
                            },
                            huge: {
                                inherit_filter: true,
                                spritesheet: "tiefronttop/huge.png"
                            },
                        }
                    }
                }
            },
        }
    }
});