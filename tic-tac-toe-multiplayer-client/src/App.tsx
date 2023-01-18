import React, { useEffect } from 'react';
/*
import styled from 'styled-components';
*/
import logo from './logo.svg';
import './App.css';
import {io} from 'socket.io-client'
/*
const AppContainer = styled.div`
  width:100%;
  height:
`;
*/
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
