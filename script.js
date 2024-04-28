let tasks = [];

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        tasks.push({ text: taskText, completed: false });
        taskInput.value = "";
        renderTasks();
    }
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = task.text;

        if (task.completed) {
            listItem.classList.add("completed");
        }

        listItem.addEventListener("click", () => toggleTask(index));

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "❌";
        deleteButton.addEventListener("click", (event) => {
            event.stopPropagation();
            deleteTask(index);
        });

        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);
    });
}

// Initial rendering of tasks
renderTasks();
