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

function drawTitle() {
    var title = new Image();
    title.src = "./Title.svg";

    

    title.onload = function() {
        title.width *= 0.88;
        title.height *= 0.88;

        var x = (w - title.width) / 2;
        var y = 0.01108033241*h;
        
        ctx.drawImage(title, x, y, title.width, title.height);
    };
}

function draw() {
    setProp();
    ctx.imageSmoothingEnabled = false;

    drawTitle();

    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = '#CAA5A4';
    ctx.lineWidth = 3;
    
    ctx.moveTo(0.758208955223881*w, h);

    ctx.arcTo(0.671641791044776*w, 0.912742382271468*h, 0.635820895522388*w, 0.936288088642659*h, 2);

    ctx.arcTo(0.635820895522388*w, 0.936288088642659*h, 0.128358208955224*w, 0.936288088642659*h, 10);

    ctx.arcTo(0.128358208955224*w, 0.936288088642659*h, 0.07462686567*w, 0.883656509695291*h, 10);

    ctx.arcTo(0.07462686567*w, 0.883656509695291*h, 0.07462686567*w, 0.577562326869806*h, 10); //55 -> 50

    ctx.arcTo(0.07462686567*w, 0.577562326869806*h, 0.128358208955224*w, 0.562326869806094*h, 10);

    ctx.arcTo(0.128358208955224*w, 0.562326869806094*h, 0.3014925373*w, 0.6274238227*h, 10);

    ctx.arcTo(0.3014925373*w, 0.6274238227*h, 0.4537313433*w, 0.7576177285*h, 10);

    ctx.arcTo(0.4537313433*w, 0.7576177285*h, 0.4746268657*w, 0.7465373961*h, 5);

    ctx.arcTo(0.4746268657*w, 0.7465373961*h, 0.3492537313*w, 0.6232686981*h, 5);

    ctx.arcTo(0.3492537313*w, 0.6232686981*h, 0.4268656716*w, 0.5914127424*h, 10);
    
    ctx.arcTo(0.4268656716*w, 0.5914127424*h, 0.5134328358*w, 0.6163434903*h, 10);

    ctx.arcTo(0.5134328358*w, 0.6163434903*h, 0.6537313433*w, 0.5692520776*h, 10);

    ctx.arcTo(0.6537313433*w, 0.5692520776*h, 0.7731343284*w, 0.6315789474*h, 10);

    ctx.arcTo(0.7731343284*w, 0.6315789474*h, 0.7373134328*w, 0.4847645429*h, 10);

    ctx.arcTo(0.7373134328*w, 0.4847645429*h, 0.6119402985*w, 0.5249307479*h, 10);

    ctx.arcTo(0.6119402985*w, 0.5249307479*h, 0.5044776119*w, 0.4986149584*h, 10);

    ctx.arcTo(0.5044776119*w, 0.4986149584*h, 0.2925373134*w, 0.5775623269*h, 10);
    
    ctx.arcTo(0.2925373134*w, 0.5775623269*h, 0.05373134328*w, 0.512465374*h, 10);

    ctx.arcTo(0.07462686567*w, 0.512465374*h, 0.07462686567*w, 0.09002770083*h, 10); //15

    ctx.arcTo(0.07462686567*w, 0.09002770083*h, 0.385915493*w, 0.1260387812*h, 10);

    ctx.arcTo(0.385915493*w, 0.1260387812*h, 0.3940298507*w, 0.2354570637*h, 10);
    
    ctx.arcTo(0.3940298507*w, 0.2354570637*h, 0.4388059701*w, 0.2271468144*h, 5);

    ctx.arcTo(0.4388059701*w, 0.2271468144*h, 0.6149253731*w, 0.2368421053*h, 10);

    ctx.arcTo(0.6149253731*w, 0.2368421053*h, 0.6626865672*w, 0.2617728532*h, 10);

    ctx.arcTo(0.6626865672*w, 0.2617728532*h, 0.7791044776*w, 0.2576177285*h, 10);

    ctx.arcTo(0.7791044776*w, 0.2576177285*h, 0.8059701493*w, 0.1094182825*h, 10);

    ctx.arcTo(0.8059701493*w, 0.1094182825*h, 0.7074626866*w, 0.2216066482*h, 5);

    ctx.arcTo(0.7074626866*w, 0.2216066482*h, 0.6119402985*w, 0.1869806094*h, 10);

    ctx.arcTo(0.6119402985*w, 0.1869806094*h, 0.4208955224*w, 0.1855955679*h, 10);

    ctx.arcTo(0.4208955224*w, 0.1855955679*h, 0.4776119403*w, 0.09833795014*h, 10);

    ctx.arcTo(0.4776119403*w, 0.09833795014*h, 0.6537313433*w, 0.1301939058*h, 10);

    ctx.arcTo(0.6537313433*w, 0.1301939058*h, 0.7074626866*w, 0.07894736842*h, 10);
    
    ctx.arcTo(0.7074626866*w, 0.07894736842*h, 0.9014925373*w, 0.08033240997*h, 10);

    ctx.arcTo(0.9014925373*w, 0.08033240997*h, 0.9014925373*w, 0.2950138504*h, 10);

    ctx.arcTo(0.9014925373*w, 0.2950138504*h, 0.3671641791*w, 0.3490304709*h, 10);

    ctx.arcTo(0.3671641791*w, 0.3490304709*h, 0.2507462687*w, 0.3213296399*h, 10);

    ctx.arcTo(0.2507462687*w, 0.3213296399*h, 0.223880597*w, 0.1620498615*h, 10);

    ctx.arcTo(0.223880597*w, 0.1620498615*h, 0.1910447761*w, 0.3421052632*h, 2);

    ctx.arcTo(0.1910447761*w, 0.3421052632*h, 0.3373134328*w, 0.3767313019*h, 5);
    
    ctx.arcTo(0.3373134328*w, 0.3767313019*h, 0.2925373134*w, 0.487534626*h, 10);

    ctx.arcTo(0.2925373134*w, 0.487534626*h, 0.3910447761*w, 0.4529085873*h, 10);

    ctx.arcTo(0.3910447761*w, 0.4529085873*h, 0.3910447761*w, 0.4085872576*h, 10);

    ctx.arcTo(0.3910447761*w, 0.4085872576*h, 0.4686567164*w, 0.3933518006*h, 10);
    
    ctx.arcTo(0.4686567164*w, 0.3933518006*h, 0.5582089552*w, 0.4099722992*h, 10);

    ctx.arcTo(0.5582089552*w, 0.4099722992*h, 0.6955223881*w, 0.3448753463*h, 10);

    ctx.arcTo(0.6955223881*w, 0.3448753463*h, 0.9044776119*w, 0.3448753463*h, 10);

    ctx.arcTo(0.9044776119*w, 0.3448753463*h, 0.9134328358*w, 0.7673130194*h, 10);

    ctx.arcTo(0.9134328358*w, 0.7673130194*h, 0.8417910448*w, 0.7797783934*h, 10);

    ctx.arcTo(0.8417910448*w, 0.7797783934*h, 0.6059701493*w, 0.6565096953*h, 10);

    ctx.arcTo(0.6059701493*w, 0.6565096953*h, 0.5611940299*w, 0.6703601108*h, 10);

    ctx.arcTo(0.5611940299*w, 0.6703601108*h, 0.647761194*w, 0.743767313*h, 10);

    ctx.arcTo(0.647761194*w, 0.743767313*h, 0.46865671641791*w, 0.842105263157895*h, 10);
    
    ctx.arcTo(0.46865671641791*w, 0.842105263157895*h, 0.385074626865672*w, 0.842105263157895*h, 10);
    
    ctx.arcTo(0.385074626865672*w, 0.842105263157895*h, 0.208955223880597*w, 0.692520775623269*h, 10);
    
    ctx.arcTo(0.208955223880597*w, 0.692520775623269*h, 0.277611940298507*w, 0.867036011080332*h, 2);
    
    ctx.arcTo(0.277611940298507*w, 0.867036011080332*h, 0.504477611940299*w, 0.883656509695291*h, 10);
     
    ctx.arcTo(0.504477611940299*w, 0.883656509695291*h, 0.6865671642*w, 0.7867036011*h, 10);

    ctx.arcTo(0.6865671642*w, 0.7867036011*h, w, h, 10);

    ctx.arcTo(w, h, 0.758208955223881*w, h, 0);

    ctx.fill();

    
    

    

    

    

    
    
    
    ctx.stroke();
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


