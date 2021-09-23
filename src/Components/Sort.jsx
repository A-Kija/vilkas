import { useState } from "react";

function Sort(props) {

    const [select, setSelect] = useState('titleAsc');

    const doSelect = (e) => {
        setSelect(e.target.value);
        props.makeSort(e.target.value);
    };

    return (
        <div className="sorter">
            <select onChange={doSelect}>
                <option value="titleAsc">Pagal pavadimą</option>
                <option value="titleDesc">Pagal pavadimą atvirkščiai</option>
                <option value="priceAsc">Pagal kainą</option>
                <option value="priceDesc">Pagal kainą atvirkščiai</option>
            </select>
        </div>
    );
}

export default Sort;