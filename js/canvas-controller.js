'use strict'

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

function init() {
    getCanvasSettings();
}

function setCanvasSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}


function setCanvasColors() {
    ctx.strokeStyle = getColor();
    canvas.style.backgroundColor = getBackgroundColor();
    ctx.fillStyle = getBackgroundColor();
}

function onChangeShape(shape) {
    
}

function drawTriangle(x,y) {
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(300, 150);
    ctx.lineTo(100, 100);
    ctx.closePath()
    ctx.lineWidth = 5;
    // ctx.strokeStyle = getColor();
    // ctx.fillStyle = '#ff0000'
    ctx.stroke();
    ctx.fill()
 
}

function drawRect(x,y) {
    ctx.rect(x,y, 150, 150)
    // ctx.fillStyle = 'orange'
    ctx.fillRect(x,y, 150, 150)
    ctx.stroke()
    ctx.fill()
}

function drawCircle(x,y) {
    ctx.beginPath();
    ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    ctx.stroke();


}

