import { useState } from 'react';
import Field from './Field';

const letters = ['L', 'a', 'b', 'a', 's'];

function App() {

    const [style, setStyle] = useState({
        color: 'chartreuse',
        border: '1px solid chartreuse'
    });
    
    const changeTheme = t => {
        let theme;
        if (1 === t) {
            theme = {
                color: 'chartreuse',
                border: '1px solid chartreuse'
            }
        }
        else if (2 === t) {
            theme = {
                color: 'firebrick',
                border: '1px solid chartreuse'
            }
        }
        else if (3 === t) {
            theme = {
                color: 'chartreuse',
                border: '1px solid firebrick'
            }
        }
        setStyle(theme);
    }

    return (<>
        <Field letters={letters} th={style}></Field>
        <button onClick={()=>changeTheme(1)}>Theme 1</button>
        <button onClick={()=>changeTheme(2)}>Theme 2</button>
        <button onClick={()=>changeTheme(3)}>Theme 3</button>
    </>);
    }
    
export default App;