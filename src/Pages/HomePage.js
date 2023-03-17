
import { Link } from 'react-router-dom'
import flag from '../Images/flag.png'
import CSS from './HomePage.css'
import BestPrice from '../Images/bestPrice.svg'
import Ethical from '../Images/ethical.svg'
import FreeService from '../Images/freeService.svg'
import Quality from '../Images/qualityChecked.svg'
import Comments from '../Components/Comments'
import { useParams } from "react-router-dom"
import Desert from "../Images/Desert.jpg"
import ExchangeBox from '../Components/ExchangeBox'
import { useState, useEffect } from 'react'
import axios from 'axios'
import CSSExhange from './ExchangePage.css'
import SearchExchange from '../Components/SearchExchange'


const HomePage = () => {

    const {comment} = useParams()
    const [exchange, setExchange] = useState([])
    const [comments, setComments] = useState ([])
    const [refreshExchange, setRefreshExchange] = useState(false)
    const [refreshComments, setRefreshComments] =useState (false)
    const [searchResult, setSearchResult] =useState(exchange)

    
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/exchange`)
            .then(response => {
                setExchange(response.data)
                setSearchResult(response.data)
            })
            .catch(err => console.log(err))
    }, [refreshExchange]);
    
    const searchAgency = (p) => {
        const agencyFilter = exchange.filter(agency  => {
            return agency.agency.toLowerCase().startsWith(p.toLowerCase());
        })
        setSearchResult(agencyFilter)
    }

    return (
        <div className='homePage'>

        <img className='desert' src={Desert} alt= 'desert-img'/>
        
        <div className='exchangePage'>
            <div className='title'>
            <h4>Your 2023 adventure begins now</h4>
            <div className=" row col-10 bg-white rounded mt-2 mx-2 ">
                <SearchExchange searchAgency={searchAgency}/>
            { exchange.length !== 0 ? (
        <>
        
        {
            searchResult.map(exchange => {
                return <ExchangeBox refreshExchange={refreshExchange} setRefreshExchange={setRefreshExchange} key={exchange._id} exchange={exchange} />
            })
        }
        </>
):
<h1>Loading</h1> 

}
</div>
</div>
</div>
       
        <div className='contentHP'>
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
        <div>
        <Comments/>
        </div>
        
        </div>
        </div>
       
    )
}

export default HomePage