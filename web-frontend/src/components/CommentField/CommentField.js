import React from "react"
import { useState } from "react"
import "./CommentField.css"

const CommentField = () => {
    function handleSubmit(event) {
        event.preventDefault()
        setComments(prev => [document.getElementById("comment").value, ...prev])
    }
    const [comments, setComments] = useState([])
    return (
        <>
        <form onSubmit={handleSubmit}>
            <h3 className="CommentHeader">Leave comment</h3>
            <input className="CommentField" type="text" id="comment"></input>
            <button className="CommentSubmit">Submit</button>
        </form>
        <div>
            <ul>{comments.map(comment => <li>{comment}</li>)}</ul>
        </div>
        </>
    )
}

export default CommentField