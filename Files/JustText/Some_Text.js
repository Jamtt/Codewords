function setup() { 
font = loadFont('data/PERTILI.ttf');  
} 


function setup() {
createCanvas(windowWidth, windowHeight); 
textFont (font);
textAlign (CENTER);
}


function draw() {
  background(255);
  fill (0);
  textSize(25);
  text('spagetti',width/2,height/2-200);
  textSize(65);
  text('pasta',width/2,height/2-20); 
  textSize(100);
  text('lasagne',width/2,height/2+200);
}
