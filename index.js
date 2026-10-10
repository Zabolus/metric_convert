let inputEl = document.getElementById("input")
let convertBtn = document.getElementById("convert-btn")
let lengthEl = document.getElementById("length-p")
let volumeEl = document.getElementById("volume-p")
let massEl = document.getElementById("mass-p")

const meterToFeet = 3.28084
const literToGallon = 0.264172
const kiloToPound = 2.20462



convertBtn.addEventListener("click", function(){
let baseValue = Number(inputEl.value)

let feet = (baseValue * meterToFeet).toFixed(3)
let meters = (baseValue / meterToFeet).toFixed(3)

let galons = (baseValue * literToGallon).toFixed(3)
let liters = (baseValue / literToGallon).toFixed(3)

let kilos = (baseValue * kiloToPound).toFixed(3)
let pounds = (baseValue / kiloToPound).toFixed(3)

lengthEl.textContent = baseValue + " meters = " + feet + " feet | " + baseValue + " feet = " + meters + " meters"
volumeEl.textContent = baseValue + " Liters = " + galons + " galons | " + baseValue + " galons = " +   liters + " liters"
massEl.textContent = baseValue + " kilos = " + pounds + " pounds | " + baseValue + " pounds = " +   kilos + " kilos"



})