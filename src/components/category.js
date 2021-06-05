import React, {useState} from 'react';
// import styled from 'styled-components'

import {categoryListData} from './todoList';
import { animated } from 'react-spring';

const Category = ({sortCategory, countItem}) => {
    const [scroll, setScroll] = useState(0);

    const categoryList = [...categoryListData()];

    const scrollLength = 460;
    const eachMove = parseInt(scrollLength / (categoryList.length));
    

    const scrollX = () => {
        if(scroll <= 460) setScroll(scroll + eachMove);
        else setScroll(0);
        console.log(scroll);
    }    

    return ( 
        <div className="category">
            <div className="category-inner flex" style={
                {transform:`translateX(${-scroll}px)`}}>
                    {categoryList.map(({categoryName, color, id}) => (

                        <animated.div className="each-cat" style={{borderTop:`15px solid ${color}`}} red key={id} onClick={() => sortCategory(id)}>
                            
                            <h4 className="cat-heading">{categoryName}</h4>
                                <span>Item {id && countItem(id)}</span>
                            
                        </animated.div>
                        
                    ))}
                </div>
                <div className="scroll" onClick={scrollX}>&gt;</div>
        </div>
     );
     
}


export default Category;

// const Scroll = styled.div`
//     transform: translateX(${scroll}px)
// `

