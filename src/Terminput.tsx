import { useState } from 'react';
import { getColored, getHelp, GlobalVars } from './App';
import styles from "./Home.module.css";
import { j_ob } from './thejson';

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
        } else if (content === "ls") {
            j_ob.ls.forEach(element => {
                const [e1, e2] = element.split(":")
                curr.push(<div>{getColored(e1, "#829210")} {getColored(e2, "#11f2f0")}</div>)
            });
        } else if (content === "help") {
            curr.push(getHelp())
        } else if (content.match("echo .*")) {
            curr.push(<div>{content.slice(5)}</div>)
        } else if (content.match("cd [a-zA-Z-_]*")) {
            curr.push(<div>Navigating to <a className={styles.hrefcol} href={`https://www.github.com/Anindya-Prithvi/${content.slice(3)}`}>{content.slice(3)}</a></div>);
            window.open(`https://www.github.com/Anindya-Prithvi/${content.slice(3)}`);
        } else if (content.match("edit [a-zA-Z-_]*")) {
            curr.push(<div>Navigating to <a className={styles.hrefcol} href={`https://github.dev/Anindya-Prithvi/${content.slice(5)}`}>{content.slice(5)}</a></div>);
            window.open(`https://github.dev/Anindya-Prithvi/${content.slice(5)}`);
        }
        else {
            curr.push(<div>Command not found. Try getting {getColored("help", "#f4b400")}</div>)
        }
        GlobalVars.outputsetter(curr);
    }
    var element = document.getElementById("termscroller");
    element!.scrollTop = element!.scrollHeight + 1000;
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
