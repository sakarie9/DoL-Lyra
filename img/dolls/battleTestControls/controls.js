
function setEnemyCount(elem) {
    enemyControlsContainer = document.getElementById("enemy-controls-container");
    var currentEnemyCount = enemyControlsContainer.querySelectorAll(".enemy-controller").length;
    SugarCube.State.variables.enemyno = elem.value;
    addOrRemoveControllers(elem.value, currentEnemyCount);
}

function addOrRemoveControllers(newCount, oldCount) {
    var count = newCount - oldCount;
    for (var i = count; i < 0; i++) {
        enemyControlsContainer.lastElementChild.remove();
    }
    var cachedController = enemyControlsCache.querySelector(".enemy-controller");
    for (var i = 0; i < count; i++) {
        var clone = cachedController.cloneNode(true);
        clone.setAttribute("data-NPC", oldCount + (i));
        clone.querySelector("h3").innerText = "NPC-" + (oldCount + (i + 1))
        enemyControlsContainer.appendChild(clone);
        updateControllerValues(clone);
    }
}


function updateClothesDropdown() {
    var bottomAcc = playerDoll.getAccessory("bottom").getAccessory("clothes");
    var underlower = bottomAcc.getAccessory("under_lower").parent;
    var playerControls = document.querySelector("#player-controls div");
    var underLowerSelect = dropdownFromVariants(underlower, "under_lower", (el) => { updateSubVariants(el); updateById(el); }, updateById);
    playerControls.appendChild(underLowerSelect);
    underLowerSelect.forPart = "under_lower";
    underLowerSelect.appendChild(makecolorInputFor(SugarCube.State.variables.worn.under_lower));

    var lower = bottomAcc.getAccessory("lower").parent;
    var lowerSelect = dropdownFromVariants(lower, "lower", (el) => { updateSubVariants(el); updateById(el); }, updateById);
    playerControls.appendChild(lowerSelect);
    lowerSelect.forPart = "lower";
    lowerSelect.appendChild(makecolorInputFor(SugarCube.State.variables.worn.lower));

}

function dropdownFromVariants(variantContainer, label, onchange, onsubchange) {
    var select = document.createElement("select");
    select.classList.add("variants");
    select.variantContainer = variantContainer;
    select.onsubchange = onsubchange;
    select.onchange = () => { onchange(select) };
    var variantsHolder = variantContainer.dollInfo == null ? variantContainer : variantContainer.dollInfo;
    for (var k of Object.keys(variantsHolder.variants)) {
        var opt = document.createElement("option");
        opt.value = k;
        opt.innerText = k;
        select.appendChild(opt);
    }
    var selectorDiv = document.createElement("div");
    selectorDiv.classList.add("selector");
    selectorDiv.innerHTML = label;
    selectorDiv.appendChild(select);
    return selectorDiv;
}

function updateSubVariants(elem) {
    var subvariants = elem.parentNode.querySelector(".subvariants");
    if (subvariants != null)
        subvariants.remove();
    var variantContainer = elem.variantContainer;
    var variantHolder = variantContainer.dollInfo == null? variantContainer.variants : variantContainer.dollInfo.variants;
    var result = dropdownFromVariants(variantHolder[elem.value], "", elem.onsubchange);
    result = result.querySelector("select");
    result.classList.add("subvariants");
    result.onchange = elem.onsubchange;
    elem.parentNode.appendChild(result);
    SugarCube.State.variables.worn[variantContainer.named].variable = elem.value;
    updateState(loopSpeed);
}

function updateById(elem) {
    var val = elem.value == null ? elem.target.value : elem.value;
    var targ = elem.target == null ? elem : elem.target;
    var forPart = targ.parentNode.forPart;
    SugarCube.State.variables.worn[forPart].state = val; //targ.variantContainer.setVariant(val);
    updateState(loopSpeed);
}

function makecolorInputFor(item) {
    var colorer = document.createElement("input")
    colorer.setAttribute("type", "color");
    colorer.onchange = (e) => {
        colorItem(e.target.value, item);
    }
    return colorer;
}

function colorItem(value, item) {
    var hsb = toHSB(value);
    var filterString = "hue-rotate(" + hsb.h + "deg) saturate(" + hsb.s + "%) brightness(" + hsb.b+ "%)";
    item.currentcolor = filterString;
    updateState(loopSpeed);
}

/**sets the controller values to reflect its corresponding NPC */
function updateControllerValues(controller) {
    var NPCNum = controller.getAttribute("data-NPC");
    var NPCInfo = SugarCube.State.variables.NPCList[NPCNum];
    controller.querySelector(".type").value = NPCInfo.type;
    controller.querySelector(".breastsize").value = NPCInfo.breastsize;
    controller.querySelector(".hairstylerear").value = NPCInfo.hairstylerear;
    controller.querySelector(".hairstylerear").value = NPCInfo.hairstylerear;
    controller.querySelector(".penissize").value = NPCInfo.penissize;
    controller.querySelector(".bodysize").value = NPCInfo.bodysize;
    controller.querySelector(".penis").value = NPCInfo.penis;

}



function toHSB(h) {
    r = "0x" + h[1] + h[2];
    g = "0x" + h[3] + h[4];
    b = "0x" + h[5] + h[6];
    var hsv = rgbToHsv(r, g, b);
    //compensate for CSS's horrible hue-rotate math the best we can. 
    var mod = Math.abs(180-hsv.h)%180; 
    if(mod == 0) mod = 180;
    var satMult = 4.5*((100-hsv.s)/100);
    var b = hsv.v + (hsv.v * (satMult*(mod/180.0)));
    return {h:hsv.h, s:hsv.s, b:b};
}
function rgbToHsv(r, g, b) {
    let rabs, gabs, babs, rr, gg, bb, h, s, v, diff, diffc, percentRoundFn;
    rabs = r / 255;
    gabs = g / 255;
    babs = b / 255;
    v = Math.max(rabs, gabs, babs),
    diff = v - Math.min(rabs, gabs, babs);
    diffc = c => (v - c) / 6 / diff + 1 / 2;
    percentRoundFn = num => Math.round(num * 100) / 100;
    if (diff == 0) {
        h = s = 0;
    } else {
        s = diff / v;
        rr = diffc(rabs);
        gg = diffc(gabs);
        bb = diffc(babs);

        if (rabs === v) {
            h = bb - gg;
        } else if (gabs === v) {
            h = (1 / 3) + rr - bb;
        } else if (babs === v) {
            h = (2 / 3) + gg - rr;
        }
        if (h < 0) {
            h += 1;
        }else if (h > 1) {
            h -= 1;
        }
    }
    return {
        h: Math.round(h * 360),
        s: percentRoundFn(s * 100),
        v: percentRoundFn(v * 100)
    };
}


function hsvToRgb(h) {
    var r, g, b, i, f, p, q, t;
    if (arguments.length === 1) {
        s = h.s/100, v = h.v/100, h = h.h/360;
    }
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }
    return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255)
    };
}