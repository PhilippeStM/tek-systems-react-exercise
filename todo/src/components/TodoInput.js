import React from 'react';

const TodoList = (props) => {
    let { listItem, setListItem } = props;

    let task = {
        name: "",
    }

    const onChange = (e) => {
        task.name = e.target.value;
    }

    const onClick = () => {
        setListItem([...listItem, task]);
    };

    return(
        <div>
            <input onChange={onChange} type="text" name="task"></input>    
            <button onClick={onClick}>Add Task</button>
        </div>
    )
}

export default TodoList;