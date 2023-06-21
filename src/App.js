
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import HeroSection from './Components/HeroSection';
import Products from './Components/Pages/Products';
import Services from './Components/Pages/Services';
import Signup from './Components/Pages/Signup';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      
      <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/products' exact Component={Products}/>
          <Route path='/services' exact Component={Services}/>
          <Route path='/sign-up' exact Component={Signup}/>
      </Routes>

    </Router>
   
    
    </>
 
  );
}

export default App;
