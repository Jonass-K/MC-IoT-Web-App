"use strict";
var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");
var button = document.getElementById("button");
var responsiveManager = ResponsiveManager.instance();
responsiveManager.setProp();
var marbel = new Marbel(ctx, responsiveManager);
var gameField = new GameField(ctx, responsiveManager);
var game = new Game(gameField, marbel);
gameField.draw();
marbel.draw();
window.onresize = onResize;
function clickStartStopbutton() {
    if (game.isRunning) {
        game.stopGame();
    }
    else {
        if (game.startGame()) {
            button.style.display = "none";
        }
    }
}
;
function onResize() {
    responsiveManager.setProp();
    gameField.draw();
}
;
//# sourceMappingURL=Main.js.map