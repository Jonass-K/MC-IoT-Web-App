var canvas = document.getElementById("mycanvas");
var ctx = (canvas as any).getContext("2d");

var responsiveManager = ResponsiveManager.instance(canvas!);

var marbel = new Marbel(ctx, responsiveManager);
var gameField = new GameField(ctx, responsiveManager);
var game = new Game(gameField, marbel);

gameField.draw();
marbel.draw();

window.onresize = onResize;

function clickStartStopbutton() {
    if (game.isRunning) {
        game.stopGame();
    } else {
        game.startGame();
    }
};

function onResize() {
    responsiveManager.setProp();
    gameField.draw();
};