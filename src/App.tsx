// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
// import React, { useState } from "react";
import styles from "./Home.module.css";
import TermElements from './TermElements';
import Terminput, { listenlog } from './Terminput';

export function getColored(s: string, colorg: string) {
  const colorgiven = { color: colorg };
  return (<span style={colorgiven}>{s}</span>)
}

export class GlobalVars {
  public static tte = [<div>Mounting {getColored("/home/visitor", "#35bdb8")}</div>, <div>{getHelp()}</div>, <div>Have fun!!</div>];
  public static outputsetter: any = undefined;
  public static visitorname: string = "hackerman-visitor";
  public static visnamesetter: any = undefined;
}

function listitem(command: string, item: string, padness: number = 14) {
  const spaced = " ";
  return (
    <div>
      {getColored(command + spaced.repeat(padness - command.length) + "-", "#f4b400")} {item}
    </div>
  )
}

export function getHelp() {
  //{listitem("usermod [oldname] [newname]", "change your name in terminal")}
  //to be added
  return (
    <div>
      Here are a few things you can try out!
      {listitem("ls", "View a list of my projects")}
      {listitem("cd [..]", "Open the project github (github.com/Anindya-Prithvi/[..])")}
      {listitem("help", "View this list again")}
      {listitem("feedback", "Send feedback")}
      {listitem("echo [..]", "You know this... Right?")}
      {listitem("rename [..]", "Changes the default username")}
      {listitem("edit [..]", "Open the project in web text editor (github.dev/Anindya-Prithvi/[..])")}
      {listitem("clear", "Clears the screen")}
    </div>
  )
}

export default function App() {

  useEffect(() => {
    window.addEventListener("keydown", listenlog);

    return () => {
      window.removeEventListener("keydown", listenlog);
    }
  }, [])

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.navBar}>
          Hey! I am Anindya.
          <br /><br />
          I graduated from IIITD in 2024. I have interned and currently working as a SWE at Microsoft. I like Systems, Cryptography and Maths. AMA (use the feedback command)!
          <br /><br />
        </div>
        <div className={styles.overlaybell} id='overlaybell'></div>
        <div className={styles.tconpadding}>
          <div className={styles.terminal} id='termscroller'>
            <TermElements elems={GlobalVars.tte} />
            <Terminput />
          </div>
        </div>
      </div>
      <div className={styles.creditroll}>
        Made by: Anindya Prithvi
      </div>
    </div>
  );
}

