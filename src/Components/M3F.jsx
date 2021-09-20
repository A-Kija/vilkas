import React, { useState, useEffect } from 'react';
function M3F() {
    const [x, set3X] = useState(3);
    const [z, set7Z] = useState(7);


    // componentDidMount() analogas
    useEffect(() => {
        console.log('La la');
      },[]);

    const do3 = () => {
        // this.setState((state) => ({x: state.x += 3}));
        const newX = x + 3;
        set3X(newX);
    }

    const do7 = () => {
        set7Z(z + 7);
    }

    return (
        <>
    <button onClick={do3}>{x}X</button>
    <button onClick={do7}>{z}Z</button>
    </>
    );
}
export default M3F;