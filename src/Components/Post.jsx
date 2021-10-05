function Post({data, crud}) {

    return (
        <div className="post">
            <div className="id">{data.id}</div>
            <div className="title">{data.title}</div>
            <div className="body">{data.body}</div>
            <div className="edit">
                <h3>Edit</h3>

                <button className="del" onClick={()=>crud.delete(data.id)}>Delete</button>
            </div>
        </div>
    );
}

export default Post;