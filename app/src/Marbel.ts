import { ResponsiveManager } from "./ResponsiveManager";

export class Marbel {

    responsiveManager: ResponsiveManager;
    
    ctx: any;

    x: number = 0;
    y: number = 0;
    radius: number = 0;

    constructor(ctx: any, responsiveManager: ResponsiveManager) {
        this.responsiveManager = responsiveManager;
        
        this.ctx = ctx;

        this.resetMarbel();
    }

    resetMarbel() {
        this.x = 0.8447761194 * this.responsiveManager.w;
        this.y = 0.9681440443 * this.responsiveManager.h;
        this.radius = 0.01254570637 * this.responsiveManager.h;
    }

    draw() {
        var circle = new Path2D();
        circle.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        circle.closePath();

        this.ctx.fillStyle = "white";
        this.ctx.fill(circle);

        return circle;
    }
}