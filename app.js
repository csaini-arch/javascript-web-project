//  By Daniel Shiffman
//  https://youtu.be/E4RyStef-gY

function setup() {
  bg = loadImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpAI0aYIm7gt-vgc5KwjiN2UsmB6YhY5_Yb3-VZzKAkAehP8kNbNPUgHSjkSK9n6vnCvY&usqp=CAU');
  bg.resize(windowWidth, windowHeight);
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(bg);
  translate(755, 360);
  rotate(-90);

  // Clock Hands
    
  let hr = hour();
  let mn = minute();
  let sc = second();

  strokeWeight(8);
  stroke(255, 100, 150);
  noFill();
  let secondAngle = map(sc, 0, 60, 0, 360); // mapping the seconds hand

  stroke(150, 100, 255);
  let minuteAngle = map(mn, 0, 60, 0, 360); // mapping the minutes hand

  stroke(150, 255, 100);
  let hourAngle = map(hr % 12, 0, 12, 0, 360); // mapping the hours hand

  push(); // moving the seconds hand
  rotate(secondAngle);
  stroke(44, 78, 202);
  line(0, 0, 180, 0);
  pop();

  push(); // moving the minutes hand
  rotate(minuteAngle);
  stroke(198, 26, 190);
  line(0, 0, 140, 0);
  pop();

  push(); // moving the hours hand
  rotate(hourAngle);
  stroke(238, 0, 83);
  line(0, 0, 90, 0);
  pop();

  stroke(255); // point in the center of the clock
  point(0, 0);

  stroke(0, 0, 0); // clock circle
  ellipse(0, 0, 550, 550);
  strokeWeight(4);

  textSize(50); // number 12
  rotate(90);
  text('12', -20, -210);

  textSize(50); // number 3
  rotate(90);
  text('3', -15, -210);

  textSize(50); // number 6
  rotate(90);
  text('9', -15, -210);

  textSize(50); // number 9
  rotate(90);
  text('9', -15, -210);

  textSize(50); // number 1
  rotate(122);
  text('1', -15, -210);

  textSize(50); // number 2
  rotate(27);
  text('2', -15, -210);

  textSize(50); // number 4
  rotate(60);
  text('4', -15, -210);

  textSize(50); // number 5
  rotate(30);
  text('5', -15, -210);

  textSize(50); // number 7
  rotate(65);
  text('7', -15, -210);

  textSize(50); // number 8
  rotate(27);
  text('8', -15, -210);

  textSize(50); // number 10
  rotate(55);
  text('10', -15, -210);

  textSize(50); // number 11
  rotate(30);
  text('11', -15, -210);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
