const Todo = (name,description,date,priority) => {
	const toList =()=>{
		return [name,description,date,priority];
	}
	return {name,description,date,priority,toList};
}

export default Todo;
