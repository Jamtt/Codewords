
let creme = ('#f2eede');

function setup() {
createCanvas (500,500);
background(0);
ellipseMode(CENTER);
rectMode(CENTER);
}


function draw() {

var wave = sin(radians(frameCount));
  
var m1 = -450;  
var m2 = 450;   

//map( changing value, og 1, og 2, mod 1, mod 2)

let j1 = map(wave *450,m1,m2,200,-200,true);
let j2 = map(wave *450,m1,m2,115, 300,true);
let j3 = map(wave *500,m1,m2,1.57, 3.141,true);
let j4 = map(wave *500,m1,m2,0, 1.57,true);
let t1 = map(wave *500,m1,m2,120, 397,true);

fill(30);
background(0);
//ellipse(250,300,200,200);

fill(creme);
arc(250, 300, 200 , 200, j3,  PI ); //or else 3.14/2

push();
noFill(0);
strokeWeight(3);
stroke(creme);
line(250,120,250,t1);

if(wave*450 < 440) {
  line(348,j2,348,300);
  arc(250, 300, 196 , 196, j4, HALF_PI );
}
pop();

noStroke();
fill(creme); 
rect(250, 150, j1 , 75);

}
