const washCarBtn = document.getElementById("wash-car-btn")
const temperatureBtns = Array.from(document.getElementsByClassName("temp-controller"))
let temperatureValue = document.getElementById("temperature-value")

temperatureBtns.forEach(b => b.addEventListener("click", () => changeTemperature(b)) )
washCarBtn.addEventListener("click", startWashingSession)

function changeTemperature(b){
    let signal = b.textContent
    let currentTemperature = parseInt(temperatureValue.textContent)
    console.log(signal)

    if(signal == "+" && currentTemperature<35){
        currentTemperature++
    }
    else if(signal == "-" && currentTemperature>10){
        currentTemperature--
    }

    temperatureValue.textContent = currentTemperature
}


function startWashingSession(){
    let warningWindow = document.getElementById("warning-window")
    let buttons = document.querySelectorAll("#button-container button")
    warningWindow.style.display = "block"
    buttons.forEach(b => b.addEventListener("click",() => warningWindow.style.display = "none"))
}