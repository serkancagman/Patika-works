const taskListEl = document.getElementById("list");
const input = document.getElementById("task");

let newTask = "";
let taskListArr = JSON.parse(localStorage.getItem("tasks"));

listTasks();

input.addEventListener("change", e => getValue(e));

function getValue(e) {
  newTask = e.target.value;
}

function newElement() {
  if(newTask === "") {
    $('#liveToast2').toast('show');
  } else {
  $('#liveToast1').toast('show');
  taskListArr.push(newTask);
  localStorage.setItem("tasks", JSON.stringify(taskListArr));

  const newTaskEl = document.createElement("li");
  const closeBtn = document.createElement("span");
  
  newTaskEl.innerHTML = newTask;

  closeBtn.classList.add("close");
  closeBtn.innerText = "x";
  closeBtn.onclick = () => {
    $('#liveToast3').toast('show');
    // Remove task from DOM
    newTaskEl.remove();
    // Remove task from localStorage
    const index = taskListArr.indexOf(newTask);
    if (index > -1) {
      taskListArr.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(taskListArr));
    }
  }

  newTaskEl.appendChild(closeBtn);
  
  newTaskEl.onclick = () => {
    newTaskEl.classList.contains("checked") ? 
    newTaskEl.classList.remove("checked") : 
    newTaskEl.classList.add("checked");
  };
    
  taskListEl.appendChild(newTaskEl);
  }
  input.value = "";
  newTask = "";
}

function listTasks() {
  
  taskListArr.map(task => {
    const newTaskEl = document.createElement("li");
    const closeBtn = document.createElement("span");
    
    newTaskEl.innerHTML = task;
  
    closeBtn.classList.add("close");
    closeBtn.innerText = "x";
    closeBtn.onclick = () => {
      newTaskEl.remove();
      const index = taskListArr.indexOf(task);
      if (index > -1) {
      taskListArr.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(taskListArr));
  }
    }
    newTaskEl.appendChild(closeBtn);
    newTaskEl.onclick = () => {
      newTaskEl.classList.contains("checked") ? 
      newTaskEl.classList.remove("checked") : 
      newTaskEl.classList.add("checked");
    };
    taskListEl.appendChild(newTaskEl);
  });
}