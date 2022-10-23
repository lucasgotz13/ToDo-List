import { openModal, closeModal } from "./components/openModal";
import { addTask } from "./components/addTask";

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
// ADD TASK
const addTaskButton = document.getElementById("add-task");
const modalBody = document.querySelector('.modal-body')

let tasks = [];

addTaskButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (addTask() === undefined) {
        const errorMessage = document.createElement('p')
        errorMessage.textContent = "An error has occured"
        errorMessage.style.color = "red"
        modalBody.appendChild(errorMessage)
        setTimeout(() => {
            errorMessage.remove()
        }, 1000)
        return
    }
    tasks.push(addTask());
    console.log(tasks);
    closeModal(alternativeModal);
});
