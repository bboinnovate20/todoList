import React, {useEffect, useState} from 'react';
import Input from './input';
import { categoryListData, todoListData } from './todoList';
import Validation from './../utils/validation';
let toggleDisplay = true;

function AddList (props) {    
    const [todoForm, setTodoForm] = useState({category: 1, title: '', description: ''});
    
    const [toggle, setToggle] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const [error, setError] = useState(false);
    const [category, setCategory] = useState([]);
    const [, setTodoList] = useState([]);
    
    useEffect(() => {
        setCategory(categoryListData())
        setTodoList(todoListData())
    }, [])
    
    const displayForm = () => {    
        if(toggleDisplay) toggleDisplay = false 
        else toggleDisplay = true;
        setToggle(toggleDisplay)
    }
    const Schema = {
        title: "text",
        description: "text"
    }

    const errorMessageDisplay = (type,name) => {
        return type === "text" ? `${name} is empty` : "";
    }

    const checkValidity = (array, schema) => {
        let isAllValid;
        const validation = new Validation();
        for(let each in array) {
            if (schema[each] === "text") {
                if(validation.longTextValidation(array[each])) {
                    isAllValid = true
                    setError(false);
                }
                else {
                    isAllValid = false;
                    setErrorMessage(errorMessageDisplay(schema[each], each));
                    setError(true);                
                    break;
                }
            }
        } 
        return isAllValid;  
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if(checkValidity(todoForm, Schema)) {
            //todoList from todo props 
            props.addToList(todoForm);
            setTodoForm({category: 1, description:'', title:''});
            displayForm();
        };
    }

    const onFormChange = (e) => {
        const form = {...todoForm};
        form[e.currentTarget.name] = (e.currentTarget.name === "category") ? parseInt(e.currentTarget.value) : e.currentTarget.value;
        setTodoForm(form);
    }

    let toggleClass = toggle ? "add-btn" : "add-btn showForm";
    
    return ( 
        <div>
            <div className={toggleClass}  onClick={displayForm}>
                    <span>+</span>        
            </div>

            <div className="form" onSubmit={onSubmit}>

                <form className={toggle ? "remove-form" : ""}>    
                    <div className={error ? "main-toast display" : "main-toast"}>
                        <div className="toast">{errorMessage}</div>
                    </div>

                    <select className="select-input" onChange={onFormChange} name="category" value={parseInt(todoForm.category)}>
                        {category.map(({categoryName, id}) => (
                            id && <option key={id} value={id}>{categoryName}</option>
                        ))}
                    </select>

                    <Input name="title" value={todoForm.title} onChange={onFormChange} type="text" placeholder="Title"/>
                    
                    <textarea name="description" value={todoForm.description} onChange={onFormChange} className="text-input">
                    </textarea>

                    <span className="close" onClick={displayForm}>X</span>
                    
                    <span className="submit-header">
                    <input type="submit" className="submit-btn"/>
                    </span>
                </form>
            </div>
        </div>

        
    );
    

    
}
 
export default AddList
