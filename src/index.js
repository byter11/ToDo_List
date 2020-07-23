import {addTodo,addProject,activeproject, selectProject} from "./EventHandling.js";
import {renderProject } from "./Rendering.js";
import {TodoForm} from "./Todo.js"
let projects = [];

function initializepage(){
	const nav = document.querySelector('nav');
	let addproj = document.createElement('i');
	addproj.className = "fa fa-plus-circle";
	addproj.id = "addprojicon";
	addproj.addEventListener("click", showProjectForm);
	nav.appendChild(addproj);
	
	if(window.localStorage.getItem('projects')){
		let lastproject;
		console.log('local storage found');
		projects = JSON.parse(window.localStorage.getItem('projects'));
		for(let i=0;i<projects.length;i++)
		lastproject = renderProject(projects[i]);
		selectProject(lastproject);
	}
	
}

function showProjectForm(evt){
	console.log('showing form');
	let i = evt.currentTarget;
	let newproject = document.createElement('input');
	newproject.style.border = "none";
	newproject.style.borderBottom = "1px solid gray";
	newproject.placeholder = "Name";
	newproject.addEventListener('keyup',e=>{
										if(event.keyCode === 13) {
										event.preventDefault();
										addProject(newproject); }
											}	);
	document.getElementById('project-list').appendChild(newproject);
	i.style.color = "lightgreen";
	i.parentNode.replaceChild(i.cloneNode(true),i);
	i = document.getElementById('addprojicon');
	i.classList.remove('shake');
	i.addEventListener('click',e=>{ addProject(newproject); });
}
window.showTodoForm = function(button){
	if(!activeproject) {
		button.classList.add('shake');
		return;
	}
	button.classList.remove('shake');
	const form = TodoForm();	
	form.querySelector(".save-button").addEventListener('click',addTodo );
	const list = document.getElementById('todo-list');
	list.insertBefore(form,document.getElementById('addtodoicon'));
}

window.clearstorage = e=>{
	console.log("Storage cleared");
	window.localStorage.clear();
}
initializepage();
export {showProjectForm,projects};