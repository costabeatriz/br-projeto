import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import ExchangePage from './Pages/ExchangePage';
import HomePage from './Pages/HomePage';
import AboutUsPage from './Pages/AboutUsPage';
import LodgingDetails from './Pages/LodgingDetails';

import NewExchange from './Pages/NewExchange';


function App() {
  return (
    <div className="App">
     <Navbar />
     <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/lodging' element={ <ExchangePage /> } />
        <Route path='/aboutus' element={ <AboutUsPage /> } />
        <Route path='/addnewlodging' element={ <NewExchange /> } />
        <Route path='/details' element={ <LodgingDetails /> } />
      </Routes>

    </div>
  );
}

export default App;
