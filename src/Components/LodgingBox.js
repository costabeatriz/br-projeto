import { Link } from "react-router-dom"


const LodgingBox = ({lodging}) => {
    return (
        <div className="col Lodging mb-4">
            <div className="card">
                <Link to={`/items/${lodging._id}`} >
                    <img src={lodging.imageUrl} className="card-img-top" alt="..." />
                </Link>
                <div className="card-body">
                    <h5 className="card-title"><Link to={`/items/${lodging._id}`}>{ lodging.name }</Link></h5>
                    <p className="card-text"> City: {lodging.city }</p>
                    <p className="card-text"> Action: {lodging.action }</p>
                    <p className="card-text"> City: {lodging.city }</p>
    
                    
                </div>
            </div>
        </div>
    )
}

export default LodgingBox 