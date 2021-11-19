import { useState } from 'react'


export default function OrderForm(props) {
  const [number, setNumber] = useState(0)
  const [coffeeType, setCoffeeType] = useState('')
  
  const handleFormSubmission = e => {
    e.preventDefault()
    console.log("form submitted", number, coffeeType);
    props.onSubmit(number, coffeeType)
  }

  const handleChangeOnNumber = event => {
    const newNumber = event.target.value;
    setNumber(newNumber);
    console.log("handle number change", newNumber);
  }

  const handleChangeOnCoffeeType = event => {
    const newCoffeeType = event.target.value;
    setCoffeeType(newCoffeeType);
    console.log("handle coffee change", newCoffeeType);
  }


  return (
    <>
    <form onSubmit={handleFormSubmission}>
      <label for="coffee-select">Choose a coffee:</label>

      <select
        onChange={handleChangeOnCoffeeType}
        name="coffees"
        id="coffee-select"
      >
        <option disabled value="">--Please choose an option--</option>
        <option value="espressso">Espressso</option>
        <option value="mocha">Mocha</option>
        <option value="drip">Drip</option>
        <option value="latte">Latté</option>
      </select>

      <label for="quanitity"></label>
      <input
        onChange={handleChangeOnNumber}
        type="number"
        id="quanitity"
      ></input>

      <button type="submit">Order</button>
    </form>

    <section>
      <p>Your order is {number} {coffeeType} {props.username}</p>
    </section>
    </>
  );
}