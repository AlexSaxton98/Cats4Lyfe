
import './App.css';
import basketIcon from "./images/basket-small.png"
import Cat from "./components/catsapi"

function App() {
  // console.log(Cat.data)
  return (
    <div className="app">
      <h1 className="pageTitle">Cats-4-Lyfe</h1>
      <div className="basketIcon">
        <img src={basketIcon} alt="basket icon" />
      </div>
      <Cat />
      <Cat />
      <Cat />
    </div>
  );
}

export default App;