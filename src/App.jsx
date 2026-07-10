import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer';
import { Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import CartContainer from './components/CartContainer';
import Checkout from './components/CheckoutForm';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import SeedCatalog from './components/SeedCatalog';

function App() {
  return (
    <CartProvider>
      <SeedCatalog />
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:type' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='/cart' element={<CartContainer />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/nosotros' element={<AboutUs />} />
        <Route path='/contacto' element={<Contact/>} />
        <Route path="*" element={<h2 className="text-center mt-5">404 - Página no encontrada</h2>} />
      </Routes>
    </CartProvider>
  )
}

export default App;