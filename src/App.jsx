import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import CartContainer from './components/CartContainer';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';

function App() {

  const createHandleProduct = () => {
    const db = getFirestore(App)
    const productCollection = collection(db, 'products')
    const myRequest = addDoc(productCollection, {
      name: 'Gibson Les Paul',
      price: 1500,
      category: 'electric',
      img: './assets/products/g_gibson_standard.jpg',
      stock: 10,
      description: 'La Gibson Les Paul es una guitarra eléctrica icónica, conocida por su diseño sólido y su sonido cálido y potente. Es una de las guitarras más populares entre los músicos de rock y blues, apreciada por su sustain y versatilidad tonal.'
    })

      .then((res) => console.log('Producto creado con ID:', res.id))
      .catch((error) => console.error('Error al crear el producto:', error))
  }


  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <button onClick={createHandleProduct}>Crear producto de prueba</button>
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