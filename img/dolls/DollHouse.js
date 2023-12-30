var docHead = document.querySelector("head");


DollHouse = function (context) {
    context["DoLHouse"] = this;
    currentlyLoadingMap = {};
    this.dirContentMap = {};
    this.reificationRequired = true;
    this.isBlocked = false;
    this.blockedQueue = [];
    this.loadCount = 0;

    this.getTemplate = async (filePath, dollName, whenFinished, infoDiv) => {
        if (infoDiv != null)
            this.infoDiv = infoDiv

        //await this.whenReady(defer());
        var deferred = this.whenReady(async () => {
            var result = await this.loadFile(filePath);
            if (this.reificationRequired) {
                this.preify();
                this.postReify();
            }
            whenFinished(
                {
                    basePath: result.basePath,
                    fileName: result.fileName,
                    content: result.content[dollName]
                });
        });
    }

    this.unblock = () => {
        this.isBlocked = false;
        this.runblockedQueue();
    }

    this.runblockedQueue = () => {
        for (var k of this.blockedQueue) {
            var awaiting = this.blockedQueue.shift();
            awaiting();
        }
    }

    this.whenReady = async (callback) => {
        if (this.isBlocked) {
            //var waiter = defer();
            this.blockedQueue.push(callback);
            //var result = await callback;
            //return result;
        }
        else
            callback();
    }

    this.updateLoadStatus = () => {
        if (this.infoDiv != null) {
            var loadString = "";
            for (var k of Object.keys(this.dirContentMap)) {
                var statusString = "";
                if (this.dirContentMap[k].status == "loaded") {
                    statusString = `<span style="background: green">` + this.dirContentMap[k].status + `</span>`;
                }
                else {
                    statusString = `<span style="background: yellow">` + this.dirContentMap[k].status + `</span>`;
                }
                loadString += k + ` : ` + statusString + `<br/>`;
            }
            this.infoDiv.innerHTML = loadString;
        }
    }

    this.updateBuildStatus = (line) => {
        if (this.infoDiv != null) {
            var textInfo = document.createElement("div");
            textInfo.innerText = line;
            this.infoDiv.appendChild(textInfo);
            this.infoDiv.scrollTop = this.infoDiv.scrollHeight;
        }
    }

    this.loadFile = async (filePath, skipTraversal, d) => {
        if (this.dirContentMap[filePath] != null) {
            if (this.dirContentMap[filePath].status == "loaded") {
                var dirInfo = splitPath(filePath);
                return {
                    basePath: dirInfo.directory,
                    fileName: dirInfo.fileName,
                    content: this.dirContentMap[filePath].content
                };
            }
            else {
                alert("Something confusing and shameful happened.");
                return null;
            }
        }

        //if(currentlyLoading == null) {
        this.reificationRequired = true;
        var dirInfo = splitPath(filePath);
        var awaiter = defer();
        this.dirContentMap[filePath] = {
            status: "in progress",
            content: {},
            promise: awaiter
        };
        this.loadCount++;
        var scriptElem = document.createElement("script");
        scriptElem.id = "script_" + this.loadCount
        currentlyLoadingMap["script_" + this.loadCount] = {
            filePath: dirInfo.directory,
            fileName: dirInfo.fileName,
            fullPath: filePath,
            promise: awaiter
        }
        this.updateLoadStatus();
        scriptElem.setAttribute("src", filePath);
        this.isBlocked = true;
        docHead.appendChild(scriptElem);
        var result = await awaiter;


        if (!skipTraversal) {
            var d = selfOr(d, "");
            await this.buildMap(result, dirInfo.directory, filePath, d);
        }

        return {
            basePath: dirInfo.directory,
            fileName: selfOr(dirInfo.fileName, ""),
            content: this.dirContentMap[filePath].content
        };
    }

    this.add = (dolls) => {

        var script = document.currentScript;
        var loader = currentlyLoadingMap[script.id];
        var awaiter = loader.promise;
        console.log("add called");
        this.dirContentMap[loader.fullPath].content = dolls;
        this.dirContentMap[loader.fullPath].status = "loaded";
        awaiter.resolve(dolls);

        delete currentlyLoadingMap[script.id];
        this.updateLoadStatus();

    }
    this.unloadedReferences = {};
    this.discoveredValues = {};


    /**
     * Logic: We import via two passes. First, we load the contents of any js files specified in any import
     * statements of the given object into a directory->variable map. 
     * 
     * Then we go through the elements of the completed map, and replace the contents of any import statements 
     * with a referemce to the object which was imported. 
     */
    this.buildMap = async (obj, basePath, inFile) => {
        var currentPath = basePath;
        var fullPathName = inFile;
        for (var k of Object.keys(obj)) {
            if (k == "import") {
                if (obj.import.filepath != null) {
                    fullPathName = basePath + obj.import.filepath;
                    currentPath = splitPath(fullPathName).directory;
                    var pathAndObj = await this.loadFile(fullPathName, true);
                    var subObjects = pathAndObj.content;
                    await this.buildMap(subObjects, currentPath, fullPathName);
                }
            } else if (isObj(obj[k])) {
                await this.buildMap(obj[k], basePath, inFile);
            }
        }
    }

    /**goes through all elements of the dir content map and replaces the contents of any import keys with 
     * the object requested for import. 
     * once all requested things are placed in the import value, the contents of the object are pulled keywise 
     * into the parent object and the import key is deleted*/

    this.preify = () => {
        for (var k of Object.keys(this.dirContentMap)) {
            var reified = this.dirContentMap[k].reified;
            var cont = this.dirContentMap[k].content;
            if (reified != true) {
                for (var ek of Object.keys(cont)) {
                    //cont[ek].basePath = splitPath(k).directory;
                    this.reify(cont[ek], k);
                }
                this.dirContentMap[k].reified = true;
            }
        }
    }

    this.reify = (fromObj, currentfile) => {
        for (var ok of Object.keys(fromObj)) {
            if (ok == "import") {
                var importInfo = fromObj.import;
                if (!isObj(importInfo.fDollTempContent)) {
                    if (importInfo.filepath == null) {
                        importInfo.filepath = currentfile;
                    } else {
                        var dirInfo = splitPath(currentfile);
                        importInfo.filepath = dirInfo.directory + importInfo.filepath;
                    }
                    fromObj.import.fDollTempContent = this.dirContentMap[importInfo.filepath].content[importInfo.variable];
                    this.updateBuildStatus("reifying : " + importInfo.variable + " in " + fromObj.import.filepath);
                    this.reify(fromObj.import.fDollTempContent, fromObj.import.filepath);
                }
            } else {
                var elem = fromObj[ok];
                if (isObj(elem)) {
                    this.reify(elem, currentfile);
                }
            }
        }
        if (fromObj.variants != null || fromObj.accessories != null) {
            fromObj.basePath = splitPath(currentfile).directory;
        }

    }


    this.postReify = () => {
        for (var k of Object.keys(this.dirContentMap)) {
            var cont = this.dirContentMap[k].content;
            for (var ek of Object.keys(cont)) {
                this.pullUp(cont[ek]);
            }
        }
        this.reificationRequired = false;
        if (Object.keys(currentlyLoadingMap).length == 0) {
            this.unblock();
        }
    }

    /**pulls up the contents of any import objects recursively (depth first)*/
    this.pullUp = (fromObj) => {
        if (fromObj.import != null) {
            if (fromObj.import.fDollTempContent != null) {
                for (var k of Object.keys(fromObj.import.fDollTempContent)) {
                    fromObj[k] = fromObj.import.fDollTempContent[k];
                }
            }
            delete fromObj.import;
        }
        for (var k of Object.keys(fromObj)) {
            var recurse = fromObj[k];
            if (isObj(recurse)) {
                this.pullUp(recurse);
            }
        }
    }

};


/**returns true if the input is a javascript object and not an array */
isObj = (elem) => {
    return elem != null && Array.isArray(elem) == false && typeof elem == "object";
}


/**
* splits the input string into a directory component and a file component.
* @param {String} pathString 
*/
splitPath = (pathString) => {
    var jsSplit = pathString.split(".js");
    if (jsSplit.length > 1) {
        var dir = jsSplit[0].split("/");
        var filename = dir[dir.length - 1] + ".js";
        var dirString = "";
        for (var i = 0; i < dir.length - 1; i++)
            dirString += dir[i] + "/"
        return { directory: dirString, fileName: filename };
    } else {
        return { directory: pathString, fileName: null };
    }
}

/**Convenience function to resume code until after completing a request to load some file**/
defer = () => {
    var res, rej;
    var promise = new Promise((resolve, reject) => {
        res = resolve;
        rej = reject;
    });
    promise.resolve = res;
    promise.reject = rej;
    return promise;
}
