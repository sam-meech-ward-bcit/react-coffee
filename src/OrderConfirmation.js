
function Coffee({coffee}) {
  return (
    <div>
      <p>Number: {coffee.number}</p>
      <p>Type: {coffee.coffeeType}</p>
    </div>
  )
}

export default function OrderConfirmation({coffees}) {

  return (
    <div>
      <p>Confirmed!!!! 🤗</p>

      {coffees.map((coffee, index) => (
        <Coffee key={index} coffee={coffee}></Coffee>
      ))}
    </div>
  )
}