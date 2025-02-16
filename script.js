function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskTime = document.getElementById("taskTime");
    const taskPriority = document.getElementById("taskPriority");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Task cannot be empty!");
        return;
    }

    if (taskTime.value === "") {
        alert("Time cannot be empty!");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `
        <span>${taskInput.value} (${new Date(taskTime.value).toLocaleString()})</span>
        <span class="priority">${taskPriority.value.toUpperCase()}</span>
        <button onclick="completeTask(this)">Check</button>
    `;

    li.classList.add(`${taskPriority.value}-priority`);
    taskList.appendChild(li);

    taskInput.value = "";
    taskTime.value = "";
    taskPriority.value = "low"; 
}

//menyelesaikan tugas
function completeTask(button) {
    const task = button.parentElement;
    task.classList.add("completed");
    document.getElementById("completedTaskList").appendChild(task);
    button.remove();
}

//menghapus semua tugas
function clearAllTasks() {
    const taskList = document.getElementById("taskList");
    const completedTaskList = document.getElementById("completedTaskList");

    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

    while (completedTaskList.firstChild) {
        completedTaskList.removeChild(completedTaskList.firstChild);
    }
}