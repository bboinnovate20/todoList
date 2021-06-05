import React from 'react';
import AddList from './addList';
import deleteImg from '../utils/img/delete-forever.svg' 
import {categoryListData} from './todoList';
import { animated } from 'react-spring';
import { Link } from 'react-router-dom';    

const Schedule = (props) => {
    const {data, deleteList} = props;
    const categoryList = [...categoryListData()];
    const changeRoute = (id) => {
        props.history.push(`/content/${id}`);
    }
    
    return (         
        <React.Fragment>
        <div className="schedule">
            <h3 className='schedule-heading'> <Link to="/"> Today's Schedule</Link></h3>
            <ul className="all-schedule">
                {data.map(eachList => ( 
                    <li key={eachList.id}  className="schedule-list">
                        <div key={eachList.id} className="each-catg flex" >
                         <div className="flex detail" onClick={() => changeRoute(eachList.id)}>
                             <animated.div style={{backgroundColor:`${categoryList[(eachList.category)].color}`}} className="status"></animated.div>
                            <h4>{eachList.title}</h4>
                            <div className="right-catg flex" >
                                <span className="time">{eachList.time}</span>
                                <span className="gt">&gt;</span>
                            </div>
                        </div>   
                        <div className="cancel" onClick={() => 
                            deleteList(eachList.id)}>
                            <img src={deleteImg} alt="delete icon"/>
                        </div>
                        </div>
                    </li>
                )
                
                )}
                {/* { isEmpty && <div> hello </div>} */}
            </ul>
            
            
            
            
        </div>
        <AddList  addToList={props.addToList}/>
        </React.Fragment>
     );
}
 

export default Schedule;