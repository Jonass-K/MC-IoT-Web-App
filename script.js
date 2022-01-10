var supported = true;
var granted = false;
var start = false;

var marbel = { x: 15, y: 185 };
var canvas = document.getElementById("mycanvas");
var button = document.getElementById("button");
var w;
var h;
var ctx = canvas.getContext("2d");

//setInterval(draw, 2000);
draw();
window.onresize = draw;

function setProp() {
    console.log("set prop");
    var computed = getComputedStyle(canvas);
    w = parseInt(computed.getPropertyValue("width"), 10);
    h = parseInt(computed.getPropertyValue("height"), 10);

    canvas.width = w;
    canvas.height = h;

    button.style.width = w + "px";
    console.log("button width: " + button.style.width);
}



function drawMarbel() {
    ctx.beginPath();
    ctx.arc(marbel.x, marbel.y, 10, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
}

function draw() {
    setProp();

    var title = new Image();
    title.src = "./Title.svg";

    title.onload = function() {
        var w2 = w * 0.9;
        var h2 = (w2 / w) * title.height;
        var x = (w - w2) / 2;
        var y = 10;

        ctx.drawImage(title, x, y, w2, h2);
    };

}


function orientationEvent(event) {
    var rotateDegrees = event.alpha;
    var leftToRight = event.gamma;
    var frontToBack = event.beta;

    handleOrientationEvent(frontToBack, leftToRight, rotateDegrees);
}

var handleOrientationEvent = function (frontToBack, leftToRight, rotateDegrees) {
    document.getElementById('gyro-data').innerHTML = "rotateDegrees: " + rotateDegrees + ", lefToRight: " + leftToRight + ", frontToBack: " + frontToBack;

    ctx.clearRect(marbel.x - 11, marbel.y - 11, 22, 22);
    leftToRight *= 1.25;
    frontToBack *= 1.25;

    if ((leftToRight > 0) && (marbel.x < 190)) {
        marbel.x = Math.min(marbel.x + leftToRight, 190);
    } else if ((leftToRight < 0) && (marbel.x > 10)) {
        marbel.x = Math.max(marbel.x + leftToRight, 10);
    }

    if ((frontToBack > 0) && (marbel.y < 190)) {
        marbel.y = Math.min(marbel.y + frontToBack, 190);
    } else if ((frontToBack < 0) && (marbel.y > 10)) {
        marbel.y = Math.max(marbel.y + frontToBack, 10);
    }

    drawMarbel();
};












function askPermission() {
    if (window.DeviceOrientationEvent == null) {
        supported = false;
        // TODO: Fehlermeldung
        return false;

    } else if (DeviceOrientationEvent.requestPermission) {
        supported = true
        DeviceOrientationEvent.requestPermission().then(function (state) {
            if (state == "granted") {
                granted = true;
                return true;

            } else {
                granted = false;
                // TODO: Fehlermeldung
                return false;

            }
        }, function (err) {
            // TODO: Fehlermeldung
            return false;
        });
    } else {
        granted = true;
        return true;
    }
}

function stopGame() {
    document.getElementById('button-text').innerHTML = "CLICK TO START";
    window.removeEventListener("deviceorientation", orientationEvent);
    start = false;
}

function startGame() {
    document.getElementById('button-text').innerHTML = "CLICK TO STOP";
    window.addEventListener("deviceorientation", orientationEvent);
    start = true;
}


function click(callback) {
    console.log("click, start: " + start + ", granted: " + granted + ", supported: " + supported);

    if (start == true) {
        stopGame();
        callback(null);

    } else if (supported == true && granted == true) {
        startGame();
        callback(null);

    } else if (supported == false) {
        callback(new Error("DeviceOrientation is not supported."));

    } else if (granted == false) {
        if (askPermission() == true) {
            startGame();

        } else {
            callback(new Error("DeviceOrientation is not granted."));

        }

    }
}

