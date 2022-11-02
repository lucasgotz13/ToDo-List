export function addTask() {
    const titleValue = document.getElementById('task_title').value
    const descValue = document.getElementById('task_description').value
    const dateValue = document.getElementById('task_due-date').value
    const important = document.getElementById('task_importance').value

    if (titleValue == "" || dateValue == "") return;

    let newTodo = {
        title: titleValue,
        description: descValue,
        due_date: dateValue,
        important: important 
    }

    return newTodo
}