import { tasks } from "../index";

export default function deleteTask(e) { 
    const task = e.target.closest('.task');
    task.remove();
    // remove task from tasks arrayk
    const taskTitle = task.querySelector('.task-title').textContent;
    const taskIndex = tasks.findIndex((task) => task.title === taskTitle);
    tasks.splice(taskIndex, 1);
    console.log(tasks);
}
