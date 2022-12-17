import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import LodgingPage from './Pages/Pages/LodgingPage';
import HomePage from './Pages/HomePage';
import AboutUsPage from './Pages/AboutUsPage';


function App() {
  return (
    <div className="App">
     <Navbar />
     <LodgingPage/>
     <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/' element={ <LodgingPage /> } />
        <Route path='/' element={ <AboutUsPage /> } />
      </Routes>

    </div>
  );
}

export default App;
