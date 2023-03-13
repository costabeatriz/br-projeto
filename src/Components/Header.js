import { Link } from 'react-router-dom'
import logo from '../Images/logo-2.png'
import CSS from '../Components/Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <Link to='/'><img src={logo} className='logo' alt='br logo'/></Link>
                </div>
                <div className='buttons'>
                <Link to='/aboutus'> 
                <button>About us</button></Link>
                <Link to='/agencies'> 
                <button>Agencies</button></Link>
                <Link to='/login'> 
                <button className='login-button'>Login</button></Link> 
                </div>
        </div>
    )
}

export default Header
