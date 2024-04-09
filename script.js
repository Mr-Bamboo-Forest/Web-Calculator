const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        const result = Function('"use strict";return (' + display.value + ')')();
        const roundedResult = parseFloat(result.toFixed(6));
        display.value = roundedResult;
    }
    catch(error){
        display.value = "Error";
    }
}
