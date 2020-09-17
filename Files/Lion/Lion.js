var song , amplitude; 
var spin = 180; 
var time = 0; 
var yes = 0;
var myText = "Five year old Saroo gets lost on a train which takes him thousands of miles across India, away from home and family. Saroo must learn to survive alone in Kolkata, before ultimately being adopted by an Australian couple. Twenty-five years later, armed with only a handful of memories, his unwavering determination, and a revolutionary technology known as Google Earth, he sets out to find his lost family and finally return to his first home." ;


function preload() {
song = loadSound('data/Liontheme.mp3');
} 


function setup() {
createCanvas( windowWidth, windowHeight); 

amplitude = new p5.Amplitude();
amplitude.setInput(song);

background(0);
rectMode(CENTER);
textAlign(CENTER,CENTER);
fill(255);

text( 'Music from OST Lion | Click to Start', width/2, height/1.15);

}

function draw() {

//let splitString = split(myText, ' ');
  
//for (var i = 0; i < splitString.length; i++) {
//background(0);
//fill(255);
//textSize(26);
//text(splitString[i], width/2, height/2);
//}



fill(0);
noStroke();
textAlign(CENTER);
textSize(19);

text(myText, width/2, height/2, width/5, height/2);


fill(255);
noStroke();
rect( windowWidth, map(song.currentTime(),0,118,0,windowHeight) ,-10,10);

fill(0);
noStroke();
rect( 100,100,300,300);

fill(255); 
textSize(13);
text(int(song.currentTime()), 20, 20); 


var volume = amplitude.getLevel(); 
textSize(volume*600);
noStroke();
fill(255,255,255,40); 
text(int(volume*200), 100, 100); 




let level = amplitude.getLevel(); 
let size = map(level, 0, 1, 0, 2000);
let wave = sin(cos(radians(frameCount)))*200; 


noFill(); 
stroke(random(255),random(255),random(255),40);
stroke(255,40);
strokeWeight(1);

translate(width/2, height/2); 
spin = spin + 0.8;
rotate(spin);
//ellipse(wave+50, wave+50, size, size); 
ellipse(wave-50, wave-50, size, size); 
//line(wave, wave, size, size); 
}


function mousePressed() { 
  if (song.isPlaying()) {

 
   //save('myCanvas.jpg');
   
   //setVolume(0.5);
    song.stop();

  } else {

    background(0);

    song.play();
      
  }   
} 
