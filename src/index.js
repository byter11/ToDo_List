
import "./Todo.js";
import "./TodoEvents.js";
let todos = [];
function test(){
    const header2 = document.getElementById('header-2');
	let addbutton = document.createElement('div');
	addbutton.innerHTML = "Add Todo";
	addbutton.className = "todo-add";
	addbutton.addEventListener("click",showform);
	header2.appendChild(addbutton);
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
    nav.style.width = "15%";
	main.style.marginLeft = "15%";
}
window.setproject = e =>{
	const activeproject = document.getElementsByClassName('active-project');
	document.getElementById('project-name-display').innerHTML = activeproject[0].innerHTML;
}
function showform(){
	document.getElementById('todo-form').style.height = "7rem";
}
function setpriority(e){

}
test();
export {todos};