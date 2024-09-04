// DOM Elements
const addTaskBtn = document.querySelector("#addTaskBtn");
const removeTaskBtn = document.querySelector("#removeTaskBtn");
const taskInput = document.querySelector("input");
const taskList = document.querySelector("ol");

// Function to Add Task
function addTask() {
    const taskText = taskInput.value.trim(); // Trim whitespace
    if (taskText === "") {
        alert('Please enter a valid task.');
        return;
    }

    const taskItem = document.createElement("li");
    taskItem.innerText = taskText;

    // Add event listener for task removal on click
    taskItem.addEventListener("click", () => {
        removeTask(taskItem);
    });

    taskList.appendChild(taskItem);
    taskInput.value = ""; // Clear input after adding
}

// Function to Remove Task by Clicking or Entering Index
function removeTask(taskItem) {
    if (confirm(`Are you sure you want to delete the task: "${taskItem.innerText}"?`)) {
        taskList.removeChild(taskItem);
    }
}

// Event Listeners
addTaskBtn.addEventListener("click", addTask);
removeTaskBtn.addEventListener("click", function() {
    const taskIndex = parseInt(taskInput.value) - 1;
    if (taskIndex >= 0 && taskIndex < taskList.children.length) {
        removeTask(taskList.children[taskIndex]);
    } else {
        alert('Please enter a valid task number.');
    }
    taskInput.value = "";
});
