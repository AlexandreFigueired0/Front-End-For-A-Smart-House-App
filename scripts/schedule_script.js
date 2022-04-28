const DAY_INDEX = 3
const labels = document.querySelectorAll("input[type = checkbox]")

labels.forEach(cb => cb.addEventListener("click", () => showConfig(cb)))

function showConfig(cb){
    let divElem = cb.parentElement.parentElement
    let day = divElem.id[DAY_INDEX]
    let respectiveBtn = document.getElementById("config".concat(day))
    if(!cb.checked){
        respectiveBtn.style.visibility = "hidden"
    }
    else{
        respectiveBtn.style.visibility = "visible"
    }
}