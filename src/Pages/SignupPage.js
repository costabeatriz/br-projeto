import { useState } from 'react'
import axios from 'axios'
import Password from 'antd/es/input/Password'
import QuoteImg from '../Images/quote-img.jpg'
import CSS from './SignupPage.css'

const CreateUserPage = props => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [telephone, setTelephone] = useState('')
    const [cpf, setCPF] = useState('')
    const [cnpj, setCNPJ] = useState('')
    const [password, setPassword] = useState('')
    const [picture, setPicture] = useState('')
    const [userP, setUserP] = useState(true)

    const handleUpload = e => {
        const uploadData = new FormData()
        uploadData.append('pictureUser', e.target.files[0])
        axios.post(`${process.env.REACT_APP_API_URL}/user/upload`, uploadData)
            .then(response => {
                setPicture(response.data.url)
                alert('upload realizado')
            })
            .catch(err => console.log(err))
    }

    const handleSubmit = e => {
        e.preventDefault()
        const newUser = {
            name,
            email,
            telephone,
            cpf,
            cnpj,
            picture,
            password
        }

        axios.post(`${process.env.REACT_APP_API_URL}/sign-up`, newUser)
            .then(response => {
                console.log(response.data)
                alert('Wellcome!!')
            })
            .catch(err => console.log(err) )
    }


    return (
        <div className='container-signup'>
            <h6>Take the first Step to your future!</h6>
            <form onSubmit={e => handleSubmit(e)}>
                <div>
                    <input 
                        type="text" 
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Name"
                        id='name'
                    />
                </div>
            
                <div>
                    <input 
                        type="text" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Email"
                        id='email'
                    />
                </div>
                <div>
                    <input 
                        type="number" 
                        value={telephone}
                        onChange={e => setTelephone(e.target.value)}
                        placeholder="Telephone"
                        id='telephone'
                    />
                </div>
                <div class="ui fitted slider checkbox">
                    <input value= {userP} type="checkbox" class="" readonly="CNPJ" tabindex="CPF" onChange={() => setUserP(!userP)}/><label>CNPJ</label></div>
                        {userP ? 
                                        <div>
                                        <input 
                                            type="number" 
                                            value={cpf}
                                            onChange={e => setCPF(e.target.value)}
                                            placeholder="CPF"
                                            id='cpf'
                                        />
                                        </div>
                                    :
                                    <div>
                                    <input 
                                        type="number" 
                                        value={cnpj}
                                        onChange={e => setCNPJ(e.target.value)}
                                        placeholder="CNPJ"
                                        id='cnpj'
                                    />
                                </div>
                                    
                                    } 

                                    <div>
                                    <input 
                                        type="password" 
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        placeholder="Password"
                                        id='password'
                                        />
                                    </div>


                <div>
                    <input type="file" id="file" onChange={e => handleUpload(e)} />
                </div>
                <button type="submit" disabled={!picture}>Criar</button>
            </form>
            <img className='quote-img' src={QuoteImg} alt= 'quote-img'/>
        </div>
    )
}

export default CreateUserPage