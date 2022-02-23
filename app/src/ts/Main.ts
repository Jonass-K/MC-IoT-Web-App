var canvas = document.getElementById("mycanvas")!;
var ctx = (canvas as any).getContext("2d");
var button = document.getElementById("button")!;
var menu = document.getElementById("menu")!;

var responsiveManager = ResponsiveManager.instance();

var marbel = new Marbel(ctx, responsiveManager);
var gameField = new GameField(ctx, responsiveManager);
var game = new Game(gameField, marbel);


gameField.draw();
marbel.draw();

window.onresize = onResize;

function clickStartStopButton() {
    if (game.isRunning) {
        game.stopGame();
    } else {
        if (game.startGame()) {
            if (window.matchMedia( '( orientation: portrait )' ).matches) {
                menu.style.display = "none";
                canvas.style.display = "inline";
                responsiveManager.setProp();
                gameField.draw();
                marbel.draw();
            }
            
          //  button.style.display = "none";
        }
    }
};

function onResize() {
    responsiveManager.setProp();
    gameField.draw();
    marbel.draw();
};

function clickInfoButton() {
    window.open("https://github.com/Jonass-K/MC-IoT-Web-App", '_blank')!.focus();
};