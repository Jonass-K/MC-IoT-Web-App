"use strict";
class Game {
    constructor(gameField, marbel) {
        this.orientationManager = OrientationManager.instance();
        this.isRunning = false;
        this.startTime = null;
        this.lastOrientation = { ftb: 0, ltr: 0 };
        this.lastWorked = true;
        this.gameField = gameField;
        this.marbel = marbel;
    }
    ;
    stopGame() {
        console.log("stop the game");
        this.isRunning = false;
        this.orientationManager.stopListening();
        //document.getElementById('button-text').innerHTML = "CLICK TO START";
        this.marbel.resetMarbel();
        this.gameField.draw();
        this.marbel.draw();
    }
    ;
    startGame() {
        console.log("start the game");
        this.isRunning = true;
        this.orientationManager.askPermission((callback) => {
            if (callback != null) {
                console.log("no permission granted");
                return false;
            }
            else {
                console.log("permission granted");
                this.gameField.draw();
                this.marbel.resetMarbel();
                this.marbel.draw();
                this.orientationManager.startListening(this.moveMarbel.bind(this));
                this.startTime = performance.now();
            }
            /* TODO: hier noch ein menu generell einzeln machen
            button.style.display = "none";

            this.gameField.setProp();
            */
        });
        console.log("return");
        return true;
    }
    ;
    // TODO: this.marbel can't be used so marbel from Main.ts is used
    moveMarbel(frontToBack, leftToRight, rotateDegrees) {
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
                || leftToRight / Math.abs(leftToRight) != this.lastOrientation.ltr
                || frontToBack / Math.abs(frontToBack) != this.lastOrientation.ftb)) {
            this.marbel.x = mx;
            this.marbel.y = my;
        }
        else if (this.gameField.isInPath(this.marbel.x, my, this.marbel.radius)
            && (this.lastWorked == true
                || leftToRight / Math.abs(leftToRight) != this.lastOrientation.ltr
                || frontToBack / Math.abs(frontToBack) != this.lastOrientation.ftb)) {
            this.marbel.y = my;
        }
        else if (this.gameField.isInPath(mx, this.marbel.y, this.marbel.radius)
            && (this.lastWorked == true
                || leftToRight / Math.abs(leftToRight) != this.lastOrientation.ltr
                || frontToBack / Math.abs(frontToBack) != this.lastOrientation.ftb)) {
            this.marbel.x = mx;
        }
        else {
            this.lastOrientation = { ftb: frontToBack / Math.abs(frontToBack), ltr: leftToRight / Math.abs(leftToRight) };
            this.lastWorked = false;
            console.log("not in path");
            return;
        }
        this.lastWorked = true;
        this.gameField.drawForeground();
        this.marbel.draw();
        this.checkForLose();
        this.checkForWin();
    }
    ;
    checkForLose() {
        console.log("holes: " + this.gameField.holes);
        for (var i = 0; i < this.gameField.holes.length; i++) {
            if (ctx.isPointInPath(this.gameField.holes[i], this.marbel.x, this.marbel.y)) {
                this.stopGame();
                break;
            }
        }
    }
    ;
    checkForWin() {
        console.log("goal: " + this.gameField.goal);
        if (ctx.isPointInPath(this.gameField.goal, this.marbel.x, this.marbel.y)) {
            let time = this.startTime - performance.now();
            this.saveScore(time);
            this.stopGame();
        }
    }
    ;
    saveScore(time) {
        //TODO: name input and save on Firebase 
    }
    ;
}
//# sourceMappingURL=Game.js.map