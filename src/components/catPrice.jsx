// export const CatPrice = () => {
//     let min = Math.ceil(200);
//     let max = Math.floor(500);
//     let price = Math.floor(Math.random() * (max - min +1)) + min
//     return (
//         <p>{price}</p>
//     )
// }



export const CatPrice = () => {
    const randomPrice = [200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900]
    let price = randomPrice[Math.floor(Math.random() * randomPrice.length)]

    const handleClick = () => {
        console.log(price)
    }

    return (
        <div>
            <p id="catPrice">£{price}</p>
            <button onClick={handleClick}>Add to Basket</button>
        </div>

    )
}
export default CatPrice;
