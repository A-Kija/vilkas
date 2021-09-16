function SmallAnimal(props) {
    return (<div className="small-circle" style={{
        backgroundColor: props.color,
        borderRadius: props.animal == 'cow' ? '50%' : '5px'
    }}>{props.color}</div>);
}
export default SmallAnimal;