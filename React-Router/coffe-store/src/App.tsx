import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import CoffeeList from './pages/coffee-list';
import Coffee from './pages/coffee';

// import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    //     <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/coffees-list" element={ <CoffeeList /> } />
      <Route path="/coffees" element={ <Coffee /> } />
      {/*     </BrowserRouter> */}
    </Routes>
  )
}

export default App
