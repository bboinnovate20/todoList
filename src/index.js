import React from 'react';
import reactDOM from 'react-dom';
import App from './components/App';
import '../src/style.css'
import {BrowserRouter} from 'react-router-dom';

reactDOM.render(<BrowserRouter> <App /> </BrowserRouter>, document.querySelector('#root'));



