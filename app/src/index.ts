import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { Game } from "./Game";
import { GameField } from "./GameField";
import { Marbel } from "./Marbel";
import { ResponsiveManager } from "./ResponsiveManager";
import { Score } from "./Score";
import { Scoreboard } from "./Scoreboard";
import { ScoreboardService } from "./ScoreboardService";


const firebaseConfig = {
    apiKey: "AIzaSyATiqs2z7AZiimfKbd_bPHWryH5eNsS2_c",
    authDomain: "silverbullet-89df2.firebaseapp.com",
    projectId: "silverbullet-89df2",
    storageBucket: "silverbullet-89df2.appspot.com",
    messagingSenderId: "808841843087",
    appId: "1:808841843087:web:29368076dc0a4e89b67bfa"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log(`hey ${app.name}`);

var canvas = document.getElementById("mycanvas")!;
var ctx = (canvas as any).getContext("2d");
var button = document.getElementById("button")!;
var menu = document.getElementById("menu")!;

var responsiveManager = ResponsiveManager.instance();

var marbel = new Marbel(ctx, responsiveManager);
var gameField = new GameField(ctx, responsiveManager);
var game = new Game(gameField, marbel, ctx);
var service = new ScoreboardService();
var scoreboard = new Scoreboard();


gameField.draw();
marbel.draw();
service.newScore(new Score("Jonas", 1));
scoreboard.refreshScoreboard();

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
                marbel.resetMarbel();
                marbel.draw();
            }
            
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
