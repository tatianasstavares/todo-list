const tasks = [
    {
        id:1,
        title: " Task1",
        isComplete: false
    },
    {
        id:2,
        title: " Task2",
        isComplete: false
    },
    {
        id:3,
        title: " Task3",
        isComplete: false
    },
];

function getTask() {
    return tasks
}

function setTasks(newTask){
    let task =  tasks.find(currentTask => currentTask.id === task.id);
    task = newTask
}

const taskChanged = new Even('tasksChanged')
document.dispatchEvent(taskChanged)

export{getTask,setTasks}