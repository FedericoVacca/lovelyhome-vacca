import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContainer } from './components/CartContainer/CartContainer';
import { CartContextProvider } from "./context/CartContext";



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
        <Route path='/category/:tipoProducto' element= {<ItemListContainer/>}/>
        <Route path='/category/:tipoProducto' element= {<ItemListContainer/>}/>
        <Route path='/category/:tipoProducto' element= {<ItemListContainer/>}/>
        <Route path="/Products/:id" element={<ItemDetailContainer/>} />
        <Route path='/cart'element ={<CartContainer/>}/>
      </Routes>
      </div>
    </div>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;