

import { getTask } from "../store/tasks.js";
import { renderTaskItem } from "./taskItem.js";



function render() {


    const ul = document.createElement('ul')
        getTask().forEach(task => {
            
            ul.append(renderTaskItem({task}))
        })
        // document.addEventListener('toggleCheckTaskItem', (e)=> {
        //    const task =  tasks.find(task => task.id === e.detail.taskid)
        //    task.isComplete = !task.isComplete
        //    console.log(task);
        // })

        document.addEventListener('taskChanged', (e)=> {
            const task = getTask()
                task.forEach(task=> {})
        })

    return ul
}


export{render as renderTaskList}