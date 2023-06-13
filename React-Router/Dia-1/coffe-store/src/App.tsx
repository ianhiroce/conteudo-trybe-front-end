import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import CoffeeList from './pages/coffee-list';
import Coffee from './pages/coffee';
import NavBar from './components/nav-bar';

// import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    //     <BrowserRouter>
    <>
    <NavBar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/coffees-list" element={ <Coffee /> } />
        <Route path="/coffees/:coffee" element={ <CoffeeList /> } />
        {/*     </BrowserRouter> */}
      </Routes>
    </>
  )
}

export default App
