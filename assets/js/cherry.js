let petal;
let petals = [];
let tests =[];
let micOn = false;
let micinput;
let volume;
let back;
let single;
let index;
let can;

class Petal{
    constructor(){
        this.x = random(-width/2,width);
        this.y = random(-50,200);
        this.vx = 0.5;
        this.vy = 0;
        this.g = 0.01;//gravity
        this.f = 0.0001;//friction
        this.size = random(4,12)
        this.beginangle = random(0,2*PI);
        this.radius = sqrt(random(pow(width, 2)));
    }
    update(t){
        let a = 0.2;
    let angle = a * t + this.beginangle;//related time to motion
        this.vy =this.vy + this.g-this.f;
        this.vy*=0.5;//air friction on vertical motion
        this.vx*=0.985;//air friction on horizontal motion
        this.x+=this.vx+pow(this.size,sin(angle)/100)/5//create unregular motion
        this.y+=pow(this.size, 0.5)/5+this.vy;
    }
    // delete petal beyonds the window
    dead(){
      if (this.y > 1.5*height){
          petals.splice(this,1);
        }
    }
    show(tu){
        image(tu,this.x,this.y,this.size,this.size);
    }
}


function preload(){
    soundFormats("mp3");
    // for (let i = 0; i < 4; i++){
    //     backs[i] = loadImage("tree"+(i+1)+".png")
    // }
    bgm = loadSound("https://openprocessing-usercontent.s3.amazonaws.com/files/user188179/visual769986/h88c78e28c71247fd9cb8342e371125ce/bgm.mp3");//music credit to Jason Shaw
    back =loadImage("https://openprocessing-usercontent.s3.amazonaws.com/files/user188179/visual769986/h88c78e28c71247fd9cb8342e371125ce/tree5.png");
    single = loadImage("https://openprocessing-usercontent.s3.amazonaws.com/files/user188179/visual769986/h88c78e28c71247fd9cb8342e371125ce/petal.png");
}

function setup() {
    can = createCanvas(796, 556);
    can.position(190,150);
    background(100);
    bgm.play();
    bgm.setVolume(0.01);
    micinput = new p5.AudioIn();
    micinput.start();
}

function draw() {
    background(100);
    // if(index > backs.length - 1){
    //     index = 0;
    // }
    // image(backs[index],0,0,796,556);
    // index+=1;
    image(back,0,0,796,556);
    volume = micinput.getLevel();
    if(volume > 0.009){
        for (let i = 0; i < 1; i++){
      petals.push(new Petal());
        }
    }
    if(petals.length > 20){
        bgm.setVolume(0.04);
    }
    for (let b of petals){
        b.update(frameCount/60);
          b.show(single);
          b.dead();
    }
}



