var display = document.getElementById('display');
var plus = document.getElementById('plus');
var min = document.getElementById('min');
var multiply = document.getElementById('multiply');
var divide = document.getElementById('divide');
var getal1;
var symboolWacht = false;
var symbool1;
function clearDisplay() {
    display.value = '';
    getal1 = "";
    symbool1 = "";
    symboolWacht = false;
    alleswit();
}
function alleswit() {
    plus.style.backgroundColor = "#FF9500";
    plus.style.color = "white";
    min.style.backgroundColor = "#FF9500";
    min.style.color = "white";
    multiply.style.backgroundColor = "#FF9500";
    multiply.style.color = "white";
    divide.style.backgroundColor = "#FF9500";
    divide.style.color = "white";
}
function appendToDisplay(input) {
    alleswit();
    if (symboolWacht) {
        getal1 = display.value;
        display.value = '';
        symboolWacht = false;
    }
    else if (display.value.length > 9) {
        return;
    }
    display.value += input;
}
function plusIsClicked() {
    symbool1 = '+';
    symboolWacht = true;
    alleswit();
    plus.style.backgroundColor = "white";
    plus.style.color = "#FF9500";
}
function minIsClicked() {
    symbool1 = '-';
    symboolWacht = true;
    alleswit();
    min.style.backgroundColor = "white";
    min.style.color = "#FF9500";
}
function multiplyIsClicked() {
    symbool1 = '*';
    symboolWacht = true;
    alleswit();
    multiply.style.backgroundColor = "white";
    multiply.style.color = "#FF9500";
}
function divideIsClicked() {
    symbool1 = '/';
    symboolWacht = true;
    alleswit();
    divide.style.backgroundColor = "white";
    divide.style.color = "#FF9500";
}
function percentageIsClicked() {
    display.value = (parseFloat(display.value) / 100).toString();
}
function dotIsClicked() {
    // if(display.value.includes('.')){
    //     return
    // }
    display.value += '.';
}
function plusminusIsClicked() {
    display.value = (parseFloat(display.value) * -1).toString();
}
function keer() {
    if (parseFloat(getal1).toString().length == 6 && display.value.length == 3) {
        var date = new Date().toISOString().replace(/[-:.TZ]/g, '').slice(0, 8);
        var reversedDate = date.slice(6, 8) + date.slice(4, 6) + date.slice(0, 4);
        console.log(reversedDate);
        display.value = reversedDate;
    }
    else {
        display.value = (parseFloat(getal1) * parseFloat(display.value)).toString();
    }
}
function calculate() {
    alleswit();
    var result;
    if (symbool1 == '+') {
        result = parseFloat(getal1) + parseFloat(display.value);
    }
    else if (symbool1 == '-') {
        result = parseFloat(getal1) - parseFloat(display.value);
    }
    else if (symbool1 == '*') {
        if (parseFloat(getal1).toString().length == 6 && display.value.length == 3) {
            var date = new Date().toISOString().replace(/[-:.TZ]/g, '').slice(0, 8);
            var reversedDate = date.slice(6, 8) + date.slice(4, 6) + date.slice(0, 4);
            console.log(reversedDate);
            result = parseFloat(reversedDate);
        }
        else {
            result = parseFloat(getal1) * parseFloat(display.value);
        }
    }
    else if (symbool1 == '/') {
        result = parseFloat(getal1) / parseFloat(display.value);
    }
    else if (display.value == '987445') {
        Menu();
        return;
    }
    else {
        return;
    }
    display.value = result.toString();
}
function Menu() {
    window.location.href = 'SecretMenu.html';
}
function formatResult(result) {
    var resultStr = result.toExponential();
    if (resultStr.length > 1) {
        resultStr = result.toExponential(9);
    }
    return resultStr;
}
