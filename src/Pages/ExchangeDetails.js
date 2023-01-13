import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const ExchangeDetails = () => {
    const { id } = useParams()
    const [exchange, setExchange] = useState(null)

    useEffect (() => { 
        axios.get(`${process.env.REACT_APP_API_URL}/brproject/${id}`)

        .then(response => {
            setExchange(response.data)
        })
        .catch(err => console.log(err))
    }, [])

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
        <p>agency: {exchange.agency}</p>
        <p>city: {exchange.city}</p>
        <p>price: {exchange.price}</p>
        <p>volunteer info: {exchange.volunteerJobInfo}</p>
        <p>included meals: {exchange.includedMeals}</p>
        <p>lodging info: {exchange.lodgingInfo}</p>  
        <p>what does it come with your volunteer kit? {exchange.volunteerKit}</p>  
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