const Todo = (name,description,date,priority,isCompleted) => {
	const toList =()=>{
		return [name,description,date,priority];
	}
	return {name,description,date,priority,toList,isCompleted};
}

export default Todo;
