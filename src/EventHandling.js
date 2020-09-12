import {Todo,TodoForm} from "./Todo.js";
import Project from "./Project.js";
import {renderTodo,renderProject,renderProjectTodos} from "./Rendering.js";
import {showProjectForm, projects} from "./index.js";

let activeproject = null;

function addTodo(evt){
	const form = evt.currentTarget.parentNode;
	let details = [];
	for(let i = 0;i<form.childNodes.length - 1;i++)
		details[i] = form.childNodes[i].value;
	let newtodo = Todo(details[0],details[1],details[2],details[3],false);
	activeproject.todos.push(newtodo);
	renderTodo(newtodo,form);
	saveToStorage();
	console.log(details);
}
function addProject(proj){
	console.log('adding');
	let name = proj.value;
	let icon = document.getElementById('addprojicon');
	if(name.length > 0 && !doesExistAlready(name)) {
		const newProject = Project(name,'',new Array);
		projects.push(newProject);
		renderProject(newProject);
	}
	else{
		shake(icon);
	}
	proj.parentNode.removeChild(proj);
	icon.parentNode.replaceChild(icon.cloneNode(true),icon);
	icon = document.getElementById('addprojicon');
	icon.style.color = '';
	icon.addEventListener('click',showProjectForm);
	
}
function selectProject(evt){
	console.log('selecting');
	const active = document.getElementsByClassName('active-project')[0];
	let newactive;
	if(evt.currentTarget) newactive = evt.currentTarget;
	else newactive = evt;
	if(activeproject != projects[getElementIndex(newactive)]){
		if(active) 
			active.classList.remove('active-project');
		newactive.classList.add('active-project');
		
		activeproject = projects[getElementIndex(newactive)];
		console.log(activeproject);
		renderProjectTodos(activeproject);
	}
}
function completeTodo(evt){
	let todo = evt.currentTarget.parentNode.parentNode;
	todo.style.textDecoration = "line-through";
	todo.childNodes[2].style.color = "gray";
	evt.currentTarget.style.color= "lightgreen";
	evt.currentTarget.removeEventListener('click',completeTodo);
	evt.currentTarget.addEventListener('click',removeTodo);
	activeproject.todos[ getElementIndex(todo) ].isCompleted = true;
	console.log('completed');
}
function removeTodo(evt){
	let todo = evt.currentTarget.parentNode.parentNode;
	activeproject.todos.splice(getElementIndex(todo),1);
	todo.parentNode.removeChild(todo);
	saveToStorage();
}

function editTodo(evt){
	console.log('editing');
	let todo = evt.currentTarget.parentNode.parentNode;
	let details = [];
	for(let i=0; i<3; i++){
		details[i] = todo.childNodes[i].innerHTML;
	}
	console.log(details);
	const form = TodoForm(details[0],details[1],details[2],details[3]);
	form.querySelector(".save-button").addEventListener('click',addTodo);
	todo.parentNode.replaceChild(form,todo);
	activeproject.todos.splice(getElementIndex(todo),1);
}
function removeProject(evt){
	evt.cancelBubble = true;
	let project = evt.currentTarget.parentNode;
	const index = getElementIndex(project);
	if(activeproject === projects[index]){
		activeproject = null;
		renderProjectTodos(Project('','',new Array));
	}
	console.log('Removing: '+ projects[index].name );
	projects.splice( getElementIndex(project), 1);
	project.parentNode.removeChild(project);
	
	if(projects.length >0) {
		saveToStorage();
	}
	else window.localStorage.clear();
}
function doesExistAlready(name){
	for(let i =0; i<projects.length; i++){
		console.log(projects[i].name);
		if(name == projects[i].name)
			return true;
	}
	return false;
}

function shake(elem){
	elem.classList.add('shake');
}
function getElementIndex(e){
	let i = 0;
	for(i; e = e.previousElementSibling; i++);
	console.log('index: ' + i);
	return i;
}
function saveToStorage(){
	window.localStorage.clear();
	window.localStorage.setItem('projects',JSON.stringify(projects));
}
export {addTodo,addProject,selectProject,completeTodo,editTodo,removeProject,activeproject};