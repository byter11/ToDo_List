
function rendertodo(newtodo){
	let todo = document.createElement('div');
	let checkicon = document.createElement('i');
	checkicon.className = "fa fa-check-circle";
	checkicon.addEventListener("click",completetodo);
	todo.appendChild(checkicon);
	todo.className = "todo";
	let todoitems = [];
	let newtodoitems = newtodo.toList();
	for(let i=0;i<3;i++){
		todoitems[i] = document.createElement('div');
		todoitems[i].className = 'todo-item';
		todoitems[i].innerHTML = newtodoitems[i];
		todo.appendChild(todoitems[i]);
	}
	todoitems[3] = document.createElement('div');
	todoitems[3].className = "prioritybox";
	todoitems[3].style.backgroundColor = newtodoitems[3];
	todo.appendChild(todoitems[3]);
	console.log(newtodoitems);
	let todolist = document.getElementById('project');
	todolist.insertBefore(todo,todolist.childNodes[0]);
}
function completetodo(evt){
	console.log('complete todo');
	let todo = evt.currentTarget.parentNode;
	evt.currentTarget.style.color = "lightgreen";
	evt.currentTarget.addEventListener('click',removetodo);
	for(let i = 1;i<todo.childNodes.length;i++){
		todo.childNodes[i].style.textDecoration = 'line-through';
	}
	todo.childNodes[4].style.backgroundColor = "gray";
}
function removetodo(evt){
	let todo = evt.currentTarget.parentNode;
	todo.parentNode.removeChild(todo);
}
export default rendertodo;