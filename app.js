// By Hakan Yorganci
// https://gist.github.com/hakanovski/4433e5f4c42c118f3dccd55c5d4199e0

// Variables
let clockRadius = 160;
let numPoints = 60;
let secondLength = clockRadius * 1.2;
let minuteLength = clockRadius * 0.85;
let hourLength = clockRadius * 0.65;
let secondWidth = 8;
let minuteWidth = 8;
let hourWidth = 8;
let centerX;
let centerY;
let clockHeight = clockRadius * 3;
let clockWidth = clockRadius * 3;
let lineY1 = 240;
let lineY2 = 220;


// Creating canvas
function setup() {
  bg = loadImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpAI0aYIm7gt-vgc5KwjiN2UsmB6YhY5_Yb3-VZzKAkAehP8kNbNPUgHSjkSK9n6vnCvY&usqp=CAU');
  bg.resize(windowWidth, windowHeight);
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  centerX = windowWidth / 2;
  centerY = windowHeight / 2;
}

// Clock face
function clockSurface() {
  noFill();
  stroke(0, 0, 0);
  strokeWeight(9);
  ellipse(centerX, centerY, clockHeight, clockWidth);

  translate(centerX, centerY);

  // Clock tick marks
  for (let i = 0; i < 12; i++) {
    strokeWeight(4);
    line(0, lineY1, 0, lineY2);
    rotate(30);
  }
}

// Drawing the functions on canvas
function draw() {
  background(bg);

  clockSurface();

  translate(-centerX, -centerY);

  // Moving the Second Hand
  let  sec = map(second(), 0, 60, 0, 360) - 90;
  stroke(44, 78, 202);
  strokeWeight(secondWidth)
  line(
    centerX,
    centerY,
    centerX + secondLength * cos(sec),
    centerY + secondLength * sin(sec)
  );


  // Moving the Minute Hand
  let  min = map(minute(), 0, 60, 0, 360) - 90;
  stroke(198, 26, 190);
  strokeWeight(minuteWidth);
  line(
    centerX,
    centerY,
    centerX + minuteLength * cos(min),
    centerY + minuteLength * sin(min)
  );


  // Moving the Hour Hand
  let  hr = map(hour(), 0, 12, 0, 360) - 90;
  stroke(238, 0, 83);
  strokeWeight(hourWidth);
  line(
    centerX,
    centerY,
    centerX + hourLength * cos(hr),
    centerY + hourLength * sin(hr)
  );

}