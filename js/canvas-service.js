'use strict'


let gCanvasSettings;

function getCanvasSettings() {
    gCanvasSettings = loadFromStorage('gCanvasSettings');
    if (!gCanvasSettings) {
        gCanvasSettings = {
            backgroundColor: '#ffffff',
            color: '#000000',
            currShape: 'rectangle'
        };
        saveToStorage('gCanvasSettings', gCanvasSettings);
    }
}

function getColor() {
    return gCanvasSettings.color;
}

function getBackgroundColor() {
    return gCanvasSettings.backgroundColor;
}

function updateCanvasBackgroundColor(backgroundColor) {
    gCanvasSettings.backgroundColor = backgroundColor;
    saveToStorage('gCanvasSettings', gCanvasSettings);
}

function updateCanvasShape(shape) {
    gCanvasSettings.currShape = shape;
    saveToStorage('gCanvasSettings', gCanvasSettings);
}

function updateCanvasColor(color) {
    gCanvasSettings.color = color;
    saveToStorage('gCanvasSettings', gCanvasSettings);
}
