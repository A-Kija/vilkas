import { useContext } from "react";
import { ThemeContext, ThemeSelect } from "../Providers";

function Letter({letter}) {
    const th = useContext(ThemeContext);
    const ts = useContext(ThemeSelect);
    return (
        <span style={th[ts]}>{letter}</span>
    )
}

export default Letter;