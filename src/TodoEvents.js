import {projects} from "./index.js";
import Todo from "./Todo.js";
import rendertodo from "./ToDoDOM.js"
window.addtodo = () => {
	const name = document.getElementById('nameinput').value;
	const desc = document.getElementById('descinput').value;
	const date = document.getElementById('dateinput').value.toString();
	const priority = document.getElementsByClassName("priority-button active")[0].style.backgroundColor;
	const newtodo = Todo(name,desc,date,priority);
	projects.todos.push(newtodo);
	console.log(projects.todos[0].toList());
	rendertodo(newtodo);
}
function addproject(){
	
}

