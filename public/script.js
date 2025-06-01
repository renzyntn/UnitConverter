/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.querySelector("#input-el");
const convertBtn = document.querySelector("#convert-el");
const resetBtn = document.querySelector("#reset-el");
const lengthEl = document.querySelector("#length-el");
const volumeEl = document.querySelector("#volume-el");
const massEl = document.querySelector("#mass-el");

const meter = 3.281;
const liter = 0.264;
const kilogram = 2.204;

convertBtn.addEventListener("click", function() {

    if (inputEl.value != "") {
        lengthEl.innerHTML = `${inputEl.value} meters = ${Number(inputEl.value*meter).toFixed(3)} feet | ${inputEl.value} feet = ${Number(inputEl.value/meter).toFixed(3)} meters`;
        volumeEl.innerHTML = `${inputEl.value} liters = ${Number(inputEl.value*liter).toFixed(3)} gallons | ${inputEl.value} gallons = ${Number(inputEl.value/liter).toFixed(3)} liters`;
        massEl.innerHTML = `${inputEl.value} kilos = ${Number(inputEl.value*kilogram).toFixed(3)} pounds | ${inputEl.value} pounds = ${Number(inputEl.value/kilogram).toFixed(3)} kilos`;
    }
});

resetBtn.addEventListener("click", function() {
    inputEl.value = "";
    lengthEl.textContent = "";
    volumeEl.textContent = "";
    massEl.textContent = "";
})