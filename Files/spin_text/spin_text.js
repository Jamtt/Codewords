function preload() { 

font = loadFont('data/PERTILI.otf');
}

var spin=0;
var lsize;
var time=0;

function setup() {
createCanvas(windowWidth, windowHeight); 
angleMode(DEGREES);
textFont (font);
textAlign (CENTER);
frameRate(15);
}


function draw() {
  background(255,mouseX-width/2,mouseX-width/2,20);
  translate(width/2, height/2);
  rotate(spin);
  
  fill (map(mouseX,0,width,255,0),80);
  textSize(time);
  print(spin);
  text('House of Leaves',10,30); 
  spin = spin + map(mouseX,0,width,-10,10);
  
  time = time+0.5; 
  if (time >200) {
    time =0;
  }
 
}
