import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const ExchangeDetails = () => {
    const { exchangeId } = useParams()
    const [exchange, setExchange] = useState(null)

    useEffect (() => { 
        axios.get(`${process.env.REACT_APP_API_URL}/brproject/details/${exchangeId}`)
        .then(response => {
            setExchange(response.data)
        })
        .catch(err => console.log(err))
    }, [id])

        return (
        <div>
        <div className='row'>
            { 
            exchange ? (
        <>
        <div className='col'>
            <img width={400} src={ exchange.imageUrl ? exchange.imageUrl:'https://via.placeholder.com/400x500'} alt='exchange'></img>
        </div>
        <div className='col'>  
        <p>{exchange.agency}</p>
        <p>{exchange.city}</p>
        <p>{exchange.price}</p>
        <p>{exchange.volunteerJobInfo}</p>
        <p>{exchange.includedMeals}</p>
        <p>{exchange.lodgingInfo}</p>  
        <p>{exchange.volunteerKit}</p>  
        </div>
        </>
        ) : (
            <p> Sorry, exchange not found.</p>
        )}
        </div>
        </div>
  
    )
}

export default ExchangeDetails