const alertImg = document.getElementById("alert")

alertImg.addEventListener("click", showIntrusorAlert)

function showIntrusorAlert(){
    let window = document.getElementById("alert-window")
    window.style.display = "block"
}