import React from 'react';
import reactDOM from 'react-dom';
import App from './components/App';
import '../src/style.css'
import {HashRouter} from 'react-router-dom';

reactDOM.render(
<React.StrictMode>
<HashRouter> 
<App /> 
</HashRouter>
</React.StrictMode>, document.querySelector('#root'));



