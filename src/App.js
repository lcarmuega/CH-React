import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:id' element = {<ItemListContainer/>}/>
        <Route path='/item/:id' element = {<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
