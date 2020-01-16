console.log("Komputer żbik")
class Task 
{
    constructor(text)
    {
        this.text = text
        this.done = false
    }
}

let tasks = []

function addNewTask()
{
    let text = document.getElementById("write_task").value

    if (text.length == 0)
    {
        document.getElementById("write_task").placeholder = "Enter valid task please!"
        return;
    }

    let task = new Task(text)
    tasks.push(task)
    document.getElementById("write_task").value = ""

    let temp = document.createElement("div")
    temp.classList.add("task")
    temp.innerHTML = task.text

    temp.onclick = function() 
    {
        task.done = true
        document.getElementById("tasks_done").append(temp)
    }

    document.getElementById("tasks_undone").append(temp)
}

document.getElementById("add_task").onclick = addNewTask