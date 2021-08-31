//  By Daniel Shiffman
//  https://youtu.be/E4RyStef-gY
function setup() {
  bg = loadImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpAI0aYIm7gt-vgc5KwjiN2UsmB6YhY5_Yb3-VZzKAkAehP8kNbNPUgHSjkSK9n6vnCvY&usqp=CAU');
  bg.resize(windowWidth, windowHeight);
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(bg);
  translate(770, 375);
  rotate(-90);
    
  let hr = hour();
  let mn = minute();
  let sc = second();

  strokeWeight(8);
  stroke(255, 100, 150);
  noFill();
  let secondAngle = map(sc, 0, 60, 0, 360);
  

  stroke(150, 100, 255);
  let minuteAngle = map(mn, 0, 60, 0, 360);

  stroke(150, 255, 100);
  let hourAngle = map(hr % 12, 0, 12, 0, 360);

  //push();
  rotate(secondAngle);
  stroke(255, 100, 150);
  line(0, 0, 190, 0);
  //pop();

  push();
  rotate(minuteAngle);
  stroke(150, 100, 255);
  line(0, 0, 150, 0);
  pop();

  push();
  rotate(hourAngle);
  stroke(150, 255, 100);
  line(0, 0, 90, 50);
  pop();


  stroke(255);
  point(0, 0);

}
