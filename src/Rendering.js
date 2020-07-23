import {selectProject,completeTodo,editTodo,removeProject} from "./EventHandling.js";

function renderTodo(newtodo,form){
	let todo = document.createElement('div');
	todo.classList = "todo";
	let name = document.createElement('span');
	let desc = document.createElement('span');
	let date = document.createElement('span');
	let priority = document.createElement('span');
	let options = document.createElement('div');
	let doneicon = document.createElement('i');
		doneicon.className = "fa fa-check-circle";
		doneicon.addEventListener('click',completeTodo);
	let editicon = document.createElement('i');
		editicon.className = "fa fa-pencil";
		editicon.addEventListener('click', editTodo);
	name.innerHTML = newtodo.name;
	desc.innerHTML = newtodo.description;
	date.innerHTML = newtodo.date;
	priority.className = "fa fa-circle";
	options.id = "todo-options";
	let prioritydict = {
		'high': 'red',
		'medium': 'yellow',
		'low': 'lightgreen'
	}
	priority.style.color = prioritydict[newtodo.priority];

	options.appendChild(editicon);
	options.appendChild(doneicon);
	todo.appendChild(name);
	todo.appendChild(desc);
	todo.appendChild(date);
	todo.appendChild(priority);
	todo.appendChild(options);
	let list = document.getElementById('todo-list');
	if(form) 
		list.replaceChild(todo,form);
	else{
		list.insertBefore(todo,document.getElementById('addtodoicon'));
		console.log('inserting todo');
	}
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
