// export const CatPrice = () => {
//     let min = Math.ceil(200);
//     let max = Math.floor(500);
//     let price = Math.floor(Math.random() * (max - min +1)) + min
//     return (
//         <p>{price}</p>
//     )
// }

export const CatPrice = ({price}) => {

    return (
        <div>
            <p id="catPrice">£{price}</p>
        </div>

    )
}
export default CatPrice;


