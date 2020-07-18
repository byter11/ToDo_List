import {addtodo,addproject,activeproject, selectProject} from "./TodoEvents.js";
import { renderProject } from "./ToDoDOM.js";

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
										addproject(newproject); }
											}	);
	document.getElementById('project-list').appendChild(newproject);
	i.style.color = "lightgreen";
	i.parentNode.replaceChild(i.cloneNode(true),i);
	i = document.getElementById('addprojicon');
	i.classList.remove('shake');
	i.addEventListener('click',e=>{ addproject(newproject); });
}
window.showTodoForm = function(button){
	if(!activeproject) {
		button.classList.add('shake');
		return;
	}
	button.classList.remove('shake');
	let newtodo = document.createElement('div');
	newtodo.className = 'todo';
	let Field = [];
	Field[0] = document.createElement('input');
	Field[0].placeholder='name';
	Field[1] = document.createElement('textarea');
	Field[1].placeholder = 'description';
	Field[2] = document.createElement('input');
	Field[2].type = 'date';
	Field[3] = document.createElement('select');
		const options = ['high','medium','low'];
		for(let i = 0;i<options.length;i++)	{
			const o = document.createElement('option');
			o.value = options[i];
			o.innerHTML = options[i];
			console.log(o.value);
			Field[3].appendChild(o);
		}
	Field[3].value = 'medium';
	Field[4] = document.createElement('button');
	Field[4].value = "Save";
	Field[4].className = "save-button";
	Field[4].innerHTML = "Save";
	Field[4].addEventListener('click',e=>{ addtodo(newtodo); } );

	for(let i = 0; i<Field.length; i++)
		newtodo.appendChild(Field[i]);
	const list = document.getElementById('todo-list');
	list.insertBefore(newtodo,document.getElementById('addtodoicon'));
}
window.clearstorage = e=>{
	console.log("Storage cleared");
	window.localStorage.clear();
}
initializepage();
export {showProjectForm,projects};