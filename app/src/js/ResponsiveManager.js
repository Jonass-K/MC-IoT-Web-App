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
        console.log("comp w: " + this.w);
        this.h = parseInt(computedCanvas.getPropertyValue("height"), 10) * this.scale;
        console.log("comp h: " + this.h);
        //if (this.w < 681 && this.h < 1468) {
        //    this.w = 681;
        //   this.h = 1468;
        //}
        this.canvas.width = this.w;
        this.canvas.height = this.h;
        //  this.button.style.width = this.w / this.scale + "px";
    }
    ;
}
ResponsiveManager.inst = null;
//# sourceMappingURL=ResponsiveManager.js.map