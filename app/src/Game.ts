import { GameField } from "./GameField";
import { Marbel } from "./Marbel";
import { OrientationManager } from "./OrientationManager";
import { Scoreboard } from "./Scoreboard";


export class Game {

    gameField: GameField;
    marbel: Marbel;
    scoreboard: Scoreboard;
    ctx: any;

    orientationManager: OrientationManager =  OrientationManager.instance();

    isRunning: Boolean = false;
    startTime: number | null = null;

    lastOrientation = {ftb: 0, ltr: 0}
    lastWorked = true;

    constructor(gameField: GameField, marbel: Marbel, scoreboard: Scoreboard, ctx: any) {
        this.gameField = gameField;
        this.marbel = marbel;
        this.scoreboard = scoreboard;
        this.ctx = ctx;
    };

    stopGame() {
        console.log("stop the game");
        this.startTime = null;
        this.isRunning = false;

        this.orientationManager.stopListening(this.moveMarbel);
        
        //this.marbel.resetMarbel();
        //this.gameField.draw();
        //this.marbel.draw();
        const canvas = document.getElementById("mycanvas")!;
        const menu = document.getElementById("menu")!;
        canvas.style.display = "none";
        menu.style.display = "inline";
    };

    startGame(): Boolean {
        console.log("start the game");
        this.isRunning = true;

        this.orientationManager.askPermission( (callback: null | Error ) => {
            if (callback != null) {
                console.log("no permission granted");
                return false
            } else {
                console.log("permission granted");
                this.gameField.draw();
                this.marbel.resetMarbel();
                this.marbel.draw();
                this.orientationManager.startListening(this.moveMarbel.bind(this));
                this.startTime = performance.now();
            }
        });
        console.log("return");
        return true
    };

    // TODO: this.marbel can't be used so marbel from Main.ts is used
    moveMarbel(frontToBack: number, leftToRight: number, rotateDegrees: number) {
    //document.getElementById('gyro-data').innerHTML = "rotateDegrees: " + rotateDegrees + ", lefToRight: " + leftToRight + ", frontToBack: " + frontToBack;
        console.log("handle orientation event");
        console.log("leftToRight: " + leftToRight + ", frontToBack: " + frontToBack);
        leftToRight *= 1;
        frontToBack *= 1;

        let mx = this.marbel.x + leftToRight;
        let my = this.marbel.y + frontToBack;

        console.log("mx: " + mx + ", my: " + my);

        if (this.gameField.isInPath(mx, my, this.marbel.radius)
        && (this.lastWorked == true 
            || leftToRight/Math.abs(leftToRight) != this.lastOrientation.ltr 
            || frontToBack/Math.abs(frontToBack) != this.lastOrientation.ftb)
        ) { 
            this.marbel.x = mx;
            this.marbel.y = my;

        } else if (this.gameField.isInPath(this.marbel.x, my, this.marbel.radius) 
        && (this.lastWorked == true 
            || leftToRight/Math.abs(leftToRight) != this.lastOrientation.ltr 
            || frontToBack/Math.abs(frontToBack) != this.lastOrientation.ftb)
        ) {    
            this.marbel.y = my;

        } else if (this.gameField.isInPath(mx, this.marbel.y, this.marbel.radius) 
        && (this.lastWorked == true 
            || leftToRight/Math.abs(leftToRight) != this.lastOrientation.ltr 
            || frontToBack/Math.abs(frontToBack) != this.lastOrientation.ftb)
        ) {
            this.marbel.x = mx;
            
        } else {
            this.lastOrientation = {ftb: frontToBack/Math.abs(frontToBack), ltr: leftToRight/Math.abs(leftToRight)};
            this.lastWorked = false;

            console.log("not in path");

            return
        }

        this.lastWorked = true;
        this.gameField.drawForeground();
        this.marbel.draw();
        this.checkForLose();
        this.checkForWin();
    };

    private checkForLose() {
        console.log("holes: " + this.gameField.holes);
        for (var i = 0; i < this.gameField.holes.length; i++) {
            if (this.ctx.isPointInPath(this.gameField.holes[i], this.marbel.x, this.marbel.y) && this.isRunning) {
                this.stopGame();
                break;
            } else if (!this.isRunning) {
                break;
            }
        }
    };


    private checkForWin() {
        console.log("goal: " + this.gameField.goal);
        if (this.ctx.isPointInPath(this.gameField.goal, this.marbel.x, this.marbel.y) && this.isRunning) {
            const endtime = performance.now();
            const time = endtime - this.startTime;
            console.log(`won game in: ${time}`);

            this.stopGame();
            
            this.saveScore(time);  
        }
    };

    private saveScore(time: number) {
        this.scoreboard.newScore(time / 1000);
    };
}