import { useState } from 'react';
import './App.css';
import basketIcon from "./images/basket-small.png"
import Cat from "./components/catsapi"
import { useEffect } from "react"
const math = require("mathjs")


function App() {
  const [basket, setBasket] = useState ([])
  const [total, setTotal] = useState ([])
  const [toggle, setToggle] = useState(false)
  

  const handleClick = (data) => {
    let current = [...basket]
    let currentTotal = [...total, data.price]
    // currentTotal.push(data.price)
    current.push(data)
    setBasket(current)
    console.log(basket)
    // let sum = 0
    // for (let i = 0; i< currentTotal.length; i++){
    //   sum += currentTotal[i]
    // }
    setTotal(currentTotal)
   
}


  // console.log(Cat.data)
  useEffect(() => {
    document.title = "Cats4Lyfe"
  }, [])
  return (
    <div className="app">
      <h1 className="pageTitle">Cats-4-Lyfe</h1>
      <div className="basketIcon">
        <img src={basketIcon} alt="basket icon" />
        
        {basket.map((item) => (
          <li>
            {item.name}:
            £{item.price}
            <img id="image-small" src={item.url} alt="cat"/>
          </li>
        ))}
        <p>Total: £{total}</p>
      </div>
      <Cat handleClick={handleClick} />
      <Cat handleClick={handleClick} />
      <Cat handleClick={handleClick} />
    </div>
  );
}

export default App;