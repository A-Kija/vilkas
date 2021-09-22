import User from './User';

function Todo(props) {

    return (
        <div className="todo">
            <div className='id'>{props.data.id}</div>
            <User id={props.data.userId}></User>
            <div className="title">{props.data.title}</div>
            <div className="status" onClick={()=>props.sniuriukas(props.data.id)} style={
                {backgroundColor: props.data.completed === false ? 'red' : 'green'}
                }></div>
        </div>
    );
}

export default Todo;