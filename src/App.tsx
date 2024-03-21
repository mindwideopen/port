import './App.css';

import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/Main/Main";
import {Skills} from "../src/layout/sections/Skills/Skills";
import {Works} from "./layout/sections/works/Works";


function App() {
    return (
        <div className='App'>
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
        </div>



    );
}

export default App;

