import trashCanPhoto from '../assets/trash-can-svgrepo-com.svg'
import editPhoto from '../assets/edit-svgrepo-com.svg'
import deleteTask from './deleteTask';
import editTask from './editTask';

export function displayTasks(title, description, dueDate, priority) {
    const tasksBody = document.querySelector(".tasks-body");
    const task = document.createElement("div");
    task.classList.add("task");
    task.innerHTML = `<div><h4 class="task-title">${title}</h4><p>${description}</p></div>  <p>Due-date: ${dueDate}</p> <p>Priority: ${priority}</p>`;
    
    const trashIcon = document.createElement("button");
    trashIcon.classList.add("trash-can-logo");
    trashIcon.innerHTML = `<img src=${trashCanPhoto} width=32px height=32px></img>`; 
    trashIcon.addEventListener("click", (e) => deleteTask(e));

    task.appendChild(trashIcon);

    const editIcon = document.createElement("button");
    editIcon.classList.add("edit-logo");
    editIcon.innerHTML = `<img src="${editPhoto}" width=32px height=32px></img>`;
    editIcon.addEventListener("click", (e) => editTask(e)); 

    task.appendChild(editIcon);

    tasksBody.appendChild(task);

    return trashIcon;
}