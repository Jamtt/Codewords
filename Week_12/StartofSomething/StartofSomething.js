// "We’re not all bad" Conversation with a Virus
// Built by Jamie Tung for Studio CodeWords run by Andy Simionato & Karen ann Donnachie.

// References
// https://editor.p5js.org/re7l/sketches/RjwfE-_G
// https://editor.p5js.org/re7l/sketches/JKPIUlZq
// https://p5js.org/reference 
// Music called Hum by Daisuke Miyatani


var start = 1;
var counter = 0; 
var inputElem;
var song;
var index = 0;
var right;
var waiting = 0;
var osc;

let amplitude; 
let volume;
let reply = '';
let bot = new RiveScript();
let m;


//PRELOAD----------------------------------------------------------------------
function preload() {
  song = loadSound('data/Hum.mp3');
  font = loadFont('data/Redaction35-Regular.otf'); 
  bot.loadFile('bot.txt', Ready, Error);

  function Ready() {
  console.log('Chatbot ready!');
  bot.sortReplies();
  let reply = bot.reply('local-user', 'hey');
  }
 
  function Error() {
  console.log('Chatbot error!');
  }
  
}
//SETUP--------------------------------------------------------------------

function setup() {  
createCanvas(windowWidth , windowHeight);  

osc = new p5.Oscillator('triangle');
amplitude = new p5.Amplitude();
 
background(0); 
textFont(font);
textAlign(LEFT);
fill(255);
frameRate(10);

//let button = createButton('Tweetme');
//button.position(width-100, height -50);

volume = createSlider(0, 200, 100);
if (windowWidth > 400) {
volume.position(width -190, height -40 );
} else if (windowWidth <= 400) {
 volume.position(width -170, height -40 );
}


translate(width/2,0);
inputElem = createInput('');

// decor
inputElem.size(300); 
inputElem.style('color', '#DCDCDC');
inputElem.style('background-color', '#ffffff');
inputElem.style('font-size', '35px');
if (windowWidth >= 1920) {
inputElem.position(width -400 ,height/2-25);
} else if (windowWidth >= 1440) {
inputElem.position(width -380 ,height/2-25);
} else if (windowWidth >= 1024) {
inputElem.position(width -365  ,height/1 -380); 
} else if (windowWidth >= 700) {
inputElem.position(width -350  ,height/1 -290);  
} else if (windowWidth >= 300) {
inputElem.position(width/2 -150 ,height/1.2);
inputElem.size(300); 
inputElem.style('font-size', '20px');
}
}


function chat() { 
  
  let input = inputElem.value();
  reply = bot.reply('local-user', input);
  
} 
//DRAW--------------------------------------------------------------------------

function draw() {

//volume slider UI
let soundy = volume.value();
song.setVolume(map(soundy,0,200,0,0.2));

push();
fill(255,255,255,8);
strokeWeight(0);
textSize(16);
textFont('Helvetica');

if (windowWidth > 400) {
text("Volume", width/1 -260, height/1 -24);
} else if (windowWidth <= 400) {
text("Volume", width/2 -148, height/1 -24);
}

if (windowWidth >= 1920) {
text("CodeWords 2020", width/12 -100, height/1 -24);
} else if (windowWidth >= 1440) {
text("CodeWords 2020", width/12-50, height/1 -24);
} else if (windowWidth >= 1024) { 
text("CodeWords 2020", width/6 -100, height/1 -24);
} else if (windowWidth >= 700) { 
text("CodeWords 2020", width/6 -70, height/1 -24);
}else if (windowWidth >= 300) { 
text("CodeWords 2020", width/1.8 , height/1.22);
}
pop();

  
//word matching -----------------------------------
var bad = 'bad';
var m = match( inputElem.value(), bad);
var good = 'good';
var n = match( inputElem.value(), good);
var unsure = 'unsure';
var o = match( inputElem.value(), unsure);

if (m > '') { 
background(255,40,0,30);
} else if (o > '') { 
background(255,212,0,30);
} else if (n > '') { 
background(0,128,0,30);
} else { 
  
background(random(map(mouseX, 0 , width, 0, 100),255),random(map(inputElem.value().length * 40, 0 , inputElem.value().length +100, 160, 0),255),255,8);
}

//----------------shutdown---------------------
var bye = 'Virus has left the chat and your computer.';
var b = match( reply, bye);

if (b > '') { 
 background(0);
 start = 0;
 song.stop();
}

// responding line thickness ------------------------  

if (windowWidth >= 1920) {
stroke(255,255,255,inputElem.value().length +5);
if (inputElem.value().length < 40) {
strokeWeight(inputElem.value().length);
line(width/2, height/2, width -120, height/2);
} else if (inputElem.value().length > 40){
strokeWeight(40);
}

} else if (windowWidth >= 1440) {
stroke(255,255,255,inputElem.value().length +5);
if (inputElem.value().length < 40) {
strokeWeight(inputElem.value().length);
line(width/2, height/2, width -380 ,height/2);
} else if (inputElem.value().length > 40){
  strokeWeight(40);
} 

  
} else if (windowWidth >= 1024) {
stroke(255,255,255,inputElem.value().length +5);
if (inputElem.value().length < 40) {
strokeWeight(inputElem.value().length);
line(width/2, height/2, width -365  ,height/1 -380);
} else if (inputElem.value().length > 40){
  strokeWeight(40);
} 

} else if (windowWidth >= 700) {
stroke(255,255,255,inputElem.value().length +5);
if (inputElem.value().length < 40) {
strokeWeight(inputElem.value().length);
line(width/2, height/2, width -350  ,height/1 -290);
} else if (inputElem.value().length > 40){
  strokeWeight(40);
}
  
} else if (windowWidth >= 300) {
stroke(255,255,255,inputElem.value().length +5);
if (inputElem.value().length < 40) {
strokeWeight(inputElem.value().length);
line(width/2, height/2, width/2 ,height/1.2);
} else if (inputElem.value().length > 40){
strokeWeight(40);
}
}

// Voice Circle  -----------------------

let level = amplitude.getLevel();
let size = map(level, 0, 1, 0, 7000);
ellipseMode(CENTER);
noFill();
strokeWeight(1);
stroke(255);
if (windowWidth >= 1024) {
ellipse(width/2, height/2, size,size); 
} 
else if (windowWidth >= 700) { 
ellipse(width/2, height/2, size * 1.2,size * 1.2);  

} else if (windowWidth < 400) { 
ellipse(width/2, height/2, size /1.5,size/1.5);
}

//Type ------------------------ 
textFont(font);
noStroke();
fill(255);


//Type to reply----------------

if (index == reply.length) { 
push();
fill(255,255,255,4);
strokeWeight(0);
textSize(16);
textFont('Helvetica');
if(windowWidth >= 1920) {
text("Type to reply", width/2.12, height/1 -24);
} else if (windowWidth >= 1440) {
text("Type to reply", width/2.16, height/1 -24);
} else if (windowWidth >= 1024) {
text("Type to reply", width/2.25, height/1 -24);  
} else if (windowWidth >= 700) {
text("Type to reply", width/2.4, height/1 -24); 
} else if (windowWidth >= 300) {
text("Type to reply", width/2 -148,  height/1.22);
}
pop();
}

//Reply length to text size ------------------------ 
if(windowWidth => 1000) {

if (reply.length > 60) {
textSize(30);
translate(0,-70);
} else {
textSize(45);
}

} else if (windowWidth < 1000) {
if (reply.length > 60) {
textSize(35);
translate(0,-70);
} else {
textSize(50);
}

} else if (windowWidth <= 375) {
if (reply.length > 60) {
textSize(20);
//translate(0,-50);
} else {
textSize(23);
}
}

// typewriting messaging ------------------------ 
if ( index < reply.length) {
var timer = reply.length * -1;
right = timer + ((index) * timer);

//Bot talking tones-----------------------------
var tones = [ 207.65,164.81 ]; 
// c major 261.63,293.66,329.63,349.23,392.00,440.00,493.88,523.25
// c major thirds 261.63,329.63,392.00,493.88
// a flat major 3rds 207.65,130.81,155.56,196.00
// 65.41,130.81,261.63

osc.freq(random(tones), 0.1);
osc.amp(map(soundy, 0,200,0,0.15), 0.1);
osc.start();
playing = true;

index++;

} else if(index > reply.length) {
index = 0; 
}


if (index == reply.length) { 
osc.amp(0, 0.2);
playing = false; 
}

//writing text---------------------------
translate(0,6);

if(windowWidth >= 1920) {
text(reply.substring(index, right +1),100, height/2.2, width/2, height);
} else if (windowWidth >= 1440) {
text(reply.substring(index, right +1),100, height/2.2, width/2, height);
}
else if (windowWidth >= 1024) {
text(reply.substring(index, right +1),75, height/4, width/2, height); 
} else if (windowWidth >= 700) {
text(reply.substring(index, right +1),60, height/4, width -80, height); 
} else if (windowWidth >= 300) {
text(reply.substring(index, right +1),40, height/7 , width/1.3, height); 
}


//Waiting responces-----------------------
waiting++; 
if(waiting == 30) {
  reply = "Hello?";
} else if (waiting == 80) {
  reply = "Say hi by typing in the box";
} else if (waiting == 300) {
  reply = "Is anyone there?";
} else if (waiting == 399) {
  reply = "A quote from my favourite Author: Why then, after a decade of coexistence with computer viruses, does our default response to them remain a mix of bafflement and dread? -Julian Dibbell";
}


}

//spare functions---------------------------------------------------------------

function keyPressed() { 
if (keyCode === ENTER) {
chat();
index = 0;
inputElem.value('');
waiting = 400;


if( start == 1) {
  song.play();
  start = 0;
  song.loop();
}

  }
}
