var supported = true;
var granted = false;
var start = false;

var marbel = { x: -1, y: -1 , r: 10};
var canvas = document.getElementById("mycanvas");
var button = document.getElementById("button");

var w;
var h;
var scale = 1;
var ctx = canvas.getContext("2d");
var path;
var holes;
var goal;

setProp();
draw();
window.onresize = resized;

function resized() {
    setProp();
    draw();
}

function setProp() {
    console.log("set prop");
    var computedCanvas = getComputedStyle(canvas);
    w = parseInt(computedCanvas.getPropertyValue("width"), 10) * scale;
    h = parseInt(computedCanvas.getPropertyValue("height"), 10) * scale;

    var wwidth = window.innerWidth;
        
    if (window.innerWidth/h > 335/722 && window.innerWidth/h < 550/722) {
        w = wwidth * 0.9;
    }
    canvas.width = w;
    canvas.height = h;
    if (marbel.x == -1 && marbel.y == -1) {
        marbel.x = 0.8447761194*w;
        marbel.y = 0.9681440443*h;
    }

    button.style.width = w/scale + "px";
}


function drawMarbel() {
    drawCircle(marbel.x, marbel.y, marbel.r, 'white');
}

function drawCircle(x, y, r, color = 'black', stroke = false) {
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    var circle = new Path2D();
    circle.arc(x, y, r, 0, 2 * Math.PI);
    circle.closePath();
    if (stroke == true) {
        ctx.stroke(circle);
    } else {
        ctx.fill(circle);
    }
    return circle;
}

function drawBackground() {
    var design = new Image();
    design.src = "./Design.svg";
    design.width = w;
    design.height = h;
    

    design.onload = function() {
        //design.width *= 0.88;
        //design.height *= 0.88;

        var x = 0;
        var y = 0;
        
        ctx.drawImage(design, x, y, design.width, design.height);
    };
}

function drawHoles() {
    holes = [];
    holes.push(drawCircle(0.6997014925*w, 0.83770193906*h, 0.02254570637*h)); //Entrenchments
    holes.push(drawCircle(0.132014925*w, 0.8750193906*h, 0.02254570637*h)); //Frankfurt
    holes.push(drawCircle(0.128014925*w, 0.604193906*h, 0.02254570637*h)); //Coloogne
    holes.push(drawCircle(0.4244925*w, 0.636193906*h, 0.02254570637*h)); //Bridge Destroyed
    holes.push(drawCircle(0.8584925*w, 0.7556193906*h, 0.02254570637*h)); //Leipzig
    holes.push(drawCircle(0.8454925*w, 0.3876193906*h, 0.02254570637*h)); //Dresden
    holes.push(drawCircle(0.4744925*w, 0.4406193906*h, 0.02254570637*h)); //Hanover
    holes.push(drawCircle(0.6244925*w, 0.5106193906*h, 0.02254570637*h)); //Magdeburg
    holes.push(drawCircle(0.2544925*w, 0.4006193906*h, 0.02254570637*h)); //Road Mined
    holes.push(drawCircle(0.1404925*w, 0.1306193906*h, 0.02254570637*h)); //Hamburg
    holes.push(drawCircle(0.4744925*w, 0.2706193906*h, 0.02254570637*h)); //Spandau links
    holes.push(drawCircle(0.5744925*w, 0.2756193906*h, 0.02254570637*h)); //Spandau rechts
    holes.push(drawCircle(0.7044925*w, 0.2056193906*h, 0.02254570637*h)); //Potsdam
}

function drawGoal() {
    goal = drawCircle(0.5384925*w, 0.1666193906*h, 0.02254570637*h, 'black'); //Berlin
    drawCircle(0.5384925*w, 0.1666193906*h, 0.02754570637*h, 'black', true); //Berlin
}

function drawPath() {
    ctx.strokeStyle = 'black';
    ctx.fillStyle = '#CAA5A4';
    ctx.lineWidth = 3;
    
    path = new Path2D();
    path.moveTo(0.758208955223881*w, h);

    path.arcTo(0.671641791044776*w, 0.912742382271468*h, 0.595820895522388*w, 0.973288088642659*h, 2);

    path.arcTo(0.595820895522388*w, 0.973288088642659*h, 0.148358208955224*w, 0.946288088642659*h, 10);

    path.arcTo(0.148358208955224*w, 0.946288088642659*h, 0.07462686567*w, 0.883656509695291*h, 10);

    path.arcTo(0.07462686567*w, 0.883656509695291*h, 0.07462686567*w, 0.585562326869806*h, 10); //55

    path.arcTo(0.07462686567*w, 0.585562326869806*h, 0.128358208955224*w, 0.571326869806094*h, 10); //50

    path.arcTo(0.128358208955224*w, 0.571326869806094*h, 0.3014925373*w, 0.6274238227*h, 10);

    path.arcTo(0.3014925373*w, 0.6274238227*h, 0.4537313433*w, 0.7576177285*h, 10);

    path.arcTo(0.4537313433*w, 0.7576177285*h, 0.4746268657*w, 0.7465373961*h, 5);

    path.arcTo(0.4746268657*w, 0.7465373961*h, 0.3492537313*w, 0.6332686981*h, 5);

    path.arcTo(0.3492537313*w, 0.6332686981*h, 0.4268656716*w, 0.6014127424*h, 10);
    
    path.arcTo(0.4268656716*w, 0.6014127424*h, 0.5384328358*w, 0.6303434903*h, 10);

    path.arcTo(0.5384328358*w, 0.6303434903*h, 0.6537313433*w, 0.5692520776*h, 10); //45

    path.arcTo(0.6537313433*w, 0.5692520776*h, 0.7931343284*w, 0.6315789474*h, 10);

    path.arcTo(0.7931343284*w, 0.6315789474*h, 0.7931343284*w, 0.4847645429*h, 10);

    path.arcTo(0.7931343284*w, 0.4847645429*h, 0.7231343284*w, 0.4847645429*h, 10); //30

    path.arcTo(0.7231343284*w, 0.4847645429*h, 0.6459402985*w, 0.5449307479*h, 10); 

    path.arcTo(0.6459402985*w, 0.5449307479*h, 0.5044776119*w, 0.5086149584*h, 15);

    path.arcTo(0.5044776119*w, 0.5086149584*h, 0.3025373134*w, 0.5905623269*h, 10);
    
    path.arcTo(0.3025373134*w, 0.5905623269*h, 0.05373134328*w, 0.522465374*h, 10);

    path.arcTo(0.07462686567*w, 0.522465374*h, 0.08462686567*w, 0.10002770083*h, 10);

    path.arcTo(0.08462686567*w, 0.10002770083*h, 0.385915493*w, 0.1260387812*h, 10); //15

    path.arcTo(0.385915493*w, 0.1260387812*h, 0.3940298507*w, 0.2754570637*h, 10);
    
    path.arcTo(0.3940298507*w, 0.2754570637*h, 0.4488059701*w, 0.2441468144*h, 5); //10

    path.arcTo(0.4488059701*w, 0.2441468144*h, 0.6149253731*w, 0.2508421053*h, 10);

    path.arcTo(0.6149253731*w, 0.2508421053*h, 0.7026865672*w, 0.2807728532*h, 10);

    path.arcTo(0.7026865672*w, 0.2807728532*h, 0.8051044776*w, 0.2756177285*h, 10);

    path.arcTo(0.8051044776*w, 0.2756177285*h, 0.8059701493*w, 0.1194182825*h, 10); //5

    path.arcTo(0.8059701493*w, 0.1194182825*h, 0.7474626866*w, 0.2316066482*h, 5);

    path.arcTo(0.7474626866*w, 0.2316066482*h, 0.6819402985*w, 0.2316066482*h, 10)

    path.arcTo(0.6819402985*w, 0.2316066482*h, 0.6119402985*w, 0.2169806094*h, 10);

    path.arcTo(0.6119402985*w, 0.2169806094*h, 0.4208955224*w, 0.2055955679*h, 10);

    path.arcTo(0.4208955224*w, 0.2055955679*h, 0.4876119403*w, 0.11833795014*h, 10); // Berlin

    path.arcTo(0.4876119403*w, 0.11833795014*h, 0.6537313433*w, 0.1401939058*h, 10);

    path.arcTo(0.6537313433*w, 0.1401939058*h, 0.7074626866*w, 0.08894736842*h, 10);
    
    path.arcTo(0.7074626866*w, 0.08894736842*h, 0.9014925373*w, 0.09033240997*h, 10);

    path.arcTo(0.9014925373*w, 0.09033240997*h, 0.9014925373*w, 0.3200138504*h, 10);

    path.arcTo(0.9014925373*w, 0.3200138504*h, 0.3971641791*w, 0.3590304709*h, 10);

    path.arcTo(0.3971641791*w, 0.3590304709*h, 0.2857462687*w, 0.3413296399*h, 10);

    path.arcTo(0.2857462687*w, 0.3413296399*h, 0.243880597*w, 0.1770498615*h, 10);

    path.arcTo(0.243880597*w, 0.1770498615*h, 0.203880597*w, 0.1720498615*h, 5);

    path.arcTo(0.203880597*w, 0.1720498615*h, 0.1910447761*w, 0.3521052632*h, 5);

    path.arcTo(0.1910447761*w, 0.3521052632*h, 0.3373134328*w, 0.3867313019*h, 5); //20
    
    path.arcTo(0.3373134328*w, 0.3867313019*h, 0.2925373134*w, 0.487534626*h, 10);

    path.arcTo(0.2925373134*w, 0.487534626*h, 0.4010447761*w, 0.4629085873*h, 10);

    path.arcTo(0.4010447761*w, 0.4629085873*h, 0.4110447761*w, 0.4315872576*h, 10);

    path.arcTo(0.4110447761*w, 0.4315872576*h, 0.4786567164*w, 0.4083518006*h, 10);
    
    path.arcTo(0.4786567164*w, 0.4083518006*h, 0.5582089552*w, 0.4199722992*h, 10);

    path.arcTo(0.5582089552*w, 0.4199722992*h, 0.6955223881*w, 0.3608753463*h, 10); //25

    path.arcTo(0.6955223881*w, 0.3608753463*h, 0.9044776119*w, 0.3608753463*h, 10);

    path.arcTo(0.9044776119*w, 0.3608753463*h, 0.9134328358*w, 0.7773130194*h, 10); //35

    path.arcTo(0.9134328358*w, 0.7773130194*h, 0.8457910448*w, 0.7897783934*h, 10); //30

    path.arcTo(0.8457910448*w, 0.7897783934*h, 0.6059701493*w, 0.6565096953*h, 10);

    path.arcTo(0.6059701493*w, 0.6565096953*h, 0.5611940299*w, 0.6703601108*h, 10);

    path.arcTo(0.5611940299*w, 0.6703601108*h, 0.647761194*w, 0.743767313*h, 10);

    path.arcTo(0.647761194*w, 0.743767313*h, 0.46865671641791*w, 0.842105263157895*h, 10);
    
    path.arcTo(0.46865671641791*w, 0.842105263157895*h, 0.385074626865672*w, 0.842105263157895*h, 10);
    
    path.arcTo(0.385074626865672*w, 0.842105263157895*h, 0.208955223880597*w, 0.692520775623269*h, 10);
    
    path.arcTo(0.208955223880597*w, 0.692520775623269*h, 0.277611940298507*w, 0.867036011080332*h, 2);
    
    path.arcTo(0.277611940298507*w, 0.867036011080332*h, 0.504477611940299*w, 0.903656509695291*h, 10);
     
    path.arcTo(0.504477611940299*w, 0.903656509695291*h, 0.7065671642*w, 0.7927036011*h, 10);

    path.arcTo(0.7065671642*w, 0.7927036011*h, w, h, 10);

    path.arcTo(w, h, 0.758208955223881*w, h, 0);

    ctx.fill(path);    
    ctx.stroke(path);
}

function drawForeground() {
    drawPath();
    drawHoles();
    drawGoal();
}

function draw() {
    console.log("draw");
    ctx.clearRect(0, 0, w, h);
    ctx.imageSmoothingEnabled = false;

    drawBackground();
    drawForeground();
    drawMarbel();
}



function orientationEvent(event) {
    console.log("orientationEvent");
    var rotateDegrees = event.alpha;
    var leftToRight = event.gamma;
    var frontToBack = event.beta;

    handleOrientationEvent(frontToBack, leftToRight, rotateDegrees);
}

var lastOrientation = {ftb: 0, ltr: 0}
var lastWorked = true;

var handleOrientationEvent = function (frontToBack, leftToRight, rotateDegrees) {
   //document.getElementById('gyro-data').innerHTML = "rotateDegrees: " + rotateDegrees + ", lefToRight: " + leftToRight + ", frontToBack: " + frontToBack;
    console.log("handle orientation event");
    console.log("leftToRight: " + leftToRight + ", frontToBack: " + frontToBack);
    leftToRight *= 1;
    frontToBack *= 1;

    var mx = marbel.x + leftToRight;
    var my = marbel.y + frontToBack;

    console.log("mx: " + mx + ", my: " + my);

    if (ctx.isPointInPath(path, mx - marbel.r, my - marbel.r)
    && ctx.isPointInPath(path, mx - marbel.r, my + marbel.r) 
    && ctx.isPointInPath(path, mx + marbel.r, my - marbel.r) 
    && ctx.isPointInPath(path, mx + marbel.r, my + marbel.r) 
    && (lastWorked == true || leftToRight/Math.abs(leftToRight) != lastOrientation.ltr || frontToBack/Math.abs(frontToBack) != lastOrientation.ftb)) {
        lastWorked = true;
        drawForeground();
        marbel.x = mx;
        marbel.y = my;
        drawMarbel();
        checkForLose();
        checkForWin();
    } else if (ctx.isPointInPath(path, marbel.x - marbel.r, my - marbel.r)
    && ctx.isPointInPath(path, marbel.x - marbel.r, my + marbel.r) 
    && ctx.isPointInPath(path, marbel.x + marbel.r, my - marbel.r) 
    && ctx.isPointInPath(path, marbel.x + marbel.r, my + marbel.r) 
    && (lastWorked == true || leftToRight/Math.abs(leftToRight) != lastOrientation.ltr || frontToBack/Math.abs(frontToBack) != lastOrientation.ftb)) {
        lastWorked = true;
        drawForeground();
        marbel.y = my;
        drawMarbel();
        checkForLose();
        checkForWin();
    } else if (ctx.isPointInPath(path, mx - marbel.r, marbel.y - marbel.r)
    && ctx.isPointInPath(path, mx - marbel.r, marbel.y + marbel.r) 
    && ctx.isPointInPath(path, mx + marbel.r, marbel.y - marbel.r) 
    && ctx.isPointInPath(path, mx + marbel.r, marbel.y + marbel.r) 
    && (lastWorked == true || leftToRight/Math.abs(leftToRight) != lastOrientation.ltr || frontToBack/Math.abs(frontToBack) != lastOrientation.ftb)) {
        lastWorked = true;
        drawForeground();
        marbel.x = mx;
        drawMarbel();
        checkForLose();
        checkForWin();
    } else {
        lastOrientation = {ftb: frontToBack/Math.abs(frontToBack), ltr: leftToRight/Math.abs(leftToRight)};
        lastWorked = false;
        console.log("no in path");
    }
};

function checkForLose() {
    console.log("holes: " + holes);
    for (var hole in holes) {
        if (ctx.isPointInPath(hole, marbel.x, marbel.y)) {
            stopGame();
            break;
        }
    }
}


function checkForWin() {
    console.log("goal: " + goal);
    if (ctx.isPointInPath(goal, marbel.x, marbel.y)) {
        stopGame();
    }
}










function askPermission(callback) {
    if (window.DeviceOrientationEvent == null) {
        supported = false;
        console.log("case: no support");
        callback(new Error("DeviceOrientation is not supported."));
    } else if (DeviceOrientationEvent.requestPermission) {
        supported = true
        DeviceOrientationEvent.requestPermission().then(function (state) {
            if (state == "granted") {
                console.log("case: permission granted");
                granted = true;
                callback(null);
            } else {
                console.log("case: permission denied");
                granted = false;
                callback(new Error("Permission denied by user"));

            }
        }, function (err) {
            // TODO: Fehlermeldung

            console.log("case: permission error");
            callback(err);
        });
    } else {
        console.log("case: permission special");
        granted = true;
        callback(null);
    }
}

function stopGame() {
    console.log("case: stop the game");
    start = false;
    window.removeEventListener("deviceorientation", orientationEvent);
    document.getElementById('button-text').innerHTML = "CLICK TO START";
    marbel.x = 0.8447761194*w;
    marbel.y = 0.9681440443*h;
    draw();
}

function startGame() {
    start = true;
    console.log("case: start the game");
    document.getElementById('button-text').innerHTML = "CLICK TO STOP";
    window.addEventListener("deviceorientation", orientationEvent);
}


function clickButton() {
    console.log("click, start: " + start + ", granted: " + granted + ", supported: " + supported);

    if (start == true) {
        stopGame();
       // callback(null);
    } else if (supported == true && granted == true) {
        startGame();
        //callback(null);
    } else if (supported == false) {
        console.log("case: no support");
       // callback(new Error("DeviceOrientation is not supported."));
    } else if (granted == false) {
        askPermission(function(err) {
            if (err == null) {
                startGame();
            } else {

            }
        })
    }
}


