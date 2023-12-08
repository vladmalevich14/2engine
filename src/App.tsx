import React from 'react';
import s from './App.module.scss';
import {Header} from "components/header/header";
import {Footer} from "components/footer/footer";
import {MainPage} from "components/main-page/main-page";

function App() {
    return (
        <div className={s.app}>
            <Header/>
            <MainPage/>
            <Footer/>
        </div>
    );
}

export default App;
