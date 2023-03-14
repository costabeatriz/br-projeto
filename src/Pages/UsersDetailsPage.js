import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const UserDetails = props => {
    
    const [user, setUser] = useState(null)
    const { userId } = useParams()
    const {userD, setUserD} = useState ()

    const token = localStorage.getItem('token')

    const headers = {
        'Authorization': 'Bearer ' + token
    }


    useEffect (() => { 
        axios.get(`${process.env.REACT_APP_API_URL}/${userId}`, {headers})

        .then(response => {
            setUserD(response.data)
        })
        .catch(err => console.log(err))
    }, [])

    if(!user) {
        return <p>We are looking for you.....</p>
    }

        return (
        <div className='exchangeDetails'>
            <h2> WELL CAME BACK {user.name}</h2>
        
            <div className='row'>
            <img width="100%" src={user.picture} alt="profilePhoto" />
            </div>
            <div className="col-9">
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Telephone: {user.telephone}</p>
                </div>
            </div>


  
    )
}

export default UserDetails