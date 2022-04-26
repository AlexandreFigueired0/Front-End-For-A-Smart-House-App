var i = 0

function showLoading() {
    var elem = document.getElementById("loading-wrap");
    elem.setAttribute('style', 'display:flex');
    move();
}

var width = 1;
function move() {
    if(i == 0) {
        i = 1;
        var elem = document.getElementById("progress-bar");
        var id = setInterval(frame, 30);
        function frame() {
            if(width >= 100) {
                elem.innerHTML = "Lavagem Concluida!"
                playLavagem();
                clearInterval(id);
                i = 0;
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
        var elem = document.getElementById("loading-wrap");
        elem.setAttribute('style', 'display:none');
        width = 0;
    }
}

function playLavagem() {
    var audio = new Audio("LavagemConcluida.mp4");
    audio.play();
}