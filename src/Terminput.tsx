import { getColored } from './App';
import styles from "./Home.module.css";

const Terminput = () => {
    return (<div className={styles.terminalcontainer}>{getColored("visitor14234@online:$ ", "#f48020")}<span className={styles.terminput} id='terminput'>kmkjiueg{ }</span><div className={styles.ekpixel}></div></div>)
}

export function listenlog(e) {
    // console.log(e);
    const spanelem = document.getElementById("terminput");
    if (spanelem != undefined) {
        let currentcontent = spanelem.textContent;
        if (e.key === 'Enter') {
            spanelem.textContent = "";
            console.log("remaining to implement");
        } else if (e.key === 'Backspace') {
            // do backspace lol what else
            spanelem.textContent = currentcontent!.slice(0, -1);
        } else if (e.key.length != 1) {
            e.preventDefault();
        } else if (e.key.length === 1 && currentcontent!.length < 30) {
            spanelem.textContent = currentcontent + e.key;
        }
        else if (currentcontent!.length >= 30) {
            console.log("not impl");
            console.log("Terminal bell, input too long");
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