import { useContext } from "react";
import { ToastContainer } from 'react-toastify';
import FormContext from "../../context/FormContext";
import 'react-toastify/dist/ReactToastify.css';

export const Form = () => {

    const {formValues, handleChange, handleSubmit} = useContext(FormContext);

    return (
        <div className="w-full">
            <form 
                className="bg-white px-8 pt-6 pb-8 mb-4"
                onSubmit={handleSubmit}
            >
                <div className="flex flex-wrap -mx-3 mb-6 justify-center">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label 
                            className="block text-gray-700 text-sm font-bold mb-2" 
                            htmlFor="title">
                            Title
                        </label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="title" 
                            type="text" 
                            placeholder="Work out" 
                            name="title"
                            value={formValues.title}
                            onChange={handleChange}    
                        />
                    </div>
                    <div className="w-full md:w-1/3 px-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="task">
                            Task
                        </label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="task" 
                            type='text'
                            placeholder="Calistenia rutine"
                            name="task"
                            value={formValues.task}
                            onChange={handleChange}    
                        />
                    </div>
                    <div className="flex items-center justify-center mt-6">
                        <button 
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                            type="submit"
                        >
                            Add
                        </button>
                    </div>
                </div>
            </form>
            <ToastContainer />
        </div>
    )
}
