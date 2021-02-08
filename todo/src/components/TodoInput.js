import React from 'react';
import Button from 'react-bootstrap/Button';

const TodoList = (props) => {
    let { listItem, setListItem } = props;

    const task = {
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
            <input className="taskInput" onChange={onChange} type="text" name="task"></input>    
            <Button variant="info" onClick={onClick}>Add Task</Button>{''}
        </div>
    )
}

export default TodoList;