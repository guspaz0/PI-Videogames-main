import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Landingpage from './components/LandingPage';
import Home from './components/Home';
import Card from './components/Card';
import CardDetail from './components/CardDetail';
import About from './components/About';
import Form from './components/Form';
import Navbar from './components/Navbar';

function App() {

  const location = useLocation();

  return (
    <>
      {location.pathname !== '/' && <Navbar/>}
    <Routes>
      <Route exact path='/' element={<Landingpage/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/videogames/:id' element={<CardDetail/>}/>
      <Route path='/create' element={<Form/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='*' element={<Error/>} />
    </Routes>
  </>
    
  );
}

export default App;
