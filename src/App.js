
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import ExchangePage from './Pages/ExchangePage';
import HomePage from './Pages/HomePage';
import AboutUsPage from './Pages/AboutUsPage';
import ExchangeDetails from './Pages/ExchangeDetails';
import NewExchange from './Pages/NewExchange';
import Agencies from './Pages/AgencyPage';
import EditExchange from './Pages/EditExchange';


function App() {

  return (
    <div className="App">
     <Header />
     <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/exchange' element={ <ExchangePage /> } />
        <Route path='/aboutus' element={ <AboutUsPage /> } />
        <Route path='/addnewexchange' element={ <NewExchange /> } />
        <Route path='/details' element={ <ExchangeDetails /> } />
        <Route path='/agencies' element={ < Agencies /> } />
        <Route path='/:id' element={ < EditExchange /> } />
      </Routes>

    </div>
  );
}

export default App