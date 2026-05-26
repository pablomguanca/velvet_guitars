import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Toggle from './components/Toggle';
function App() {
  return (
    <>
    <Navbar/>
      <h1>Hi, guys!</h1>
      <Routes>
      {/* <Route path='/' element = p></Route> */}
      </Routes>
      <ItemCount/>
      <ItemListContainer saludo = 'Holaaa!'/>
      <Toggle/>
    </>
  )
}

export default App