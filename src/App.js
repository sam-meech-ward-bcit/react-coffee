import { useState } from 'react';
import './App.css';
import OrderForm from "./OrderForm";
import OrderConfirmation from "./OrderConfirmation";


function App() {
  
  const [submitted, setSubmitted] = useState(false)

  const callback = (numberOfCoffees, coffeeetype) => {
    setSubmitted(true)
    console.log("fallback", numberOfCoffees, coffeeetype)
  }

  return (
    <div className="App">
      { submitted ?
      <OrderConfirmation></OrderConfirmation>
      :
      <OrderForm username="Jeremy" onSubmit={callback}></OrderForm>
      }
    </div>
  );
}

export default App;
