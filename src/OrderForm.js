import { useState, useEffect } from 'react'


export default function OrderForm(props) {
  const [number, setNumber] = useState(0)
  const [coffeeType, setCoffeeType] = useState('')
  const [coffees, setCoffees] = useState([])


  useEffect(() => {
    document.title = number
  }, [number])

  // This function `OrderForm` can be called any number of times by react.
  console.log("how many times will this console log be called???????")

  const handleFormSubmission = e => {
    e.preventDefault()
    console.log("form submitted", number, coffeeType);

    const coffee = {
      number,
      coffeeType
    }
    setCoffees([...coffees, coffee])

    setNumber(0)
    setCoffeeType("")
  }
  
  const orderMyCoffeeeesssss = () => {
    console.log("Make the order 🤗")
    console.log(coffees)
    props.onSubmit(coffees)
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
        <label htmlFor="coffee-select">Choose a coffee:</label>

        <select onChange={handleChangeOnCoffeeType} value={coffeeType} name="coffees" id="coffee-select">
          <option disabled value="">
            --Please choose an option--
          </option>
          <option value="espressso">Espressso</option>
          <option value="mocha">Mocha</option>
          <option value="drip">Drip</option>
          <option value="latte">Latté</option>
        </select>

        <label htmlFor="quanitity"></label>
        <input onChange={handleChangeOnNumber} value={number} type="number" id="quanitity"></input>

        <button type="submit">Add to Order</button>
      </form>

      <button onClick={orderMyCoffeeeesssss}>Order</button>

      <section>
        <p>
          Your order is {number} {coffeeType} {props.username}
        </p>
      </section>
    </>
  )
}