import React from 'react';
import {Link} from 'react-router-dom';
import { animated } from 'react-spring';

const ListDetail = (props) => {
    const {data, style} = props;
    const match = parseInt(props.match.params.id);

    const generateID = () => {
        const newData = data.filter(each => each.id === match);
        return newData;
    }
    const selectedQuery = generateID();
    return (
        <React.Fragment>

            {selectedQuery.map(sq => (
            
            <animated.div key={sq.id} style={style} className={props.className}>
                <h1>{sq.title}</h1>
                <p  class="time">Time CREATED: {sq.time} </p>
                <span style={{display:"block", 
                marginBottom:"10px", 
                fontSize:"1.1rem",
                 }} >DATE CREATED: {sq.date} </span>
                 <hr/>
                <p> {sq.description} </p>
            </animated.div>            
                ))}

            <div className="flex btn-back" >
                <button className="primary-btn">
                   <Link to="/"> Back to Lists </Link>
                </button>
            </div>
    </React.Fragment>
     );
}
 
export default ListDetail;