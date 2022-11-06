import { tasks } from "../index";
import { displayTasks } from "./displayTask";

const tasksBody = document.querySelector(".tasks-body");

export default function editTask(e) {
    // edit task title, description, due date, priority
    const task = e.target.closest(".task");
    const taskTitle = task.querySelector(".task-title").textContent;
    const taskIndex = tasks.findIndex((task) => task.title === taskTitle);
    console.log(tasks[taskIndex].title);

    let newTaskTitle = prompt("Enter new task title (leave blank to keep current title):");
    console.log(newTaskTitle)
    let newTaskDesc = prompt("Enter new task description (leave blank to keep current description):");
    console.log(newTaskDesc) 
    let newTaskDueDate = prompt("Enter new task due date (yyyy-mm-dd) (leave blank to keep current due date):");
    console.log(newTaskDueDate)
    let newTaskPriority = prompt("Enter new task priority (leave blank to keep current priority):"); 
    console.log(newTaskPriority)

    if (newTaskTitle === "" || newTaskTitle === null) {
        newTaskTitle = tasks[taskIndex].title;
    }
    
    if (newTaskDesc === "" || newTaskDesc === null) {
        newTaskDesc = tasks[taskIndex].description;
    }

    if (newTaskDueDate === "" || newTaskDueDate === null) {
        newTaskDueDate = tasks[taskIndex].due_date;
    }

    if (newTaskPriority === "" || newTaskPriority === null) {
        newTaskPriority = tasks[taskIndex].important;
    }

    tasks[taskIndex].title = newTaskTitle;
    tasks[taskIndex].description = newTaskDesc;
    tasks[taskIndex].due_date = newTaskDueDate;
    tasks[taskIndex].important = newTaskPriority;

    console.log(tasks);

    tasksBody.innerHTML = "";
    tasks.forEach((task) => {
        displayTasks(
            task.title,
            task.description,
            task.due_date,
            task.important
        );
    });
}
