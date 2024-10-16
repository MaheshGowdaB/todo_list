// Add event listeners
document.getElementById("addTaskButton").addEventListener("click", addTask);

// Function to add a new task
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const taskList = document.getElementById("taskList");

    // Create list item
    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    // Toggle completion
    listItem.addEventListener("click", function () {
      listItem.classList.toggle("completed");
    });

    // Add delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("deleteTask");

    // Remove task when delete button is clicked
    deleteButton.addEventListener("click", function () {
      taskList.removeChild(listItem);
    });

    // Append delete button to list item
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

    // Clear input field
    taskInput.value = "";
  }
}
