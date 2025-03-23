
export function isInputEmpty(something){
    if (something.value.trim() == ""){
        alert("Please enter a task");
        return true;
    }

    return false;
}

/* to capitalize the first letter of the task */

export function capFirstLetter(task){
    /* .trim() removes unnecessary spaces */
    task = task.trim();

    /* input example  : geda gedi
       process        : "G" + "eda gedi"
                        "Geda gedi" */

    return task.charAt(0).toUpperCase() + task.slice(1);
}


