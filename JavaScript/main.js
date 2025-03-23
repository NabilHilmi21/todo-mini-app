import {isInputEmpty, capFirstLetter} from "./helper.js";
import {showMessage} from "./uiUtils.js";

document.addEventListener("DOMContentLoaded", function() {
    let taskList = document.getElementById("task_list");
    let taskAmount = taskList.childElementCount; 
    showMessage(taskAmount); 
});

/* to add a task to the list */
function addTask(){
    let inputTask = document.getElementById("input_task");
    let taskList = document.getElementById("task_list");

    if (isInputEmpty(inputTask)){
        return;
    }
    
    // this doesnt update the show_message element for some reason

    let newTask = createTaskElement(inputTask.value);
    taskList.appendChild(newTask);

    let taskAmount = taskList.childElementCount;
    showMessage(taskAmount);

    inputTask.value = "";
}

function createTaskElement(task){
    /* this function does the following:
        1. create a new task element
        2. create a checkbox element
        3. set the class name of the new task element
        4. set the text of the new task element
        5. append the checkbox element to the new task element
        6. return the new task element */

    let newTask = document.createElement("li");
    let checkbox = document.createElement("input");
    
    checkbox.type = "checkbox";
    checkbox.className = "task-check";

    newTask.className = "task";

    newTask.innerText = capFirstLetter(task);
    newTask.appendChild(checkbox);

    return newTask;
}

let totalDone = 0;

function doneTask(){
    let taskList = document.getElementById("task_list");
    let checkedTasks = document.querySelectorAll(".task-check:checked");

    /* .length returns the number of checked checkboxes */

    if (checkedTasks.length == 0){
        alert("Please select a task to mark as done");
        return;
    }

    let doneAmount = checkedTasks.length;
    let show_message = document.getElementById("done_counter");

    totalDone += doneAmount;

    show_message.textContent = `You have ${totalDone} task(s) done today`;

     /* this for each does the following:
        1. get the parent element of the checkbox
        2. check every checkbox that is checked
        3. remove the parent element from the task list */

    checkedTasks.forEach(checkbox => {
        taskList.removeChild(checkbox.parentElement);
    });

    let taskAmount = taskList.childElementCount;
    showMessage(taskAmount);
}

function removeTask(){
    let taskList = document.getElementById("task_list");
    let checkedTasks = document.querySelectorAll(".task-check:checked");

    /* .length returns the number of checked checkboxes */

    if (checkedTasks.length == 0){
        alert("Please select a task to remove");
        return;
    }

     /* this for each does the following:
        1. get the parent element of the checkbox
        2. check every checkbox that is checked
        3. remove the parent element from the task list */


    checkedTasks.forEach(checkbox => {
        taskList.removeChild(checkbox.parentElement);
    });
    
    let taskAmount = taskList.childElementCount;
    showMessage(taskAmount);
}

function clearList(){
    let taskList = document.getElementById("task_list");
    taskList.innerHTML = "";

    let taskAmount = taskList.childElementCount;
    showMessage(taskAmount);

    /* FIX:
    totalDone doesnt reset for some reason, instead it shows: 
    Uncaught TypeError: Assignment to constant variable.
    even though i used let instead of const
    */

    totalDone = 0;
}

/* to make the functions available to the browser 

ebcause idk why i need this, i didnt ened this b4 wtf i dont understand*/

window.addTask = addTask;
window.removeTask = removeTask;
window.doneTask = doneTask;
window.clearList = clearList;
