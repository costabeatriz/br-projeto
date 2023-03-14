
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import ExchangePage from './Pages/ExchangePage';
import HomePage from './Pages/HomePage';
import AboutUsPage from './Pages/AboutUsPage';
import ExchangeDetails from './Pages/ExchangeDetailsPage';
import NewExchange from './Pages/NewExchange';
import Agencies from './Pages/AgencyPage';
import EditExchange from './Pages/EditExchange';
import Footer from './Components/Footer';
import LoginPage from './Pages/LoginPage';
import CreateUserPage from './Pages/CreateUserPage';
import UserDetailsPage from './Pages/UsersDetailsPage';



function App() {

  return (
    <div className="App">
     <Header />
     <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/exchange' element={ <ExchangePage /> } />
        <Route path='/aboutus' element={ <AboutUsPage /> } />
        <Route path='/addnewexchange' element={ <NewExchange /> } />
        <Route path='/details/:id' element={ <ExchangeDetails /> } />
        <Route path='/agencies' element={ < Agencies /> } />
        <Route path='/edit/:id' element={ < EditExchange /> } />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/sign-up' element={<CreateUserPage />} />
        <Route path='/:id' element={<UserDetailsPage />} />
        
      </Routes>
     <Footer/>
    </div>
  );
}

export default App