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
    getal1 = '';
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
    display.value += input;
}
function plusIsClicked() {
    symbool1 = '+';
    symboolWacht = true;
    alleswit();
    plus.style.color = "#FF9500";
    plus.style.backgroundColor = "white";
}
function minIsClicked() {
    symbool1 = '-';
    symboolWacht = true;
    alleswit();
    min.style.color = "#FF9500";
    min.style.backgroundColor = "white";
}
function multiplyIsClicked() {
    symbool1 = '*';
    symboolWacht = true;
    alleswit();
    multiply.style.color = "#FF9500";
    multiply.style.backgroundColor = "white";
}
function divideIsClicked() {
    symbool1 = '/';
    symboolWacht = true;
    alleswit();
    divide.style.color = "#FF9500";
    divide.style.backgroundColor = "white";
}
function percentageIsClicked() {
    display.value = (parseFloat(display.value) / 100).toString();
}
function dotIsClicked() {
    display.value += '.';
}
function plusminusIsClicked() {
    display.value = (parseFloat(display.value) * -1).toString();
}
function erbij() {
    display.value = (parseFloat(getal1) + parseFloat(display.value)).toString();
}
function eraf() {
    display.value = (parseFloat(getal1) - parseFloat(display.value)).toString();
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
function delendoor() {
    display.value = (parseFloat(getal1) / parseFloat(display.value)).toString();
}
function calculate() {
    alleswit();
    if (symbool1 == '+') {
        erbij();
    }
    else if (symbool1 == '-') {
        eraf();
    }
    else if (symbool1 == '*') {
        keer();
    }
    else if (symbool1 == '/') {
        delendoor();
    }
}
