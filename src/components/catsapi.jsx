import React, { useEffect, useState } from "react"
import CatName from "./catName"
import CatPrice from "./catPrice"

export const Cat = ({ handleClick }) => {
    const [data, setData] = useState([{}])
    // const names = ["Luna", "Oliver", "Bella", "Leo", "Clyde", "Jeff", "Loki", "Milo", "Jasper", "Betty", "Felicia", "Pedro"]
    // let catName = names[Math.floor(Math.random() * names.length)]

    useEffect(() => {
        handleFetch()
    }, [])

    const handleFetch = async () => {
        let response = await fetch("https://api.thecatapi.com/v1/images/search")
        let data = await response.json()
            const randomPrice = [200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900]
            let price = randomPrice[Math.floor(Math.random() * randomPrice.length)]
            const names = ["Luna", "Oliver", "Bella", "Leo", "Clyde", "Jeff", "Loki", "Milo", "Jasper", "Betty", "Felicia", "Pedro", "Podrick"]
            let catName = names[Math.floor(Math.random() * names.length)]
        data[0].price = price
        data[0].name = catName
        setData(data[0])
        // console.log(data)
    }

    return (
        <div className="catContainer">
            <img id="image" src={data.url} alt="cat" />
            <div className="catInfo">
                <CatName  catName={data.name}/>
                <CatPrice price={data.price} />
                <button onClick={() => handleClick(data)}>Add to cart</button>
            </div>


        </div>
    )
}
export default Cat;