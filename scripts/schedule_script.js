const CHECKBOX_STATES = "scheduleCheckBoxStates"

let list = document.getElementById("schedule-list")
let listElems = Array.from(document.querySelectorAll("#schedule-list li"))

let checkBoxes = Array.from(document.querySelectorAll("#schedule-list input"))
let checkBoxStates = []
for(let i = 0; i<listElems.length ; i++){
    checkBoxStates.push(false)
}
let storedCheckBoxStates = localStorage.getItem(CHECKBOX_STATES)

let addBtn = document.getElementById("add")

if(storedCheckBoxStates){
    checkBoxStates = JSON.parse(storedCheckBoxStates)
    for(let i = 0; i<checkBoxStates.length;i++){
        checkBoxes[i].checked = checkBoxStates[i]
    }
}

addBtn.addEventListener("click", addNewSchedule)
checkBoxes.forEach(c => c.addEventListener("click", () => clickCheckBox(c)))


function addNewSchedule(){
    showConfigsWindow();
}

function clickCheckBox(c){
    checkBoxes.forEach(c => checkBoxStates[checkBoxes.indexOf(c)] = c.checked)
    localStorage.setItem(CHECKBOX_STATES, JSON.stringify(checkBoxStates))
}


function showConfigsWindow(){
    let configWindow = document.getElementById("config-window")
    configWindow.style.display = "block"
}