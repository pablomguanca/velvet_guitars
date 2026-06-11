import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import CartContainer from './components/CartContainer';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';
import createHandleProduct from './components/TestDbButton';
import Form from './components/CheckoutForm';

function App() {

  return (
    <BrowserRouter basename="/velvet_guitars/">
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer saludo='Bienvenidos a Velvet Guitars!' />} />
          <Route path='/category/:type' element={<ItemListContainer saludo='Categoria ' />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<CartContainer />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App