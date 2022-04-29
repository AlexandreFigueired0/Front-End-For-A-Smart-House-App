const alertImg = document.getElementById("alert")
console.log(alertImg)

alertImg.addEventListener("click", showIntrusorAlert)

function showIntrusorAlert(){
    let window = document.getElementById("alert-window")
    window.style.display = "block"
}