import { useRef, useState, useEffect } from "react";

function App() {
    const counter = useRef(0);
    const crazyRef = useRef();
    const [turboCounter, setTurboCounter] = useState(0);

    const clicker = () => {
        counter.current++;
    }

    const turboClicker = () => {
        setTurboCounter(turboCounter + 1);
    }

    useEffect(() => {
        console.log(crazyRef.current);
        crazyRef.current.style.fontSize = "50px";
        //
        document.querySelector('.crazy').style.color = "blue";
        
        setTimeout(() => {
            document.querySelector('.crazy').innerHTML = "JA JA!";
          }, 2000);
      }, []);



    return (<>
        <h1>REF: {counter.current}</h1>
        <h1>STATE: {turboCounter}</h1>
        <button onClick={clicker}>REF: Ja Ja!</button>
        <button onClick={turboClicker}>STATE: Ja Ja!</button>
        <div ref={crazyRef} className="crazy">CRAZY</div>
    </>);
    }
    
export default App;