var playerDoll = null;
var humanCache = [];
var beastCache = [];


var humansActive = [];
var beastsActive = [];
var enemiesActive = [];
var activeNPCList = [];


var insertListener = async function(event){

	if (event.animationName == "nodeInserted") {
        updateState();
	}
}

async function updateState(msPerLoop, infoDiv) {
    //console.log("BATTLE BEGIN! ", event, event.target);
        globals = SugarCube.State.variables;
        if(playerDoll == null) {
            var anAwaiter = defer();
            playerDoll = new FDoll("dolls/player/player_sex.js", "player", anAwaiter, null, infoDiv);
            var wait = await anAwaiter;
        }
        if(msPerLoop == null) {
            msPerLoop = 500;
        }

        var canvasElem = document.querySelector("#divsex");
        canvasElem.innerHTML = '';
        cleanSlate();
        playerDoll.setLoopSpeed(msPerLoop);
        for(var i = 0; i<activeNPCList.length; i++ ) {
            activeNPCList[i].setLoopSpeed(msPerLoop);
        }
        await initNPCs(infoDiv);
        await updatePlayerDraw();
        await updateNPCs(activeNPCList);
    drawAll();
}



async function initNPCs(infoDiv) {
    var npcList = SugarCube.State.variables.NPCList;
    var enemyCount = SugarCube.State.variables.enemyno;
    var humansRequested = 0;
    activeNPCList = [];
    var beastsRequested = 0;
    orificeDibs = {};

    for(var i=0; i<enemyCount; i++) {
        var npcState = npcList[i];
        if (npcState.type != 0) {
            beastsRequested++;
            var beast = await getOrCreateBeastFromCache(beastsRequested, npcState.type, infoDiv);
            beast.NPCInfo = npcState;
            activeNPCList.push(beast);
            await updateEnemyState(beast);
            //human.renderTo(canvasElem);
        } else {
            humansRequested++;
            var human = await getOrCreateHumansFromCache(humansRequested, infoDiv);
            human.NPCInfo = npcState;
            activeNPCList.push(human);
            await updateEnemyState(human);
            //human.renderTo(canvasElem);
        }
    }
}

async function updateNPCs(activeNPCList) {
    for (var i = 0; i<activeNPCList.length; i++) {
        updateEnemyDraw((activeNPCList[i]));
    }
}


function drawAll() {
    var canvasElem = document.querySelector("#divsex");
    window.requestAnimationFrame( ()=> {
        playerDoll.renderTo(canvasElem);
        for (var i = 0; i<activeNPCList.length; i++) {
            (activeNPCList[i]).renderTo(canvasElem);
        }
    });

}


async function getOrCreateHumansFromCache(humansRequested, infoDiv) {
    if (humanCache.length >= humansRequested) {
        return humanCache[humansRequested - 1];
    } else {
        var anAwaiter = defer();
        var newHuman = new FDoll("dolls/human/human.js", "human", anAwaiter, null, infoDiv);
        var wait = await anAwaiter;
        humanCache.push(newHuman);
        return newHuman;
    }
}

async function getOrCreateBeastFromCache(beastsRequested, type, infoDiv) {
    if (beastCache.length >= beastsRequested) {
        return beastCache[beastsRequested - 1];
    } else {
        var anAwaiter = defer();
        var newBeast = new FDoll("dolls/beast/beast.js", type, anAwaiter, null, infoDiv);
        var wait = await anAwaiter;
        beastCache.push(newBeast);
        return newBeast;
    }
}


function getPlayerPartDrawInfo(partName) {
    throw error; // todo: write this
}

const propDrawRules = {
    pillory: {},
    wall: {},
    stable: {}
}

document.addEventListener("animationstart", insertListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertListener, false); // IE
document.addEventListener("webkitAnimationStart", insertListener, false); // Chrome + Safari