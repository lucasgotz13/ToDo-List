import { openModal, closeModal } from "./components/openModal";
import { addTask } from "./components/addTask";
import { displayTasks } from "./components/displayTask";
// open and close modal //////////////
const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");
const alternativeModal = document.querySelector(".modal");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});
// ADD AND DISPLAY TASK
import { deleteTask } from "./components/deleteTask";
const addTaskButton = document.getElementById("add-task");
const modalBody = document.querySelector(".modal-body");
const tasksBody = document.querySelector(".tasks-body");
const taskTitleInput = document.getElementById("task_title");
const taskDescInput = document.getElementById("task_description");

let tasks = [
  //   {
  //     title: "Task 1",
  //     description: "This is task 1",
  //     due_date: "2021-01-01",
  //     important: "High",
  //   },
  //   {
  //     title: "Task 2",
  //     description: "This is task 2",
  //     due_date: "2021-01-02",
  //     important: "Medium",
  //   }
];

tasks.forEach((task) => {
  displayTasks(task.title, task.description, task.due_date, task.important);
});

console.log(tasks);

addTaskButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (addTask() === undefined) {
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "An error has occured";
    errorMessage.style.color = "red";
    modalBody.appendChild(errorMessage);
    setTimeout(() => {
      errorMessage.remove();
    }, 1000);
    return;
  }
  tasks.push(addTask());
  console.log(tasks);
  closeModal(alternativeModal);
  // DISPLAY TASKS
  tasksBody.innerHTML = "";
  taskTitleInput.value = "";
  taskDescInput.value = "";
  tasks.forEach((task) => {
    displayTasks(task.title, task.description, task.due_date, task.important);
  });
});

// DELETE TASK //////////////
// use trash can logo to delete task from DOM and from tasks array
tasksBody.addEventListener("click", (e) => {
  if (e.target.classList.contains("trash-can-logo")) {
    deleteTask(e);
    tasks = tasks.filter((task) => {
      return (
        task.title !== e.target.closest(".task").querySelector("h4").textContent
      );
    });
    console.log(tasks);
  }
});
