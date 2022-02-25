import { ResponsiveManager } from "./ResponsiveManager";

export class GameField {

    responsiveManager: ResponsiveManager;
    ctx: any;
    
    path: Path2D | null = null;
    holes: Path2D[] = [];
    goal: Path2D | null = null;

    constructor(ctx: any, responsiveManager: ResponsiveManager) {
        this.ctx = ctx;
        this.responsiveManager = responsiveManager;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.responsiveManager.w, this.responsiveManager.h);
        this.ctx.imageSmoothingEnabled = false;
    
        this.drawBackground();
        this.drawForeground();
    }

    isInPath(x: number, y: number, radius: number) {
        return (   this.ctx.isPointInPath(this.path, x - radius, y - radius)
                && this.ctx.isPointInPath(this.path, x - radius, y + radius) 
                && this.ctx.isPointInPath(this.path, x + radius, y - radius) 
                && this.ctx.isPointInPath(this.path, x + radius, y + radius))
    }

    drawForeground() {
        this.drawPath();
        this.drawHoles();
        this.drawGoal();
    }
    
    drawBackground() {
        var design = new Image();
        design.src = "./app/assets/Design.svg";
        design.width = this.responsiveManager.w;
        design.height = this.responsiveManager.h;
        
        design.onload = () => {
            //design.width *= 0.88;
            //design.height *= 0.88;
    
            var x = 0;
            var y = 0;
            
            this.ctx.drawImage(design, x, y, design.width, design.height);
        };
    }
    
    private drawHoles() {
        this.holes = [];
        
        let w = this.responsiveManager.w;
        let h = this.responsiveManager.h;

        this.holes.push(this.drawCircle(0.6997014925*w, 0.83770193906*h, 0.02254570637*h)); //Entrenchments
        this.holes.push(this.drawCircle(0.132014925*w, 0.8750193906*h, 0.02254570637*h)); //Frankfurt
        this.holes.push(this.drawCircle(0.128014925*w, 0.604193906*h, 0.02254570637*h)); //Coloogne
        this.holes.push(this.drawCircle(0.4244925*w, 0.636193906*h, 0.02254570637*h)); //Bridge Destroyed
        this.holes.push(this.drawCircle(0.8584925*w, 0.7556193906*h, 0.02254570637*h)); //Leipzig
        this.holes.push(this.drawCircle(0.8454925*w, 0.3876193906*h, 0.02254570637*h)); //Dresden
        this.holes.push(this.drawCircle(0.4744925*w, 0.4406193906*h, 0.02254570637*h)); //Hanover
        this.holes.push(this.drawCircle(0.6244925*w, 0.5106193906*h, 0.02254570637*h)); //Magdeburg
        this.holes.push(this.drawCircle(0.2544925*w, 0.4006193906*h, 0.02254570637*h)); //Road Mined
        this.holes.push(this.drawCircle(0.1404925*w, 0.1306193906*h, 0.02254570637*h)); //Hamburg
        this.holes.push(this.drawCircle(0.4744925*w, 0.2706193906*h, 0.02254570637*h)); //Spandau links
        this.holes.push(this.drawCircle(0.5744925*w, 0.2756193906*h, 0.02254570637*h)); //Spandau rechts
        this.holes.push(this.drawCircle(0.7044925*w, 0.2056193906*h, 0.02254570637*h)); //Potsdam
    }
    
    private drawGoal() {
        let w = this.responsiveManager.w;
        let h = this.responsiveManager.h;

        this.goal = this.drawCircle(0.5384925*w, 0.1666193906*h, 0.02254570637*h, 'black'); //Berlin
        this.drawCircle(0.5384925*w, 0.1666193906*h, 0.02754570637*h, 'black', true); //Berlin
    }
    
    private drawPath() {
        this.ctx.strokeStyle = 'black';
        this.ctx.fillStyle = '#EA8291';
        this.ctx.lineWidth = 3;

        let w = this.responsiveManager.w;
        let h = this.responsiveManager.h;
        
        this.path = new Path2D();
        this.path.moveTo(0.758208955223881*w, h);
    
        this.path.arcTo(0.671641791044776*w, 0.912742382271468*h, 0.595820895522388*w, 0.973288088642659*h, 2);
    
        this.path.arcTo(0.595820895522388*w, 0.973288088642659*h, 0.148358208955224*w, 0.946288088642659*h, 10);
    
        this.path.arcTo(0.148358208955224*w, 0.946288088642659*h, 0.07462686567*w, 0.883656509695291*h, 10);
    
        this.path.arcTo(0.07462686567*w, 0.883656509695291*h, 0.07462686567*w, 0.585562326869806*h, 10); //55
    
        this.path.arcTo(0.07462686567*w, 0.585562326869806*h, 0.128358208955224*w, 0.571326869806094*h, 10); //50
    
        this.path.arcTo(0.128358208955224*w, 0.571326869806094*h, 0.3014925373*w, 0.6274238227*h, 10);
    
        this.path.arcTo(0.3014925373*w, 0.6274238227*h, 0.4537313433*w, 0.7576177285*h, 10);
    
        this.path.arcTo(0.4537313433*w, 0.7576177285*h, 0.4746268657*w, 0.7465373961*h, 5);
    
        this.path.arcTo(0.4746268657*w, 0.7465373961*h, 0.3492537313*w, 0.6332686981*h, 5);
    
        this.path.arcTo(0.3492537313*w, 0.6332686981*h, 0.4268656716*w, 0.6014127424*h, 10);
        
        this.path.arcTo(0.4268656716*w, 0.6014127424*h, 0.5384328358*w, 0.6303434903*h, 10);
    
        this.path.arcTo(0.5384328358*w, 0.6303434903*h, 0.6537313433*w, 0.5692520776*h, 10); //45
    
        this.path.arcTo(0.6537313433*w, 0.5692520776*h, 0.7931343284*w, 0.6315789474*h, 10);
    
        this.path.arcTo(0.7931343284*w, 0.6315789474*h, 0.7931343284*w, 0.4847645429*h, 10);
    
        this.path.arcTo(0.7931343284*w, 0.4847645429*h, 0.7231343284*w, 0.4847645429*h, 10); //30
    
        this.path.arcTo(0.7231343284*w, 0.4847645429*h, 0.6459402985*w, 0.5449307479*h, 10); 
    
        this.path.arcTo(0.6459402985*w, 0.5449307479*h, 0.5044776119*w, 0.5086149584*h, 15);
    
        this.path.arcTo(0.5044776119*w, 0.5086149584*h, 0.3025373134*w, 0.5905623269*h, 10);
        
        this.path.arcTo(0.3025373134*w, 0.5905623269*h, 0.05373134328*w, 0.522465374*h, 10);
    
        this.path.arcTo(0.07462686567*w, 0.522465374*h, 0.08462686567*w, 0.10002770083*h, 10);
    
        this.path.arcTo(0.08462686567*w, 0.10002770083*h, 0.385915493*w, 0.1260387812*h, 10); //15
    
        this.path.arcTo(0.385915493*w, 0.1260387812*h, 0.3940298507*w, 0.2754570637*h, 10);
        
        this.path.arcTo(0.3940298507*w, 0.2754570637*h, 0.4488059701*w, 0.2441468144*h, 5); //10
    
        this.path.arcTo(0.4488059701*w, 0.2441468144*h, 0.6149253731*w, 0.2508421053*h, 10);
    
        this.path.arcTo(0.6149253731*w, 0.2508421053*h, 0.7026865672*w, 0.2807728532*h, 10);
    
        this.path.arcTo(0.7026865672*w, 0.2807728532*h, 0.8051044776*w, 0.2756177285*h, 10);
    
        this.path.arcTo(0.8051044776*w, 0.2756177285*h, 0.8059701493*w, 0.1194182825*h, 10); //5
    
        this.path.arcTo(0.8059701493*w, 0.1194182825*h, 0.7474626866*w, 0.2316066482*h, 5);
    
        this.path.arcTo(0.7474626866*w, 0.2316066482*h, 0.6819402985*w, 0.2316066482*h, 10)
    
        this.path.arcTo(0.6819402985*w, 0.2316066482*h, 0.6119402985*w, 0.2169806094*h, 10);
    
        this.path.arcTo(0.6119402985*w, 0.2169806094*h, 0.4208955224*w, 0.2055955679*h, 10);
    
        this.path.arcTo(0.4208955224*w, 0.2055955679*h, 0.4876119403*w, 0.11833795014*h, 10); // Berlin
    
        this.path.arcTo(0.4876119403*w, 0.11833795014*h, 0.6537313433*w, 0.1401939058*h, 10);
    
        this.path.arcTo(0.6537313433*w, 0.1401939058*h, 0.7074626866*w, 0.08894736842*h, 10);
        
        this.path.arcTo(0.7074626866*w, 0.08894736842*h, 0.9014925373*w, 0.09033240997*h, 10);
    
        this.path.arcTo(0.9014925373*w, 0.09033240997*h, 0.9014925373*w, 0.3200138504*h, 10);
    
        this.path.arcTo(0.9014925373*w, 0.3200138504*h, 0.3971641791*w, 0.3590304709*h, 10);
    
        this.path.arcTo(0.3971641791*w, 0.3590304709*h, 0.2857462687*w, 0.3413296399*h, 10);
    
        this.path.arcTo(0.2857462687*w, 0.3413296399*h, 0.243880597*w, 0.1770498615*h, 10);
    
        this.path.arcTo(0.243880597*w, 0.1770498615*h, 0.203880597*w, 0.1720498615*h, 5);
    
        this.path.arcTo(0.203880597*w, 0.1720498615*h, 0.1910447761*w, 0.3521052632*h, 5);
    
        this.path.arcTo(0.1910447761*w, 0.3521052632*h, 0.3373134328*w, 0.3867313019*h, 5); //20
        
        this.path.arcTo(0.3373134328*w, 0.3867313019*h, 0.2925373134*w, 0.487534626*h, 10);
    
        this.path.arcTo(0.2925373134*w, 0.487534626*h, 0.4010447761*w, 0.4629085873*h, 10);
    
        this.path.arcTo(0.4010447761*w, 0.4629085873*h, 0.4110447761*w, 0.4315872576*h, 10);
    
        this.path.arcTo(0.4110447761*w, 0.4315872576*h, 0.4786567164*w, 0.4083518006*h, 10);
        
        this.path.arcTo(0.4786567164*w, 0.4083518006*h, 0.5582089552*w, 0.4199722992*h, 10);
    
        this.path.arcTo(0.5582089552*w, 0.4199722992*h, 0.6955223881*w, 0.3608753463*h, 10); //25
    
        this.path.arcTo(0.6955223881*w, 0.3608753463*h, 0.9044776119*w, 0.3608753463*h, 10);
    
        this.path.arcTo(0.9044776119*w, 0.3608753463*h, 0.9134328358*w, 0.7773130194*h, 10); //35
    
        this.path.arcTo(0.9134328358*w, 0.7773130194*h, 0.8457910448*w, 0.7897783934*h, 10); //30
    
        this.path.arcTo(0.8457910448*w, 0.7897783934*h, 0.6059701493*w, 0.6565096953*h, 10);
    
        this.path.arcTo(0.6059701493*w, 0.6565096953*h, 0.5611940299*w, 0.6703601108*h, 10);
    
        this.path.arcTo(0.5611940299*w, 0.6703601108*h, 0.647761194*w, 0.743767313*h, 10);
    
        this.path.arcTo(0.647761194*w, 0.743767313*h, 0.46865671641791*w, 0.842105263157895*h, 10);
        
        this.path.arcTo(0.46865671641791*w, 0.842105263157895*h, 0.385074626865672*w, 0.842105263157895*h, 10);
        
        this.path.arcTo(0.385074626865672*w, 0.842105263157895*h, 0.208955223880597*w, 0.692520775623269*h, 10);
        
        this.path.arcTo(0.208955223880597*w, 0.692520775623269*h, 0.277611940298507*w, 0.867036011080332*h, 2);
        
        this.path.arcTo(0.277611940298507*w, 0.867036011080332*h, 0.504477611940299*w, 0.903656509695291*h, 10);
         
        this.path.arcTo(0.504477611940299*w, 0.903656509695291*h, 0.7065671642*w, 0.7927036011*h, 10);
    
        this.path.arcTo(0.7065671642*w, 0.7927036011*h, w, h, 10);
    
        this.path.arcTo(w, h, 0.758208955223881*w, h, 0);
    
        this.ctx.fill(this.path);    
        //this.ctx.stroke(this.path);
    }

    private drawCircle(x: number, y: number, r: number, color = 'black', stroke = false) {
        var circle = new Path2D();
        circle.arc(x, y, r, 0, 2 * Math.PI);
        circle.closePath();

        if (stroke == true) {
            this.ctx.strokeStyle = color;
            this.ctx.stroke(circle);
        } else {
            this.ctx.fillStyle = color;
            this.ctx.fill(circle);
        }

        return circle;
    }
}