import { useState } from "react";

function NewPost({add}) {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const controller = (e, i) => {
        if ('title' === i) {
            setTitle(e.target.value);
        }
        else if ('body' === i) {
            setBody(e.target.value);
        }
    }

    const doAdd = () => {
        const data = {
            title: title,
            body: body
        }
        setTitle('');
        setBody('')
        add(data);

    }

    return (
        <>
        <div className="new-post">
            <div><span>Title:</span><input type="text" onChange={(e)=>controller(e,'title')} value={title} /></div>
        </div>
        <div className="new-post">
            <div><span>Body:</span><textarea onChange={(e)=>controller(e,'body')} value={body}></textarea></div>
        </div>
        <div className="new-post">
            <button className="add" onClick={doAdd}>Add</button>
        </div>
        </>
    );
}

export default NewPost;