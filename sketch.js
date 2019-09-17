function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(10);
       background(0);
    }
    for(var i = 9990; i > 1000; i = i - 3){
      circle((random(600)), i, i);
  }

function draw (){
 
  { stroke(255);
    for (var i = 10; i < 4000; i += 10) {    
      line(i, i, i + i/2, 500);  } 
  for(var i = 0; i < windowWidth; i = i + 50){
    fill(randomGaussian(123, 100),randomGaussian(123, 100),randomGaussian(123, 100), 112);
    noStroke();
    circle(i, (i/2), random(100));
  }
  for (var y = 20; y <= height; y += (random(50))) 
  {    for (var x = 20; x <= width; x += (random(50))) 
    {      ellipse(x, y, 4, 4);}
  }}}