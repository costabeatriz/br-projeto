import { Button } from "bootstrap"
import { Link } from "react-router-dom"
import CSS from "../Components/ExchangeBox.css"
import { useState, useEffect} from 'react'
import axios from 'axios'


const ExchangeBox = ({exchange, refreshExchange, setRefreshExchange}) => {

    const [toExchange, setToExchange] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/br-projeto`)
        .then(response => {
            setToExchange(response.data)
        })
        .catch(err => console.log(err))
    },[])

    const deleteExchange = exchangeId => {
        axios.delete(`${process.env.REACT_APP_API_URL}/br-projeto/${exchangeId}`)
            .then(response => {
                setRefreshExchange(!refreshExchange)
            })
            .catch(err => console.log(err))
        }  
    return (
        <div className="col Lodging mb-4">
            <div className="card">
                <Link to={exchange._id}>
                    <img src={exchange.imageUrl} className="card-img" alt="..." />
                </Link>
                <div className="card-body">
                    <h5 className="card-title"><Link to={exchange._id}>{exchange.agency}</Link></h5>
                    <p className="card-text"> CITY: {exchange.city }</p>
                    <p className="card-text"> ACTION: {exchange.action }</p>
                    <p className="card-text"> FROM: {exchange.price} USD</p>
                    <button className="btn btn-danger" onClick={() => deleteExchange(exchange._id)}>DELETE</button> 
                    <button>EDIT</button>
                    <button className="details-btn">DETAILS</button>
                </div>
                
            </div>
        </div>
    )

}

export default ExchangeBox