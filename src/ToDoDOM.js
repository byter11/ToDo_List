
import {selectProject,completeTodo,removeProject} from "./TodoEvents.js";

function renderTodo(newtodo){
	let todo = document.createElement('div');
	todo.classList = "todo";
	let name = document.createElement('span');
	let desc = document.createElement('span');
	let date = document.createElement('span');
	let priority = document.createElement('span');
	let doneicon = document.createElement('i');
	doneicon.className = "fa fa-check-circle";
		doneicon.addEventListener('click',completeTodo);
	priority.className = "fa fa-circle";
	name.innerHTML = newtodo.name;
	desc.innerHTML = newtodo.description;
	date.innerHTML = newtodo.date;
	let prioritydict = {
		'high': 'red',
		'medium': 'yellow',
		'low': 'lightgreen'
	}
	priority.style.color = prioritydict[newtodo.priority];
	todo.appendChild(name);
	todo.appendChild(desc);
	todo.appendChild(date);
	todo.appendChild(priority);
	todo.appendChild(doneicon);
	let list = document.getElementById('todo-list');
	list.insertBefore(todo,document.getElementById('addtodoicon'));
	console.log(newtodo.name + "completed: " + newtodo.isCompleted);
	if(newtodo.isCompleted)
		doneicon.click();
}

function renderProject(proj){
	let list = document.getElementById('project-list');
	let newProject = document.createElement('div');
	newProject.innerHTML = proj.name;
	newProject.addEventListener('click',selectProject);
	let deleteicon = document.createElement('i');
	deleteicon.className = "fa fa-close";
	deleteicon.style.color = "gainsboro";
	deleteicon.addEventListener('click',removeProject);
	newProject.appendChild(deleteicon);
	list.appendChild(newProject);
	return newProject;
}

function renderProjectTodos(proj){
	let todolist = document.getElementById('todo-list');
	let addtodoicon = document.getElementById('addtodoicon');
	todolist.innerHTML = '';
	for(let i=0;i<proj.todos.length;i++){
		renderTodo(proj.todos[i]);
	}

	todolist.appendChild(addtodoicon);
}
export {renderTodo,renderProject,renderProjectTodos};
