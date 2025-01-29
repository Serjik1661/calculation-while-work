// script.js
function appendToDisplay (value) {
    const DISPLAY = document.getElementById('display');
    DISPLAY.value += value;
}

function clearDisplay(){
    display.value = '';
}

function resultToDisplay(){
    try {
        display.value = eval(display.value);
    } catch(error){
        display.value = 'Ошибка';
    }
}
