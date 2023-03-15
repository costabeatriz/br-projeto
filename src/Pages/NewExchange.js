import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
import css from '../Pages/NewExchange.css';
import Swal from 'sweetalert2';


const NewExchange = () => {

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

    const navigate = useNavigate()

    const token = localStorage.getItem('token')

    const headers = {
        'Authorization': 'Bearer ' + token
    }

    const handleSubmit = e => {
        e.preventDefault()

        const newOneExchange = {
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

        axios.post(`${process.env.REACT_APP_API_URL}/exchange`, newOneExchange)
            .then(response => {
                navigate('/addnewexchange')
                setAgency('')
                setCity('')
                setPrice('')
                setAction('')
                setPicture('https://via.placeholder.com/400x500')
                setJobExchange('')
                setMeal('')
                setKitExchange('')
                Swal.fire({
                    title: 'Success',
                    text: 'Exchange successfully created!',
                    icon: 'sucess',
                    confirmButtonText: 'Cool'
                  })

            })
            .catch(err => console.log(err))

    }

    const handleUpload = e => {
        const uploadData = new FormData()
        uploadData.append('pictureExchange', e.target.files[0])
        axios.post(`${process.env.REACT_APP_API_URL}/exchange/upload`, uploadData)
            .then(response => {
                setImage(response.data.url)
                alert('upload realizado')
            })
            .catch(err => console.log(err))
    }


    return (
        <div className="CreateExchange">
            <div className="row">
                <div className="col">
                    <h1> ADD A NEW EXCHANGE</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">

                    <img width={600} src={picture ? picture : 'https://via.placeholder.com/400x500'} alt="ImagePreview" className="imagePreview" />
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
                        <span className="input-group-text" id="basic-addon1">Price $:</span>
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
                        <div>
                            <input type="file" onChange={e => handleUpload(e)} />
                        </div>
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
                        <span className="input-group-text" id="basic-addon1">Include Meals</span>
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
                            <span className="input-group-text" id="basic-addon1">Lodging Information</span>
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







export default NewExchange