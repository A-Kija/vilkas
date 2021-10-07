import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import Post from './Post';
import NewPost from './NewPost';
import PostModal from './PostModal';

function App() {

    const [posts, setPosts] = useState([]);
    const [postsUpdateTime, setPostsUpdateTime] = useState(Date.now());
    const [open, setOpen] = useState(0);
    const modalPost = useRef({title:'',body:''});

    useEffect(() => {
        axios.get('http://localhost:3003/posts')
        .then(response => {
            setPosts(response.data);
        })
    }, [postsUpdateTime]);

    const doDelete = id => {
        axios.delete('http://localhost:3003/posts/'+id, {
          })
          .then(() => {
            setPostsUpdateTime(Date.now());
          })
    }


    const doAdd = (data) => {
        axios.post('http://localhost:3003/posts', data
        )
          .then(() => {
            setPostsUpdateTime(Date.now());
          })
    }

    const doEdit = (data) => {
      axios.put('http://localhost:3003/posts/'+data.id, data
      )
        .then(() => {
          setPostsUpdateTime(Date.now());
        })
  }

    const openModal = (data) => {
        modalPost.current = {title:data.title, body:data.body};
        setOpen(data.id);
    }

    const closeModal = () => {
        setOpen(0);
    }

    const crud = {
      delete: doDelete,
      close: closeModal,
      edit: doEdit,
      open: openModal
  }

    
    return (
    <div>
        
        <div className="new-post-container">
            <NewPost add={doAdd} />
        </div>
        <div className="posts-container">
            {posts.map((post)=>(<Post key={post.id} data={post} crud={crud}/>))}
        </div>
        <PostModal crud={crud} id={open} data={modalPost.current}/>
    </div>);
    }
    
export default App;