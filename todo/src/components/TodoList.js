import React from 'react';
import Button from 'react-bootstrap/Button';

const TodoList = (props) => {
    const { task, index, listItem, setListItem } = props;
    
    const onClick = () => {
        return setListItem(() => listItem.filter(task => listItem.indexOf(task) !== index));
    };

return (
    <div>
        <h4>{task.name}</h4>
        <div>
            <label htmlFor="checkbox">Completed?</label>
            <input type="checkbox" name=""></input>
            <Button variant="info" onClick={onClick}>X</Button>{''}
            <hr></hr>
        </div>
            

    </div>
)
};

export default TodoList;