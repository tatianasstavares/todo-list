import { renderTaskList } from './src/components/taskList.js';
import './style.css'

document.querySelector('#app').innerHTML = `
  <h1>Tasks</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`

const app = document.querySelector('#app')

const components = [renderTaskList()];

components.forEach(element => {
  app.append(element)
})

document.addEventListener('taskChanged', (e)=>renderTaskList)



