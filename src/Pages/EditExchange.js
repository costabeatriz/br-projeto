import { Link, useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'


const EditExchange = () => {

    const [agency, setAgency] = useState('')
    const [city, setCity] = useState('')
    const [price, setPrice] = useState(0)
    const [action, setAction] = useState('')
    const [imageUrl, setImageUrl] = useState('https://via.placeholder.com/500x600')
    const [volunteerJobInfo, setVolunteerJobInfo] = useState('')
    const [includedMeals, setIncludedMeals] = useState('')
    const [lodgingInfo, setlodgingInfo] = useState('')
    const [volunteerKit, setVolunteerKit] = useState('')

    const {id} = useParams()

    const navigate = useNavigate()

    useEffect(() =>{

        axios.get(`${process.env.REACT_APP_API_URL}/brproject/edit/${id}`)
            .then (response => {
                let {
                    agency,
                    city,
                    price,
                    action,
                    imageUrl,
                    volunteerJobInfo,
                    includedMeals,
                    lodgingInfo,
                    volunteerKit
                } = response.data
                setAgency(agency)
                setCity(city)
                setPrice(price)
                setAction(action)
                setImageUrl(imageUrl)
                setVolunteerJobInfo(volunteerJobInfo)
                setIncludedMeals(includedMeals)
                setlodgingInfo(lodgingInfo)
                setVolunteerKit(volunteerKit)
            })

    }, [id])

    const handleSubmit = e => {
        e.preventDefault()

        const updateExchange = {
            agency,
            city,
            price,
            action,
            imageUrl,
            volunteerJobInfo,
            includedMeals,
            lodgingInfo,
            volunteerKit

        }

        axios.put(`${process.env.REACT_APP_API_URL}/br-projeto/edit/${id}`, updateExchange)
            .then(response => {
                Swal.fire({
                    title: 'Success',
                    text: 'Exchange successfully uptaded!',
                    icon: 'sucess',
                    confirmButtonText: 'Cool'
                  })
            })
            .catch(err => console.log(err))

    }

    return (
        <div className="EditExchange">
            <div className="row">
                <div className="col">
                    <h1> Edit Exchange</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <img width={600} src={imageUrl ? imageUrl : 'https://via.placeholder.com/400x500'} alt="ImagePreview" />
                </div>

                <div className="col">
                    Exchange Information!
                    <form onSubmit={handleSubmit}>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Agency</span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="-----"
                                aria-label="Agency Name"
                                aria-describedby="basic-addon1"
                                id="Agency"
                                value={agency}
                                onChange={e => setAgency(e.target.value)}
                            />
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">City</span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="-----"
                                aria-label="City Name"
                                aria-describedby="basic-addon1"
                                id="City"
                                value={city}
                                onChange={e => setCity(e.target.value)}
                            />
                        </div>
                        <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Price: $:</span>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="$$$"
                                aria-label="PriceName"
                                aria-describedby="basic-addon1"
                                id="price"
                                value={price}
                                onChange={e => setPrice(e.target.value)}
                            />
                        </div>
                        <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Action</span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="-----"
                                aria-label="ActionName"
                                aria-describedby="basic-addon1"
                                id="Action"
                                value={action}
                                onChange={e => setAction(e.target.value)}
                            />
                        </div>
                        <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Image URL</span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Image URL"
                                aria-label="ImageURL"
                                aria-describedby="basic-addon1"
                                id="imageUrl"
                                value={imageUrl}
                                onChange={e => setImageUrl(e.target.value)}
                            />
                        </div>
                        <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Volunteer Job Information</span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="-----"
                                aria-label="volunteerJobInfo"
                                aria-describedby="basic-addon1"
                                id="volunteerJobInfo"
                                value={volunteerJobInfo}
                                onChange={e => setVolunteerJobInfo(e.target.value)}
                            />
                        </div>
                        <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Include Meals</span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="-----"
                                aria-label="includedMeals"
                                aria-describedby="basic-addon1"
                                id="includedMeals"
                                value={includedMeals}
                                onChange={e => setIncludedMeals(e.target.value)}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Lodging Information</span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="-----"
                                aria-label="lodgingInformation"
                                aria-describedby="basic-addon1"
                                id="lodgingInfo"
                                value={lodgingInfo}
                                onChange={e => setlodgingInfo(e.target.value)}
                            />
                        </div>
                        <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Volunteer Kits</span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="-----"
                                aria-label="includedMeals"
                                aria-describedby="basic-addon1"
                                id="volunteerKit"
                                value={volunteerKit}
                                onChange={e => setVolunteerKit(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <button type='submit' className='btn btn-primary'>Submit</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>

    )

}







export default EditExchange