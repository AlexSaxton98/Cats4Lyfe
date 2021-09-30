import { useState } from 'react';
import './App.css';
import basketIcon from "./images/basket-small.png"
import Cat from "./components/catsapi"
import { useEffect } from "react"
import styled from "styled-components"


function App() {
  const [basket, setBasket] = useState ([])
  const [total, setTotal] = useState (0)
  const [toggleSwitch, setToggleSwitch] = useState(false)

  const handleClick = (data) => {
    let current = [...basket]
    current.push(data)
    setBasket(current)
    console.log(basket)
    setTotal(total + parseInt(data.price))
  }

  const toggle = () => {
      setToggleSwitch(!toggleSwitch)
  } 
  const handleRemove = (index, data) =>{
    const basketUpdate = [...basket]
    basketUpdate.splice(index, 1)
    setBasket(basketUpdate)
    setTotal(total - parseInt(data.price))

  }

  return (
    <div className="app">
      <h1 className="pageTitle">Cats-4-Lyfe</h1>
      <div className="basketIcon" onClick={toggle}>
        <img src={basketIcon} alt="basket icon" />
      
      {
        toggleSwitch && (
          <StyledContainer>
              {basket.map((item, index) => (
                <li className="listItems">
                  {item.name}:
                  £{item.price}
                  <img id="image-small" src={item.url} alt="cat"/>
                  <button onClick={()=>handleRemove(index, item)}>-</button>
                </li>
              ))}
              <p>Total: £{total}</p>
          </StyledContainer>
        )
      }
      </div>
      <Cat handleClick={handleClick} />
      <Cat handleClick={handleClick} />
      <Cat handleClick={handleClick} />
      <Cat handleClick={handleClick} />
    </div>
  );
}

const StyledContainer = styled.div`
  flex-direction: column;
  background-color: #e0d1bf;
`

export default App;