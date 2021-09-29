import { useReducer } from 'react';
import buttonReducer from '../Reducers/buttonReducer';
import {changeColor, changeFancyColor} from '../Actions';

function Red() {

    const [button, buttonDispacher] = useReducer(buttonReducer, {
        click: 'green',
        fancyClick: 'green',
    }); 

    return (
        <div className="button-shelf">
            <button onClick={() => buttonDispacher(changeColor())} style={{color:button.click}}>Press Me</button>
            <button onClick={() => buttonDispacher(changeFancyColor('#'+Math.floor(Math.random()*16777215).toString(16)))} style={{color:button.fancyClick}}>Press Me Fancy</button>
        </div>
    )
}

export default Red;