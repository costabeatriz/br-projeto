import { useState, useEffect } from "react"
import axios, { formToJSON } from "axios"
import Swal from "sweetalert2"
import CSS from './Comments.css'

const Coments = (props) => {

    const [text, setText] = useState('')
    const [name, setName] = useState('')
    const [comments, setComments] = useState ([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/brprojectComents`)
            .then(response => {            
                setComments(response.data)
                })
            
                .catch(err => console.log(err))          
            },[])
            
    

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
        <div className="row Comments">
            <div className="col">
                <form onSubmit={handleSubmitComent}>
                    <div className="mb-3">
                       <textarea class="form-control" placeholder="Tell us about your latest adventure here with us!" id="floatingTextarea" name="text"
                        cols="30"
                        rows="3"
                        value={text}
                        onChange={e => setText(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                            <button type='submit' className='submit-btn'>Submit comment!</button>
                        </div>
                </form>
                <div>
                    {comments && (
                        <div className="container">
                            <div className="row "> {
                            comments.map(comment => {
                                return (
                                    <article className="col-4 bg-white rounded mt-2 mx-2" id="colFormLabelSm"
                                    >
                                        <p>{comment.text}</p>
                                        <span>{comment.createAt}</span>
                                    </article>
                                )
                            })
                        }
                        </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    )

}

export default Coments