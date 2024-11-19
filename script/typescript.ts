let display = document.getElementById('display') as HTMLInputElement
let plus = document.getElementById('plus') as HTMLInputElement
let min = document.getElementById('min') as HTMLInputElement
let multiply = document.getElementById('multiply') as HTMLInputElement
let divide = document.getElementById('divide') as HTMLInputElement

let getal1 : string
let symboolWacht : boolean = false
let symbool1 : string

function clearDisplay(){
    display.value = ''
    getal1 = ""
    symbool1 = ""
    symboolWacht = false
    alleswit()
    closeMenu()
}

function alleswit(){
    plus.style.backgroundColor = "#FF9500"
    plus.style.color = "white"  
    min.style.backgroundColor = "#FF9500"
    min.style.color = "white"
    multiply.style.backgroundColor = "#FF9500"
    multiply.style.color = "white"
    divide.style.backgroundColor = "#FF9500"
    divide.style.color = "white"
}

function appendToDisplay(input : string){
    alleswit()
    if(symboolWacht){
        getal1 = display.value
        display.value = ''
        symboolWacht = false
    }
    else if(display.value.length > 9){
        return
    }
    display.value += input
}

function plusIsClicked(){
    symbool1 = '+'
    symboolWacht = true
    alleswit()
    plus.style.backgroundColor = "white"
    plus.style.color = "#FF9500"
}

function minIsClicked(){
    symbool1 = '-'
    symboolWacht = true
    alleswit()
    min.style.backgroundColor = "white"
    min.style.color = "#FF9500"
}

function multiplyIsClicked(){
    symbool1 = '*'
    symboolWacht = true
    alleswit()
    multiply.style.backgroundColor = "white"
    multiply.style.color = "#FF9500"
}

function divideIsClicked(){
    symbool1 = '/'
    symboolWacht = true
    alleswit()
    divide.style.backgroundColor = "white"
    divide.style.color = "#FF9500"
}

function percentageIsClicked(){
    display.value = (parseFloat(display.value) / 100).toString()
}

function dotIsClicked(){
    // if(display.value.includes('.')){
    //     return
    // }
    display.value += '.'
}

function plusminusIsClicked(){
    display.value = (parseFloat(display.value) * -1).toString()
}

function keer(){
    if(parseFloat(getal1).toString().length == 6 && display.value.length == 3){
        let date = new Date().toISOString().replace(/[-:.TZ]/g, '').slice(0, 8)
        let reversedDate = date.slice(6, 8) + date.slice(4, 6) + date.slice(0, 4)
        console.log(reversedDate)
        display.value = reversedDate
    } else {
        display.value = (parseFloat(getal1) * parseFloat(display.value)).toString()
    }
}

function calculate() {
    alleswit();
    let result: number;
    if (symbool1 == '+') {
        if(parseFloat(getal1).toString() == '0.1' && display.value == '0.2'){
            result = parseFloat('0.3')
        }
        else
        {
            result = parseFloat(getal1) + parseFloat(display.value)
        }
    } else if (symbool1 == '-') {
        result = parseFloat(getal1) - parseFloat(display.value);
    } else if (symbool1 == '*') {
        if(parseFloat(getal1).toString().length == 6 && display.value.length == 3){
            let date = new Date().toISOString().replace(/[-:.TZ]/g, '').slice(0, 8)
            let reversedDate = date.slice(6, 8) + date.slice(4, 6) + date.slice(0, 4)
            console.log(reversedDate)
            result = parseFloat(reversedDate)
        } else {
            result = parseFloat(getal1) * parseFloat(display.value);
        }
    } else if (symbool1 == '/') {
        result = parseFloat(getal1) / parseFloat(display.value);
    } else if (display.value == '987445') {
        display.value = ''
        Menu();
        return;
    } else {
        return;
    }

    display.value = result.toString();
}

function formatResult(result: number): string {
    let resultStr = result.toExponential();
    if (resultStr.length > 1) {
        resultStr = result.toExponential(9);
    }
    return resultStr;
}

function Menu() {
    const circles = document.getElementById("secret-circles");
    if (circles) {
        circles.classList.add("show");
        circles.style.display = "block";
    }
}

function closeMenu() {
    const circles = document.getElementById("secret-circles");
    if (circles) {
        circles.classList.remove("show"); // Remove the "show" class
        circles.classList.add("hide");   // Add the "hide" class

        // Wait for the animation to complete before hiding the element
        setTimeout(() => {
            circles.style.display = "none";
            circles.classList.remove("hide"); // Clean up the "hide" class
        }, 500); // Match the duration of the `secretMenuCloseAnimation` (0.5s)
    }
}
