let song , amplitude; 


function preload() {
song = loadSound('data/WhatisHip.mp3');
}

function setup() {
createCanvas( windowWidth, windowHeight); 
amplitude = new p5.Amplitude();
amplitude.setInput(song);
textAlign(CENTER);
background(0);
}


function draw() {
background(0);
fill(255);
text('What is Hip by Tower of Power', width-100 , height-20 );

let level = amplitude.getLevel(); 
let size = map(level, 0, 1, 0, 2000);



let tiles = 20;
let tileSize = width/tiles;

    translate(width/2, height/2); 
for (x = 0; x < tiles ; x++) {
  for (y = 0; y < tiles; y++) {

    rotate(PI/map(mouseX, 0 ,width, sin(2), 3));
    fill(map(mouseX,0,width,0,255),random(255),random(255));
    noStroke();

    //textSize(2 +mouseX);
    text('What is Hip!', x*tileSize ,y*tileSize,size, size);
  
   }
 }
}

function mousePressed() { 
  if (song.isPlaying()) {
       song.stop();

  } else {
    background(0);
    song.setVolume(0.5);
    song.play();    
  }   
} 
