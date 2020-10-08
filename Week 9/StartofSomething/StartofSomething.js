// Conversation with a Virus

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
var yes = 0;
var waiting = 0;

var osc;


let reply = 'Hey there';
let bot = new RiveScript();


//--------------------------------------------------------------------------
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
//--------------------------------------------------------------------------

function setup() {  
createCanvas(windowWidth , windowHeight);  

osc = new p5.Oscillator('triangle');
 
background(0); 
textFont(font);
textAlign(CENTER);
fill(255);
frameRate(10);

//let button = createButton('Tweetme');
//button.position(width-100, height -50);


translate(width/2,0);
inputElem = createInput('');


// Taking the input text and inputing it into a function below (input comes in the form of this.value
//inputElem.input(chat);

// decor

inputElem.size(400); 
//inputElem.style('color', '#000000');
//inputElem.style('background-color', '#000000');
inputElem.position(width/2 -192 ,height -50);
}


function chat() { 
  let input = inputElem.value();
  reply = bot.reply('local-user', input);
} 
//--------------------------------------------------------------------------

function draw() {
console.log(inputElem.value());
  
background(random(map(mouseX, 0 , width, 0, 100),255),random(map(mouseX, 0 , width, 0, 255),255),255,8);

cursor(CROSS);
//noFill();
//strokeWeight(2);
//ellipse(mouseX, mouseY,10,10);

textFont(font);
fill(255);


if (reply.length > 60) {
textSize(45);
textAlign(CENTER);
translate(0,-100);

} else {
textSize(60);
textAlign(CENTER);
}

if ( index < reply.length) {
var timer = reply.length * -1;
right = timer + ((index) * timer);
var tones = [ 207.65,164.81 ]; //a3b & e3
// c major 261.63,293.66,329.63,349.23,392.00,440.00,493.88,523.25
// c major thirds 261.63,329.63,392.00,493.88
// a flat major 3rds 207.65,130.81,155.56,196.00
// 65.41,130.81,261.63

    osc.freq(random(tones), 0.1);
    osc.amp(0.11, 0.1);
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


console.log(inputElem);

//let stringy = inputElem; 
//let matchy = 'yes';
//let m = match(stringy , matchy);
//text(m, height/2, width/2);

  
translate(width/4, 0);
text(reply.substring(index, right +1),0, height/2.2, width/2, height/2);


waiting++; 
if(waiting == 100) {
  reply = " Hello? ";
} else if (waiting == 200) {
  reply = "Is anyone there?";
} else if (waiting == 299) {
  reply = "A quote from my favourite Author: Why then, after a decade of coesistence with computer viruses, does our default response to them remain a mix of bafflement and dread? -Julian Dibbell";
}


}


//yes++; 
//if(yes > 50) {
  
//  reply = " hello? "; 


//} else if (yes > 100) {
 
//  reply = "is anyone there?";

//}
//console.log(yes);
//}



//--------------------------------------------------------------------------

function mousePressed() {
if( start == 1) {
  song.play();
  song.setVolume(0.5);
  start = 0;
  song.loop();
  yes = 0;
  waiting = 300;
  
  }
} 


function keyPressed() { 
if (keyCode === ENTER) {
chat();
index = 0;
inputElem.value('');
yes = 0;
waiting = 300;
  }
}
