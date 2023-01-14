import { Link } from 'react-router-dom'
import logo from '../Images/logo.png'
import CSS from '../Components/Footer.css'
import Location from '../Images/icon-location.svg'
import Phone from '../Images/phone-icon.png'
import Email from '../Images/email-icon.jpg'

const Footer = () => {
    return (
        <div className="footer">
            <footer>
 
            <div>
                    <p><img src={Location} width='15' alt="location-icon" className='location-icon'/>
                    Av. Paulista, 1600
                    São Paulo - SP - CEP: 10605-22</p>
                    <p><img src={Phone} width='10' alt="phone-icon" />  (+55) 11 97860-6233</p>
                    <p><img src={Email} width='12' alt="email-icon" />   brv@volunteer.com</p>
            </div>
            </footer>
        </div>
    )
}

export default Footer