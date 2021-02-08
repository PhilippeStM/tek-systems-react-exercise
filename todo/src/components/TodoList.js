import React from 'react';
import Button from 'react-bootstrap/Button';

const TodoList = (props) => {
    const { task, index, listItem, setListItem } = props;
    
    const onClick = () => {
        return setListItem(() => listItem.filter(task => listItem.indexOf(task) !== index));
    };

return (
    <div>
        <h2>{task.name}</h2>
        <div>
            <label className="checkboxText" htmlFor="checkbox">Completed?</label>
            <input className="checkbox" type="checkbox" name=""></input>
            <br></br>
            <Button variant="info" onClick={onClick}>Delete Task</Button>{''}
            <hr></hr>
        </div>
            

    </div>
)
};

export default TodoList;