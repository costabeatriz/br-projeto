import { Link } from 'react-router-dom'
import logo from '../Images/images.png'
import NavbarCSS from '../Components/Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar ">
            <div className="container-fluid">
                <img src={logo} className='logo' alt='br logo'/>
                <Link className='btn btn-light btn-sm' to='/items/create'>Add destination</Link>
            </div>
        </nav>
    )
}

export default Navbar