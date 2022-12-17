import { Link } from 'react-router-dom'
import logo from '../Images/logo.png'
import CSS from '../Components/Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar ">
            <div className="container-fluid">
                <Link to='/'><img src={logo} className='logo' alt='br logo'/></Link>
                <Link to='/lodging'> 
                <button>Select your destination</button></Link>
            </div>
            <div>
            <h2>become a volunteer and change the world</h2>
            </div>
        </nav>
    )
}

export default Navbar