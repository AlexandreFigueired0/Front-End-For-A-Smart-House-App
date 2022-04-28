const temperatureBtns = Array.from(document.getElementsByClassName("temp-controller"))
let temperatureValue = document.getElementById("temperature-value")
let i = 0
let width = 1;

temperatureBtns.forEach(b => b.addEventListener("click", () => changeTemperature(b)) )


function showLoading() {
    var elem = document.getElementById("loading-bar");
    elem.setAttribute('style', 'display:flex');
    move();
}

function move() {
    let ok = document.getElementById("OK")
    let cancel = document.getElementById("cancel")
    if(i == 0) {
        i = 1;
        var elem = document.getElementById("progress-bar");
        var id = setInterval(frame, 30);
        function frame() {
            if(width >= 100) {
                elem.innerHTML = "Tarefa Concluída"
                clearInterval(id);
                i = 0;
                ok.classList = ""
                ok.addEventListener("click",() => location='wc.html')
                cancel.classList.add("disabled")
            }
            else {
                width++;
                elem.style.width = width + "%";
                elem.innerHTML = width + "%";
            }
        }
    }
}

function okOrCancelMeal() {
    if(width == 100) {
        var elem = document.getElementById("loading-bar");
        elem.setAttribute('style', 'display:none');
        width = 0;
    }
}


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