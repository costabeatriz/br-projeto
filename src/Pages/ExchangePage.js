import { Link } from 'react-router-dom'
import ExchangeBox from '../Components/ExchangeBox'
import { useState, useEffect } from 'react'
import axios from 'axios'


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
            <Link className='btn btn-light btn-sm' to='/'>Add new Exchange</Link>
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