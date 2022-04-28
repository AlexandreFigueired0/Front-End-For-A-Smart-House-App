function turnTVOnOrOff() {
    var elem = document.getElementById("TVOnOff");

    if(elem.innerHTML == "Ligar")
        elem.innerHTML = "Desligar";
    else if(elem.innerHTML == "Desligar")
        elem.innerHTML = "Ligar";
}

function turnProjectorOnOrOff() {
    var elem = document.getElementById("ProjetorOnOff");

    if(elem.innerHTML == "Ligar")
        elem.innerHTML = "Desligar";
    else if(elem.innerHTML == "Desligar")
        elem.innerHTML = "Ligar";
}