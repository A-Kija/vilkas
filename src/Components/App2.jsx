import Kvadratas from './Kvadratas';

const data = ['Rudasis', 'Juodasis', 'Brigadininkas'];

function App() {
    return (<>
        {data.map((b, i) => <Kvadratas key={i} bebras={b} />)}
    </>);
    }
    
export default App;