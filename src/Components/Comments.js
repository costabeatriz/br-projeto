import { useState, useEffect } from "react"
import axios, { formToJSON } from "axios"
import Swal from "sweetalert2"
import CSS from './Comments.css'

const token = localStorage.getItem('token')

const headers = {
    'Authorization': 'Bearer ' + token
}
const Comments = (props, {id}) => {

    const [user, setUser] = useState('')
    const [commentsAll, setCommentsAll] = useState ([])
    const [comments, setComments] = useState ('')
    const [refresh, setRefresh] = useState ('')

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/comments`)
            .then(response => {            
                setCommentsAll(response.data)
                })
            
                .catch(err => console.log(err))          
            },[comments, setRefresh])

    const handleSubmitComent = e => {
        e.preventDefault()

        const newComent = {
            comments,
            user,
            createAt: new Date().toJSON(), 
        }


        axios.post(`${process.env.REACT_APP_API_URL}/comments`, newComent, {headers})
        .then(response => {
            setComments('')
            Swal.fire({
                title: 'Success',
                text: 'Thank you for your comment :)',
                icon: 'sucess',
                confirmButtonText: 'We appreciate you!'
              })

        },)
        .catch(err => console.log(err))
    }

    const deleteComments = id => {
        axios.delete(`${process.env.REACT_APP_API_URL}/comments/${id}`, {headers})
            .then(response => {
                setComments(!comments)
            })
            .catch(err => console.log(err))
        }  

    return (
        <div className="row Comments">
            <div className="col">
                <form onSubmit={handleSubmitComent}>
                    <div className="mb-3">
                       <textarea className="form-control" placeholder="Tell us about your latest adventure here with us!" id="floatingTextarea" name="text"
                        cols="30"
                        rows="3"
                        value={comments}
                        onChange={e => setComments(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                            <button type='submit' className='submit-btn'>Submit comment!</button>
                        </div>
                </form>
                <div>
                    {commentsAll && (
                        <div className="container">
                            <div className="row "> {
                            commentsAll.map(comment => {
                                return (
                                    <article className="col-4 bg-white rounded mt-3 mx-3" id="colFormLabelSm" key={comment._id}
                                    >
                                        <p>{comment.comments}</p>
                                        <span>{comment.createAt}</span>
                                        <button onClick={() => deleteComments(comment._id)}>DELETE</button> 
                                        
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

export default Comments