import React, {useState, useEffect} from 'react';
function Modal({id, crud, data}) {

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

    useEffect(() => {
        setTitle(data.title);
        setBody(data.body);
    }, [id]);

    const doEdit = () => {
        const data = {
            title: title,
            body: body,
            id: id
        }
        setTitle('');
        setBody('');
        crud.close();    
        crud.edit(data);

    }

    if (id === 0) {
        return null;
    }

    return (
        <div className="modal">
            <div className="center">
                <div className="modal-post">
                <div><span>Title:</span><input type="text" onChange={(e)=>controller(e,'title')} value={title} /></div>
            </div>
            <div className="modal-post">
                <div><span>Body:</span><textarea onChange={(e)=>controller(e,'body')} value={body}></textarea></div>
            </div>
                <button className="input-button-small" onClick={doEdit}>Edit Post</button>
            </div>
            <button className="input-button-small" onClick={crud.close}>X</button>
        </div>
    )
}

export default Modal;