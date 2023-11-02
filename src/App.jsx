import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer saludo="Bienvenidos a nuestro mundo" />
    </>
  );
}

export default App;
