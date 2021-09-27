import { useParams } from "react-router-dom";
import { animals as list } from '../Data/animals';

function Animal() {
    const {id} = useParams();
    return (
        <h1 style={{fontSize: '123px'}}>{list[id-1].name}</h1>
    )
}
export default Animal;