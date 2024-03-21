import './App.css';
import styled from 'styled-components';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/Main/Main";
import {Skills} from "./layout/sections/Main/Skills/Skills";


function App() {
    return (
        <div className='App'>
            <Header/>
            <Main/>
            <Skills/>
        </div>



    );
}

export default App;

