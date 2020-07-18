import Todo from "./Todo.js";
import Project from "./Project.js";
import {renderTodo,renderProject,renderProjectTodos} from "./ToDoDOM.js";
import {showProjectForm, projects} from "./index.js";

let activeproject = null;

function addtodo(todo){
	let details = [];
	for(let i = 0;i<todo.childNodes.length - 1;i++)
		details[i] = todo.childNodes[i].value;
	let newtodo = Todo(details[0],details[1],details[2],details[3],false);
	activeproject.todos.push(newtodo);
	todo.parentNode.removeChild(todo);
	saveToStorage();
	renderTodo(newtodo);
	console.log(details);
}
function addproject(proj){
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
	let todo = evt.currentTarget.parentNode;
	todo.style.textDecoration = "line-through";
	todo.childNodes[3].style.color = "gray";
	evt.currentTarget.style.color= "lightgreen";
	evt.currentTarget.removeEventListener('click',completeTodo);
	evt.currentTarget.addEventListener('click',removeTodo);
	activeproject.todos[ getElementIndex(todo) ].isCompleted = true;
	console.log('completed');
}
function removeTodo(evt){
	let todo = evt.currentTarget.parentNode;
	activeproject.todos.splice(getElementIndex(todo),1);
	todo.parentNode.removeChild(todo);
	saveToStorage();
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
export {addtodo,addproject,selectProject,completeTodo,removeProject,activeproject};