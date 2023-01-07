import { Link } from 'react-router-dom'
import ExchangeBox from '../Components/ExchangeBox'
import { useState, useEffect } from 'react'
import axios from 'axios'
import CSS from './ExchangePage.css'


const ExchangePage = () => {

    const [exchange, setExchange] = useState([])

    useEffect(() => {
        axios.get(`https://ironrest.cyclic.app/br-projeto`)
            .then(response => {
                setExchange(response.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h4>Your 2023 adventure begins now</h4>
            <div className="row">
            { exchange.length && (
        <>
        {
            exchange.map(exchange => {
                return <ExchangeBox key={exchange._id} exchange={exchange} />
            })
        }
    </>
) }
</div>
</div>
       
    )
}

export default ExchangePage