import React, { useEffect, useState } from "react"

export const Cat = () => {
    const [data, setData] = useState([{}])
    const names = [
        {name:"Luna",price: 278},
        {name:"Oliver", price:234 },  
        {name:"Bella", price:487 }, 
        {name:"Leo", price:375 },
        {name:"Clyde", price: 524} ,
        {name:"Jeff", price: 957} ,
        {name:"Loki", price:126 } ,
        {name:"Milo", price:835 } , 
        {name:"Jasper", price:846 } ,
        {name:"Betty", price: 356} , 
        {name:"Felicia", price: 237} , 
        {name:"Pedro", price: 934}]
        
    let catName = names[Math.floor(Math.random() * names.length)]

    useEffect(() => {
        handleFetch()
    }, [])
    const handleFetch = async () => {
        let response = await fetch("https://api.thecatapi.com/v1/images/search")
        let data = await response.json()
        setData(data[0])
        console.log(data)
        console.log(catName)
    
    }
    return (
        <div className="catContainer">
            <img src={data.url} alt="cat" />
            <p>{catName}</p>
        </div>
    )
}
export default Cat;