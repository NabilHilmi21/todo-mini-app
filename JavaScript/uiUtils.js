
export let show_message = document.getElementById("show_message");

export function showMessage(tasks){
    let taskAmount = tasks;    

    if (taskAmount == 0){
        show_message.innerText = "No tasks available";
        show_message.style.textAlign = "center";
        show_message.style.display = "block";
    } else { // FIX: doesnt disappear if a task is added
        show_message.style.display = "none";
    }

    return show_message;
}    

function showCurrentDate(){
    let nowDate = new Date();
    let date = nowDate.toLocaleString();

    greetUser(nowDate);

    let currentDate = document.getElementById("date");

    currentDate.innerText = date;
}

function greetUser(date){
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let greeting = document.getElementById("greeting");

    if (hours >= 0 && hours < 12){
        greeting.innerText = "good morning.";
    } else if (hours >= 12 && hours < 18){
        greeting.innerText = "good afternoon.";
    } else {
        greeting.innerText = "good evening.";
    }
}

showCurrentDate();

setInterval(showCurrentDate, 1000);
