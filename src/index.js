
import "./Todo.js";
import Project from "./Project.js";
import "./TodoEvents.js";
let projects = [];

function initializepage(){
    const header2 = document.getElementById('header-2');
	let addtodo = document.createElement('div');
	addtodo.innerHTML = "Add Todo";
	addtodo.className = "todo-add";
	addtodo.addEventListener("click",showTodoForm);
	header2.appendChild(addtodo);
	
	const projectlist = document.getElementById('project-list');
	let addproj = document.createElement('i');
	addproj.className = "fa fa-plus-circle";
	addproj.addEventListener("click", showProjectForm);
	projectlist.appendChild(addproj);
	const priority = document.getElementsByClassName("priority-button");
	for(let i=0;i<priority.length;i++)
		priority[i].addEventListener("click",setpriority(i));
}
window.navaction = function navaction(){
    const nav = window.getComputedStyle(document.getElementById('navbar'));
    if(parseInt(nav.width) > 0) closenav();
    else opennav();
}
function closenav(){
    const nav = document.getElementById('navbar');
	const main = document.getElementById('main');
    nav.style.width = 0;
	main.style.marginLeft = 0;
}
function opennav(){
    const nav = document.getElementById('navbar');
	const main = document.getElementById('main');
	const WIDTH = window.getComputedStyle(document.body).getPropertyValue("--navwidth");
    nav.style.width = WIDTH;
	main.style.marginLeft = WIDTH;
}
window.setproject = e =>{
	const activeproject = document.getElementsByClassName('active-project');
	document.getElementById('project-name-display').innerHTML = activeproject[0].innerHTML;
}
function showTodoForm(){
	document.getElementById('todo-form').style.height = "auto";
}
function setpriority(e){

}
initializepage();
export {projects};