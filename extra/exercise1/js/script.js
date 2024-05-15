// This is our data structure of TASKS
let tasks = [
  { description: "Do homework", priority: 1 },
  { description: "Wash clothes", priority: 0 },
  { description: "Dream about Javascript", priority: 1 },
];

function displayArray(array) {
  // 1 - From the parent body : create a new div  (class : container)
  let divContainer = document.createElement('div');
  divContainer.className = 'container';
  // 2 - For all tasks,  create a new div (class : item), (textContent : task.description)
  for(let task of array) {
    let newTask = document.createElement('div');
    newTask.className = "item";
    newTask.textContent = task.description;
  // 3 - The priority defines the color of your task (1 (HIGH) = red, 0 (LOW) = gray)
    if(task.priority === 1) {
      newTask.style.backgroundColor = "red";
    }
    else{
      newTask.style.backgroundColor = "gray";
    }
  // 4 - append it the container
  divContainer.appendChild(newTask);
  }
  // 5 - append div class container to body
  document.body.appendChild(divContainer)
}

displayArray(tasks);
