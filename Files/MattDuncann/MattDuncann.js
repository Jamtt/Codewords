let song;
let button;
let bpm = 100;
let f = bpm/60;
let img;
let img2;

function preload() { 
  //soundFormats('mp3','ogg');
  song = loadSound("data/1.mp3");
  img = loadImage("data/saxophone.png");
  img2 = createImg("data/PianoCat.gif");
  img3 = loadImage("data/myfamily.jpg");
}

function setup() {

createCanvas(windowWidth,windowHeight,p5.sound);
background(0);
noStroke();
textFont("Times");
textAlign(CENTER);
//translate( 0 , -30);
textSize(200);
fill(255);
//frameRate(f);

button = createButton("Play");
button.mousePressed(togglePlaying);
slider = createSlider(0, 1, 0.5, 0.01);
slider.position(70, 10);
button.position(10, 10);
song.addCue(0, yes2, "Matt Duncan | This Time In December");

song.addCue(8.4, yes, "Spring");
song.addCue(8.7, yes, "brings");
song.addCue(9.5, yes, "the");
song.addCue(9.7, yes, "showers");
song.addCue(10.7, yes, "to");
song.addCue(10.9, yes, "wake");
song.addCue(11.3, yes, "all");
song.addCue(11.8, yes, "the");
song.addCue(12.1, yes, "flowers");

song.addCue(13.7, yes, "to");
song.addCue(13.9, yes, "fill");
  song.addCue(14.05, yes, "up");
song.addCue(14.2, yes, "your");
song.addCue(14.5, yes, "every");
song.addCue(15.5, yes, "sense");
song.addCue(17, yes, " ");

song.addCue(17.8, yes, "and");
song.addCue(18.1, yes, "summer");
song.addCue(18.7, yes, "heat");
song.addCue(19.1, yes, "lingers");
song.addCue(20, yes, "after");
song.addCue(20.4, yes, "sunsets,");
song.addCue(21.4, yes, "long");
song.addCue(21.7, yes, "fingers");

song.addCue(22.9, yes, "graced");
song.addCue(23.7, yes, "every");
song.addCue(24.1, yes, "fin");
song.addCue(24.5, yes, "and");
song.addCue(25, yes, "fence");
song.addCue(26, yes, " ");

//[Chorus]
song.addCue(27.2, yes, "But");
song.addCue(27.5, yes, "these");
song.addCue(27.7, yes, "things");
song.addCue(28.6, yes, "I");
song.addCue(28.8, yes, "remember,");
song.addCue(29.8, yes, "this");
song.addCue(30.1, yes, "time");
song.addCue(31, yes, "in");
song.addCue(31.2, yes, "December");
song.addCue(32.2, yes, "stay");
song.addCue(32.5, yes, "with");
song.addCue(32.8, yes, "me");
song.addCue(33.1, yes, "for");
song.addCue(33.5, yes, "the");
song.addCue(33.7, yes, "whole");
song.addCue(34.1, yes, "year");
song.addCue(34.7, yes, "long");
song.addCue(36, yes, " ");

song.addCue(37.3, yes, "Autumn");
song.addCue(38.1, yes, "assending,");
song.addCue(39.3, yes, "as");
song.addCue(39.5, yes, "a");
song.addCue(39.7, yes, "beauty,");
song.addCue(40.8, yes, "an");
song.addCue(40.93, yes, "ending");

song.addCue(42.7, yes, "bitter");
song.addCue(43, yes, "sweet");
song.addCue(43.5, yes, "breezy");
song.addCue(44.3, yes, "sigh");

song.addCue(46.7, yes, "and");
song.addCue(46.9, yes, "winter");
song.addCue(47.5, yes, "we'll");
song.addCue(48.1, yes, "stay"); 
song.addCue(48.4, yes, " in");
song.addCue(48.8, yes, "our");
song.addCue(49.3, yes, "tenderness");
song.addCue(50.6, yes, "lay");
song.addCue(50.82, yes, "in");

song.addCue(51.7, yes, "bounty");
song.addCue(52.5, yes, "no");
song.addCue(52.9, yes, "king");
song.addCue(53.6, yes, "could");
song.addCue(54, yes, "buy");
song.addCue(55.9, yes, " ");

//[Chorus]
song.addCue(56.1, yes, "and");
song.addCue(56.3, yes, "these");
song.addCue(56.5, yes, "things");
song.addCue(56.5, saxophone, -40);
song.addCue(57.3, yes, "we");
song.addCue(57.5, yes, "remember");
song.addCue(58.7, yes, "this");
song.addCue(58.7, saxophone, 40);
song.addCue(58.9, yes, "time");
song.addCue(59.7, yes, "in");

song.addCue(60, yes, "December");
song.addCue(60, saxophone, -20);
song.addCue(61, yes, "stay");
song.addCue(61, saxophone, 20);
song.addCue(61.3, yes, "with");
song.addCue(61.7, yes, "us");
song.addCue(61.9, yes, "for");
song.addCue(62.3, yes, "the");
song.addCue(62.5, yes, "whole");
song.addCue(62.5, saxophone, -40);
song.addCue(62.9, yes, "year");
song.addCue(63.5, yes, "long");
song.addCue(63.8, saxophone, 0);
song.addCue(65.0, blank);

//[Bridge] 
song.addCue(65.7, yes, "you'll");
song.addCue(65.9, yes, "not");
song.addCue(66.3, yes, "be");
song.addCue(66.5, yes, "alone,");
song.addCue(67.9, yes, "every");
song.addCue(68.5, yes, "heart");
song.addCue(68.9, yes, "a");
song.addCue(69.1, yes, "home,");
song.addCue(70.3, yes, "that");
song.addCue(70.5, yes, "stays");
song.addCue(70.9, yes, "warm");
song.addCue(71.4, yes, "through");
song.addCue(71.7, yes, "every");
song.addCue(72.1, yes, "gusting");
song.addCue(73.1, yes, "gift,");

song.addCue(75.4, yes, "gather");
song.addCue(75.7, yes, "all");
song.addCue(76.3, yes, "around,");
song.addCue(77.6, yes, "we'll");
song.addCue(77.8, yes, "be");
song.addCue(78.2, yes, "safe");
song.addCue(78.5, yes, "and");
song.addCue(78.7, yes, "sound,");
song.addCue(79.9, yes, "let");
song.addCue(80.2, yes, "the");
song.addCue(80.34, yes, "season");
song.addCue(81.1, yes, "spirit");
song.addCue(81.7, yes, "never");
song.addCue(82.5, yes, "fail");
song.addCue(84.8, yes, " ");
song.addCue(85, hifam);

//Intrumental

song.addCue(104, byefam);
song.addCue(104.3, yes, "These");
song.addCue(104.7, yes, "things");
song.addCue(105.3, yes, "I");
song.addCue(105.6, yes, "remember,");
song.addCue(106.7, yes, "this");
song.addCue(107, yes, "time");
song.addCue(107.8, yes, "in");
  song.addCue(107.95, yes, "December");
song.addCue(109, yes, "I");
song.addCue(109.3, yes, "know");
song.addCue(109.7, yes, "we'll");
song.addCue(109.9, yes, "last");
song.addCue(110.3, yes, "the");
song.addCue(110.5, yes, "whole");
song.addCue(110.8, yes, "year");
song.addCue(111.4, yes, "long,");

song.addCue(114.5, yes, "I");
song.addCue(115.4, yes, "know");
song.addCue(115.9, yes, "we'll");
song.addCue(116.3, yes, "last");
song.addCue(116.6, yes, "the");
song.addCue(117, yes, "whole");
song.addCue(118.7, yes, "year");
song.addCue(121.3, yes, "long");
song.addCue(123.1, yes, " ");
}




function togglePlaying() { 
  if(!song.isPlaying()) {
   song.play(); 
       button.html("Stop");
    
  } else {
    song.stop();
    button.html("Play");
   
  }
}
  
function draw() {
song.setVolume(slider.value());
//fill(random(255),random(255),0);
//stroke(255);
//ellipse(mouseX,mouseY, 25,25);

img2.position(mouseX, mouseY);

rectMode(CENTER);
push();
textSize(20);
fill(0);
stroke(0);
rect(80, 60, 160,50);
fill(255);
text (int(song.currentTime()) + " Seconds",60, 60);
pop();

fill(0);
}

//--------

function hifam() {
push();
imageMode(CENTER);
image(img3, windowWidth/2, windowHeight/2,400,300);
pop();
}

function byefam() {
background(0);
}

function saxophone(angle) {
 fill(0); 
 rect(windowWidth-200, windowHeight/2,300,320);

 translate(width-200, height/2);
 push();
 imageMode(CENTER);
 angleMode(DEGREES);
 rotate(angle);
 translate(-width/2, -height/2);
 image(img, windowWidth/2, windowHeight/2,300,300);
 pop();

}
  
function blank() {
 push();
 rect(windowWidth-200, windowHeight/2,300,320);
 pop();

}




function yes(lyrics) {
let colors = ["#880120" , "#CE1A35","#E2891E","#E2C833", "#3B8E17", "#E5CDAF"];

 
 stroke(0);
 rect(width/2, height/2, 1000, windowHeight);
 fill(random(colors));
 translate(0,40);
 textSize(200);
 text(lyrics, windowWidth/2, windowHeight/2);
}

function yes2(lyrics) {
 fill(255);
 stroke(0);
 background(0); 
 translate(0,20);
 textSize(30);
 text(lyrics, windowWidth/2, windowHeight/2);


}
