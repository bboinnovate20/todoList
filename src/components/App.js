import React from 'react';
import Wrapper from '../utils/style'
import Todo from './todo';
// import {useTransition} from 'react-spring';

const App = () => {
    return ( 
        <React.Fragment>
            <Wrapper>
            <div className="flex main">
                    <div className="user-text">
                        <h1 className="h1-incr">Hi User!</h1>
                        <p>What are your plan(s) today?</p>
                    </div>
                    <Todo />
            </div>
            </Wrapper>
        </React.Fragment> );         
    }

 
export default App;

