const Todo = (name,description,date,priority,isCompleted) => {
	const toList =()=>{
		return [name,description,date,priority];
	}
	return {name,description,date,priority,toList,isCompleted};
}

const TodoForm = (name,description,date,priority) => {
	let newtodo = document.createElement('div');
	newtodo.className = 'todo';
	let Field = [];
	Field[0] = document.createElement('input');
	Field[0].placeholder='name';
	if(name) Field[0].value = name;
	Field[1] = document.createElement('textarea');
	Field[1].placeholder = 'description';
	if(description) Field[1].value = description;
	Field[2] = document.createElement('input');
	Field[2].type = 'date';
	if(date) Field[2].value = date;
	Field[3] = document.createElement('select');
		const options = ['high','medium','low'];
		for(let i = 0;i<options.length;i++)	{
			const o = document.createElement('option');
			o.value = options[i];
			o.innerHTML = options[i];
			console.log(o.value);
			Field[3].appendChild(o);
		}
	if(priority) Field[3].value = priority;
	else Field[3].value = 'medium';
	Field[4] = document.createElement('button');
	Field[4].value = "Save";
	Field[4].className = "save-button";
	Field[4].innerHTML = "Save";
	
	for(let i = 0; i<Field.length; i++)
	newtodo.appendChild(Field[i]);
	return newtodo;
}
export {Todo,TodoForm};
