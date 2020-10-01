// References
// https://editor.p5js.org/re7l/sketches/RjwfE-_G
// https://editor.p5js.org/re7l/sketches/JKPIUlZq
// https://p5js.org/reference 

var sentence = [];

var counter = 0; 
var inputElem;

let reply = 'CodeWords';
let bot = new RiveScript();

function preload() {
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


function setup() {  
createCanvas(windowWidth , windowHeight);  
background(0); 
textFont(font);
textAlign(CENTER);
fill(255);
frameRate(10);

let button = createButton('Tweetme');
button.position(width-100, height -50);

//text( 'Prototype of the Virus Project', 110,80);
inputElem = createInput('');


// Taking the input text and inputing it into a function below (input comes in the form of this.value
//inputElem.input(chat);

// decor
inputElem.size(400); 
inputElem.style('color', '#ffffff');
inputElem.style('background-color', '#000000');
inputElem.position(width/2.5,40);
}


function chat() { 
  let input = inputElem.value();
  reply = bot.reply('local-user', input);
  
  console.log(inputElem.value());
  console.log(reply);
} 


function draw() {
background(0);
cursor(CROSS);
textSize(60);
textFont(font);
fill(255);
//text(textStr, 1, height/1.5 , width, width/2);

let sub = reply.substring(counter, counter + 1);
text (sentence, 0, height/2 , width, width/2);


if( counter < reply.length) {
  
  sentence.push(sub);

  counter++;
} else if ( counter > reply.length) {
  counter=0;
  sentence = [];
}




}


function keyPressed() { 
if (keyCode === ENTER) {
chat();
counter = 0;
 sentence = [];
}
}




