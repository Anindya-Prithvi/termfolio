import { useState } from 'react'
import { GlobalVars } from './App';

const TermElements = ({ elems }) => {
    const [tste, setTste] = useState(elems);
    GlobalVars.outputsetter = setTste;
    GlobalVars.tte = tste;
    // console.log(tste.map(item => item.props.children));

    return (
        <div>
            {tste.map(item => <div key={Math.random()}>{item}</div>)}
        </div>
    )
}

export default TermElements;