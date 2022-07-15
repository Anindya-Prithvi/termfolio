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
  public static setter: any = undefined;
}

function listitem(command: string, item: string, padness: number = 10) {
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
      {listitem("cd", "Open the project in web text editor (github.dev)")}
      {listitem("help", "View this list again")}
      {listitem("feedback", "Send feedback")}
      {listitem("echo [..]", "You know this... Right?")}
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
    <div className={styles.container}>
      <div className={styles.navBar}>
        Hi! I am Andy
      </div>
      <div className={styles.overlaybell} id='overlaybell'></div>
      <div className={styles.terminal}>
        <TermElements elems={GlobalVars.tte} />
        <Terminput />
      </div>

    </div>
  );
}

