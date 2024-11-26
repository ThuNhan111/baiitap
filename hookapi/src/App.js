// src/App.js
import React, { useContext, useState } from 'react';
import { TodoContext } from './Context/TodoContext';

const App = () => {
    const { todos, addTodo, removeTodo } = useContext(TodoContext);
    const [newTodo, setNewTodo] = useState('');

    const handleAddTodo = (e) => {
        e.preventDefault();
        if (newTodo) {
            addTodo(newTodo);
            setNewTodo('');
        }
    };

    return (
        <div>
            <h1>Danh Sách Công Việc</h1>
            <form onSubmit={handleAddTodo}>
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Thêm công việc mới"
                />
                <button type="submit">Thêm</button>
            </form>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo} <button onClick={() => removeTodo(index)}>Xóa</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
