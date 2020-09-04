function setup() {
createCanvas (500,500);
background (255,70,0); 
strokeWeight(5);
noStroke();

}


function draw() {
 stroke(5);
 line ( 250,250,pmouseX,pmouseY);
  
 fill (mouseX/2,(mouseX + mouseY)/4, mouseX/2);
 rect ( 100,100,300,300); // rect(x1,y1width,height);
 fill (mouseY/2,(mouseX + mouseY)/4, mouseY/2);
 ellipse (250,250,300,300); // (center x, center y, width, height);

 
}

function keyPressed () {
 fill(255,0,0);
 rect ( 0,0,500,500);
}
