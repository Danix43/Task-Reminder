import { createGlobalStyle } from 'styled-components';

import './App.css';
import Navbar from './Components/Navbar';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #E5B436;
  }
`

function App() {
  return (
    <div className="App">
      <GlobalStyle />

      <Navbar />

    </div>
  );
}

export default App;
