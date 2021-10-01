import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Container } from './components/Character/styled';


ReactDOM.render(
  <React.StrictMode>
    <App />
    <Container/>
  </React.StrictMode>,
  document.getElementById('root')
);

