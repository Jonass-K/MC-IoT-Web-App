"use strict";
class ResponsiveManager {
    constructor() {
        this.w = 1;
        this.h = 1;
        this.canvas = document.getElementById("mycanvas");
        this.button = document.getElementById("button");
        this.scale = 1;
        this.setProp();
    }
    static instance() {
        if (this.inst == null) {
            this.inst = new ResponsiveManager();
        }
        return this.inst;
    }
    setProp() {
        console.log("set proportions");
        const computedCanvas = getComputedStyle(this.canvas);
        this.w = parseInt(computedCanvas.getPropertyValue("width"), 10) * this.scale;
        this.h = parseInt(computedCanvas.getPropertyValue("height"), 10) * this.scale;
        console.log("computational w: " + this.w + ", h: " + this.h);
        this.h = this.h - 20;
        this.w = this.h * (335 / 722);
        this.canvas.width = this.w;
        this.canvas.height = this.h;
    }
    ;
}
ResponsiveManager.inst = null;
//# sourceMappingURL=ResponsiveManager.js.map