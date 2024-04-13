import './App.css';

import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/Main/Main";
import {Skills} from "../src/layout/sections/Skills/Skills";
import {Works} from "./layout/sections/works/Works";
import {Testimonials} from "./layout/sections/testimonials/Testimonials";
import {Contact} from "./layout/sections/contact/Contact";
import {Footer} from "./layout/footer/Footer";
import Invitation from "./layout/sections/Invitation/Invitation";


function App() {
    return (
        <div className='App'>
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Testimonials/>
            <Contact/>
            <Invitation/>
            <Footer/>
        </div>



    );
}

export default App;

