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

var osc;


let reply = 'Hey there';
let bot = new RiveScript();


//--------------------------------------------------------------------------
function preload() {
  song = loadSound('data/hum.mp3');
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

    osc.freq(207.65, 0.1);
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
  
translate(width/4, 0);
text(reply.substring(index, right +1),0, height/2.2, width/2, height/2);
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
  
  }
} 


function keyPressed() { 
if (keyCode === ENTER) {
chat();
index = 0;
inputElem.value('');
yes = 0;
  }
}
