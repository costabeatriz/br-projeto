import { Link } from 'react-router-dom'
import ExchangeBox from '../Components/ExchangeBox'
import { useState, useEffect } from 'react'
import axios from 'axios'
import CSS from './ExchangePage.css'
import SearchExchange from '../Components/SearchExchange'
const ExchangePage = () => {
    const [exchange, setExchange] = useState([])
    const [refreshExchange, setRefreshExchange] = useState(false)
    const [searchResult, setSearchResult] =useState(exchange)
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/brproject`)
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
    )
}
export default ExchangePage