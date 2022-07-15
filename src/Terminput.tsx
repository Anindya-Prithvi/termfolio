import React, { useState } from 'react'
import { getColored } from './App';
import styles from "./Home.module.css";

const Terminput = () => {
    const [width, setWidth] = useState(0);
    const changeHandler = evt => {
        if (evt.key === 'Backspace') { setWidth(evt.target.value.length - 1) }
        else if (evt.key === 'Enter') {
            console.log("not impl");
            evt.preventDefault();
            const inpelement = document.getElementById("terminput") as HTMLInputElement;
            inpelement.value = "";
            setWidth(0);
        }
        else if (evt.target.value.length >= 30) {
            console.log("not impl");
            console.log("Terminal bell, input too long");
            evt.preventDefault();
            const bgelem = document.getElementById("overlaybell") as HTMLDivElement;
            const actions = [
                { opacity: '10%' }
            ];

            const timings = {
                duration: 300,
                iterations: 2,
            }
            bgelem.animate(actions, timings)
        }
        else if (evt.nativeEvent.key.length === 1) { setWidth(evt.target.value.length + 1) };
    };

    return (<div className={styles.terminalcontainer}>{getColored("visitor14234@online:$ ", "#f48020")}<input style={{ width: width + 'ch' }} className={styles.terminput} autoFocus onKeyDown={changeHandler} id='terminput' type='text' /><div className={styles.ekpixel}></div></div>)
}

export default Terminput;

// const printShell = () => {
//     const [width, setWidth] = useState(0);

//     const changeHandler = evt => {
//         if (evt.key === 'Backspace') { setWidth(evt.target.value.length - 4 + 5) }
//         else if (evt.key === 'Enter') { console.log("not impl"); }
//         else { setWidth(evt.target.value.length + 5) };
//     };

//     return (<div>visitor14234@online:$ <input style={{ width: width + 'ch' }} className={styles.terminput} autoFocus onKeyDown={changeHandler} type='text' /></div>)
// }