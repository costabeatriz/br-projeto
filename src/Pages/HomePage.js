import { Link } from 'react-router-dom'
import flag from '../Images/flag.png'
import CSS from './HomePage.css'

const HomePage = () => {
    return (
        <div>
           <img src={flag} className='flag' alt='flag'/>
           
        </div>
       
    )
}

export default HomePage