import Field from './Field';

const letters = ['L', 'a', 'b', 'a', 's'];

function App() {
    return (<>
        <Field letters={letters}></Field>
        <button>Theme 1</button>
        <button>Theme 2</button>
        <button>Theme 3</button>
    </>);
    }
    
export default App;