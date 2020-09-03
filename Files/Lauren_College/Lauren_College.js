let button;
let wee = [];


function preload() { 

  for (let i = 1; i < 27; i++) {
    wee[i] = loadImage("data/"+i+".png");
  } 
}

function setup() {
createCanvas(windowWidth,windowHeight);
;
//background(0);
imageMode(CENTER);
button = createButton("Create");
button.mousePressed(toggle);
button.position(10, 10);

slider = createSlider(100, 1000, 500, 0.1);
slider.position(70, 10);

slider2 = createSlider(1, 26, 13, 0.1);
slider2.position(370, 10);

textSize(12);
text("Image Size", 260 -47,24);
text("Image Ammount", 570 -58,24);


//textFont("Times");
textSize(18);
textAlign(CENTER);
text("Designed by Jamie Tung for Lauren McNeil | Brief 2 Capstone", windowWidth/2, windowHeight/1.8);
textSize(100);
text("Collaging Collages", windowWidth/2, windowHeight/2);

}


let colors = ["#F06543","#E8E9EB","#e0dfd5","#313638", "#f09d51"];

function toggle() { 
let x = int(slider.value());
let ammount = int(slider2.value());
 

    background(255); 
    for (let a = 1; a < ammount +1; a++) {
    imageMode(CENTER); 
    image(wee[a],random(windowWidth),random(windowHeight),x,x); 
    }
    
    for (let b = 1; b < random(2,ammount) ; b++) {
    
      if (x <= 250){
      g = random(25,x-100);
      } else if (x <= 500) {
      g = random(50,x-250);
      } else if (x <= 750) {
      g = random(75,x-350);
      } else {
      g = random(100,x-500);
    }
    
    
    fill(random(colors));
    noStroke();
    ellipse(random(windowWidth),random(windowHeight),g,g);
    }

console.log(g);

fill(0);
textSize(12);
text("Image Size = " + x, 260,24);

text("Image Ammount = " + ammount , 570,24);

text("Collaging Collages | Designed by Jamie Tung for Lauren McNeil | Brief 2 Capstone", windowWidth - 225, 24);
} 


function draw() {

  //rect(random(windowWidth),random(windowHeight),200,200);
}
