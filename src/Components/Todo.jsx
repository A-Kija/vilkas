

function Todo(props) {

    return (
        <div className="todo">
            <div className='id'>{props.data.id}</div>
            <div className="title">{props.data.title}</div>
            <div className="status" style={
                {backgroundColor: props.data.completed === false ? 'red' : 'green'}
                }></div>
        </div>
    );
}

export default Todo;