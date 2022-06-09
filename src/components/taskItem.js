import { setTasks } from "../store/tasks.js"

function render({task}) {
    const li = document.createElement('li')

    const checkbox = document.createElement('input')
    checkbox.setAttribute("type", "checkbox")
    checkbox.addEventListener('click', (e) =>task.isComplete = !task.isComplete)

    //  const toggleCheckTaskItem = new CustomEvent('toggleCheckTaskItem', {
    //      detail: {
    //          taskid: task.id,
    //      }
    //  })

    setTasks

     document.dispatchEvent(toggleCheckTaskItem) 

    checkbox.setAttribute("checked","")
         li.append(checkbox)

         task.isComplete && checkbox.setAttribute("checked", "")

         li.append(checkbox)
         
         const span = document.createElement('span')
         span.textContent = task.title

         li.append(span)
        
         return li
}

export {render as renderTaskItem}