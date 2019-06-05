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
    return gCanvasSettings.backgroundcolor;
}
