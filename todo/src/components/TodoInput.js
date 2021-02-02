import React from 'react';

const TodoList = (props) => {

    const { listItem, setListItem } = props;
    let task = {
        name: "",
        isComplete: false
    }

    const onChange = (e) => {
        task.name = e.target.value;
    }

    const onClick = (e) => {
        setListItem([...listItem, task])
        e.target.value = "";
    };

    return(
        <div>
            <input onChange={onChange} type="text" name="task"></input>
            <button onClick={onClick}>Add Task</button>

        </div>
    )
}

export default TodoList;