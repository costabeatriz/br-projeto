import { Link } from 'react-router-dom'
import LodgingBox from '../Components/LodgingBox'
import { useState, useEffect } from 'react'
import axios from 'axios'


const LodgingPage = () => {

    const [lodging, setLodging] = useState([])

    useEffect(() => {
        axios.get(`https://ironrest.cyclic.app/br-projeto`)
            .then(response => {
                setLodging(response.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <Link className='btn btn-light btn-sm' to='/'>Add new lodging</Link>
            <div className="row">
            { lodging.length && (
        <>
        {
            lodging.map(lodgings => {
                return <LodgingBox key={lodgings._id} lodging={lodgings} />
            })
        }
    </>
) }
</div>
</div>
       
    )
}

export default LodgingPage