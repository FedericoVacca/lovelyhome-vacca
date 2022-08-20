import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting="Voy a ser un catalgo, proximamente!!!"/>
    </div>
  );
}

export default App;
