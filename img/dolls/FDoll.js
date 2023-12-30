const DoLHouse = new DollHouse(window);
var loadedDollCount = 0;
var idMap = {};


class FDoll {

    
    blockedQueue = [];


    /** 
     * @param {String}  dollFile  a path to the .js file declaring the doll template, or otherwise an javascript object 
     * of the template
     * @param {*} dollName name of the doll specified in the given js file. Alternatively, the doll object itself. 
     */
    constructor(filePath, dollName, anAwaiter, parentFDoll, infoDiv, dollObj) {
        //ancestors looking for anchors
        //the passthrough doesn't get passed along if this 
        //accessory attaches to it. 
        this.attachPassthrough = {
            /**anchorname : ancestorreference */
        };
        this.loopSpeed = parentFDoll == null ? 500 : parentFDoll.loopSpeed;
        loadedDollCount += 1;
        this.isBlocked = true;
        this.nameAs(dollName);
        var getDoll = async (result) => {
            this.parent = parentFDoll;
            if (result.scale != null) {
                console.log("strange");
            }
            var hold = await this.constructFrom(result);
            if (anAwaiter != null) {
                if (anAwaiter instanceof Promise)
                    this.whenReady(anAwaiter);
                else
                    anAwaiter();
            }
        };
        if (dollObj == null) {
            DoLHouse.getTemplate(filePath, dollName, getDoll, infoDiv);
        } else {
            //var clean1 = splitPath(selfOr(dollName.specifier,"")).directory; 
            //var clean2 = splitPath(selfOr(dollName.data.specifier,"")).directory; 
            this.attach = dollObj.attach;
            this.to = dollObj.to;
            /*var tempscale = this.copyObj(selfOr(dollName.scale, { x: 1, y: 1 }));
            var temptranslate = this.copyObj(selfOr(dollName.translate, { x: 0, y: 0, depth: 0 }));

            var thisTranslate = { x: 0, y: 0, depth: 0 };
            thisTranslate.x *= tempscale.x;
            thisTranslate.y *= tempscale.y;
            thisTranslate.x += temptranslate.x;
            thisTranslate.y += temptranslate.y;
            thisTranslate.depth += temptranslate.depth;
            this.translate = thisTranslate;
            this.scale = tempscale;*/
            getDoll(
                {
                    basePath: dollObj.basePath == null ? filePath : dollObj.basePath,
                    content: dollObj
                });
        }
    }
    unblock = () => {
        this.isBlocked = false;
        this.runblockedQueue();
    }

    runblockedQueue = () => {
        for (var k of this.blockedQueue) {
            var awaiting = this.blockedQueue.shift();
            awaiting.resolve();
        }
    }

    whenReady = async (callback) => {
        if (this.isBlocked) {
            var waiter = defer();
            this.blockedQueue.push(waiter);
            var result = await waiter;
            return callback.resolve();
        }
        else
            return callback.resolve();
    }


    /**
     * sets the loop speed for this doll and its descendants
    */
    setLoopSpeed(newSpeed) {
        this.loopSpeed = newSpeed; 
        for(var k of Object.keys(this.accessories)) {
            this.accessories[k].setLoopSpeed(newSpeed);
        }
        if(this.selected_variant != null) {
            this.selected_variant.setLoopSpeed(newSpeed);
        }
        //this.computeGlobals()
        //this._forceRestyle(true);
    }


    /**
     * creates array of whatever length is required to create subframes for all frames in 
     * this global_sequence_array to all subframes in the parent_global_subframe_array. 
     * The elements of the returned array will be JSON objects specifying 
     * {
     * this_play_idx: //the index of the played frame from which this subframe was created
     * par_subframe_idx: //the index of the parent played subframe to which this subframe maps
     * play_t: //the percentage of the loop at which this frame should play
     * spriteframe: //the sprite frame to which this subframe corresponds
     * } 
     * the inputs should be array of floats, where each float specifies the percentage
     * of the loop at which the frame starts
     */
    setSubFrameSplit = () => {
        var result = [];
        var ftemp = [];

        var from_arr = this.global_play_sequence;
        var to_arr = this.parent == null ? [] : this.parent.global_subframe_sequence;
        for (var i = 0; i < from_arr.length; i++) {
            ftemp.push({
                type: "from",
                play_t: from_arr[i].play_t,
                idx: i
            });
        }
        for (var i = 0; i < to_arr.length; i++) {
            ftemp.push({
                type: "to",
                play_t: to_arr[i].play_t,
                idx: i
            });
        }

        var sortedPreTemp = ftemp.sort((a, b) => { return a.play_t - b.play_t });
        var sortedTemp = [];
        for (var i = 0; i < sortedPreTemp.length; i++) {
            if (i == 0) {
                sortedTemp.push(sortedPreTemp[i]);
            } else if (sortedPreTemp[i].play_t != sortedTemp[sortedTemp.length - 1].play_t) {
                sortedTemp.push(sortedPreTemp[i]);
            }
        }

        var lastT = 0;
        var lastF = 0;
        for (var i = 0; i < sortedTemp.length; i++) {
            var ob = sortedTemp[i];
            if (ob.type == "from")
                lastF = ob.idx;
            if (ob.type == "to")
                lastT = ob.idx;
            result.push({
                this_play_idx: lastF,
                par_subframe_idx: lastT,
                play_t: ob.play_t,
                spriteframe: this.global_play_sequence[lastF].spriteframe
            }
            )
        }
        this.global_subframe_sequence = result;
    }

    /**
   * creates an array of JSON objects specifiyng frame index and play_time
   * from the selected_sequence specified on this doll.
   * if a selected_sequence wasn't specified, creates a default one*/
    ensureSeq = () => {
        if (this.phase == null) this.phase = 0;
        this.globalPhase = this.phase;
        if (this.resolvedParent != null) {
            this.globalPhase += this.resolvedParent.globalPhase;
        }
        var baseSeq = this.selected_sequence;
        if (baseSeq == null) {
            baseSeq = [];
            for (var i = 0; i < this.frames; i++) {
                baseSeq.push(i);
            }
            this.selected_sequence = baseSeq;
        }
        this.global_play_sequence = [];

        for (var i = 0.0; i < this.selected_sequence.length; i++) {
            this.global_play_sequence.push({
                spriteframe: this.selected_sequence[mod(i + this.globalPhase, this.selected_sequence.length)],
                play_t: i / this.selected_sequence.length
            });
        }
    }

    ensureMagnets = () => {
        this.playSeqMagnets = {};
        this.globalPlaySeqMagnets = {};
        if (this.magnets == null || Object.keys(this.magnets).length == 0) {
            this.magnets = { origin: { x: 0, y: 0, depth: 0 } };
        }
        if (this.magnets.origin == null) {
            this.magnets.origin = { x: 0, y: 0, depth: 0 };
        }
        for (var k of Object.keys(this.magnets)) {
            if (this.magnets[k].depth == null)
                this.magnets[k].depth = 0;
            this.magnets[k] = this.redundifyMagnet(this.magnets[k]);
        }

        if (this.parent != null && this.magnets[this.parent.attachPassthrough.pending] != null) {
            this.resolvedParent = this.parent.attachPassthrough.doll;
            this.anchorName = this.parent.attachPassthrough.pending;
            this.anchorTarget = this.parent.attachPassthrough.to;
        }
        if (this.attach != null) {
            if (this.magnets[this.attach] == null) {
                this.attachPassthrough = {
                    pending: this.attach,
                    doll: this.magnets[this.to] == null ? this.parent.getFirstAncestorContainingMag(this.to) : this,
                    to: this.to
                };
            } else {
                this.resolvedParent = this.parent.getFirstAncestorContainingMag(this.to);
                this.anchorName = this.attach;
                this.anchorTarget = this.to;
            }
        } else if (
            this.parent != null &&
            this.parent.attachPassthrough.pending != null
        ) {
            this.attachPassthrough = {
                pending: this.parent.attachPassthrough.pending,
                doll: this.parent.attachPassthrough.doll,
                to: this.parent.attachPassthrough.to
            }
        }

    }

    setupMagnets = () => {
        for (var k of Object.keys(this.magnets)) {
            this.playSeqMagnets[k] = this.getPlaySeqMappedMagnetsFor(this.magnets[k]);
            if (this.playSeqMagnets[k].length == 0) this.playSeqMagnets[k] = this.copyObj(this.magnets[k]);
        }

        /*
        if (this.parent != null && this.magnets[this.parent.attachPassthrough.pending] != null) {
            this.magParent = this.parent.attachPassthrough.doll;
            this.anchorName = this.parent.attachPassthrough.pending;
            this.anchorTarget = this.parent.attachPassthrough.to;
        }
        if (this.attach != null) {
            this.attachPassthrough = {
                pending: this.attach,
                doll: this.magnets[this.to] == null ? this.parent : this,
                to: this.to
            };
        } else if (
            this.parent != null &&
            this.parent.attachPassthrough.pending != null
        ) {
            this.attachPassthrough = {
                pending: this.parent.attachPassthrough.pending,
                doll: this.parent.attachPassthrough.doll,
                to: this.parent.attachPassthrough.to
            }
        }*/
    }

    /**
     * returns an array with as many duplicate instances of the last magnet instance as required to 
     * match the number of frames on the spritesheet
     * if the input magnet is not specified as an array, wraps it inside of one. 
     * @param {*} m 
     */
    redundifyMagnet = (m) => {
        var result = m;
        if (!Array.isArray(m)) {
            result = [m]
        }
        var count = result.length;
        for (var i = count; i < this.frames; i++) {
            result[i] = this.copyObj(result[count - 1]);
        }
        return result;
    }

    /**given an array of magnets ordered such that each magnet index corresponds to a frame on the spritesheet
     * returns an array of magnets such that each magnet corresponds to the appropriate occurrence of that frame 
     * on the spritesheet in the global_subframe_sequence
     */
    getPlaySeqMappedMagnetsFor = (m) => {
        var result = [];
        for (var i = 0; i < this.global_subframe_sequence.length; i++) {
            result.push(m[this.global_subframe_sequence[i].spriteframe]);
        }
        return result;
    }

    /**
     * returns the first ancestor of this acessory (inclusive with this accessory) containing a magnet 
     * with the given name.
     */
    getFirstAncestorContainingMag = (magName) => {
        if (this.magnets[magName] != null) return this;
        else if (this.parent != null) return this.parent.getFirstAncestorContainingMag(magName);
        else return null;
    }

    setPhase(phase) {
        if (phase != null)
            this.phase = phase;
        this.ensureMagnets();
        this.ensureSeq();
        this.setSubFrameSplit();
        this.setupMagnets();

        for (var k of Object.keys(this.variants)) {
            this.variants[k].setPhase();
        }
        for (var k of Object.keys(this.accessories)) {
            this.accessories[k].setPhase();
        }
    }

    /**stores some of the default parameters loaded from the file for easier resetting */
    storeDefaults() {
        this.default_params = {};
        this.default_params.scale = this.copyObj(selfOr(this.scale, { x: 1, y: 1 }));
        this.default_params.translate = this.copyObj(selfOr(this.translate, { x: 1, y: 1, depth: 0 }));
        this.default_params.filter = this.filter;
        this.default_params.phase = this.phase
        this.default_params.selected_sequence = this.selected_sequence;
    }
    inheritSequencesIfNecessary() {

        if (this.parent != null && this.parent.promulgate_sequence_info) {
            this.promulgate_sequence_info = true;
            if (!(this.inherit_sequence_info === false || this.inherit_sequence_info === "false")) {
                this.inherit_sequence_info = true;
            }
        }

        if (this.parent != null && this.inherit_sequence_info) {
            this.sequences = { ...this.parent.playSequencePassThrough.sequences, ...this.sequences };
            if (this.selected_sequence == null) {
                this.selected_sequence = this.parent.playSequencePassThrough.selected_sequence;
            }
        }
        this.playSequencePassThrough = {
            sequences: this.sequences,
            selected_sequence: this.selected_sequence
        }
        if (this.sequences != null && typeof this.selected_sequence == "string")
            this.selected_sequence = this.sequences[this.selected_sequence];
    }

    constructFrom = async (dollInfoContainer) => {
        var dollInfo = dollInfoContainer.content;
        dollInfo = dollInfo.data != null ? dollInfo.data : dollInfo;
        this.dollInfo = dollInfo;
        this.basePath = dollInfoContainer.basePath;
        this.sequences = {};
        for (var k of Object.keys(dollInfo)) {
            this[k] = this.copyObj(dollInfo[k]);
        }
        this.translate = this.copyObj(selfOr(this.translate, { x: 0, y: 0, depth: 0 }));
        this.scale = this.copyObj(selfOr(this.scale, { x: 1, y: 1 }));
        this.storeDefaults();
        this.inheritSequencesIfNecessary();
        this.accessories = {};
        this.variants = {};

        this.spritesheet = dollInfo.spritesheet;
        this.phase = selfOr(dollInfo.phase, 0);
        if (this.width == null && this.parent != null) {
            this.width = this.parent.width;
        }
        if (this.frames == null && this.parent != null) {
            this.frames = this.parent.frames;
        } else if (this.parent == null && this.frames == null) {
            this.frames = 0;
        }
        this.ensureMagnets();
        //this.resolvedParent = this.getFirstAncestorContainingMag(this.to);
        //if(this.resolvedParent == null) this.getFirstAncestorContainingMag("origin"); 
        //if(this.resolvedParent == this) this.resolvedParent = null;
        this.ensureSeq();
        this.setSubFrameSplit();
        this.setupMagnets();
        if (this.filter == null) this.filter = "";
        if (this.inherit_filter && this.parent != null) {
            if (this.parent.postfilter != null) {
                this.postfilter = this.parent.postfilter + " ";
            }
            this.filter = this.parent.filter + " " + this.filter;
        }

        var holdOff = await this.instantiateSubdollsOf(dollInfo);
        this.idString = "fdoll_accessory_" + loadedDollCount;
        var plus = 0;
        while (idMap[this.idString] != null) {
            plus++;
            this.idString = "fdoll_accessory_" + (loadedDollCount + plus);
        }
        idMap[this.idString] = [];
        idMap[this.idString].push(this);
        //var existingSprite = document.querySelector("#" + this.idString);
        this.ensureSpriteElems();
        if (this.scale == null) {
            this.scale = { x: 1, y: 1 };
        }
        // var complete = await anAwaiter;
        this.unblock();
    }


    ensureSpriteElems = () => {
        var filterString = "";
        if (this.filter != null) {
            filterString += this.filter;
        }
        if (this.postfilter != null) {
            filterString += this.postfilter;
        }

        if (this.spritesheet != null) {
            if (this.spriteElem == null) {
                this.spriteElem = document.createElement("div");

                this.spriteElem.id = this.idString;
                this.spriteElem.forDoll = this;
            }

            if (this.imageElem == null) {
                this.imageElem = document.createElement("img");
            }
            this.imageElem.style.filter = filterString;
            this.spriteElem.classList.add("spritesheet_container");
            if (this.keyFrameElem == null) {
                this.keyFrameElem = document.createElement("style");
                this.keyFrameElem.id = "for_" + this.spriteElem.id;
            }
            if (this.spriteFrameElems == null) {
                this.spriteFrameElem = document.createElement("style");
                this.spriteFrameElem.id = "for_outer_" + this.spriteElem.id;
            }

            //docHead.appendChild(this.keyFrameElem);
            //docHead.appendChild(this.spriteFrameElem);

            if (this.spritesheet != null) {
                this.imageElem.setAttribute("src", this.basePath + this.spritesheet);
                this.spriteElem.appendChild(this.imageElem);
            }
        }

    }

    nameAs = (name) => {
        if (this.spriteElem != null)
            this.spriteElem.setAttribute("data-name", name);
        this.named = name;
        this.amnamed = name;
        //this.activeVariantMap = this.getRootDollActiveVariantMapMapFor(this.getAccessPath());
    }


    /**
     * recursively adds any js files specified in the given dollInfo 
     * if they have not been loaded already and adds 
     * them to the cache to avoid reloading existing files
     */
    instantiateSubdollsOf = async (dollInfo) => {

        if (dollInfo.variants != null) {
            //for (var k of Object.keys(dollInfo.variants)) {

            //this.variants[k].hide();
            //}
            if (dollInfo.selected_variant != null) {
                this.instantiateVariant(dollInfo.selected_variant);
                this.selected_variant = this.variants[dollInfo.selected_variant];
                //this.selected_variant.show();
            } else if (this.dollInfo.variants != null && Object.keys(this.dollInfo.variants).length > 0) {
                for (var k of Object.keys(this.dollInfo.variants)) {
                    this.instantiateVariant(k);
                    this.selected_variant = this.variants[dollInfo.selected_variant];
                    break;
                }
            }
        }
        if (dollInfo.accessories != null) {
            for (var k of Object.keys(dollInfo.accessories)) {
                var acc = dollInfo.accessories[k];
                this.accessories[k] = this.copyObj(acc);
                var anAwaiter = defer();
                this.accessories[k] = new FDoll(this.basePath, k, anAwaiter, this, null, acc);

                var wait = await anAwaiter;
                //this.accessories[k].nameAs(k);
                //this.accessories[k].setParent(this, attachChild, toChild);
                //this.accessories[k].show();
            }
        }
    }

    renderTo = async (elem, requestAnimFrame) => {
        var renderOut = async () => {
            var waitResult = await this.whenReady(defer());
            await this.show();
            var waitResult = await this.computeGlobals();
            this._forceRender(elem);
        };

        if(requestAnimFrame == true) window.requestAnimationFrame(()=>{renderOut()}) 
        else renderOut();
    }

    _forceRender = (elem) => {
        //if(this.spriteElem.parentNode != null)
        this.ensureSpriteElems();
        if (this.spriteElem != null)
            this.spriteElem.remove();
        this._forceRestyle(false);

        for (var k of Object.keys(this.accessories)) {
            this.accessories[k]._forceRender(elem);
        }
        if (this.selected_variant != null) {
            this.selected_variant._forceRender(elem);
        }
        /*for (var k of Object.keys(this.variants)) {
            await this.variants[k]._forceRender(elem);
        }*/
        if (this.spriteElem != null
            && this.spriteElem.parentNode != elem
            && this.visible) {
            if (this.keyFrameElem.parentNode == null)
                docHead.appendChild(this.keyFrameElem);
            if (this.spriteFrameElem.parentNode == null)
                docHead.appendChild(this.spriteFrameElem);

            elem.appendChild(this.spriteElem);
        }
    }

    _forceRestyle = (recursive) => {        
        if (this.visible && this.spritesheet) {
            this.ensureSpriteElems();
            this.spriteElem.style.width = this.drawInfo.width;
            this.spriteElem.style.transform = this.drawInfo.scaling;
            this.spriteElem.style.transformOrigin = this.drawInfo.transformOrigin;
            this.spriteElem.style.zIndex = this.drawInfo.depth;

            var animString = `@keyframes ` + this.spriteFrameElem.id + `outer-anim {
                `;

            for (var i = 0; i < this.global_subframe_sequence.length; i++) {
                var subframe = this.global_subframe_sequence[i];
                var percent = (subframe.spriteframe / this.frames) * 100;
                var time = subframe.play_t;
                var anchorage = "translate(" + this.drawInfo.framed_transforms[i].x + "px, " + this.drawInfo.framed_transforms[i].y + "px)";
                var scaleage = "scale(" + this.globalScale.x + ", " + this.globalScale.y + ")";
                animString += (100 * time) + `% {transform: ` + anchorage + ` ` + scaleage + `;}
                `;
            }
            this.spriteFrameElem.innerText = animString + "}";
            this.spriteElem.style.animationName = this.spriteFrameElem.id + `outer-anim`
            this.spriteElem.style.animationDuration = this.loopSpeed + "ms";
            //this.keyFrameElem.style.animationDuration = FDollGlobals.loopSpeed + "ms";
            this.spriteElem.style.animationTimingFunction = "steps(1)";
            this.spriteElem.style.animationIterationCount = "Infinite";
            this.spriteElem.style.imageRendering = "pixelated";

        }

        if (recursive) {
            for (var k of Object.keys(this.accessories)) {
                this.accessories[k]._forceRestyle(true);
            }
            if (this.selected_variant != null)
                this.selected_variant._forceRestyle(true);
        }
    }

    /**recursively computes all global space style and anchor information 
     * on this FDoll and its children
     * 
     * Logic:
     *  1. compute the global locations of each magnet on this accessory at each frame in its spritesheet
     *      (scale all magnets by parent global scale -> globalMagnets, 
     *       scale all magnets by this scale -> globalMagnets,
     *       translate all globalMagnets by amount required to move global anchor to parent global target -> globalMagnets, 
     *       )
     *  2. determine the frame correspondence between this accessory and the parent accessory
    */
    computeGlobals = () => {
        var waitResult = this.whenReady(defer());

        /*if (this.parent != null) {
            this.playSequencePassThrough = {
                sequence: this.parent.playSequencePassThrough.sequence,
                frameCount: this.playSequencePassThrough.frameCount
            }
        }*/
        this.computeGlobalTransforms();
        this.computeGlobalFrameSequence();

        //for (var k of Object.keys(this.variants)) {
        if (this.selected_variant != null)
            this.selected_variant.computeGlobals();
        //}
        for (var k of Object.keys(this.accessories)) {
            this.accessories[k].computeGlobals();
        }
        /*if(this.selected_variant != null) {
            this.selected_variant.computeGlobals();
        }*/

    }

    /**returns the transforms of all descendants that were skipped due to 
     * magnet passthrough so that scales and translations will still influence
     * children
     */
    getSumOfSkippedTransforms = (upTo) => {
        var transforms = {
            scale: { x: this.scale.x, y: this.scale.y },
            translate: { x: this.translate.x, y: this.translate.y, depth: this.translate.depth }
        };
        /*if() {
            transforms = {
                scale : {x: 1, y: 1},
                translate: {x: 0, y:0, depth: 0}
            }
        }*/
        if (upTo == this.parent || this.parent == null) {

        } else if (upTo == this) {
            transforms = {
                scale: { x: 1, y: 1 },
                translate: { x: 0, y: 0, depth: 0 }
            }
        }
        else {
            var parTransforms = this.parent.getSumOfSkippedTransforms(upTo);
            transforms.scale.x *= parTransforms.scale.x;
            transforms.scale.y *= parTransforms.scale.y;
            transforms.translate.x += parTransforms.scale.x * parTransforms.translate.x
            transforms.translate.y += parTransforms.scale.y * parTransforms.translate.y
            transforms.translate.depth += parTransforms.translate.depth;

        }
        return transforms;

    }

    /**
     * computes the appropriate translation, scale, and z-index for this elements 
     * spritesheet for global rendering, 
     * 
     * composition order is 
     * 
     * first translate, then scale. 
     */
    computeGlobalTransforms = () => {
        this.globalDepth = 0;
        var resolvedAnchorTarget = this.anchorTarget == null ? "origin" : this.anchorTarget;
        var resolvedAnchorName = this.anchorName == null ? "origin" : this.anchorName;
        if (this.parent == null) {
            var parGlobalScale = { x: 1, y: 1 };
            var globalParTranslate = { x: 0, y: 0, depth: 0 };
            //this.globalScale = this.copyObj(this.scale);
            this.globalPlaySeqMagnets = this.copyObj(this.playSeqMagnets);
            this.resolvedParent = this;
            var globalParMagnet = this.copyObj(this.playSeqMagnets[resolvedAnchorTarget]);
            var parGlobalARMS = this.copyObj(this.playSeqMagnets);
            this.globalDepth = this.translate.depth;
            this.globalScale = this.copyObj(this.scale);
        } else {
            this.resolvedParent = this.resolvedParent == null ? this.parent : this.resolvedParent;
            var parGlobalScale = this.resolvedParent.globalScale;
            var globalParTranslate = this.resolvedParent.globalTranslate;
            this.globalScale = this.mult(this.scale, parGlobalScale);
            var globalParMagnet = this.resolvedParent.globalPlaySeqMagnets[resolvedAnchorTarget];
            var parGlobalARMS = this.resolvedParent.globalARMS;
            this.globalDepth = this.parent.globalDepth + this.translate.depth;
        }


        //if(this.parent != this.resolvedParent) 
        this.accruedTransforms = this.getSumOfSkippedTransforms(this.resolvedParent);
        this.globalScale.x = this.accruedTransforms.scale.x * parGlobalScale.x;
        this.globalScale.y = this.accruedTransforms.scale.y * parGlobalScale.y;

        this.anchorRelativeMagnets = {};
        var anchor = this.playSeqMagnets[resolvedAnchorName];
        for (var k of Object.keys(this.playSeqMagnets)) {
            var arm = [];
            for (var frame = 0; frame < this.playSeqMagnets[k].length; frame++) {
                var anchorFrame = anchor[frame];
                var magFrame = this.playSeqMagnets[k][frame];
                var armf = {};
                armf.x = magFrame.x - anchorFrame.x;
                armf.y = magFrame.y - anchorFrame.y;
                armf.depth = magFrame.depth - anchorFrame.depth;
                arm.push(armf);
            }
            this.anchorRelativeMagnets[k] = arm;
        }

        var localArms = {};
        for (var k of Object.keys(this.anchorRelativeMagnets)) {
            var l_arm = [];
            for (var frame = 0; frame < this.anchorRelativeMagnets[k].length; frame++) {
                var armf = this.anchorRelativeMagnets[k][frame];
                var l_armf = {};
                l_armf.x = (armf.x * this.accruedTransforms.scale.x) + this.accruedTransforms.translate.x;
                l_armf.y = (armf.y * this.accruedTransforms.scale.y) + this.accruedTransforms.translate.y;
                l_armf.depth = armf.depth + this.accruedTransforms.translate.depth; //armf.depth;
                l_arm.push(l_armf);
            }
            localArms[k] = l_arm;
        }

        this.globalPlaySeqMagnets = {};

        for (var k of Object.keys(localArms)) {
            var g_arm = [];
            for (var frame = 0; frame < localArms[k].length; frame++) {
                var targetIdx = this.global_subframe_sequence[frame].par_subframe_idx;
                if (this.resolvedParent != this)
                    var targetMagnet = this.resolvedParent.globalPlaySeqMagnets[resolvedAnchorTarget][targetIdx];
                else
                    var targetMagnet = { x: 0, y: 0, depth: 0 };

                var l_armf = localArms[k][frame];
                var g_armf = {};
                g_armf.x = (l_armf.x * parGlobalScale.x) + targetMagnet.x;
                g_armf.y = (l_armf.y * parGlobalScale.y) + targetMagnet.y;
                g_armf.depth = l_armf.depth + targetMagnet.depth;
                g_arm.push(g_armf);
            }
            this.globalPlaySeqMagnets[k] = g_arm;
        }

        this.drawInfo = {
            width: (this.width / this.frames) + "px",
            depth: this.globalPlaySeqMagnets[resolvedAnchorName][0].depth,// + this.translate.depth,
            scaling: "scale(" + this.globalScale.x + ", " + this.globalScale.y + ")",
            framed_transforms: this.globalPlaySeqMagnets["origin"], //"translate(" + xDelta + "px, " + yDelta + "px) scale(" + this.globalScale.x + ", " + this.globalScale.y + ")",
            transformOrigin: "top left"
        }
    }

    /**
     * set a css filter on this accessory or variant 
     * (note, filter effect does not automatically propogate to children
     * unless the children have their "inherit_filter" property set to true);
     * 
    */
    setFilter(filter, exclusiveMode) {
        this.postfilter = filter;
        if (!exclusiveMode) {
            if (this.parent != null && Object.keys(this.parent.variants).length != 0) {
                this.parent.setFilter(filter, true);
                return;
            } else {
                this.setFilter(filter, true);
            }
        } else {
            this.ensureSpriteElems(); /*setting of postfilter handled by ensureSpriteElem*/

            //if (this.spritesheet != null) {
            //  this.imageElem.style.filter = this.postfilter;
            //}
            for (var k of Object.keys(this.accessories)) {
                var acc = this.accessories[k];
                if (acc.inherit_filter)
                    acc.setFilter(filter, true);
            }
            for (var k of Object.keys(this.variants)) {
                var vari = this.variants[k];
                if (vari.inherit_filter)
                    vari.setFilter(filter, true);
            }
        }
    }



    /**
     * adds the given filter to the filter stack without replacing previous filters
     * @param {String} filter 
     * @param {boolean} exclusiveMode 
     */
    pushFilter(filter, exclusiveMode) {

    }

    /**
     * translates the entire doll so that the magnet given magnet on this accessory aligns with 
     * the given magnet on the target doll accessory. Use this if you want to (for example) make dolls hold hands.
     * 
     * @param {*} thisMagnetName 
     * @param {*} targetDoll
     * @param {*} targetMagnetName 
     */
    dragBy(thisMagnetName, targetDoll, targetMagnetName) {
        var thisVariant = this.getCurrentVariant();
        var descendantContainer = thisVariant.magnets[thisMagnetName] == null ? null : thisVariant;
        if (descendantContainer == null)
            descendantContainer = thisVariant.findDescendantContainingMagnet(thisMagnetName);
        this.boundedMove(thisMagnetName, descendantContainer, targetDoll, targetMagnetName, this.findDollRoot());
    }

    /**
     * similar to dragBy, but affect only this accessory. 
     * (meaning you can drag an arm so its hand aligns with a certain spot, without having to drag the entire doll)
     * @param {*} thisMagnetName 
     * @param {*} targetDoll 
     * @param {*} targetMagnetName 
     */
    accessoryDragBy(thisMagnetName, targetDoll, targetMagnetName) {
        var thisVariant = this.getCurrentVariant();
        var descendantContainer = thisVariant.magnets[thisMagnetName] == null ? null : thisVariant;
        if (descendantContainer == null)
            descendantContainer = thisVariant.findDescendantContainingMagnet(thisMagnetName);
        this.boundedMove(thisMagnetName, descendantContainer, targetDoll, targetMagnetName, this);
    }

    boundedMove(thisMagnetName, thisMagnetContainer, targetDoll, targetMagnetName, dragAncestor) {


        var targetDollVariant = targetDoll.getCurrentVariant()
        var targetDollMag = targetDollVariant.findDescendantContainingMagnet(targetMagnetName);

        //for(var i=0; i<10; i++) {
        var magnetLoc = thisMagnetContainer.globalPlaySeqMagnets[thisMagnetName][0];
        var targetLoc = targetDollMag.globalPlaySeqMagnets[targetMagnetName][0];
        var magnetDelta = { x: targetLoc.x - magnetLoc.x, y: targetLoc.y - magnetLoc.y }
        console.log("moving from: (" + dragAncestor.translate.x + ", " + dragAncestor.translate.y + ")");
        console.log("moving to: (" + (dragAncestor.translate.x + magnetDelta.x) + ", " + (dragAncestor.translate.y + magnetDelta.y) + ")");
        console.log("moving by: (" + magnetDelta.x + ", " + magnetDelta.y + ")");

        dragAncestor.translate.x += magnetDelta.x;
        dragAncestor.translate.y += magnetDelta.y;
        dragAncestor.computeGlobals();
        magnetLoc = thisMagnetContainer.globalPlaySeqMagnets[thisMagnetName][0];
        console.log("resulted in: (" + magnetLoc.x + ", " + magnetLoc.y + ")");
        console.log("-----");
        //}

        /**todo, figure out why this ends up with precision issues */

        //console.log("-----");
        //console.log("-----");
        //console.log("-----");

    }

    /**returns the highest level doll */
    findDollRoot() {
        if (this.parent == null) return this;
        else if (this.rootDoll != null) return this.rootDoll;
        else return this.parent.findDollRoot();
    }

    findDescendantContainingMagnet(magnetName) {
        if (this.magnets[magnetName] != null) {
            return this;
        } else {
            var result = null;
            for (var k of Object.keys(this.accessories)) {
                result = this.accessories[k].findDescendantContainingMagnet(magnetName);
                if (result != null) return result;
            }
            if (this.selected_variant != null) {
                return this.selected_variant.findDescendantContainingMagnet(magnetName);
            } else {
                for (var k of Object.keys(this.variants)) {
                    result = this.variants[k].findDescendantContainingMagnet(magnetName);
                    if (result != null) return result;
                }
            }
            return null;
        }
    }

    /**
     * (advanced users only) allows you to specify a custom css attribute and value to the 
     * accessory / its variants. The result will only be applied to the immediate accessories/variants 
     * that have a spritesheet. 
     * 
     * The css attribute must be provided in camelcase.
     * so something like "background-color" should be given as "backgroundColor"
     * and any values should be given as strings.
     * 
     * @param {String} ruleName the name of the attribute
     * @param {String} value the value to apply
     * @param {*} exclusiveMode IGNORE THIS AND DON'T PROVIDE A THIRD ARGUMENT 
     */
    customCSSRule(ruleName, value, exclusiveMode) {
        if (!exclusiveMode) {
            if (this.parent.variants.length != 0) {
                this.parent.setFilter(ruleName, value, true);
                return;
            }
        } else {
            if (this.spritesheet == null) {
                for (var k of Object.keys(this.accessories)) {
                    this.accessories[k].setFilter(ruleName, value, true);
                }
                for (var k of Object.keys(this.variants)) {
                    this.variants[k].setFilter(ruleName, value, true);
                }
            } else {
                this.imageElem.style[ruleName] = value;
            }
        }
    }




    /**
     * returns the active variant of the specified accessory on this doll or accessory. 
     * (if the accessory is multiple accessories deep, this function will return the first active
     * instance of that accessory it finds)
     * if the accessory has no variants, returns the accessory itself. 
     * if the accessory has variants, returns the accessory itself. 
     * @param {String} accessory 
     */
    getAccessory = (accessory) => {
        var searched = this.findFirstAccessory(accessory);
        var result = null;
        if (searched != null)
            result = searched.getCurrentVariant();
        if (result != null) return result;
        else if (searched != null) {
            var accessoryPath = searched != null ? searched.generateDebugString() : this.generateDebugString();
            alert(
                `Error: No selected_variant specified for: 
    `+ accessoryPath + `

in directory: 
    ` + this.basePath + `.`);
            return null;
        } else {
            console.warn("requested accessory: '" + accessory + '" not found on this armature');
        }


        /*var accessoryOfVariant = currentVariant.accessories[accessory];
        var variantOfAccessoryOfVariant = accessoryOfVariant.getCurrentVariant();
        return variantOfAccessoryOfVariant;
        if(Object.keys(this.variants).length == 0) {
            return this.accessories[accessory].getCurrentVariant(); 
        } else {
            return this.selected_variant;
        }*/
    }

    generateDebugString = () => {
        var path = "";
        if (this.parent != null) {
            path += this.parent.generateDebugString() + ".";
        }
        path += "" + (this.named == undefined ? "_" : this.named);
        return path;
    }


    /**finds the first instance of the specified accessory
     * which is a descendant of this variant or accessory. 
     * (will only search through the chain of selected_variants)
     */
    findFirstAccessory = (accessory) => {

        if (Object.keys(this.accessories).length > 0) {
            if (this.accessories[accessory] != null) {
                return this.accessories[accessory];
            } else {
                for (var k of Object.keys(this.accessories)) {
                    var result = this.accessories[k].findFirstAccessory(accessory)
                    if (result != null)
                        return result;
                }
            }
        } else if (this.selected_variant != null) {
            return this.selected_variant.findFirstAccessory(accessory);
        }
    }

    /**
     * returns the currently active variant of this accessory. 
     * if this accessory has no variants, returns this accessory.
     * if this accessory has variants but none are selected, returns null;
     */
    getCurrentVariant = () => {
        if (this.dollInfo.variants == null || Object.keys(this.dollInfo.variants).length == 0) {
            return this;
        } else {
            return this.selected_variant;
        }
    }



    /**
     * computes the appropriate css animation for cycling through this spritesheet
     */
    computeGlobalFrameSequence = () => {
        //var waitResult = await this.whenReady(defer());

        if (this.visible && this.spritesheet != null) {
            var frameWidth = this.width / this.frames;
            var animString = `@keyframes ` + this.keyFrameElem.id + `-anim {
                `;
            for (var i = 0; i < this.global_subframe_sequence.length; i++) {
                var subframe = this.global_subframe_sequence[i];
                var percent = (subframe.spriteframe / this.frames) * 100;
                var time = subframe.play_t;
                //var anchorage = "translate(" + this.drawInfo.framed_transforms[i].x + "px, " + this.drawInfo.framed_transforms[i].y + "px)";
                //var scaleage = "scale(" + this.globalScale.x + ", " + this.globalScale.y + ")";
                animString += (100 * time) + `% {transform: translateX(-` + percent + `%) ;}
                `;
            }
            this.keyFrameElem.innerText = animString + "}";
            this.imageElem.style.animationName = this.keyFrameElem.id + `-anim`
            this.imageElem.style.animationDuration = this.loopSpeed + "ms";
            this.imageElem.style.animationTimingFunction = "steps(1)";
            this.imageElem.style.animationIterationCount = "Infinite";
            this.imageElem.style.imageRendering = "pixelated";
        }
    }

    addPhase(interp, shiftBy) {
        var result = [];
        for (var i = 0; i < interp.length; i++) {
            var modded = mod((i - shiftBy), interp.length);
            result.push(interp[modded]);
        }
        return result;
    }

    /**
     * Given a play sequence for this spritesheet, and a play sequence of an ancestor
     * spritesheet
     * @param {*} thisSequence 
     * @param {*} parentSequence 
     * @param {*} progress 
     */
    getInterpoSnappedSequence = (thisSequence, thisFrameTotal, parentSequence, parFrameTotal) => {
        var sortedThis = thisSequence.sort((a, b) => a - b);
        var sortedParent = parentSequence != null ? parentSequence.sort((a, b) => a - b) : null;
        var grouped = [];
        var result = [];
        for (var i = 0; i < thisSequence.length; i++) {
            grouped.push({ frame: thisSequence[i] / thisFrameTotal, parent: "me" });
        }
        if (parentSequence == null) {
            for (var i = 0; i < thisSequence.length; i++) {
                result.push(grouped[i].frame);
            }
            return result;
        }
        for (var i = 0; i < parentSequence.length; i++) {
            grouped.push({ frame: parentSequence[i] / parFrameTotal, parent: "parent" });
        }
        groupedAll.sort((a, b) => a.frame - b.frame);


        function pushUntil(val, of, from, direction) {
            var ct = 0;
            for (var i = from; ct < groupedAll.length; i += direction) {
                if (groupedAll[i].frame == val && groupedAll[i].parent == of) {
                    break;
                } else {
                    result.push(groupedAll[i].val);
                }
                ct++;
            }
        }
        var lastVal = parentSequence[0];
        var lastIndex = 0;
        for (var i = 1; i < parentSequence.length; i++) {
            var targetVal = parentSequence[i];
            var direction = targetVal - lastVal > 0 ? 1 : 0;
            pushUntil(targetVal, "parent", lastIndex, direction);
            lastIndex = i;
            lastVal = targetVal;
        }
        return result;
    }

    hide = async () => {
        var waitResult = await this.whenReady(defer());
        this.visible = false;

        //this.spriteElem.classList.add("hidden");
        if (this.spriteElem != null)
            this.spriteElem.remove();
        this.spriteElem = null;

        if (this.spriteFrameElem != null)
            this.spriteFrameElem.remove();
        this.spriteFrameElem = null;

        if (this.imageElem != null)
            this.imageElem.remove();
        this.imageElem = null;

        if (this.keyFrameElem != null)
            this.keyFrameElem.remove();
        this.keyFrameElem = null;

        if (this.selected_variant != null) {
            this.selected_variant.hide();
        }
        for (var k of Object.keys(this.accessories)) {
            this.accessories[k].hide();
        }

    }

    show = async () => {
        var waitResult = await this.whenReady(defer());
        this.visible = true;
        if (this.spritesheet != null) {
            this.ensureSpriteElems();
            this.spriteElem.classList.remove("hidden");
            //this.spriteElem.appendChild(this.imageElem);
        }
        if (this.selected_variant != null) {
            await this.selected_variant.show();
        }

        if (this.variants != null) {
            for (var k of Object.keys(this.variants)) {
                if (this.variants[k] != this.selected_variant)
                    this.variants[k].hide();
            }
        }
        for (var k of Object.keys(this.accessories)) {
            await this.accessories[k].show();
        }
    }

    /**
     * displays the given variant of this FDoll as the active one. 
     * Unless any descendant accessories wll also have their selected variant 
     * set to the given variant 
     * @param {String} variantName the nae of the variant to set on the doll. 
     * note that by default any descendant accessories that contain a variant of the 
     * same name will also have that varant selected. To prevent this, set "noRecurse" 
     * to true
     * @param {Boolean} noRecurse if set to true, will not attempt to set the variant on
     * any qualifiying descendants
     */
    setVariant = async (variantName, noRecurse, isRecursed) => {
        //var waitResult = await this.whenReady(defer());

        if (variantName == null) {
            this.hide();
        }
        else if (!isRecursed && this.parent != null && Object.keys(this.parent.variants).length > 0) {
            await this.parent.setVariant(variantName, noRecurse, true);
        } else {
            //this.updateRequestedVariantMap(variantName);
            await this.ensureVariant(variantName);
            this.updateRequestedVariantMap(variantName);

            for (var k of Object.keys(this.variants)) {
                if (!noRecurse) {
                    await this.variants[k].setVariant(variantName, noRecurse, true);
                }
                if (this.variants[variantName] != null)
                    this.variants[k].hide();
            }
            if (!noRecurse) {
                for (var k of Object.keys(this.accessories)) {
                    await this.accessories[k].setVariant(variantName, noRecurse, true);
                }
            }

        }
        var chosenVariant = this.variants[variantName];
        if (this.variants[variantName] != null) {
            this.selected_variant = this.variants[variantName];
            this.a_selected_variant_name = variantName;
            if (this.visible)
                this.selected_variant.show();
        }

        /*if (!isRecursed) {
            var waitResult = this.computeGlobals();
            this._forceRestyle(true);
        }*/
    }


    getAccessPath = () => {
        if (this.parent == null) {
            return [];
        } else if (this.parent.selected_variant == this) {
            return this.parent.getAccessPath();
        } else if (this.parent != null && Object.keys(this.parent.accessories).length > 0
            && this.parent.accessories[this.named] != null) {
            var parAccPath = this.parent.getAccessPath();
            parAccPath.push(this.named);
            return parAccPath;
        } else {
            return [];
        }
    }

    updateRequestedVariantMap = (variantName) => {
        
        //if (this.named != null) {
            if (this.activeVariantMap == null) {
                this.activeVariantMap = {};//this.getRootDollActiveVariantMapMapFor(this.getAccessPath());
            }
        //}
        if (this.dollInfo.variants != null
            && this.dollInfo.variants[variantName] != null) {
            if (this.selected_variant != null)
                delete this.activeVariantMap[this.selected_variant.named];
        }
        this.activeVariantMap[variantName] = true;
    }

    /*getRootDollActiveVariantMapMapFor = (objectPath) => {
        var rootDoll = this.findDollRoot();
        this.rootDoll = rootDoll; 
        if (rootDoll.activeVariantMap == null) rootDoll.activeVariantMap = { __a: {}, active: {}};
        var rootMap = rootDoll.activeVariantMap;
        var currentMap = rootMap;
        for (var i = 0; i < objectPath.length; i++) {
            if (currentMap["__a"][objectPath[i]] == null) currentMap["__a"][objectPath[i]] = { __a: {}, active: {} };
            currentMap = currentMap["__a"][objectPath[i]];
        }
        return currentMap;
    }*/


    /**
     * lazy loading optimization. Variants will not be loaded until required. 
     * This checks whether or not the requested variant is both specified and instantiated 
     * on this accessory. If it is specified but not instantiated, it instantiates it. 
     *  
     */
    ensureVariant = async (variantName) => {
        if (this.dollInfo.variants != null &&
            this.dollInfo.variants[variantName] != null
            && this.variants[variantName] == null) {
            await this.instantiateVariant(variantName);
        }
    }

    instantiateVariant = async (variantName) => {
        var variant = this.dollInfo.variants[variantName];
        var anAwaiter = defer();
        this.variants[variantName] = new FDoll(this.basePath, variantName, anAwaiter, this, null, variant);
        //this.variants[k].setParent(this, attachChild,  toChild);
        var wait = await anAwaiter;
        //this.variants[variantName].nameAs(variantName);
        this.updateRequestedVariantMap(variantName);
        
        for (var k of Object.keys(this.activeVariantMap)) {
            await this.variants[variantName].setVariant(k);
        }
    }


    copyObj(obj) {
        if (typeof obj != "function") {
            return JSON.parse(JSON.stringify(obj));
        } else {
            return obj;
        }
        /*if(typeof obj == "object" || typeof obj == "array") {
            var copy = {...{}, ...obj}; 
            return copy;
        } else {
            var copy =  obj;
            return copy;
        }*/
    }

    /**
     * multiplies the values of the keys in set 1 
     * by the values of the same keys in set 2 and returns 
     * the resulting set of values in a set with the same key names.  
     * @param {*} set1 
     * @param {*} set2 
     */
    mult(set1, set2) {
        var result = {};
        for (var k of Object.keys(set1)) {
            if (set2[k] != null) {
                result[k] = set1[k] * set2[k];
            }
        }
        return result;
    }

    /**
    * adds the values of the keys in set 1 
    * to the values of the same keys in set 2 and returns 
    * the resulting set of values in a set with the same key names.  
    * @param {*} set1 
    * @param {*} set2 
    */
    add(set1, set2) {
        var result = {};
        for (var k of Object.keys(set1)) {
            if (set2[k] != null) {
                result[k] = set1[k] + set2[k];
            }
        }
        return result;
    }
}

function mod(num, by) {
    return ((num % by) + by) % by;
};


/*convenience functon. returns val if val !=null, otherwise returns ifnull*/
function selfOr(vall, ifnull) {
    return vall == null ? ifnull : vall;
}


var loadBlockers = {};



var baseStyles = document.createElement("style");
baseStyles.innerText =
    `
 .spritesheet_container {
    overflow-x: hidden;
    overflow-y: hidden;
    position: absolute;`+
    //border-style: solid; 
    //border-color: red;
    //border-width: 2px;
    `}

 .hidden {
     display: none;
 }
 `;

docHead.appendChild(baseStyles);
