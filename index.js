const work = document.querySelector("#work");
const add = document.querySelector("#add");
const taskNum = document.querySelector("#taskNum");
const list = document.querySelector("#list");
const checkboxes=document.querySelectorAll('.check');
const cnt = document.querySelector("#cnt");

let id=0;

add.addEventListener("click", handleAdd);

function handleAdd(){
    if(work.value!="") {
        id++;
        createList(work.value)       
    }
    work.value="";
}
function createList(value){
    let aboutTask = document.createElement("div");
    aboutTask.id=`task${id}`;
    aboutTask.className = "aboutTask";
    aboutTask.innerHTML=`<div class="taskContainer"><input class="check" type='checkbox'/><p class="text">${value}</p></div> <button class = "delete">Delete</button>`
    list.append(aboutTask);
   
    taskCount(id);

    const checkbox=aboutTask.querySelector('.check')
    checkbox.addEventListener('change',(event)=>{
        if(checkbox.checked) checkText(event.target, false)
        else checkText(event.target, true)
    })

    const del = aboutTask.querySelector(".delete");
    del.addEventListener("click",()=>{
        deleteTask(aboutTask) ;
    })
}
function checkText(currentCheckbox, is_checked){
    const currentAboutTask= currentCheckbox.closest('.aboutTask');
    currentText=currentAboutTask.querySelector('.text');
    currentText.style.textDecoration = (is_checked) ? "none":"line-through";
    if(is_checked) {
        id++;
        taskCount(id);
    }
    else{
        id--;
        taskCount(id)
    }
}
function deleteTask(aboutTask,){
    let x = aboutTask.querySelector(".check");
    aboutTask.remove();
    if(x.checked) id++;
    id--;
    taskCount(id);
}
function taskCount(id){
    cnt.innerText = id;
}