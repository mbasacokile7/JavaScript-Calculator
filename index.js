//Make a variables to store clicked numbers
let displayElement = document.getElementById("display-el")
let numberPressed_9 = document.getElementById("num-9-btn")
let numberPressed_8 = document.getElementById("num-8-btn")
let numberPressed_7 = document.getElementById("num-7-btn")
let numberPressed_6 = document.getElementById("num-6-btn")
let numberPressed_5 = document.getElementById("num-5-btn")
let numberPressed_4 = document.getElementById("num-4-btn")
let numberPressed_3 = document.getElementById("num-3-btn")
let numberPressed_2 = document.getElementById("num-2-btn")
let numberPressed_1 = document.getElementById("num-1-btn")
let numberPressed_0 = document.getElementById("num-0-btn")
let clearDisplay    = document.getElementById("clear-display")
// Create functions to display numbers
function numberClicked_0(){
    displayElement.textContent += numberPressed_0.textContent
}
function numberClicked_1(){
    displayElement.textContent += numberPressed_1.textContent
}
function numberClicked_2(){
    displayElement.textContent += numberPressed_2.textContent
}
function numberClicked_3(){
    displayElement.textContent += numberPressed_3.textContent
}
function numberClicked_4(){
    displayElement.textContent += numberPressed_4.textContent
}
function numberClicked_5(){
    displayElement.textContent += numberPressed_5.textContent
}
function numberClicked_6(){
    displayElement.textContent += numberPressed_6.textContent
}
function numberClicked_7(){
    displayElement.textContent += numberPressed_7.textContent
}
function numberClicked_8(){
    displayElement.textContent += numberPressed_8.textContent
}
function numberClicked_9(){
    displayElement.textContent += numberPressed_9.textContent
}

let previousNum = 0;
let nextNum = 0;

//Create variable for clear button
function clear_function(){
    displayElement.textContent = clearDisplay.textContent
}
//Create variables for buttons
let addBtn    = document.getElementById("add-btn")
let minusBtn    = document.getElementById("minus-btn")
let mulBtn    = document.getElementById("multiply-btn")
let divBtn    = document.getElementById("divide-btn")
let compVar    = 0;

//Function for Arithmetic operations
function add_function(){
  previousNum = parseInt(displayElement.textContent)
  displayElement.textContent = clearDisplay.textContent
  comVar = addBtn.textContent
  console.log(comVar)
}

function minus_function(){
  previousNum = parseInt(displayElement.textContent)
  displayElement.textContent = clearDisplay.textContent
  comVar = minusBtn.textContent
  console.log(comVar)
}

function multiply_function(){
  previousNum = parseInt(displayElement.textContent)
  displayElement.textContent = clearDisplay.textContent
  comVar = mulBtn.textContent
  console.log(comVar)
}

function divide_function(){
  previousNum = parseInt(displayElement.textContent)
  displayElement.textContent = clearDisplay.textContent
  comVar = divBtn.textContent
  console.log(comVar)
}



//Function for equal sign
function equal_function(){
  nextNum = parseInt(displayElement.textContent)
  //displayElement.textContent = previousNum + nextNum

  if (comVar == "ADD"){
     displayElement.textContent = previousNum + nextNum
   } else if(comVar == "SUB"){
      displayElement.textContent = previousNum - nextNum

   } else if (comVar == "MUL"){
     displayElement.textContent = previousNum * nextNum

   } else {
     displayElement.textContent = previousNum / nextNum

   }

}
