
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const priorityInput = document.getElementById("priorityInput");
const taskList = document.getElementById("taskList");
const taskCounter = document.getElementById("taskCounter");
const filterButtons = document.querySelectorAll("[data-filter]");

// Load saved tasks from the browser
let tasks = [];

try {
    const savedTasks = JSON.parse(
        localStorage.getItem("nationdevTasks") || "[]"
    );
    tasks = Array.isArray(savedTasks) ? savedTasks : [];
} catch (error) {
    console.error("Could not load saved tasks:", error);
}

let currentFilter = "all";

// Save tasks
function saveTasks() {
    localStorage.setItem("nationdevTasks", JSON.stringify(tasks));
}

// Display tasks
function renderTasks() {
    taskList.innerHTML = "";

    const visibleTasks = tasks.filter(task => {
        if (currentFilter === "active") {
            return !task.completed;
        }

        if (currentFilter === "completed") {
            return task.completed;
        }

        return true;
    });

    visibleTasks.forEach(task => {
        const li = document.createElement("li");
        li.className = "task-item";

        if (task.completed) {
            li.classList.add("completed");
        }

        // Complete task checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.setAttribute("aria-label", "Complete task");

        checkbox.addEventListener("change", () => {
            task.completed = checkbox.checked;
            saveTasks();
            renderTasks();
        });

        // Task title
        const title = document.createElement("span");
        title.className = "task-title";
        title.textContent = task.title;

        // Priority label
        const priority = document.createElement("span");
        priority.className = "priority";
        priority.classList.add(task.priority);
        priority.textContent = task.priority;

        // Edit button
        const editButton = document.createElement("button");
        editButton.className = "edit-btn";
        editButton.textContent = "Edit";

        editButton.addEventListener("click", () => {
            const newTitle = prompt("Edit your task:", task.title);

            if (newTitle !== null && newTitle.trim() !== "") {
                task.title = newTitle.trim();
                saveTasks();
                renderTasks();
            }
        });

        // Delete button
        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-btn";
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", () => {
            tasks = tasks.filter(item => item.id !== task.id);
            saveTasks();
            renderTasks();
        });

        li.append(
            checkbox,
            title,
            priority,
            editButton,
            deleteButton
        );

        taskList.appendChild(li);
    });

    const remainingTasks = tasks.filter(task => !task.completed).length;

    taskCounter.textContent =
        remainingTasks + " tasks remaining";

    filterButtons.forEach(button => {
        button.classList.toggle(
            "selected",
            button.dataset.filter === currentFilter
        );
    });
}

// Add a new task
taskForm.addEventListener("submit", event => {
    event.preventDefault();

    const title = taskInput.value.trim();

    if (title === "") {
        alert("Please enter a task.");
        return;
    }

    const newTask = {
        id: crypto.randomUUID(),
        title: title,
        priority: priorityInput.value,
        completed: false
    };

    tasks.push(newTask);

    saveTasks();
    renderTasks();

    taskInput.value = "";
    taskInput.focus();
});

// Filter tasks
filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        currentFilter = button.dataset.filter;
        renderTasks();
    });
});

// Show tasks when the page opens
renderTasks();
