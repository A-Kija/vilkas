import Letter from './Letter';

function Field({letters, th}) {
    return (<>
        <div className="field">
            {letters.map((l, i) => <Letter key={i} letter={l} th={th}/>)}
        </div>
    </>);
    }
    
export default Field;