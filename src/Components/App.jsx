import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Post from './Post';
import NewPost from './NewPost';

function App() {

    const [posts, setPosts] = useState([]);
    const [postsUpdateTime, setPostsUpdateTime] = useState(Date.now());

    useEffect(() => {
        axios.get('http://localhost:3003/posts')
        .then(function (response) {
            console.log(response.data);
            setPosts(response.data);
        })
    }, [postsUpdateTime]);

    const doDelete = id => {
        axios.delete('https://jsonplaceholder.typicode.com/posts/'+id, {
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    const doAdd = (data) => {
        axios.post('http://localhost:3003/posts', data
        )
          .then(function (response) {
            console.log(response);
            setPostsUpdateTime(Date.now());
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    const crud = {
        delete: doDelete
    }

    
    return (
    <div>
        <div className="new-post-container">
            <NewPost add={doAdd} />
        </div>
        <div className="posts-container">
            {posts.map((post)=>(<Post key={post.id} data={post} crud={crud}/>))}
        </div>
    </div>);
    }
    
export default App;