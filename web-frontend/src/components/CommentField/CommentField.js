import React from "react"
import { useState } from "react"
import "./CommentField.css"
import dateToString from "../../utilities/DateTimeUtilities"

const CommentField = () => {
    function handleSubmit(event) {
        event.preventDefault()
        setComments(prev => {
            const newComment = {
                name: document.getElementById("name").value,
                timestamp: Date.now(),
                comment: document.getElementById("comment").value
            }
            return [newComment, ...prev]
        })
    }
    
    const [comments, setComments] = useState([])
    return (
        <>
        <form onSubmit={handleSubmit}>
            <h3 className="CommentHeader">Leave comment</h3>
            <input className="CommentField" type="text" id="name" placeholder="Your name..."></input>
            <input className="CommentField" type="text" id="comment" placeholder="Your comment..."></input>
            <button className="CommentSubmit" submit-tooltip="Great!">Submit</button>
        </form>
        <div>
            <ul className="CommentList">{comments.map(comment => <li className="CommentObjects">
                <h5 className="Names">{dateToString(comment.timestamp) + " " + comment.name + " wrote: "}</h5>
                <p className="Comments">{comment.comment}</p>
            </li>)}</ul>
        </div>
        </>
    )
}

export default CommentField