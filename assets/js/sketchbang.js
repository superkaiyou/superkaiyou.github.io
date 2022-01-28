let musicdots = [];
let bcolor;
let ccolor;
let box = [],box1 = [],box2 =[];
let b;
let mnote = ["A2","B2","C3","D3","E3","F3","G3","A3","B3","C4","D4","E4","F4","G4","A4","B4","C5","D5","E5","F5","G5","A5","B5"];
let playlists = [],onplaylists = [];
let playbutton,pausebutton,remixbutton,piano,pizzacato,marimba;
let onplay;
let chord;
let counter = 0;
let can;

let sampler = new Tone.Sampler({"C4": "https://openprocessing-usercontent.s3.amazonaws.com/files/user188179/visual811099/h7d20c5ca00185e7daad4be5d2853b023/marimb.wav"});
sampler.envelope = {
  attack: 0.01,
  decay: 0,
  sustain: 1,
  release: 1
}
sampler.toMaster();

let sampler2 = new Tone.Sampler({"C4": "https://openprocessing-usercontent.s3.amazonaws.com/files/user188179/visual811099/h7d20c5ca00185e7daad4be5d2853b023/pizzicatoC4.wav"});
sampler2.envelope = {
  attack: 0.01,
  decay: 0,
  sustain: 1,
  release: 1
}
sampler2.toMaster();

let sampler1 = new Tone.Sampler({"C4": "https://openprocessing-usercontent.s3.amazonaws.com/files/user188179/visual811099/h7d20c5ca00185e7daad4be5d2853b023/PianoC4.wav"});
sampler1.envelope = {
  attack: 0.01,
  decay: 0,
  sustain: 1,
  release: 1
}
sampler1.toMaster();

function setup() {
    can = createCanvas(870,500);
    can.position(190,500)
    background(252);
  piano = createImg("https://openprocessing-usercontent.s3.amazonaws.com/files/user188179/visual811099/h7d20c5ca00185e7daad4be5d2853b023/piano1.png","");
    piano.size(50*1.125,50);
    piano.position(width/2,height+500)
    piano.mousePressed(pianocounter);
    marimba = createImg("https://openprocessing-usercontent.s3.amazonaws.com/files/user188179/visual811099/h7d20c5ca00185e7daad4be5d2853b023/marimba.png","");
    marimba.size(50*1.125,50);
    marimba.position(width/2-100,height+500)
    marimba.mousePressed(marimbacounter);
    pizzacato = createImg("https://openprocessing-usercontent.s3.amazonaws.com/files/user188179/visual811099/h7d20c5ca00185e7daad4be5d2853b023/pizzacato1.png","");
    pizzacato.size(50*1.125,50);
    pizzacato.position(width/2-200,height+500)
    pizzacato.mousePressed(pizzacounter);
    playbutton = createImg("https://openprocessing-usercontent.s3.amazonaws.com/files/user188179/visual811099/h7d20c5ca00185e7daad4be5d2853b023/play.png","");
    playbutton.size(50*1.125,50);
    playbutton.position(width/2+300,height+500)
    playbutton.mousePressed(chordplay);
    pausebutton = createImg("https://openprocessing-usercontent.s3.amazonaws.com/files/user188179/visual811099/h7d20c5ca00185e7daad4be5d2853b023/pause.png","");
    pausebutton.size(50*1.125,50);
    pausebutton.position(width/2+400,height+500)
    pausebutton.mousePressed(stopplay);
    remixbutton = createImg("https://openprocessing-usercontent.s3.amazonaws.com/files/user188179/visual811099/h7d20c5ca00185e7daad4be5d2853b023/remix.png","");
    remixbutton.size(50*1.125,50);
    remixbutton.position(width/2+500,height+500)
    remixbutton.mousePressed(remixplay);
    box = ["#722ed1","#9254de","#b37feb","#d3adf7","#efdbff","#f9f0ff"];
    box1 = ["#f5222d","#ff4d4f","#ff7875","#ffa39e","#ffccc7","#fff1f0"];
    box2 = ["#fadb14","#ffec3d","#fff566","#fffb8f","#ffffb8","#feffe6"];
    onplay = true;
    for(let i = 0; i<width/25;i++){
        for(let j = 0; j<height/25-3;j++){
            musicdots.push(new Musicdot(i*25,j*25,mnote[22-(j%23)],i));
        }
    }
    frameRate(30);
}
function draw() {
        for (let i=0; i < musicdots.length; i++){
        let b = musicdots[i];
        if (b.rolloverDisplay()){
            b.display(random([box,box1,box2][counter]))
        }
        if (b.rolloverMusic()){
            b.play([sampler,sampler1,sampler2][counter]);
        }
        if (b.played == false && b.inplaylist == true){
            playlists.push({
              sampler: [sampler,sampler1,sampler2][counter],
                note: b.mnote
            });
            b.inplaylist = false;
        }
    }
}


function chordplay(){
    if(onplay){
        synthPart = new Tone.Sequence(
        function(time, noteObj) {
            noteObj.sampler.triggerAttackRelease(noteObj.note, time);
        },
        playlists,
        "4n"
        );
        // Setup the synth to be ready to play on beat 1
        synthPart.start();
        if(onplay){
            Tone.Transport.start();
        }
        onplay = false;
    }
}
    
function remixplay(){
    synthPart = new Tone.Sequence(
    function(time, noteObj) {
        noteObj.sampler.triggerAttackRelease(noteObj.note, time);
    },
    playlists,
    "4n"
    );
    // Setup the synth to be ready to play on beat 1
    synthPart.start();
    Tone.Transport.start();
}

function stopplay(){
    synthPart.dispose();
    Tone.Transport.stop();
    onplay = true;
}


function marimbacounter(){
    counter = 0;
}

function pianocounter(){
    counter = 1;
}

function pizzacounter(){
    counter = 2;
}

// Make music unit box
class Musicdot {
  constructor(x,y,note,a) {
    this.x = x ;
    this.y = y ;
        this.inplaylist = true;
        this.anchor = a;
        this.mnote = note;
        this.played = true;
        this.dye = true;
    }
    
    display(a){
        if(this.dye){
            noStroke();
            fill(a);
            rect(this.x,this.y,25,25);
            this.dye = false;
        }
    }
    
    rolloverMusic(){
        if(mouseIsPressed && mouseX > this.x && mouseX < this.x+25 && mouseY > this.y && mouseY < this.y+25){
            return true;
        } else {
            return false;
        }
    }
    rolloverDisplay(){
        if(mouseIsPressed && mouseX > this.x && mouseX < this.x+25 && mouseY > this.y && mouseY < this.y+25){
            return true;
        }
    }
    
    play(localSampler){
        if(this.played){
            localSampler.triggerAttackRelease(this.mnote,"16n")
            this.played = false;
        }
    }
}
