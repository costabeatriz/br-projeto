import { Link, useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'



const EditUser = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [telephone, setTelephone] = useState('')
    const [picture, setPicture] = useState('https://via.placeholder.com/500x600')
    

    const {id} = useParams()

    const navigate = useNavigate()

    const token = localStorage.getItem('token')

    
    const headers = {
        'Authorization': 'Bearer ' + token
    }
    useEffect(() =>{

        

        axios.get(`${process.env.REACT_APP_API_URL}/user/${id}`, {headers})

            .then (response => {
                let {
                    name,
                    email,
                    telephone,
                    picture               
    
                } = response.data

                setName(name)
                setEmail(email)
                setTelephone(telephone)
                setPicture(picture)
                
            })

    }, [id])

    const handleSubmit = e => {
        e.preventDefault()

        const updateExchange = {
            name,
            email,
            telephone,
            picture   

        }


        axios.put(`${process.env.REACT_APP_API_URL}/user/${id}`, updateExchange, {headers})

            .then(response => {
                Swal.fire({
                    title: 'Success',
                    text: 'Profile successfully uptaded!',
                    icon: 'sucess',
                    confirmButtonText: 'Cool pic'
                  })
            })
            .catch(err => console.log(err))

    }

    return (
        <div className="EditUser">
            <div className="row">
                <div className="col">
                    <h1> EDIT USER INFO</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <img width={600} src={picture ? picture : 'https://via.placeholder.com/400x500'} alt="ImagePreview" />
                </div>

                <div className="col">
        
                    <form onSubmit={handleSubmit}>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Name</span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="-----"
                                aria-label="Name"
                                aria-describedby="basic-addon1"
                                id="user"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">E-mail</span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="-----"
                                aria-label="Email"
                                aria-describedby="basic-addon1"
                                id="Email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Telephone</span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="-----"
                                aria-label="Telephone"
                                aria-describedby="basic-addon1"
                                id="Telephone"
                                value={telephone}
                                onChange={e => setTelephone(e.target.value)}
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
                        <div className="mb-3">
                            <button type='submit' className='submit-btn'>Submit</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>

    )

}







export default EditUser