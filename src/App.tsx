import React from 'react';
import './App.css';
import {Header} from "./Header/Header";
import {MainBlock} from "./mainBlock/MainBlock";
import {Skills} from "./Skills/Skills";
import {MyWork} from "./myWork/MyWork";
import {WorkOption} from "./workOption/WorkOption";

function App() {
    return (
        <div className="App">
            <Header/>
            <MainBlock/>
            <Skills/>
            <MyWork/>
            <WorkOption/>
        </div>
    );
}

export default App;
