import { FormProvider } from "../context/FormContext"
import { Cards } from "./components/Cards"
import { Form } from "./components/Form"


function App() {

  return (
    <div className="w-full justify-start">
      <FormProvider>
        <Form />
        <Cards />
      </FormProvider>
      
    </div>
  )
}

export default App
