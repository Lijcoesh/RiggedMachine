let display = document.getElementById('display') as HTMLInputElement
let plus = document.getElementById('plus') as HTMLInputElement
let min = document.getElementById('min') as HTMLInputElement
let multiply = document.getElementById('multiply') as HTMLInputElement
let divide = document.getElementById('divide') as HTMLInputElement

let getal1 : string
let getal2 : string
let symboolWacht : boolean = false
let symbool1 : string

function clearDisplay(){
    display.value = ''
    alleswit()
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
    display.value += input
}

function plusIsClicked(){
    if(getal1 != null && display.value != null){
        calculate()
        symbool1 = ''
    }
    symbool1 = '+'
    symboolWacht = true
    alleswit()
    plus.style.color = "#FF9500"
    plus.style.backgroundColor = "white"
}

function minIsClicked(){
    if(getal1 != null && display.value != null){
        calculate()
        symbool1 = ''
    }
    symbool1 = '-'
    symboolWacht = true
    alleswit()
    min.style.color = "#FF9500"
    min.style.backgroundColor = "white"
}

function multiplyIsClicked(){
    if(getal1 != null && display.value != null){
        calculate()
        symbool1 = ''
    }
    symbool1 = '*'
    symboolWacht = true
    alleswit()
    multiply.style.color = "#FF9500"
    multiply.style.backgroundColor = "white"
}

function divideIsClicked(){
    if(getal1 != null && display.value != null){
        calculate()
        symbool1 = ''
    }
    symbool1 = '/'
    symboolWacht = true
    alleswit()
    divide.style.color = "#FF9500"
    divide.style.backgroundColor = "white"
}

function percentageIsClicked(){
    display.value = (parseFloat(display.value) / 100).toString()
}

function dotIsClicked(){
    display.value += ','
}

function plusminusIsClicked(){
    display.value = (parseInt(display.value) * -1).toString()
}

function erbij(){
    display.value = (parseInt(getal1) + parseInt(display.value)).toString()
}

function eraf(){
    display.value = (parseInt(getal1) - parseInt(display.value)).toString()
}

function keer(){
    if(parseInt(getal1).toString().length == 6 && display.value.length == 3){
        let date = new Date().toISOString().replace(/[-:.TZ]/g, '').slice(0, 8)
        let reversedDate = date.slice(6, 8) + date.slice(4, 6) + date.slice(0, 4)
        console.log(reversedDate)
        display.value = reversedDate
    } else {
        display.value = (parseInt(getal1) * parseInt(display.value)).toString()
    }
}

function delendoor(){
    display.value = (parseInt(getal1) / parseInt(display.value)).toString()
}

function calculate(){
    alleswit()
    if(symbool1 == '+'){
        erbij()
    }
    else if (symbool1 == '-'){
        eraf()
    }
    else if (symbool1 == '*'){
        keer()
    }
    else if (symbool1 == '/'){
        delendoor()
    }
}


