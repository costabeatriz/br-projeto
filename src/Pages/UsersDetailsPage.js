import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import UsersDetailsPage from './UsersDetailsPage.css'

const UserDetails = props => {
    
    const [user, setUser] = useState(null)
    const { userId } = useParams()
    const {userD, setUserD} = useState ()

    const token = localStorage.getItem('token')

    const headers = {
        'Authorization': 'Bearer ' + token
    }


    useEffect (() => { 
        axios.get(`${process.env.REACT_APP_API_URL}/user/${userId}`, {headers})

        .then(response => {
            setUser(response.data)
        })
        .catch(err => console.log(err))
    }, [])

    if(!user) {
        return <p>I am sorry, we didnt find you, make sure than you are logged !!</p>
            
    }

        return (
        <div className='userDetails'>
            <h2> WELLCOME BACK {user.name}</h2>

        
            <div className="col-9">
                    <p>Name: {user.name}</p>
                    <p>Picture: {user.picture}</p>
                    <p>Email: {user.email}</p>
                    <p>Telephone: {user.telephone}</p>
                </div>
            </div>


  
    )
}

export default UserDetails