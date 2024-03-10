const work = document.querySelector("#work");
const add = document.querySelector("#add");
const taskNum = document.querySelectorAll("#taskNum");
const list = document.querySelector("#list");
const checkboxes=document.querySelectorAll('.check');
let id=1;

add.addEventListener("click", handleAdd);

function handleAdd(){
    if(work.value!="") createList(work.value)
    work.value=""
}

function createList(value){
    let aboutTask = document.createElement("div");
    aboutTask.id=`task${id}`;
    aboutTask.className = "aboutTask";
    aboutTask.innerHTML=`<div class="taskContainer"><input class="check" type='checkbox'/><p class="text">${value}</p></div>`
    list.append(aboutTask);
    const checkbox=aboutTask.querySelector('.check')
    checkbox.addEventListener('change',(event)=>{
        if(checkbox.checked) checkText(event.target, false)
        else checkText(event.target, true)
        })
    id++;
}
function checkText(currentCheckbox, is_checked){
    const currentAboutTask= currentCheckbox.closest('.aboutTask');
    console.log(currentAboutTask)
    currentText=currentAboutTask.querySelector('.text');
    currentText.style.textDecoration = (is_checked) ? "none":"line-through";
}


