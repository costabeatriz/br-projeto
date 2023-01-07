
import { Link } from 'react-router-dom'
import flag from '../Images/flag.png'
import CSS from './HomePage.css'
import BestPrice from '../Images/bestPrice.svg'
import Ethical from '../Images/ethical.svg'
import FreeService from '../Images/freeService.svg'
import Quality from '../Images/qualityChecked.svg'

const HomePage = () => {
    return (
        <div>
        <video id="video" autoplay="" loop="" preload="" muted="" playsinline="" >
        <source type="video/mp4" src="https://www.volunteerworld.com/static/banner.mp4"/>
        </video>
        <div className='content'>
        <div>
        <h4>Your benefits</h4>
        <p>What makes us different</p>
        </div>
        <div className='articles'>
        <article>
        <img src={Quality} alt='qualityImage' className='quality-img'/>
        <p>Quality Checked Organizations</p>
        </article>
        <article>
        <img src={FreeService} alt='freeServiceImage' className='freeService-img'/>
        <p>Free Service & Consultancy</p>
        </article>
        <article>
        <img src={Ethical} alt='ethicalImage' className='ethical-img'/>
        <p>High Ethical Standards</p>
        </article>
        <article>
        <img src={BestPrice} alt='bestPriceImage' className='bestPrice-img'/>
        <p>Best Price Guarantee</p>
        </article>
        </div>
        </div>
        </div>
       
    )
}

export default HomePage