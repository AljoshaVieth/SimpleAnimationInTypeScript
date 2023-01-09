"use strict";
var ThomasCanvas;
(function (ThomasCanvas) {
    console.log("Hallo");
    let canvas = document.querySelector("canvas");
    let crc2 = canvas.getContext("2d");
    let slider = document.querySelector("input");
    slider.addEventListener("input", hndSlider);
    function hndSlider(_event) {
        crc2.resetTransform();
        crc2.fillStyle = "black";
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        crc2.translate(canvas.width / 2, canvas.height / 2);
        crc2.scale(1, -1);
        crc2.rotate(parseFloat(slider.value));
        let t1 = crc2.getTransform();
        crc2.resetTransform();
        crc2.fillStyle = "hsl(60,100%,70%)";
        crc2.fillRect(0, 0, 100, 100);
        crc2.setTransform(t1);
        console.log("test");
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(300, 0);
        crc2.strokeStyle = "white";
        crc2.moveTo(0, 0);
        crc2.lineTo(0, 300);
        crc2.stroke();
    }
})(ThomasCanvas || (ThomasCanvas = {}));
//# sourceMappingURL=Canvas.js.map