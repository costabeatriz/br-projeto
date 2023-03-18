import axios from 'axios'
import { useState } from 'react'
import { Link } from "react-router-dom"
import CSS from "./LoginPage.css"
import QuoteImg from '../Images/quote-img.jpg'

const LoginPage = props => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        const payload = {
            email,
            password
        }
        axios.post(`${process.env.REACT_APP_API_URL}/login`, payload)
            .then(response => {
                console.log(response.data)
                console.log (JSON.stringify({...response.data}))
                localStorage.setItem('token', response.data.token)
                //localStorage.setItem('userType', response.data.user.type)
                localStorage.setItem("loggedInUse",JSON.stringify({...response.data}))
                alert(`You're now logged!`)
                
                
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="container-login">
            <h4>Welcome to BR Volunteer </h4>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="E-mail"
                    />
                </div>
                <div>
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                </div>
                <button type="submit" className='loginPage-button'>Login</button>
                <Link to={`/sign-up`}><button className='signupPage-button'>Sign up</button></Link>
        </form> 
        <img className='quote-img' src={QuoteImg} alt= 'quote-img'/>
        </div>
    )
}
export default LoginPage