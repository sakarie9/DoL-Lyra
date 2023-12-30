function cleanSlate() {
    orificeDibs = {
        rearslot: null,
        underslot: null,
        faceslot: null,
        overslot: null,
    }
}

async function updateEnemyState(enemyDoll) {
    await setEnemyStance(enemyDoll);
}
async function updatePlayerDraw() {
    var player = globals.player;
    await playerDoll.setVariant(globals.position);

    var bottomAccessory = await playerDoll.getAccessory("bottom");
    var topAccessory = await playerDoll.getAccessory("top");
    var headAccessory = await topAccessory.getAccessory("head");
    var faceAccessory = await headAccessory.getAccessory("face");

    await updatePlayerSkin(playerDoll);
    await updatePlayerGenitals(bottomAccessory);
    await updatePlayerHair(headAccessory);
    await updatePlayerHead(headAccessory);
    await updatePlayerFace(faceAccessory);
    await updatePlayerArms(playerDoll);
    await updatePlayerTorso(topAccessory);
    await updatePlayerClothes(bottomAccessory, topAccessory);
    playerDoll.computeGlobals();
    //TODO: other body part colorings
}

async function updateEnemyDraw(doll) {
    if (doll.NPCInfo.type != 0) {
        updateBeastEnemyDraw(doll);
    } else {
        updateHumanEnemyDraw(doll);
    }

}

async function updatePlayerTorso(top) {
    var breasts = top.getAccessory("breasts");
    var breastVariant = getNameFromValue("playerbreastsize", player.breastsize);
    breasts.setVariant(breastVariant);
}

async function updatePlayerClothes(bottom, top) {
    var worn = globals.worn;
    var underLower = bottom.getAccessory("under_lower");
    var lower = bottom.getAccessory("lower");
    await underLower.setVariant(worn.under_lower.variable);
    await underLower.setVariant(worn.under_lower.state);
    underLower.setFilter(worn.under_lower.currentcolor);
    await lower.setVariant(worn.lower.variable);
    await lower.setVariant(worn.lower.state);
    lower.setFilter(worn.lower.currentcolor);
}

async function updateBeastEnemyDraw(doll) {
    var NPCInfo = doll.NPCInfo;
    if (NPCInfo.penis != "none") {
        await scaleEnemy(doll);
        doll.computeGlobals();
        //we presume magnets are defined on any player-parts of interest to which enemies should gravitate toward
        doll.dragBy("penis_base", playerDoll, NPCInfo.penis);
    }
}

async function updateHumanEnemyDraw(doll) {
    var NPCInfo = doll.NPCInfo;
    //await setEnemyStance(doll);
    await setEnemyPhysique(doll);
    await setEnemyCosmetics(doll);
    await scaleEnemy(doll);
    //doll.getAccessory("arms").setFilter("opacity(0.5)");

    if (NPCInfo.penis != "none") {
        if (doll.NPCInfo.penis.indexOf("mouth") == 0 && globals.position == "doggy") {
            doll.getCurrentVariant().setPhase(4);
        } else {
            doll.getCurrentVariant().setPhase(0);
        }
        doll.computeGlobals();
        //we presume magnets are defined on any player-parts of interest to which enemies should gravitate toward

        doll.dragBy("penis_aligned", playerDoll, NPCInfo.penis);
        //move enemy arms down to reach tiny player if 
        //NPC is in upright position. 
        if (doll.NPCInfo.currentstance == "upright"
            && doll.NPCInfo.currentapproachstate == "active"
            && orificeDibs.rearslot == doll) {
            var arms = doll.getAccessory("forearm");
            arms.accessoryDragBy("hands", playerDoll, "waist");
        }
        if (doll.NPCInfo.currentstance == "laying"
            && doll.NPCInfo.currentapproachstate == "active"
            && orificeDibs.underslot == doll) {
            var arms = doll.getAccessory("arms");
            arms.accessoryDragBy("hands", playerDoll, "ribs");
        }
    }
}

async function updatePlayerSkin(bodyAccessory) {
    var skin = globals.skinColor.current;
    bodyAccessory.setFilter(skin.body);
}
async function updatePlayerGenitals(bottomAccessory) {
    var player = globals.player;
    var penisVariant = player.penisExists == true ? "small" : "none";
    bottomAccessory.getAccessory("penis").setVariant(penisVariant);
}

async function updatePlayerHead(headAccessory) {
    var throatAcc = headAccessory.getAccessory("throat");
    if (orificeDibs.faceslot != null
        && orificeDibs.faceslot.NPCInfo.penis == "mouth") {
        var penetrator = orificeDibs.faceslot.NPCInfo.penissize;
        var penisDelta = penetrator - globals.player.bodysize;
        var throatMode = penisDelta > 2 ? "huge_load" : "regular_load";
        await throatAcc.setVariant("oral");
        await throatAcc.setVariant(throatMode);
    } else {
        await throatAcc.setVariant("idle");
    }
}

async function updatePlayerHair(headAccessory) {
    var hairAccessory = headAccessory.getAccessory("hair");
    await hairAccessory.setVariant(globals.hairlengthstage);
    await hairAccessory.setFilter(globals.haircolorfilter);
    var lashAccessory = headAccessory.getAccessory("lashes");
    await lashAccessory.setFilter(globals.haircolorfilter);

}
async function updatePlayerFace(faceAccessory) {
    var arousalRatio = globals.arousal / globals.arousalmax;
    var painPercent = globals.pain;
    var traumaRatio = globals.trauma / globals.traumamax;
    var arousalPercentClamped = Math.max((arousalRatio - 0.41) * 10, 0);
    var painPercentClamped = Math.max(0, (painPercent - 41) / 10);
    var minBlush = parseInt(Math.max(arousalPercentClamped, painPercentClamped - 2))
    var blushAccessory = faceAccessory.getAccessory("blush");
    var eyesAccessory = faceAccessory.getAccessory("eyes");
    var tearsAccessory = faceAccessory.getAccessory("tears");

    await blushAccessory.setVariant("blush" + parseInt(arousalRatio * 5));
    await tearsAccessory.setVariant("tears" + parseInt(painPercent / 20));

    var scleraVariant = painPercent > 90 ? "bloodshot" : "normal";
    await eyesAccessory.getAccessory("sclera").setVariant(scleraVariant);

    var pupilVariant = traumaRatio > 0.9 ? "empty" : "normal";
    await eyesAccessory.getAccessory("eyeballs").setVariant(pupilVariant);
}

async function updatePlayerArms(playerDoll) {
    var arm_right = playerDoll.getAccessory("arm_right");
    var arm_left = playerDoll.getAccessory("arm_left");
    if (globals.rightarm == "grappled")
        await arm_right.setVariant("bound");
    else if (globals.rightarm == "penis")
        await arm_right.setVariant("handjob");
    else
        await arm_right.setVariant("normal");

    if (globals.leftarm == "grappled")
        await arm_left.setVariant("bound");
    else if (globals.leftarm == "penis")
        await arm_left.setVariant("handjob");
    else
        await arm_left.setVariant("normal");
}

async function setEnemyPhysique(doll) {
    var NPCInfo = doll.NPCInfo;
    var penisSize = null;
    var breastSize = null;

    var bodyVariant = getNameFromValue("npcbodysize", NPCInfo.bodysize);
    await doll.setVariant(bodyVariant);

    //TODO: increase number of supported penis sizes in Twine codebase
    //Currently code only generates penises of size 1, 3, and 4.
    //but the system makes it easy to visually scale penises 
    //so it would be nice to have at least five 
    //1 = tiny
    //2 = small
    //3 = medium
    //4 = large
    //5 = huge
    var penisSize = getNameFromValue("npcpenissize", NPCInfo.penissize);
   
    var penis = await doll.getAccessory("penis");
    await penis.setVariant(penisSize);
    var breastSize = getNameFromValue("npcbreastsize", NPCInfo.breastsize);
    var breasts = await doll.getAccessory("chest");
    breasts.setVariant(breastSize);
}

async function setEnemyCosmetics(doll) {
    var NPCInfo = doll.NPCInfo;
    var hairAccessory = doll.getAccessory("hair");
    var hairRear = hairAccessory.getAccessory("back");
    var hairFront = hairAccessory.getAccessory("front");
    await hairRear.setVariant(NPCInfo.hairstylerear);
    await hairFront.setVariant(NPCInfo.hairstylefront);
    var hairLengthRear = getNameFromValue("npchairlengthrear", NPCInfo.hairlengthrear);
    hairLengthRear = hairLengthRear == null? "buzz" : hairLengthRear;
    await hairAccessory.setVariant(hairLengthRear);

    doll.getAccessory("penis").setFilter(NPCInfo.peniscolor);
}



//TODO: make twine code explicitly store that a penis is a strap-on in the 
//NPC variables. I'm not at all sure how the system does it currently
function isStrapon(NPCInfo) {

}

//TODO: include a penis color attribute in the NPCList
//for strap-ons and non-caucasian rapists (diversity is important!).
function setPenisColor(NPCInfo) {

}

async function setEnemyStance(doll) {
    var NPCInfo = doll.NPCInfo;
    var penisTarget = getTargetPartName(NPCInfo.penis);
    var anusTarget = getTargetPartName(NPCInfo.anus);
    var vagTarget = getTargetPartName(NPCInfo.vagina);
    if (penisTarget != null) {
        var stance = reserveStanceIfAvailable(doll, penisTarget);
        await doll.setVariant(stance.variant);
        NPCInfo.currentstance = stance.variant;
    }
    if (vagTarget != null) {
        var stance = reserveStanceIfAvailable(doll, penisTarget);
        await doll.setVariant(stance.variant);
        NPCInfo.currentstance = stance.variant;
        //update the stance of whichever NPC we had to steal the slot from
        if (stance.stealFrom != null) setEnemyStance(stance.stealFrom);
    }
    if (anusTarget != null) {
        var stance = reserveStanceIfAvailable(doll, anusTarget);
        await doll.setVariant(stance.variant);
        NPCInfo.currentstance = stance.variant;
        //update the stance of whichever NPC we had to steal the slot from
        if (stance.stealFrom != null) setEnemyStance(stance.stealFrom);
    }
    var state = getState(doll);
    await doll.setVariant(state);
    NPCInfo.currentapproachstate = state;
}


/**
 * determines if the NPC state is one of "imminent", "entrance", "penetrated"
 * @param {*} doll 
 */
function getState(doll) {
    if (doll.NPCInfo.penis.indexOf("imminent") != -1) return "imminent";
    if (doll.NPCInfo.penis.indexOf("entrance") != -1) return "entrance";
    switch (doll.NPCInfo.penis) {
        case "anus":
        case "mouth":
        case "vagina": return "active"
        default: return doll.NPCInfo.penis;
    }
}


/**
 * scales the NPC enemy to the appropriate body size  
 * relative to the player character 
 * (so the player character is always rendered at the same size, 
 * and the NPC is scaled up or down in proportion)
 *
 */
async function scaleEnemy(doll) {
    doll.computeGlobals();
    var playerInfo = SugarCube.State.variables.player;
    var globals = SugarCube.State.variables;
    doll.scale.x = doll.default_params.scale.x;
    doll.scale.y = doll.default_params.scale.y;

    playerInfo.bodysize = parseInt(playerInfo.bodysize);
    switch (playerInfo.bodysize) {
        case undefined: var playerSize = 1; break;
        case 1: var playerSize = 0.77; break;
        case 2: var playerSize = 0.88; break;
        case 3: var playerSize = 1.0; break;
        case 4: var playerSize = 1.11; break;
    }
    switch (doll.NPCInfo.bodysize) {
        case undefined: var playerSize = 1; break;
        case 1: var npcSize = 0.775; break;
        case 2: var npcSize = 0.88; break;
        case 3: var npcSize = 1.0; break;
        case 4: var npcSize = 1.11; break;
        case 5: var npcSize = 1.22; break;
        case 6: var npcSize = 1.33; break;
        case 7: var npcSize = 1.5; break;
        default: var npcSize = 1;
    }

    doll.scale.x /= playerSize;
    doll.scale.y /= playerSize;

    if (doll.NPCInfo.penis != "none") {
        if((doll.NPCInfo.penis.indexOf("mouth") == 0 && globals.position == "doggy"))
            doll.scale.x = Math.abs(doll.scale.x) * -1;
        //also scale the legs along the y axis to make it look like 
        //large characters are spreading their legs to lower themselves
        var legs = doll.getAccessory("legs");
        if (legs != null) {
            legs.scale.y = legs.default_params.scale.y;
            if (doll.NPCInfo.currentapproachstate == "active"
                || doll.NPCInfo.currentapproachstate == "entrance"
                && globals.position == "doggy"
                && dibMap.underslot != doll) {
                var legScalar = playerSize / npcSize;
                legs.scale.y *= ((2 * legScalar) + 1.0) / 3;
            }

            //cross over the player's legs if the stance is far enough  
            if (legs.scale.y < 0.85) {
                legs.translate.depth = 7;
            } else {
                legs.translate.depth = 0;
            }
        }
    }
}


/**
 * Returns the appropriate stance for this doll to take 
 * given its purported target
 * @param {*} doll 
 * @param {*} target 
 */
function reserveStanceIfAvailable(doll, target) {
    var globals = SugarCube.State.variables;
    var targMap = dibMap[globals.position][target];
    var hasPriority = (target == "penis" && position == "missionary")
    doll.NPCInfo.hasPriority = hasPriority;
    for (var k of Object.keys(targMap)) {
        var check = targMap[k];
        if (orificeDibs[check] == null || orificeDibs[check] == doll) {
            orificeDibs[check] = doll;
            return { variant: k, stoleFrom: false };
        } else if (hasPriority) {
            var stealFrom = orificeDibs[check];
            if (!stealFrom.NPCInfo.hasPriority) {
                orificeDibs[check] = doll;
                return { variant: k, stoleFrom: stealFrom };
            }
        }
    }
    return null;
}

/**strips things like "imminent" and "entrance" from a target name 
 * for easy slot check references
 */
function getTargetPartName(partName) {
    if (typeof partName == "string") {
        if (partName.indexOf("anus") == 0) return "anus";
        if (partName.indexOf("mouth") == 0) return "mouth";
        if (partName.indexOf("vagina") == 0) return "vagina";
        if (partName.indexOf("penis") == 0) return "penis";
    }
    return null;
}



/**
 * maps available slots on player for NPCs against orificeDibs. 
 * The basic idea is that the NPC selects the orifice or appendage they are trying 
 * to use from either the doggy or missionary position 
 * (as defined by the player stance). 
 * They then traverse each of the keys defined on that orifice in the order
 * they are defined. 
 * Each key corresponds to a variant-name in the doll. The value of each key 
 * corresponds to a key in orificeDibs. If the value of the key in orificeDibs is true,
 * then that means the Doll can adopt the stance specified by the key in the dibMap. 
 * 
 * For example:  
 *  Let's say the player is in the doggy position and the NPC wants to penetrate the player's vagina.
 *  So it checks dibMap.doggy.vagina, which tells it 
 *  "if you want to be in the 'upright' position, you need to check that orificeDibs.rearslot is available". 
 *  The NPC checks orificeDibs.rearslot and finds that it is no longer available. 
 *  So it moves on to the next option. Which states
 *  "if you want to be in the 'laying" position, you need to check that orificeDibs.underslot is available". 
 *  The NPC checkes orificeDibs.underslot and find that it is available. 
 *  So it adopts the 'laying' position, and sets the orificeDibs.underslot value to a reference to itself to indicate 
 *  to any other NPCs that the spot is reserved by it, and that any NPCs who wish to cut in line must talk to it directly/ 
 * 
 */
var dibMap = {
    doggy: {
        vagina: {
            upright: "rearslot",
            laying: "underslot"
        },
        anus: {
            upright: "rearslot"
        },
        penis: {
            laying: "underslot"
        },
        mouth: {
            upright: "faceslot"
        }
    },
    missionary: {
        penis: {
            hunched: "overslot"
        },
        vagina: {
            hunched: "overslot",
            crouched: "rearslot"
        },
        anus: {
            laying: "underslot"
        },
        mouth: {
            upright: "faceslot"
        }
    }
};
var orificeDibs = {
    rearslot: null,
    underslot: null,
    faceslot: null,
    overslot: null,
}
