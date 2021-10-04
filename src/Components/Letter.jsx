import { useContext } from "react";
import { ThemeContext } from "./App";

function Letter({letter}) {
    const th = useContext(ThemeContext);
    return (
        <span style={th}>{letter}</span>
    )
}

export default Letter;