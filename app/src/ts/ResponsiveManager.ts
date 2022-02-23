class ResponsiveManager {

    static inst: ResponsiveManager | null = null;

    w: number = 1;
    h: number = 1;
    canvas = document.getElementById("mycanvas")!;
    button = document.getElementById("button")!;
    private scale: number = 1;

    private constructor() {
        this.setProp();
    }

    static instance(): ResponsiveManager {
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

        this.h = this.h - 20;
        this.w = this.h * (335/722);

        //if (this.w < 681 && this.h < 1468) {
        //    this.w = 681;
        //    this.h = 1468;
        //}
        //this.canvas.style.width = String(this.w);


        (this.canvas as any).width = this.w;
        (this.canvas as any).height = this.h;
        
      //  this.button.style.width = this.w / this.scale + "px";
    };
}