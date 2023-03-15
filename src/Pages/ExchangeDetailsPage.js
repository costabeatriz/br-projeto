import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import CSS from './ExchangeDetailsPage.css'

const ExchangeDetails = () => {
    const { id } = useParams()
    const [exchange, setExchange] = useState(null)

    useEffect (() => { 
        axios.get(`${process.env.REACT_APP_API_URL}/exchange/${id}`)

        .then(response => {
            setExchange(response.data)
        })
        .catch(err => console.log(err))
    }, [])

        return (
        <div className='exchangeDetails'>
            <h2> EXCHANGE INFORMATION</h2>
        <div className='row'>
            { 
            exchange ? (
        <>
        <div className='col'>
            <img width={400} src={ exchange.picture ? exchange.picture:'https://via.placeholder.com/400x500'} alt='exchange' className='detailsPage-img'></img>
        </div>
        <div className='col'>  
        <p><b>agency</b>: {exchange.agencyName}</p>
        <p><b>cy</b>: {exchange.city}</p>it
        <p><b>price</b>: {exchange.price}USD</p>
        <p><b>volunteer info</b>: {exchange.jobExchange}</p>
        <p><b>included meals</b>: {exchange.meal}</p>
        <p><b>lodging info</b>: {exchange.accommodationInformation}</p>  
        <p><b>what does it come with your volunteer kit?</b> {exchange.kitExchange}</p>  
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