import { useContext, useState } from "react"
import FormContext from "../../context/FormContext";

export const Cards = () => {

    const { cards, setCards } = useContext(FormContext);
    const [isDone, setisDone] = useState(false);

    const done = () => {
        setisDone(true);
    }

    const unDone = () => {
        setisDone(false);
    }

    const onDelete = (id) => {
        setCards(oldValues => {
            return oldValues.filter(task => task.id !== id)
        });
    }

  return (
    <div className="flex flex-wrap">
        {
            cards?.length <= 0 ? (
                <div className="flex w-full items-center bg-blue-500 text-white text-sm font-bold px-4 py-3 mx-7" role="alert">
                    <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
                    <p>Add a task.</p>
                </div>
            ) : (
                cards?.map(card => (
                    <div className="mb-4 px-5" key={card.id}>
                        <div className="max-w-sm rounded overflow-hidden shadow-lg">
                            <div className="px-6 py-4">
                                <div className={`font-bold text-xl mb-2 ${isDone && 'done' }`}>{card.title}</div>
                                <p className={`"text-gray-700 text-base ${isDone && 'done' }`}>
                                    {card.task}
                                </p>
                            </div>
                            <div className="flex items-center px-6 pt-4 pb-2">
                                {
                                    !isDone ? (
                                        <button 
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                                            onClick={done}
                                        >
                                            Done
                                        </button>
                                    ) : (
                                        <button 
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                                            onClick={unDone}
                                        >
                                            Undone
                                        </button>
                                    )
                                }

                                <button 
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                    onClick={() => onDelete(card.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            )
        }   
    </div>
  )
}
