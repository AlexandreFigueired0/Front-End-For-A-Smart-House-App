// localStorage.clear()
const MAX_TEMPERATURE = 35
const MIN_TEMPERATURE = 10
let temperatureBtns = Array.from(document.getElementsByClassName("temp-controller"))
let temperatureValue = document.getElementById("temperature-value")
let storedTemperature = localStorage.getItem("kitchenTemperature")
let lightsCheckBox = document.querySelector("#lights-btn input")
let storedLightValue = localStorage.getItem("lightsValue")
let blindsBtn = document.querySelector("#blinds-btn button")
let storedBlindsBtnValue = localStorage.getItem("blindsValue")

if(storedBlindsBtnValue){
    blindsBtn.textContent = storedBlindsBtnValue
}

if(storedLightValue == "true"){
    lightsCheckBox.checked = true
}

if(storedTemperature){
    temperatureValue.textContent = storedTemperature
}

blindsBtn.addEventListener("click", saveButtonText )
lightsCheckBox.addEventListener("click", saveCheckBoxValue)
temperatureBtns.forEach(b => b.addEventListener("click", () => changeTemperature(b)) )

function saveButtonText(){
    let value = blindsBtn.textContent
    if(value == "Abrir"){
        blindsBtn.textContent = "Fechar"
    }
    else{
        blindsBtn.textContent = "Abrir"
    }
    localStorage.setItem("blindsValue", blindsBtn.textContent)
}

function saveCheckBoxValue(){
    let value = lightsCheckBox.checked
    localStorage.setItem("lightsValue", value ? "true" : "false")
}

function changeTemperature(b){
    let signal = b.textContent
    let currentTemperature = parseInt(temperatureValue.textContent)

    if(signal == "+" && currentTemperature<MAX_TEMPERATURE){
        currentTemperature++
    }
    else if(signal == "-" && currentTemperature>MIN_TEMPERATURE){
        currentTemperature--
    }

    temperatureValue.textContent = currentTemperature
    localStorage.setItem("kitchenTemperature",temperatureValue.textContent)
}