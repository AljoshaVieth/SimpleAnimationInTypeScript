const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
const WINDOW_WIDTH = canvas.width;
const WINDOW_HEIGHT = canvas.height;

let startX = 20;
let startY = 0;
let vX = 1;
let vY = 1;
const diameter = 10;
let currentX = startX;
let currentY = startY;
let collisionTime = 0;

function draw() {
  let time = Date.now();

  ctx.fillStyle = 'lightgray';
  ctx.fillRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);

  console.log(`time: ${time}, collisionTime: ${collisionTime}, time - collisionTime = ${time - collisionTime}`)
  currentX = startX + (time - collisionTime) * vX;
  currentY = startY + (time - collisionTime) * vY;
  console.log(`current x: ${currentX}, current y: ${currentY}`)

  // right border and left border
  if (currentX >= WINDOW_WIDTH - diameter) {
    vX = -vX;
    startX = WINDOW_WIDTH - diameter;
    startY = currentY;
    collisionTime = time;

    console.log(`vX = ${vX}`);
    console.log(`startX = ${startX}`);
    console.log(`right border hit`);
  } else if (currentX <= 0) {
    vX = -vX;
    startX = 0;
    startY = currentY;
    collisionTime = time;

    console.log(`vX = ${vX}`);
    console.log(`startX = ${startX}`);
    console.log(`left border hit`);
  }

  ctx.fillStyle = 'red';
  ctx.beginPath();
  //console.log(`Drawing arc: x =  ${currentX}, y =  ${currentY}, diameter =  ${diameter} / 2`)
  ctx.arc(currentX, currentY, diameter / 2, 0, 2 * Math.PI);
  ctx.fill();
}

setInterval(draw, 1000 / 2); // call draw function 60 times per second
