/**
 * An FDoll works a bit like a paper-mannequin. 
 * It can be thought of as little cut-out drawings that can be pinned together, 
 * (except that each drawing can be an animated sprite). 
 * In this way, it is easy to add, remove, or swap out parts / accessories on the 
 * doll as desired.
 * 
 * Any sprite or accessory is treated as its own FDoll, so it can in turn have its own
 * accessories attached to or removed from it. 
 * (for example, an FDoll character may be defined as just a torso. 
 * We might then attach a "leg" accessory to this FDoll. 
 * This leg accessory is itself an FDoll, to which we may wish to add 
 * a "shoe" accessory, or a "sock" accessory, or both. 
 * This "shoe" accessory is itself and FDoll, to which we may wish to add a
 * a "lace" accessory, or a "velcro strap" accessory, or both. 
 * etcetera etc) 
 * 
 * 
 * Creating an FDoll/accessory is simple: 
 * 
 *    First, you make a spritesheet for the FDoll/accessory 
 * (or don't, in which case, it will be treated as an invisible part for other parts to
 * be pinned onto).
 *     Next, make a note of the pixel coordinates of some points of interest on the first frame 
 * of your spritesheet. These points of interest will be used to define "magnets". Magnets 
 * are spots on your FDoll where accessories can be attached. 
 * For example, if we have an FDoll torso, we might specify the location of 
 * the neck, to which we may attach a head accessory, 
 * the hips, to which we may atttach a leg accessory, 
 * and the shoulders, to which we may attach etcetera 
 *     Finally, create a .js text file in the same directory as your spritesheet (or lack thereof)
 * and populate it with some information about that spritesheet (or lack thereof). 
 * The contents of the .js file should look something like the example below, which describes
 * an arm accessory
 * 
 * -------
 * */
DoLHouse.add({ //IT IS VERY IMPORTANT THAT THE FIRST LINE IN YOUR FILE IS A COPY-PASTE OF THIS LINE
    arm_example:
    {
        spritesheet: "example_arm.png", //the filename of the spriteesheet for this FDoll/accessory
        width: 2048, //width of the spritesheet, in pixels.
        frames: 8, //number of frames in the spritesheet.
        magnets: { //names and locations of spots we can attach accessories to
            base: { x: 200, y: 20 },
            wrist: { x: 120, y: 25 },
            tattoo_spot: { x: 180, y: 18 }
        },
        accessories: {//accessories attached to this FDoll/accessory
            bracelet: {
                import: {
                    filepath: "accessories/bracelets/bracelet.js", //the location of the .js file specifying the accessory to attach.  
                    //leaving this blank indicates the accessory is contained in the current file
                    variable: "bracelet" //name of the variable in the js location containing the information for this accessory. 
                    //if variable isn't specified, filepath is ignored, and it is assumed the accessory is specified
                    //directly. (so the script will continue looking for the spritesheet or magnets or whatever)
                }
            },
            tattoo: {
                import: {
                    variable: "tattoo_variants_list" //Note: Because no filepath was provided, it is assumed the variable exists in this file.
                }
            }
        }
    },

    /* 
    * 
    * -------
    * 
    * Note that FDolls/accessories can come in "variants." 
    * A variant is just different appearance for a given FDoll/accessory.  
    * They are distinguished from a simple "accessory" in that they are actually 
    * a list of possible accessories, of which only one can be attached at a time. 
    *  
    * For example, consider an FDoll with a face. A face can show multiple expressions. 
    * One way to handle this is to have different faces accessories for each expression we want on the 
    * FDoll, and manually find, add or remove faces depending on the expression we want to show, 
    * but this is error prone, because we might easily end up forgetting to remove the 
    * old face before adding the new one. 
    * Variants allow us to just specify a single face accessory, and then pick whether we want to 
    * show the happy variant, the sad variant, the existential dread variant, etceteratata
    * 
    * an FDoll that comes in variants must specify a "variants" attribute. If this attrbitue is 
    * specified, any spritesheet declared outside of the variants list will be ignored. 
    * 
    *The example below shows the contents of the hypothetical "tattoo_variants.js" file referenced in the previous example 
    *-------
    */


    tattoo_variants_list:
    {
        selected_variant: null, //name of the variant to display by default. null means don't display anything
        attach: "base", //name of the magnet on this accessory to which the parent will attach
        to: "tatto_spot", //name of the magnet on the parent to which this accessory will attach
        variants: {
            cowgirl: {
                spritesheet: "cowgirl.png",
                width: 24,
                frames: 1,
                magnets: {
                    base: { x: 12, y: 12 }
                }
            },
            born2ride: {
                spritesheet: "born2ride.png",
                width: 24,
                frames: 1,
                magnets: {
                    base: { x: 12, y: 12 }
                }
            },
            skull: {
                spritesheet: "cowgirl.png",
                width: 24,
                frames: 1,
                magnets: {
                    base: { x: 12, y: 12 },
                    top: { x: 12, y: 0 },
                    bottom: { x: 12, y: 24 },
                    behind: {
                        x: 12, y: 12,
                        depth: -1 //Note! magnets can have an optional "depth" attribute.  
                        //by default, this is 0, indicating the accessory should be drawn immediately over the parent 
                        //FDoll. If set to -1, it will be drawn immediately behind the current FDoll accessory.
                        //a value of -5 would mean it would be drawn 5 layes behind it, and a value of 999999999 would 
                        //all but ensure that it's drawn above basically any other accessory or FDoll anywhere else in the scene. 

                    }
                },
                accessories: {
                    decorations_front: {
                        import: { //Note taht while these examples use the import statement only for accessing accessories and 
                            //variants, you can use import basically anywhere the dump obect contents.
                            variable: "tattoo_decorations"
                        },
                        attach: "base",
                        to: "base"
                    },
                    decorations_behind: {
                        import: {
                            variable: "tattoo_decorations"
                        },
                        attach: "base", //note that import just dumps the requested content into the object requesting import,
                        //so you can recycle general content to mix with specific content. In this case, we import the general definition 
                        //of the tattoo decoration variants, but define different attachment points between this accessory and the previous one
                        to: "behind"
                    }
                }
            }
        },

        //variant decorations to spice up generic tattoos
        tattoo_decorations: {
            selected_variant: null,
            variants: {
                crossbones: {
                    spritesheet: "crossbones.png",
                    width: 24,
                    frames: 1,
                    magnets: { base: { x: 12, y: 12 } }
                },
                intricate: {
                    import: {
                        filepath: "intricate.js",
                        variable: "intricate_decorations"
                    }
                },
                flower_decorations: {
                    import: {
                        filepath: "flowers.js",
                        variable: "intricate_decorations" //Note, it is acceptable for variables to have the same name so long as they are specified in different files.
                    }
                }
            }
        },



        /** 
        * Finally, there is quite useful functionality for specifying how we animate a sprite sheet. 
        * Animation rules can be set on the spritesheet using the "sequences" parameter, 
        * which lists animtion rules that can be selected at play time. 
        * 
        * Below, is the arm_example again, this time modfied to highlight the uses of a sequences parameter 
        */

        arm_example:
        {
            spritesheet: "example_arm.png", //the filename of the spriteesheet for this FDoll/accessory
            width: 2048, //width of the spritesheet, in pixels.
            frames: 8, //number of frames in the spritesheet.
            magnets: { //names and locations of spots we can attach accessories to
                base: { x: 200, y: 20 },
                wrist: { x: 120, y: 25 },
                tattoo_spot: { x: 180, y: 18 }
            },
            accessories: {//accessories attached to this FDoll/accessory
                bracelet: {
                    attach: "base", //the name of the relevant magnet on the accessory we're attaching.
                    to: "wrist", //the name of the magnet on this FDoll to which we're attaching the accessory. 
                    import: {
                        filepath: "accessories/bracelets/bracelet.js", //the .js file specifying the accessory to attach. 
                        variable: "bracelet" //the name of the variable in the js file to import. 
                    }
                },
                tattoo: {
                    attach: "base",
                    to: "tatto_spot",
                    import: {
                        filepath: "../../tattoos/tattoo_variants.js", //Note, here "../" indicates that tattoos/tattoo_variants.js is 
                        //located two directories above the current directory
                        variable: "tattoo_variants_list"
                    }
                },
                sequences: { //OPTIONAL: can be used to specify which of the frames of the spritesheet should play per loop, 
                    idle: [2, 4, 8],
                    tremble: [1, 2],
                    reversed: [7, 6, 5, 4, 3, 2, 1, 0],
                    punch: [0, 0, 1, 4, 4, 4, 4, 4, 4, 4, 4, 5, 6, 7] //slow ramp up from the first few frames, 
                    //to quick jump to the midmost frame, followed by slow rampdown to the firstmost frames       
                },
                looptime: 1 //OPTIONAL: can be used to specify how many parent animation loops 
                //constitute a single animation loop for this sprite. A value of 2 means the parent animation must loop twice
                //for this animation to loop once. 
            }
        }
    }
}


); //IT IS VERY IMPORTANT THAT THE LAST LINE IN YOUR FILE IS A COPY-PASTE OF THIS LINE


/**
 * -----------------------------------------------
 * END OF ARTIST DOCUMENTATION 
 * -----------------------------------------------
 */


/**
 * -----------------------------------------------
 * START OF DEVELOPER DOCUMENTATION
 * -----------------------------------------------
 * 
 * 
 * 
 * Given all of the examples above (and presuming we have already loaded whatever js file contains our arm data). 
 * We can now easily generate a new FDoll as follows
 **/
var justAnArm = new FDoll(arm_example);
/**
 * we can then render it into a div with
 */
var displayContainer = document.getElementById("display_container");
justAnArm.renderTo(displayContainer);

/**
 * The way we've set things up, the arm will display, complete with whatever bracelet 
 * was defined in the hypothetical "bracelet.js" file. 
 * 
 * However, because our tattoo accessory's selected variant was defined as "null", 
 * the arm will not have a tattoo. 
 * If we wish to display one of the tattoos 
 * available for the arm, (say, for example a skull), 
 * we simply do 
 */
justAnArm.accessories.tattoo.setVariant("skull");

/**
* If we want to make it a skull and crossbones, we might do 
**/
var armskull = justAnArm.accessories.tattoo.selected_variant;
armskull.accessories.decorations_behind.setVariant("crossbones"); 