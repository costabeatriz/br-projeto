import { Link } from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from 'axios'

const ManageExchange = () => {
    const [exchange, setExchange] = useState([])
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/br-projeto`)
            .then(response => {
                setExchange(response.data)
            })
            .catch(err => console.log(err))
    }, [refresh])

    return (
       
    )
}

export default ManageExchange