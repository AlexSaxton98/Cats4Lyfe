import { useState } from 'react';
import './App.css';
import basketIcon from "./images/basket-small.png"
import homeIcon from "./images/home.png"
import Cat from "./components/catsapi"
import { useEffect } from "react"
import styled from "styled-components"
import { Switch, Route, Link, useHistory } from "react-router-dom";




function App() {
  const [basket, setBasket] = useState ([])
  const [total, setTotal] = useState (0)
  const [toggleSwitch, setToggleSwitch] = useState(false)
  const history = useHistory()

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
  const handleHome =() =>{
    history.push("/")
  }

  const handleBuy = () =>{
    setBasket([])
    setTotal(0)
    history.push("/")
  }

  return (
    <div className="app">
      <h1 className="pageTitle">Cats-4-Lyfe</h1>
              <Switch>
                <Route path="/checkout">
                   <Checkout total={total} basket={basket} handleRemove={handleRemove} handleHome={handleHome} handleBuy={handleBuy}/>
                </Route>
                <Route path="/">
                  <div className="basketIcon" onClick={toggle}>
                    <img src={basketIcon} alt="basket icon" />
                  </div>
                  <Cat handleClick={handleClick} />
                  <Cat handleClick={handleClick} />
                  <Cat handleClick={handleClick} />
                  <Cat handleClick={handleClick} />
                {toggleSwitch && (
               <StyledContainer>   
                {basket.map((item, index) => (
                <li className="listItems">
                  <img id="image-small" src={item.url} alt="cat"/><br/>
                  <div className="itemInfo">
                  {item.name}:
                  £{item.price}         
                  <button className="basketButton" onClick={()=>handleRemove(index, item)}>-</button>
                  </div>
                </li>
              ))}
              <p className="listItems">Total: £{total}</p>
              <button className="checkoutButton"><Link to="/checkout">Checkout</Link></button>
               </StyledContainer> 
               )
      }
                </Route>
              </Switch>
    </div>
  );
}

const Checkout = (props) => {
  return(
    <div>
      <div className="basketIcon" >
        <img src={homeIcon} onClick={props.handleHome} alt="basket icon" />
       </div>
       <div className="checkoutBasket">
      {props.basket.map((item, index) => (
                <li className="listItems">
                  <img id="image" src={item.url} alt="cat"/><br/>
                  <div className="checkoutInfo">
                  {item.name}:
                  £{item.price} 
                  <button onClick={()=>props.handleRemove(index, item)}>-</button>
                  </div>
                </li>
              ))}
              <p>Total: £{props.total}</p>
              <button className="checkoutButton" onClick={()=>props.handleBuy()}>Buy Now</button>
      </div>
    </div>
  )
}

const StyledContainer = styled.div`
  display: flex;
  align-items:flex-start;
  flex-direction: column;
  background-color: #484fa8;
  position:fixed;
  right: 1%;
  top: 120px;
  border-radius: 5px;
  border: 2px solid goldenrod;
  padding: 50px;
  max-height:700px;
  overflow-y: auto;
    li button{
        align-self:flex-end;
        background-color:slategrey;
  }
`

export default App;