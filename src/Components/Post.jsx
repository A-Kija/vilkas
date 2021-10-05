function Post({data}) {

    return (
        <div className="post">
            <div className="id">{data.id}</div>
            <div className="title">{data.title}</div>
            <div className="body">{data.body}</div>
            
        </div>
    );
}

export default Post;