import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const TodoApp = () => {
    const [listItem, setListItem] = useState([]);

    const resetList = () => {
        setListItem([]);
    }

    return (
        <center>
            <Jumbotron>
                <h1>ToDo List!</h1>
                <h4>Add, remove or edit your daily tasks!</h4>
            </Jumbotron>

            {listItem.map((task, i) => (
                <TodoList task={task} setListItem={setListItem} index={i} listItem={listItem} />
            ))}
            <TodoInput listItem={listItem} setListItem={setListItem} />
            <hr></hr>
            <Button variant="info" onClick={resetList}>Delete All Items</Button>{''}
        </center>
    );
}

export default TodoApp;