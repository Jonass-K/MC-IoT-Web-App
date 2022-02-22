class ResponsiveManager {

    static inst: ResponsiveManager | null = null;

    w: number;
    h: number;
    canvas = document.getElementById("mycanvas")!;
    button = document.getElementById("button")!;
    private scale: number = 1;

    private constructor() {
        console.log("set proportions");

        const computedCanvas = getComputedStyle(this.canvas);
        this.w = parseInt(computedCanvas.getPropertyValue("width"), 10) * this.scale;
        this.h = parseInt(computedCanvas.getPropertyValue("height"), 10) * this.scale;

        let innerWidth = window.innerWidth;
            
        if (innerWidth / this.h > 335/722 
            && window.innerWidth / this.h < 550/722) {
            
            this.w = innerWidth * 0.9;
        }

        (this.canvas as any).width = this.w;
        (this.canvas as any).height = this.h;
        this.button.style.width = this.w / this.scale + "px";
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

        let innerWidth = window.innerWidth;
            
        if (innerWidth / this.h > 335/722 
            && window.innerWidth / this.h < 550/722) {
            
            this.w = innerWidth * 0.9;
        }
        
        (this.canvas as any).width = this.w;
        (this.canvas as any).height = this.h;
        
        this.button.style.width = this.w / this.scale + "px";
    };
}