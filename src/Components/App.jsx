import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Post from './Post';

function App() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(function (response) {
            console.log(response.data);
            setPosts(response.data);
        })
    }, []);


    
    return (
    <div>
        <div className="posts-container">
            {posts.map((post)=>(<Post key={post.id} data={post}/>))}
        </div>
    </div>);
    }
    
export default App;