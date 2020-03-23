function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  fill(255);
  rect(width-55,0,width,height);
  fill(0);
  text("Erase",width-55,height/2);
	textSize(20);
	textFont('Georgia');
}

function mousePressed(){
  if (mouseX > (width-55)){
		background(0);
  }
}


function mouseDragged(){
 	 if (mouseX < (width-55)){
   	 fill(255);
		 noStroke();
		 ellipse(mouseX,mouseY,10,10);
		 strokeWeight(10);
		 stroke(255);
		 line(mouseX,mouseY,pmouseX,pmouseY);
    }
}
