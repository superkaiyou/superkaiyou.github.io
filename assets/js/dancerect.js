var a = 40;
var b = 25;
var t = 0.01;
var sp1 = 100;
var sp2 = 100;
var l = 30;
var w = 20;
let angle = 0;
let can;
// var ax;
// var ay;
// var tx;
// var ty;
function setup() {
    can = createCanvas(870, 500);
    can.position(190,150);
    // if (on){
    background(255);
    // }
}

function draw() {
    if (mouseIsPressed){
        background(0,10);
    }
    // background(0,10);
    fill(23, 120, 242);
    // noStroke();
    stroke(0);
    for(let x = 0;x < width;x+=50){
        for(let y = 0;y< height;y+=40){
            ax = map(mouseX,0,width,-1*PI,PI,true);
            ay = map(mouseY,0,height,-1*PI,PI,true);
            ch = 100*ax * (x / width) + 100*ay * (y / height);
            tx = x + a*cos(2*PI*t+ch);
            ty = y - b*sin(2*PI*t+ch);
            rotate(angle);
            rect(tx,ty,l,w);
        }
    }
    //angle++;
    t = t+0.01;
}

function keyPressed(){
    if (keyCode == LEFT_ARROW){
                sp1 = sp1-5;
                sp2 = sp2-5;
            }
    if (keyCode == RIGHT_ARROW){
                sp1 = sp1+5;
                sp2 = sp2+5;
            }
    if (keyCode == UP_ARROW){
                l+=15;
            w+=8
            }
    if (keyCode == DOWN_ARROW){
            l-=15;
                w-=8;
            }
    if (keyCode == TAB){
        angle++;
    }
}
