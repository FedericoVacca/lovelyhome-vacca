import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContainer } from './components/CartContainer/CartContainer';
import { CartContextProvider } from "./context/CartContext";
import OrdenForm from './components/OrdenForm/OrdenForm';



function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
    <div className="App">
      <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category' element={<ItemListContainer/>}/>
        <Route path='/category/:categoria' element= {<ItemListContainer/>}/>
        <Route path="/Products/:id" element={<ItemDetailContainer/>} />
        <Route path='/cart'element ={<CartContainer/>}/>
        <Route path="/orderdata" element={<OrdenForm/>}/>
      </Routes>
      </div>
    </div>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;