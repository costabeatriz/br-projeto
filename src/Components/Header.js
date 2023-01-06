import { Link } from 'react-router-dom'
import logo from '../Images/logo.png'
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
                <Link to='/lodging'> 
                <button className='destination-button'>Select your destination</button></Link> 
                </div>
            <div>
            <h2>become a volunteer and change the world</h2>
            </div>
        </div>
    )
}

export default Header