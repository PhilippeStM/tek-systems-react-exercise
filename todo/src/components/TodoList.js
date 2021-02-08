import React from 'react';

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
            <button onClick={onClick}>X</button>
        </div>
    </div>
)
};

export default TodoList;