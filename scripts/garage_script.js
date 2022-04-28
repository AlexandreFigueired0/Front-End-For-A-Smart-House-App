const washCarBtn = document.getElementById("wash-car-btn")

washCarBtn.addEventListener("click", startWashingSession)

function startWashingSession(){
    let warningWindow = document.getElementById("warning-window")
    let buttons = document.querySelectorAll("#button-container button")
    warningWindow.style.display = "block"
    buttons.forEach(b => b.addEventListener("click",() => warningWindow.style.display = "none"))
}