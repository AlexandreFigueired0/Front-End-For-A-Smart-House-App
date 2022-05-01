let i = 0
let width = 1;
function showLoading() {
    var elem = document.getElementById("loading-bar");
    elem.setAttribute('style', 'display:flex');
    move();
}

function move() {
    let ok = document.getElementById("OK")
    let cancel = document.getElementById("cancel")
    let prev = document.getElementById("prev").textContent
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
                ok.addEventListener("click",() => location=prev)
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

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    m = checkTime(m);
    document.getElementById('clock').innerHTML =  h + ":" + m;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  
    return i;
}

