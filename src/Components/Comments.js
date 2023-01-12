import { useState, useEffect } from "react"
import axios, { formToJSON } from "axios"
import Swal from "sweetalert2"


const Coments = () => {

    const [text, setText] = useState('')
    const [name, setName] = useState('')
    const [ comments, setComments] = useState ([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/brprojectComents`)
            .then(response => {
                return comments
                setComments(comments)

            })
            .catch(err => console.log(err))
    })

    const handleSubmitComent = e => {
        e.preventDefault()

        const newComent = {
            text,
            createAt: new Date().toJSON(),
            name, 
        }


        axios.post(`${process.env.REACT_APP_API_URL}/brprojectComents`, newComent)
        .then(response => {
            setText('')
            Swal.fire({
                title: 'Success',
                text: 'Thank you for your comemnt :)',
                icon: 'sucess',
                confirmButtonText: 'Cool'
              })

        })
        .catch(err => console.log(err))
    }

    return (
        <div className="row">
            <div className="col">
                <h2> Coments</h2>
                <form onSubmit={handleSubmitComent}>
                    <div className="mb-3">
                       <textarea name="text"
                        id="text"
                        cols="200"
                        rows="3"
                        value={text}
                        onChange={e => setText(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                            <button type='submit' className='btn btn-primary'>Submit Coment!</button>
                        </div>
                </form>
                <div>
                    {comments && (
                        <> {
                            comments.map(comment => {
                                return (
                                    <div>
                                        <p>{comment.text}</p>
                                        <p>{comment.createAt}</p>

                                    </div>
                                )
                            })
                        }
                        
                        </>
                    )}

                </div>
            </div>
        </div>
    )

}

export default Coments