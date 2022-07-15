import React, { useEffect, useState } from 'react'
import { getColored, getHelp, GlobalVars } from './App';

const TermElements = ({ elems }) => {
    const [tste, setTste] = useState(elems);
    GlobalVars.setter = setTste;
    console.log(tste.map(item => item.props.children));

    return (
        <div>
            {tste.map(item => <div key={item.props.children}>{item}</div>)}
        </div>
    )
}

export default TermElements;