import { Link } from "react-router-dom"
import CSS from "../Components/ExchangeBox.css"


const ExchangeBox = ({exchange}) => {
    return (
        <div className="col Lodging mb-4">
            <div className="card">
                <Link to={exchange._id}>
                    <img src={exchange.imageUrl} className="card-img" alt="..." />
                </Link>
                <div className="card-body">
                    <h5 className="card-title"><Link to={exchange._id}>{exchange.name }</Link></h5>
                    <p className="card-text"> CITY: {exchange.city }</p>
                    <p className="card-text"> ACTION: {exchange.action }</p>
                    <p className="card-text"> FROM: {exchange.price} USD</p>
    
                    
                </div>
            </div>
        </div>
    )
}

export default ExchangeBox