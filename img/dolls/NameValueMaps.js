nameValMaps = { 
    npchairlengthrear : {
        "buzz" : 1,
        "short" : 2,
        "trimmed" : 3,
        "flowing" : 4,
        "long" : 5,
        "luxurious" : 6,
        "uncompromising" : 7,
        "repunzotic" : 8,
        "endless" : 9
    }, 
    npcbodysize : {
        "tiny_body" : 1,
        "small_body" : 2,
        "petite_body" : 3,
        "medium_body" : 4,
        "large_body" : 5,
        "huge_body" : 6,
        "giant_body" : 7,
        "joke_body" : 11
    },
    npcbreastsize : {
        "flat" : 0,
        "budding" : 1,
        "tiny" : 2,
        "small" : 3,
        "pert" : 4,
        "modest": 5,
        "full": 6,
        "large": 7,
        "ample": 8,
        "massive": 9,
        "huge": 10,
        "gigantic": 11,
        "enormous": 12  
    },
    npcpenissize: {
        "none" : 0, 
        "tiny" : 1, 
        "small" : 2, 
        "medium" : 3, 
        "large" : 4, 
        "huge" : 5        
    },
    playerbreastsize : {
        "flat" : 0,
        "tiny" : 1,
        "small" : 2,
        "large" : 3,
        "huge" : 4
    }
}

valNameMaps = {};

function getValueFromName(map, key) {
    return nameValMaps[map][key];
}

function getNameFromValue(map, key) {
    return valNameMaps[map][key];
}


function generateReverseMaps() {
    reversal(nameValMaps, valNameMaps); 
    reversal(valNameMaps, nameValMaps);
}

function reversal(source, target) {
    for(var mapName of Object.keys(source)) {
        for(var k of Object.keys(source[mapName])) {
            var value = source[mapName][k];
            if(target[mapName] == null) {
                target[mapName] = {}; 
            }
            if(target[mapName][value] == null) {
                target[mapName][value] = k 
            }
        }
    }
}


generateReverseMaps();