import React from 'react';
import './App.css';
import {Header} from "./Header/Header";
import {MainBlock} from "./mainBlock/MainBlock";
import {Skills} from "./Skills/Skills";
import {MyWork} from "./myWork/MyWork";
import {WorkOption} from "./workOption/WorkOption";
import {Contact} from "./Contact/Contact";
import {MyFooter} from "./Footer/MyFooter";

function App() {
    return (
        <div className="App">
            <Header/>
            <MainBlock/>
            <Skills/>
            <MyWork/>
            <WorkOption/>
            <Contact/>
            <MyFooter/>
        </div>
    );
}

export default App;
