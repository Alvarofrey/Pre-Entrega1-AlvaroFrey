
import './App.css';
import NavBar from './componentes/NavBar';
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";

function App() {
  return (
    
    <div className="App">
      <NavBar/>
    <ItemListContainer greeting='Hola Coders' />
    </div>
  );
  
}


export default App;
