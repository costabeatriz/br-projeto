import { Link } from "react-router-dom"
import CSS from "../Components/LodgingBox.css"


const LodgingBox = ({lodging}) => {
    return (
        <div className="col Lodging mb-4">
            <div className="card">
                <Link to={lodging._id}>
                    <img src={lodging.imageUrl} className="card-img" alt="..." />
                </Link>
                <div className="card-body">
                    <h5 className="card-title"><Link to={lodging._id}>{ lodging.name }</Link></h5>
                    <p className="card-text"> CITY: {lodging.city }</p>
                    <p className="card-text"> ACTION: {lodging.action }</p>
                    <p className="card-text"> FROM: {lodging.price} USD</p>
    
                    
                </div>
            </div>
        </div>
    )
}

export default LodgingBox 