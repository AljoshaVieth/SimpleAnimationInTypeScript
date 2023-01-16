// Debug elements:
let xPosDebug = document.getElementById("debugXpos") as HTMLParagraphElement;
let yPosDebug = document.getElementById("debugYpos") as HTMLParagraphElement;
let vXDebug = document.getElementById("debugXv") as HTMLParagraphElement;
let vYDebug = document.getElementById("debugYv") as HTMLParagraphElement;
let statusMessageDebug = document.getElementById("debugStatusMessage") as HTMLParagraphElement;




const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");
const WINDOW_WIDTH = canvas.width;
const WINDOW_HEIGHT = canvas.height;

let startX = 80;
let startY = 30;
let vX = 600;
let vY = 50;
const diameter = 50;

let currentX = startX;
let currentY = startY;
let collisionTimestamp = 0;

let lastTime = new Date().getTime();
let currentTime = 0;
let deltaTime = 0;
let statusMessage = "";

function draw() {
    window.requestAnimationFrame(draw);

    currentTime = new Date().getTime();
    deltaTime = (currentTime - lastTime) / 1000;

    ctx.fillStyle = "lightgray";
    ctx.fillRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);

    console.log(
        `time: ${currentTime}, collisionTime: ${collisionTimestamp}, time - collisionTime = ${
            currentTime - collisionTimestamp
        }`
    );
    
    currentX += deltaTime * vX;
    currentY += deltaTime * vY;
    console.log(`current x: ${currentX}, current y: ${currentY}`);
    xPosDebug.textContent = "X-Position:" + Math.round(currentX);
    yPosDebug.textContent = "Y-Position:" + Math.round(currentY);
    vXDebug.textContent = "X-Velocity:"+vX;
    vYDebug.textContent = "Y-Velocity:"+vY;
    if(vX > 0){
        statusMessage = "Moving right..."
    } else {
        statusMessage = "Moving left..."
    }
    statusMessageDebug.textContent = "Status: " + statusMessage;




    // right border and left border
    if (currentX > WINDOW_WIDTH - diameter / 2 && vX > 0) {
        vX = -vX;
        startX = WINDOW_WIDTH - diameter / 2;
        startY = currentY;
        collisionTimestamp = currentTime;

        console.log(`vX = ${vX}`);
        console.log(`startX = ${startX}`);
        console.log(`right border hit`);
    } else if (currentX < diameter / 2 && vX < 0) {
        vX = -vX;
        startX = diameter / 2;
        startY = currentY;
        collisionTimestamp = currentTime;

        console.log(`vX = ${vX}`);
        console.log(`startX = ${startX}`);
        console.log(`left border hit`);
    }

    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(currentX, currentY, diameter / 2, 0, 2 * Math.PI);

    ctx.fill();

    lastTime = currentTime;
}

draw();
