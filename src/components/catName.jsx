export const CatName = () => {

const names = ["Luna", "Oliver", "Bella", "Leo", "Clyde", "Jeff", "Loki", "Milo", "Jasper", "Betty", "Felicia", "Pedro"]
let catName = names[Math.floor(Math.random() * names.length)]
return (
    <p>{catName}</p>
)
}
export default CatName;