import React, {useState} from 'react';
function Modal({id, close, destroy, change, edit}) {

    const [editInput, setEditInput] = useState('');

    const editInputHandler = (e) => {
        setEditInput(e.target.value);
    }

    if (id === 0) {
        return null;
    }

    return (
        <div className="modal">
            <button className="input-button-small" onClick={()=>destroy(id)}>Go Home</button>
            <button className="input-button-small" onClick={()=>change(id)}>Change Farm</button>
            <div className="center">
                <input type="text" value={editInput} onChange={editInputHandler}/>
                <button className="input-button-small" onClick={()=>edit(id, editInput)}>Edit Color</button>
            </div>
            <button className="input-button-small" onClick={close}>X</button>
        </div>
    )
}

export default Modal;