import React from 'react';
import Category from './category';
import Schedule from './schedule';
import ListDetail from './listDetail';
import { todoListData, getCurrentDate } from './todoList';
import {Switch, Route, Redirect, useLocation, useHistory} from 'react-router-dom';
import NotFound from './NotFound';
import {useState} from 'react';
import { useTransition } from '@react-spring/core';
import { animated } from '@react-spring/web';

function Todo() {
    const [dataItems, setDataItems] = useState(todoListData().sort());
    const [mainItem, setMainItems] = useState(todoListData().sort());
    const [idGenerate, setID] = useState(mainItem.length+1);
    
    // const maxNumber = () => {
    //     let max = 0;
    //     let main = [...mainItem]
    //     for(let each = 1; each < main.length; each++) {
    //         max = main[each].id > main[each-1].id ? main[each].id :main[each-1].id;
    //     }
    //     console.log(main)
    
    //     return max;
    // }

    const addToList = (dict) => {
        const dataItem = [...mainItem]
        setID(idGenerate+1)
        const lastElement = idGenerate;
        const [date, time] = getCurrentDate();
        const newTodo = {id: lastElement, time: time, date:date, ...dict}
        dataItem.push(newTodo);
        dataItem.sort();
        setDataItems(dataItem);
        setMainItems(dataItem);
        console.log(dataItem);
    }   
    // comment out for filtering
    // const filterList = (id) => {
        //     let dataItem = [...dataItems]
    //     dataItem = dataItem.filter((e) => e.id !== id); 

    //     setDataItems(dataItem);
    // }

    const deleteItem = (id) => {
        let dataItem = ([...dataItems]).filter((e) => e.id !== id);
        let mainItems = [...mainItem];
        const itemSelect2 = mainItems.filter((e) => e.id === id);  
        mainItems.splice(mainItems.indexOf(itemSelect2[0]),1);
        setMainItems(mainItems);
        setDataItems(dataItem);
    }

    const filter = (id) => {
        let dataItem = [...mainItem];
        dataItem = id ? dataItem.filter((e) => e.category === id) : dataItem;
        return dataItem;
    }
    const history = useHistory();
    //  "/content/1"
    const sortByCategory = (id) => {
        const path = history.location.pathname.toString();
        if(path.includes("/content")) {
            history.push("/");
            setDataItems(filter(id));
        }
            else setDataItems(filter(id));
    }

    function countItem(id) {
        return filter(id).length;
    }

    const location = useLocation();

    const transitions = useTransition(location, { 
        from: {opacity: 0, transform: 'translateX(30px)'},
        enter: [
            {opacity: 1, transform: 'translateX(0px)'},
                ],
        config: {duration: 1000, delay: 0}
     })

    
    return (                 
                <div className="todo-main"> 
                    <div className="inner-main">
                        <div className="plan-header">
                            <h1>Let's Plan 😊</h1>
                            <h4>Schedule </h4>
                        </div>
                        <Category countItem={countItem} sortCategory={sortByCategory} />
                    {transitions((props, item) => (
                      <animated.div style={props}>
                      <Switch >
                        <Route style={props} path="/content/:id" render={(props, style)=> <ListDetail style={style} className="list-content" data={dataItems} {...props} />}/>  
                        <Route path="/not-found" component={NotFound} /> 
                        <Route style={props} path="/" exact
                        render={(props) => <Schedule deleteList={deleteItem} data={dataItems} addToList={addToList} {...props} /> } />
                        <Redirect to="/not-found" />
                      </Switch>     
                      </animated.div>
                    )) }
                    
                    </div>
                    
                </div>
                );
    }

 
export default Todo;