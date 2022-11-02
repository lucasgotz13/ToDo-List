import trashCanPhoto from '../assets/trash-can-svgrepo-com.svg'

export function displayTasks(title, description, dueDate, priority) {
    const tasksBody = document.querySelector(".tasks-body");
    const task = document.createElement("div");
    task.classList.add("task");
    task.innerHTML = `<div><h4 class="task-title">${title}</h4><p>${description}</p></div>  <p>Due-date: ${dueDate}</p> <p>Priority: ${priority}</p>`;
    const trashIcon = document.createElement("button");
    trashIcon.classList.add("trash-can-logo");
    trashIcon.innerHTML = `<img src=${trashCanPhoto} width=32px height=32px></img>`;
    tasksBody.appendChild(task);
    tasksBody.appendChild(trashIcon);
}