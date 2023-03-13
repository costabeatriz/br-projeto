import { useState } from 'react'
import axios from 'axios'

const CreateUserPage = props => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [telephone, setTelephone] = useState('')
    const [cpf, setCPF] = useState('')
    const [cnpj, setCNPJ] = useState('')
    const [picture, setPicture] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        const newUser = {
            name,
            email,
            telephone,
            cpf,
            cnpj,
            picture
        }

        axios.post(`${process.env.REACT_APP_API_URL}/sign-up`, payload)
            .then(response => {
                console.log(response.data)
                alert('Well Came!!')
            })
            .catch(err => console.log(err) )
    }

    

    return (
        <div className='container'>
            <h1>Take the first Step to your future!</h1>
            <form onSubmit={e => handleSubmit(e)}>
                <div>
                    <input 
                        type="text" 
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Name"
                    />
                </div>
                <div>
                    <input 
                        type="text" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                </div>
                <div>
                    <input 
                        type="number" 
                        value={telephone}
                        onChange={e => setTelephone(e.target.value)}
                        placeholder="Telephone"
                    />
                </div>
                <div>
                    <input 
                        type="number" 
                        value={cpf}
                        onChange={e => setCPF(e.target.value)}
                        placeholder="Fun Facts"
                    />
                </div>
                <div>
                    <input 
                        type="number" 
                        value={cnpj}
                        onChange={e => setCNPJ(e.target.value)}
                        placeholder="CNPJ"
                    />
                </div>
                <div>
                    <input type="file" onChange={e => handleUpload(e)} />
                </div>
                <button type="submit" disabled={!picture}>Criar</button>
            </form>
        </div>
    )
}

export default CreateUserPage