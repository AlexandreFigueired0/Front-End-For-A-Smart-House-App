// localStorage.clear()

const DAY_INDEX = 3
const CHECKBOX_STATES = "scheduleCheckBoxStates"
const TIME_STATES = "scheduleTimeStates"
const DEFAULT_TIME = "12:00"
let checkBoxes = Array.from(document.querySelectorAll("input[type = checkbox]"))
let checkBoxesState = [false,false,false,false,false,false,false]
let storedStates = localStorage.getItem(CHECKBOX_STATES)
let timeInputs = Array.from(document.querySelectorAll("input[type = time]"))
let timeStates = ["","","","","","",""]
let storedTimes = localStorage.getItem(TIME_STATES)

if(storedTimes){
    timeStates = JSON.parse(storedTimes)
    for(let i = 0 ; i<timeInputs.length; i++){
        timeInputs[i].value = timeStates[i]
    }
}

if(storedStates){
    checkBoxesState = JSON.parse(storedStates)
    for(let i = 0; i<checkBoxesState.length;i++){
        checkBoxes[i].checked = checkBoxesState[i]
        showConfig(checkBoxes[i])
    }
}

checkBoxes.forEach(c => c.addEventListener("click",() => clickCheckBox(c)))
timeInputs.forEach(t => t.addEventListener("focusout",()=> saveTime(t)))

function saveTime(t){
    let index = timeInputs.indexOf(t)
    timeStates[index] = t.value
    localStorage.setItem(TIME_STATES,JSON.stringify(timeStates))

}

function clickCheckBox(c){
    showConfig(c)
    checkTime(c)
    saveStates()
}

function saveStates(){
    checkBoxes.forEach(c => checkBoxesState[checkBoxes.indexOf(c)] = c.checked)
    localStorage.setItem(CHECKBOX_STATES, JSON.stringify(checkBoxesState))
}

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

function checkTime(cb){
    let divElem = cb.parentElement.parentElement
    let day = divElem.id[DAY_INDEX]
    let respectiveTime = document.getElementById("day".concat(day,"-in"))

    // check if time is already set up if not put default time
    if(respectiveTime.value == ""){
        respectiveTime.value = DEFAULT_TIME
        saveTime(respectiveTime)
    }
}