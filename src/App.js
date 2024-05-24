import CartContent from './components/CartContent/CartContent';
import Home from './components/Home/Home';
import DataProvider from './components/Context/DataContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/cart' element={<CartContent />}></Route>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  )
}

export default App;
