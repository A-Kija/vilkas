import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Todo from './Todo';

function App() {

    const [todos, setTodos] = useState([]);

    useEffect(()=>{
        console.log('Start');
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(function (response) {
            console.log(response.data);
            setTodos(response.data);
        })
    }, []);

    return (<div className="todo-container">
        {todos.map((todo)=>(<Todo key={todo.id} data={todo}></Todo>))}
    </div>);
    }
    
export default App;