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

    const sniuriukasTodui = (id) => {
        const todosCopy = todos.slice();
        for (let i = 0; i < todosCopy.length; i++) {
            if (id === todosCopy[i].id) {
                todosCopy[i].completed = !todosCopy[i].completed;
                break;
            }
        }
        setTodos(todosCopy);
    }

    return (<div className="todo-container">
        {todos.map((todo)=>(<Todo key={todo.id} data={todo} sniuriukas={sniuriukasTodui}></Todo>))}
    </div>);
    }
    
export default App;