export const CatName = () => {

    const names = ["Luna", "Oliver", "Bella", "Leo", "Clyde", "Jeff", "Loki", "Milo", "Jasper", "Betty", "Felicia", "Pedro", "Podrick"]
    let catName = names[Math.floor(Math.random() * names.length)]
    return (

        <p id="catName">{catName}</p>
    )
}
export default CatName;