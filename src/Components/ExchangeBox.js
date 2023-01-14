import { Button } from "bootstrap"
import { Link } from "react-router-dom"
import CSS from "../Components/ExchangeBox.css"
import { useState, useEffect} from 'react'
import axios from 'axios'


const ExchangeBox = ({exchange, refreshExchange, setRefreshExchange}) => {

    const [toExchange, setToExchange] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/brproject`)
        .then(response => {
            setToExchange(response.data)
        })
        .catch(err => console.log(err))
    },[])

    const deleteExchange = exchangeId => {
        axios.delete(`${process.env.REACT_APP_API_URL}/brproject/${exchangeId}`)
            .then(response => {
                setRefreshExchange(!refreshExchange)
            })
            .catch(err => console.log(err))
        }  
    return (
        <div className="col Agency mb-4">
            <div className="card mb-6 border-0">
                <Link to={`/details/${exchange._id}`}>
                    <img src={exchange.imageUrl} className="card-img" alt="..." />
                </Link>
                <div className="card-body">
                    <h6 className="card-title bold"> {exchange.agency}</h6>
                    <p className="card-text">  {exchange.city }</p>
                    <p className="card-text">  {exchange.action }</p>
                    <p className="card-text">  {exchange.price} USD</p>
                    <button onClick={() => deleteExchange(exchange._id)}>DELETE</button> 
                    <Link to={`/edit/${exchange._id}`}><button>EDIT</button></Link>
                    <Link to={`/details/${exchange._id}`}><button className="details-btn">DETAILS</button></Link>
                </div>
                
            </div>
        </div>
    )

}

export default ExchangeBox