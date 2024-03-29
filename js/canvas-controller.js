'use strict'

const gCanvas = document.querySelector('#canvas');
const gCtx = gCanvas.getContext('2d');


function init() {
    getCanvasSettings();
    setCanvasSize();
    setInitialSettings();
    gCanvas.addEventListener('mousemove', ev => {
        if (ev.buttons !== 1) return;
        draw(ev);
    })
}

function setCanvasSize() {
    gCanvas.width = window.innerWidth;
    gCanvas.height = window.innerHeight - 100;
}


function onChangeShape(shape) {
    updateCanvasShape(shape);
}

function onChangeCanvasShapeColor(color) {
    updateCanvasColor(color);
    gCtx.strokeStyle = getColor();
}

function onChangeCanvasBackgroundColor(backgroundColor) {
    updateCanvasBackgroundColor(backgroundColor);
    // gCtx.strokeStyle = getColor();
    gCanvas.style.backgroundColor = getBackgroundColor();
    gCtx.fillStyle = getBackgroundColor();
}

function draw(ev) {
    const {offsetX, offsetY} = ev
    switch(getShape()) {
        case 'triangle':
            drawTriangle(offsetX, offsetY);
            break;
        case 'circle': 
            drawCircle(offsetX, offsetY);
            break;
        case 'rectangle': 
            drawRect(offsetX, offsetY);
            break;
       }
}


function setInitialSettings() {
    gCtx.strokeStyle = getColor();
    gCanvas.style.backgroundColor = getBackgroundColor();
    gCtx.fillStyle = getBackgroundColor();
}


function drawTriangle(x,y) {
    gCtx.moveTo(x, y);
    gCtx.beginPath();
    gCtx.lineTo(x-75, y-75);
    gCtx.lineTo(x+75, y-75);
    gCtx.lineTo(x, y+75);
    gCtx.closePath()
    gCtx.lineWidth = 5;
    gCtx.stroke();
    gCtx.fill()
 
}

function drawRect(x,y) {
    gCtx.strokeRect((x-75),(y-75), 150, 150);
    gCtx.fillRect((x-75),(y-75), 150, 150);
}

function drawCircle(x,y) {
    gCtx.beginPath();
    gCtx.arc(x, y, 75, 0, 2 * Math.PI);
    gCtx.stroke();
    gCtx.fill();
}

function onClearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
}

function downloadCanvas (el) {
    var image = canvas.toDataURL("image/png;base64");
    el.href = image;
  };
