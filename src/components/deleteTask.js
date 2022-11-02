export default function deleteTask() { 
    const task = e.target.closest('.task');
    task.remove();
    console.log("delete task");
}
