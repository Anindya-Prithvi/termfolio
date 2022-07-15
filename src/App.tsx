// import logo from './logo.svg';
import { useEffect } from 'react';
import './App.css';
// import React, { useState } from "react";
import styles from "./Home.module.css";
import Terminput from './Terminput';

export function getColored(s: string, colorg: string) {
  const colorgiven = { color: colorg };
  return (<span style={colorgiven}>{s}</span>)
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
    function listenlog(e) {
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
        Mounting {getColored("/home/visitor", "#35bdb8")}
        {getHelp()}
        Have fun!
        <Terminput />
      </div>

    </div>
  );
}

