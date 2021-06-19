import React, {useState, useEffect} from 'react'
import axios from 'axios'

function CommentList({postId}) {
    const [comments, setComments] = useState([])   
    console.log('comment list post id ', postId)
    useEffect(() => {
        const fetchData = async() => {
            const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`)
            console.log(res.data)
            setComments(res.data)
        }
        fetchData()
    },[])

    const renderedComments = comments.map(comment => {
        return <li key={comment.id}>{comment.content}</li>
    })
    return (
        <li>
            {renderedComments}
        </li>
    )
}

export default CommentList
