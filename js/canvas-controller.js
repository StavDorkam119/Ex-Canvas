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

function onChangeShape(shape) {

}

function drawRect(x, y) {
    ctx.rect(x, y, 150, 150)
    ctx.fillStyle = 'orange'
    ctx.fillRect(x, y, 150, 150)
    ctx.stroke()
    ctx.fill()
}