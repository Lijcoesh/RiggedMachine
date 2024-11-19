let display = document.getElementById('display') as HTMLInputElement
let plus = document.getElementById('plus') as HTMLInputElement
let min = document.getElementById('min') as HTMLInputElement
let multiply = document.getElementById('multiply') as HTMLInputElement
let divide = document.getElementById('divide') as HTMLInputElement

let getal1 : string
let symboolWacht : boolean = false
let symbool1 : string
let menuactief : boolean = false

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
    if(display.value == ''){
        return
    }
    display.value = (parseFloat(display.value) / 100).toString()
}

function dotIsClicked(){
    display.value += '.'
}

function plusminusIsClicked(){
    if(display.value == ''){
        return
    }
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
        else if(parseFloat(getal1).toString() == '707' && display.value == '707'){
            display.value = 'hihi'
            return
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
    const calculator = document.getElementById("calculator");
    const infoBlock = document.getElementById("info-block");
    if(!menuactief){
        if (circles && calculator && infoBlock) {
            menuactief = true;
            circles.classList.add("show");
            circles.style.display = "block";

            setTimeout(() => {
                infoBlock.style.display = "block";
                infoBlock.style.animation = "fadeinMenuBlockMessage 0.5s ease-out forwards";

                setTimeout(() => {
                    infoBlock.style.animation = "fadeoutMenuBlockMessage 0.5s ease-out forwards";
                    setTimeout(() => {
                        infoBlock.style.display = "none";
                    }, 100);
                }, 3000);
            }, 1000);
        }
    }
}

function closeMenu() {
    const circles = document.getElementById("secret-circles");
    const infoBlock = document.getElementById("info-block");

    if (circles && infoBlock) {
        menuactief = false; 
        circles.classList.remove("show");
        circles.classList.add("hide");

        setTimeout(() => {
            circles.style.display = "none";
            circles.classList.remove("hide");
        }, 500);
    }
}

function closeWindow() {
    playSound()
    alert("You have been hacked!");
    window.close()
}

function playSound() {
    const sound = document.getElementById('errorSound') as HTMLAudioElement;
    sound.play();
}
