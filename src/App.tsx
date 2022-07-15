// import logo from './logo.svg';
import './App.css';
// import React, { useState } from "react";
import styles from "./Home.module.css";
import Terminput from './Terminput';

function getColored(s: string, colorg: string) {
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

function getHelp() {
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
  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        Hi! I am Andy
      </div>

      <div className={styles.terminal}>
        Mounting {getColored("/home/visitor", "#35bdb8")}
        {getHelp()}
        Have fun!
        <Terminput />
      </div>

    </div>
  );
}

