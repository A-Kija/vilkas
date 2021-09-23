function Knyga(props) {

    return (
        <div className="book">
            <div className="cat">{props.cat}</div>
            <img src={props.data.img}/>
            <div className="title">{props.data.title}</div>
            <div className="author">{props.data.author}</div>
            <div className="price">{props.data.price}</div>
        </div>
    );
}

export default Knyga;