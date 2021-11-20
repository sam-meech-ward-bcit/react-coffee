import { useState, useEffect } from 'react';
import './App.css';
import OrderForm from "./OrderForm";
import OrderConfirmation from "./OrderConfirmation";


function App() {
  const [submitted, setSubmitted] = useState(false)
  const [coffees, setCoffees] = useState([])
  const [loading, setLoading] = useState(true)

  // The first time we load the component
  useEffect(() => {
    ;(async () => {
      console.log("something")
      // initial ajax request GET
      // const result = await axios.get("whatever")
      // setSomething(result.data)
      setTimeout(() =>{
        setLoading(false)
      }, 3000)
    })()
  }, [])

  const callback = coffees => {
    setCoffees(coffees)
    setSubmitted(true)
  }

  return (
    <div className="App">
      {loading &&
      <p>Loading.....</p>
      }
    {submitted ? 
    <OrderConfirmation coffees={coffees}></OrderConfirmation> 
    : 
    <OrderForm username="Jeremy" onSubmit={callback}></OrderForm>
    }
    </div>
  )
}

export default App;
