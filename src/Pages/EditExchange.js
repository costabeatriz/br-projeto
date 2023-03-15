import { Link, useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import CSS from './EditExchange.css'


const EditExchange = () => {

    const [agency, setAgency] = useState('')
    const [agencyName, setAgencyName] = useState('')
    const [city, setCity] = useState('')
    const [price, setPrice] = useState(0)
    const [action, setAction] = useState('')
    const [picture, setPicture] = useState('https://via.placeholder.com/500x600')
    const [jobExchange, setJobExchange] = useState('')
    const [meal, setMeal] = useState('')
    const [accommodationInformation, setAccommodationInformation] = useState('')
    const [kitExchange, setKitExchange] = useState('')

    const {id} = useParams()

    const navigate = useNavigate()

    useEffect(() =>{


        axios.get(`${process.env.REACT_APP_API_URL}/exchange/${id}`)

            .then (response => {
                let {
                    agency,
                    agencyName,
                    action,
                    city,
                    picture,
                    jobExchange,
                    meal,
                    accommodationInformation,
                    kitExchange,
                    price                
    
                } = response.data

                setAgency(agency)
                setAgencyName(agencyName)
                setAction(action)
                setCity(city)
                setPicture(picture)
                setJobExchange(jobExchange)
                setMeal(meal)
                setAccommodationInformation(accommodationInformation)
                setKitExchange(kitExchange)
                setPrice(price)
            })

    }, [id])

    const handleSubmit = e => {
        e.preventDefault()

        const updateExchange = {
            agency,
            agencyName,
            action,
            city,
            picture,
            jobExchange,
            meal,
            accommodationInformation,
            kitExchange,
            price

        }


        axios.put(`${process.env.REACT_APP_API_URL}/exchange/${id}`, updateExchange, {headers})

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
                    <h1> EDIT EXCHANGE INFO</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <img width={600} src={picture ? picture : 'https://via.placeholder.com/400x500'} alt="ImagePreview" />
                </div>

                <div className="col">
        
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
                                value={picture}
                                onChange={e => setPicture(e.target.value)}
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
                                value={jobExchange}
                                onChange={e => setJobExchange(e.target.value)}
                            />
                        </div>
                        <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Meals</span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="-----"
                                aria-label="includedMeals"
                                aria-describedby="basic-addon1"
                                id="includedMeals"
                                value={meal}
                                onChange={e => setMeal(e.target.value)}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Accommodation Information Information</span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="-----"
                                aria-label="lodgingInformation"
                                aria-describedby="basic-addon1"
                                id="lodgingInfo"
                                value={accommodationInformation}
                                onChange={e => setAccommodationInformation(e.target.value)}
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
                                value={kitExchange}
                                onChange={e => setKitExchange(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <button type='submit' className='submit-btn'>Submit</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>

    )

}







export default EditExchange