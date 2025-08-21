import React, { useState } from 'react'


type TodoItem = {
    id: number;
    task: string;
}


const Rugved2 = () => {
    const [task, setTask] = useState('');
    const [todos, setTodos] = useState<TodoItem[]>([]);

    const nextId = React.useRef(1);

    const handleAdd = () => {
        if (task.trim()) {

            const newTodo: TodoItem = {
                id: nextId.current++,
                task: task.trim(),
            };
            setTodos([...todos, newTodo]);
            setTask('');
        }
    };

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleAdd();
        }
    };

    return (
        <div>
            <div className="rugved-container">
                <h1>Deva Rugved's To Do List</h1>
                <div className="input-wrapper">
                    <input
                        type="text" placeholder="Enter a task..." value={task}
                        onChange={(e) => setTask(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <button onClick={handleAdd}>Submit</button>
                </div>

                <div className="card-list">
                    {todos.map((todo) => (
                        <div key={todo.id} className="card">
                            <span>{todo.task}</span>
                            <button onClick={() => handleDelete(todo.id)}>Delete</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Rugved2
