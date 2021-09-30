function SmallAnimal({open, farmNamber, farm1, color, animal, id}) {

    if ((farmNamber === 1 && farm1) || (farmNamber === 2 && !farm1)) {
    return (
        <div className="small-circle" style={{
            backgroundColor: color,
            borderRadius: animal === 'cow' ? '50%' : '5px'
        }}>
            <span>{color}</span>
            <button className="input-button-small" onClick={()=>open(id)}>Open Edit</button>
        </div>);
    }
    else {
        return null;
    }
}
export default SmallAnimal;