import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import CoffeeList from './pages/coffee-list';

// import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    //     <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/coffees" element={ <CoffeeList /> } />
      {/*     </BrowserRouter> */}
    </Routes>
  )
}

export default App
