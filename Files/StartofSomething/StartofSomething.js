// This is my start of the sketch but im not too sure if ill continue down this path. 
// Remix of https://www.geeksforgeeks.org/p5-js-createinput-function/
// The typeface is called Redaction and is a typeface that I think would be really appropriate for a project like this. 

var input;
var button; 

function preload() {
  font = loadFont('data/Redaction35-Regular.otf'); 
}


function setup() {
createCanvas(windowWidth, windowHeight);
background(0); 
textFont(font);
textAlign(CENTER);

// This button would publish the text to twitter as an account.

button = createButton('Tweetme');
button.position(width-100, height -50);

// This would be where the text input goes from API articles of Viruses. I would like it to have a handwritten animation to it

input = createInput('Language is a Virus');
input.input(onInput);


input.size(400);
//input.style('font-size', '90px');
input.style('color', '#ffffff');
input.style('background-color', '#000000');
input.position(30,40);

}

// This would be an area where the user could highlight over a word and click on it to change it through Rita.js
// Might have to break down every word using Classes for this though. 

function onInput(){
clear();  
background(0); 
textSize(80);
fill(255);
text(this.value(), width/2, height/2);
}


function draw() {
cursor(CROSS);

}
