"use strict"

// write code in here

const appleButton = document.getElementById('apple')

const bananaButton = document.getElementById('banana')

const orangeButton = document.getElementById('orange')

const resetButton = document.getElementById('reset')

const textElement = document.getElementById('text')
/*
function appleButtonClick(){
  textElement.textContent = "APPLE"
}

function appleButtonClick(){
  textElement.textContent = "APPLE"
}*/

function changeText(text){
  textElement.textContent = text;
}

appleButton addEventListener('click',() => changeText('APPLE'))
bananaButton addEventListener('click',() => changeText('BANANA'))
orangeButton addEventListener('click',() => changeText('ORANGE'))
resetButton addEventListener('click',() => changeText('-'))
