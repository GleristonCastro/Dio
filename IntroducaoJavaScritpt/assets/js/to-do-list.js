let submitTask = document.getElementById('submitTask');
let list = document.getElementById('printTasks');

submitTask.onsubmit = function (submit) {
submit.preventDefault();
let text = document.getElementById('addTask');
addTask (text.value);
submitTask.reset();
};

function addTask(description) {
let taskDiv = document.createElement('div');
let newTask = document.createElement('input');
let taskText = document.createElement('label');
let descriptionTask = document.createTextNode(description);

newTask.setAttribute('type', 'checkbox');
newTask.setAttribute('name', description);
newTask.setAttribute('id',description);
taskText.setAttribute('for', description);
taskText.appendChild(descriptionTask);
taskDiv.classList.add('task-item');
taskDiv.appendChild(newTask);
taskDiv.appendChild(taskText);
list.appendChild(taskDiv);

}