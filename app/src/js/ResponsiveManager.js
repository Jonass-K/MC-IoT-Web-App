"use strict";
class ResponsiveManager {
    constructor() {
        this.canvas = document.getElementById("mycanvas");
        this.button = document.getElementById("button");
        this.scale = 1;
        console.log("set proportions");
        const computedCanvas = getComputedStyle(this.canvas);
        this.w = parseInt(computedCanvas.getPropertyValue("width"), 10) * this.scale;
        this.h = parseInt(computedCanvas.getPropertyValue("height"), 10) * this.scale;
        let innerWidth = window.innerWidth;
        if (innerWidth / this.h > 335 / 722
            && window.innerWidth / this.h < 550 / 722) {
            this.w = innerWidth * 0.9;
        }
        this.canvas.width = this.w;
        this.canvas.height = this.h;
        this.button.style.width = this.w / this.scale + "px";
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
        let innerWidth = window.innerWidth;
        if (innerWidth / this.h > 335 / 722
            && window.innerWidth / this.h < 550 / 722) {
            this.w = innerWidth * 0.9;
        }
        this.canvas.width = this.w;
        this.canvas.height = this.h;
        this.button.style.width = this.w / this.scale + "px";
    }
    ;
}
ResponsiveManager.inst = null;
//# sourceMappingURL=ResponsiveManager.js.map