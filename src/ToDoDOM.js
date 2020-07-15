function rendertodo(newtodo){
	let todo = document.createElement('div');
	let checkicon = document.createElement('i');
	checkicon.className = "fa fa-check-circle";
	checkicon.style.justifySelf = 
	todo.appendChild(checkicon);
	todo.className = "todo";
	let todoitems = [];
	let newtodoitems = newtodo.toList();
	for(let i=0;i<3;i++){
		todoitems[i] = document.createElement('div');
		todoitems[i].innerHTML = newtodoitems[i];
		todo.appendChild(todoitems[i]);
	}
	todoitems[3] = document.createElement('div');
	todoitems[3].className = "prioritybox";
	todoitems[3].style.backgroundColor = newtodoitems[3];
	todo.appendChild(todoitems[3]);
	console.log(newtodoitems);
	let todolist = document.getElementById('todo-list');
	todolist.insertBefore(todo,todolist.childNodes[0]);
}