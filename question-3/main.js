"use strict"

// write conde in here

const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const resetButton = document.getElementById('reset')
const numberLabel = document.getElementById('number')
const inputElement = document.getElementById('numberInput')
let numberResult = 0

function plus(){
  numberResult = parseInt(numberLabel.textContent) + parseInt(inputElement.value)
  nanCheck(numberResult)
  inputElement.value = ''
}

function minus(){
  numberResult = parseInt(numberLabel.textContent) - parseInt(inputElement.value)
  nanCheck(numberResult)
  inputElement.value = ''
}

function reset(){
  numberLabel.textContent = 0
}

function nanCheck(numberResult){
  if(isNaN(numberResult)){
    alert('Invalid Input')
  }
  else{
    numberLabel.textContent = numberResult
  }
}

plusButton.addEventListener('click', plus)
minusButton.addEventListener('click', minus)
resetButton.addEventListener('click', reset)
