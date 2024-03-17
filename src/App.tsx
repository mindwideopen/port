import './App.css';
import styled from 'styled-components';


function App() {
    return (
        <div className="App">
            <Title>Welcome to my life</Title>
        </div>
    );
}

export default App;

const Title = styled.h1`
    font-size: 69px;
    text-align: center;
    color: green;
`;