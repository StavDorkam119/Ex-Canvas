'use strict'

const gCanvas = document.querySelector('#canvas');
const gCtx = gCanvas.getContext('2d');

function init() {
    getCanvasSettings();
}

function setCanvasSize() {
    gCanvas.width = window.innerWidth;
    gCanvas.height = window.innerHeight;
}


function renderCanvasColors() {
    gCtx.strokeStyle = getColor();
    gCanvas.style.backgroundColor = getBackgroundColor();
    gCtx.fillStyle = getBackgroundColor();
}

function onChangeShape(shape) {
    updateCanvasShape(shape);
    
}

function onChangeCanvasShapeColor(color) {
    updateCanvasColor(color);
    gCtx.strokeStyle = getColor();
    // gCanvas.style.backgroundColor = getBackgroundColor();
    // gCtx.fillStyle = getBackgroundColor();
}

function onChangeCanvasBackgroundColor(backgroundColor) {
    updateCanvasBackgroundColor(backgroundColor);
    // gCtx.strokeStyle = getColor();
    gCanvas.style.backgroundColor = getBackgroundColor();
    gCtx.fillStyle = getBackgroundColor();
}


function drawTriangle(x,y) {
    gCtx.beginPath();
    gCtx.moveTo(0, 0);
    gCtx.lineTo(300, 150);
    gCtx.lineTo(100, 100);
    gCtx.closePath()
    gCtx.lineWidth = 5;
    // ctx.strokeStyle = getColor();
    // ctx.fillStyle = '#ff0000'
    gCtx.stroke();
    gCtx.fill()
 
}

function drawRect(x,y) {
    gCtx.rect(x,y, 150, 150)
    // ctx.fillStyle = 'orange'
    gCtx.fillRect(x,y, 150, 150)
    gCtx.stroke()
    gCtx.fill()
}

function drawCircle(x,y) {
    gCtx.beginPath();
    gCtx.arc(100, 75, 50, 0, 2 * Math.PI);
    gCtx.stroke();


}

