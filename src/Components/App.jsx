import Mygtukas from './Mygtukas';

const data = [['Spausk', 1], ['Spaudinėk', 10], ['Klikink', 100]];

function App() {
    return (<>
        {data.map((b, i) => <Mygtukas key={i} tekstas={b[0]} amount={b[1]} />)}
    </>);
    }
    
export default App;