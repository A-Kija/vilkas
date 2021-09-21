import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App() {

    useEffect(()=>{
        console.log('Start');
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(function (response) {
            console.log(response.data);
        })
    }, []);

    return (<>
        Labas
    </>);
    }
    
export default App;