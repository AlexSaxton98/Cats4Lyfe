import React, { useEffect, useState } from "react"

export const Cat = () => {
    const [data, setData] = useState([{}])
    const names = ["Luna", "Oliver", "Bella", "Leo", "Clyde", "Jeff", "Loki", "Milo", "Jasper", "Betty", "Felicia", "Pedro"]
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