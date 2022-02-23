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
        this.h = parseInt(computedCanvas.getPropertyValue("height"), 10) * this.scale;
        console.log("computational w: " + this.w + ", h: " + this.h);

        this.h = this.h - 20;
        this.w = this.h * (335/722);
        
        (this.canvas as any).width = this.w;
        (this.canvas as any).height = this.h;
    };
}