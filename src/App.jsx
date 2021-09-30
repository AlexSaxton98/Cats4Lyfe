import { useState } from 'react';
import './App.css';
import basketIcon from "./images/basket-small.png"
import Cat from "./components/catsapi"


function App() {
  const [basket, setBasket] = useState ([])

  

  const handleClick = (data) => {
    let current = [...basket]
    current.push(data)
    setBasket(current)
    console.log(basket)
}


  // console.log(Cat.data)
  return (
    <div className="app">
      <h1 className="pageTitle">Cats-4-Lyfe</h1>
      <div className="basketIcon">
        <img src={basketIcon} alt="basket icon" />
        {basket.map((item) => (
          <li>
            {item.name}:
            £{item.price}
          </li>
        ))}
        <p>Total: </p>
      </div>
      <Cat handleClick={handleClick} />
      <Cat handleClick={handleClick} />
      <Cat handleClick={handleClick} />
    </div>
  );
}

export default App;