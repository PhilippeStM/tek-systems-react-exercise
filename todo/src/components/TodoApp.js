import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const TodoApp = () => {
    const [listItem, setListItem] = useState([]);

    const resetList = () => {
        setListItem([]);
    }

    return (
        <div>
            <h1>ToDo List!</h1>
            {listItem.map((task, i) => (
                <TodoList task={task} setListItem={setListItem} index={i} listItem={listItem} />
            ))}
            <TodoInput listItem={listItem} setListItem={setListItem} />
            <button onClick={resetList}>Delete All Items</button>
        </div>
    );
}

export default TodoApp;