// localStorage.clear()
const MAX_TEMPERATURE = 35
const MIN_TEMPERATURE = 10
const temperatureBtns = Array.from(document.getElementsByClassName("temp-controller"))
let temperatureValue = document.getElementById("temperature-value")
let storedTemperature = localStorage.getItem("kitchenTemperature")
let lightsCheckBox = document.querySelector("#lights-btn input")
let storedLightValue = localStorage.getItem("lightsValue") 

if(storedLightValue == "true"){
    lightsCheckBox.checked = true
}


if(storedTemperature){
    temperatureValue.textContent = storedTemperature
}

lightsCheckBox.addEventListener("click", clickCheckBox)
temperatureBtns.forEach(b => b.addEventListener("click", () => changeTemperature(b)) )

function clickCheckBox(){
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