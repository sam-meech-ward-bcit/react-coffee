import { useState } from 'react';
import './App.css';
import OrderForm from "./OrderForm";
import OrderConfirmation from "./OrderConfirmation";


function App() {
  
  const [submitted, setSubmitted] = useState(false)
  const [coffees, setCoffees] = useState([])

  const callback = (coffees) => {
    setCoffees(coffees)
    setSubmitted(true)
  }

  return (
    <div className="App">
      { submitted ?
      <OrderConfirmation coffees={coffees}></OrderConfirmation>
      :
      <OrderForm username="Jeremy" onSubmit={callback}></OrderForm>
      }
    </div>
  );
}

export default App;
