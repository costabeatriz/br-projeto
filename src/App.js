import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import LodgingPage from './Pages/LodgingPage';
import HomePage from './Pages/HomePage';
import AboutUsPage from './Pages/AboutUsPage';
import LodgingDetails from './Pages/LodgingDetails';
import NewLodging from './Pages/NewLodging';


function App() {
  return (
    <div className="App">
     <Navbar />
     <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/lodging' element={ <LodgingPage /> } />
        <Route path='/aboutus' element={ <AboutUsPage /> } />
        <Route path='/addnewlodging' element={ <NewLodging /> } />
        <Route path='/details' element={ <LodgingDetails /> } />
      </Routes>

    </div>
  );
}

export default App;
