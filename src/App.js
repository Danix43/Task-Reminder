import { createGlobalStyle } from 'styled-components';

import './App.css';
import Content from './Components/Content';
import Navbar from './Components/Navbar';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #E5B436;

    display: flex;
    flex-direction: column;
  }
`

function App() {
  return (
    <div className="App">
      <GlobalStyle />

      <Navbar />
      <Content />
    </div>
  );
}

export default App;
