import React from 'react';
import './App.scss';
import {Header} from "./components/header/Header";
import {MainBlock} from "./components/mainBlock/MainBlock";
import {Skills} from "./components/skills/Skills";
import {MyFooter} from "./components/footer/MyFooter";
import {MyProjects} from "./components/projects/MyProject";
import {AboutMe} from "./components/aboutMe/AboutMe";
import {Route, Routes} from "react-router-dom";
import {Projects, SkillSet} from "./common/data/dataSet"


export const PATH = {
    MAIN: "/Portfolio",
    ABOUT_ME: "/about_me",
    SKILLS: "/skills",
    PROJECTS: "/projects",
    // CONTACTS: "/contacts",
    FOOTER: "/footer"
}

function App() {


    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={PATH.MAIN} element={<MainBlock/>}/>
                <Route path={PATH.ABOUT_ME} element={<AboutMe/>}/>
                <Route path={PATH.SKILLS} element={<Skills skill={SkillSet}/>}/>
                <Route path={PATH.PROJECTS} element={<MyProjects project={Projects}/>}/>
                <Route path={PATH.FOOTER} element={<MyFooter/>}/>
            </Routes>
        </div>
    );
}

export default App;
