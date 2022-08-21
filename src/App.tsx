import React from 'react';
import './App.css';
import {Header} from "./Header/Header";
import {MainBlock} from "./mainBlock/MainBlock";
import {Skills} from "./Skills/Skills";
import {Contact} from "./Contact/Contact";
import {MyFooter} from "./Footer/MyFooter";
import {MyProjects} from "./projects/MyProject";
import {AboutMe} from "./aboutMe/AboutMe";

function App() {
    return (
        <div className="App">
            <Header/>
            <MainBlock/>
            <AboutMe/>
            <Skills/>
            <MyProjects/>
            <Contact/>
            <MyFooter/>
        </div>
    );
}

export default App;
