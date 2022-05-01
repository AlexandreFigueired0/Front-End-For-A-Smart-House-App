const MAX_TEMPERATURE = 35
const MIN_TEMPERATURE = 10
const TEMPERATURE_KEY = "livingRoomTemperature"
const LIGHTS_KEY = "livingRoomLightsValue"
const BLINDS_KEY = "livingRoomBlindsValue"
const TV_KEY = "livingRoomTvValue"
const PROJECTOR_KEY = "livingRoomProjectorValue"

let temperatureBtns = Array.from(document.getElementsByClassName("temp-controller"))
let temperatureValue = document.getElementById("temperature-value")
let storedTemperature = localStorage.getItem(TEMPERATURE_KEY)
let lightsCheckBox = document.querySelector("#lights-btn input")
let storedLightValue = localStorage.getItem(LIGHTS_KEY)
let blindsBtn = document.querySelector("#blinds-btn button")
let storedBlindsBtnValue = localStorage.getItem(BLINDS_KEY)
let tvBtn = document.getElementById("tVOnOff")
let storedTvValue = localStorage.getItem(TV_KEY)
let projectorBtn = document.getElementById("projetorOnOff")
let storedProjectorValue = localStorage.getItem(PROJECTOR_KEY)

if(storedProjectorValue){
    projectorBtn.textContent = storedProjectorValue
}

if(storedTvValue){
    tvBtn.textContent = storedTvValue
}

if(storedBlindsBtnValue){
    blindsBtn.textContent = storedBlindsBtnValue
}

if(storedTemperature){
    temperatureValue.textContent = storedTemperature
}

lightsCheckBox.checked = storedLightValue == "true"

projectorBtn.addEventListener("click", saveProjectorButtonText)
tvBtn.addEventListener("click", saveTvButtonText)
blindsBtn.addEventListener("click", saveBlindsButtonText )
lightsCheckBox.addEventListener("click", saveCheckBoxValue)
temperatureBtns.forEach(b => b.addEventListener("click", () => changeTemperature(b)) )

function saveProjectorButtonText(){
    let value = projectorBtn.textContent
    if(value == "Ligar"){
        projectorBtn.textContent = "Desligar"
    }
    else{
        projectorBtn.textContent = "Ligar"
    }
    localStorage.setItem(PROJECTOR_KEY, projectorBtn.textContent)
}

function saveTvButtonText(){
    let value = tvBtn.textContent
    if(value == "Ligar"){
        tvBtn.textContent = "Desligar"
    }
    else{
        tvBtn.textContent = "Ligar"
    }
    localStorage.setItem(TV_KEY, tvBtn.textContent)
}

function saveBlindsButtonText(){
    let value = blindsBtn.textContent
    if(value == "Abrir"){
        blindsBtn.textContent = "Fechar"
    }
    else{
        blindsBtn.textContent = "Abrir"
    }
    localStorage.setItem(BLINDS_KEY, blindsBtn.textContent)
}

function saveCheckBoxValue(){
    let value = lightsCheckBox.checked
    localStorage.setItem(LIGHTS_KEY, value ? "true" : "false")
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
    localStorage.setItem(TEMPERATURE_KEY,temperatureValue.textContent)
}
