import { useState } from 'react';
import { getColored, GlobalVars } from './App';
import styles from "./Home.module.css";

const Terminput = () => {
    const [visname, setVisname] = useState(GlobalVars.visitorname)
    GlobalVars.visnamesetter = setVisname;
    return (<div className={styles.terminalcontainer}>{getColored(`${visname}@online:$ `, "#f48020")}<span className={styles.terminput} id='terminput'></span><div className={styles.ekpixel}></div></div>)
}

function termbell(e) {
    e.preventDefault();
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

function gettermout(inp: string) {

}

function invokeParser(content: string) {
    console.log(content);
    if (content === "clear") {
        GlobalVars.outputsetter([]);
    } else {
        // console.log(GlobalVars.tte);
        var curr = GlobalVars.tte.slice();
        curr.push(<div>{getColored(`${GlobalVars.visitorname}@online:$ `, "#f48020")}<span>{content}</span></div>)
        if (content.match("rename .*")) {
            let thename: string = content.substring(7);
            curr.push(<div>{`Name set to ${thename}`}</div>);
            GlobalVars.visnamesetter(thename);
            GlobalVars.visitorname = thename;
        }
        GlobalVars.outputsetter(curr);
    }
}

export function listenlog(e) {
    // console.log(e);
    const spanelem = document.getElementById("terminput");
    if (spanelem != undefined) {
        let currentcontent = spanelem.textContent;
        if (e.key === 'Enter') {
            spanelem.textContent = "";
            invokeParser(currentcontent!);
        } else if (e.key === 'Backspace') {
            // do backspace lol what else
            if (spanelem.textContent!.length == 0) termbell(e);
            else spanelem.textContent = currentcontent!.slice(0, -1);
        } else if (e.key.length != 1) {
            e.preventDefault();
        } else if (e.key.length === 1 && currentcontent!.length < 30) {
            spanelem.textContent = currentcontent + e.key;
        }
        else if (currentcontent!.length >= 30) {
            termbell(e);
        }
    }
};


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