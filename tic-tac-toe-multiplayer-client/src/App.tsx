import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {io} from 'socket.io-client'


function App() {
  const connect = () => {
    const socket = io('http://localhost:9000');
    
    socket.on('connect', () => {
      socket.emit('custom_event', {name: "Alex", age: 15})
    })
  }
  useEffect(() => {
    connect();
  }, [])
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
