import { createContext, useState } from "react";
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

const FormContext = createContext();

const initialState = {
    title: '',
    task: '',
    done: false
}

const FormProvider = ({children}) => {
    
    const [formValues, setFormValues] = useState(initialState);
    const [cards, setCards] = useState([]);

    const notify = () => toast.error('All inputs are required', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
        
    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
       
        if(formValues.title.length <= 0 || formValues.task.length <= 0 ) {
            notify();
        }else{

            const values = {
                id: uuidv4(),
                title: formValues.title,
                task: formValues.task,
                done: false
            }

            setCards(cards => [...cards, values]);  
            setFormValues({...initialState});
        }
    }

    const data = {formValues, setCards, handleChange, handleSubmit, cards}; 

    return(
        <FormContext.Provider
            value={data}
        >
            {children}
        </FormContext.Provider>
    )


}

export {FormProvider};
export default FormContext;