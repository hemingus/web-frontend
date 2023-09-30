import React from 'react'
import axios from 'axios'
import "./CommentField.css"
import {useState, useEffect} from 'react'

const CommentField = () => {

    const [comments, setComments] = useState([])

    const getComments = async (url = "https://hemingmusicapi.azurewebsites.net/Comment", data = []) => {
        try {
            const res = await axios.get(url)
            setComments(res.data)
        }
        catch (err) {
            alert(err.message)
        }
    }

    useEffect(() => {
        getComments();
    }, [])

    function convertUtcToLocalTime(utcTimeString) {
        const utcDate = new Date(utcTimeString);
        const localOffset = utcDate.getTimezoneOffset();
        const localDate = new Date(utcDate.getTime() - localOffset * 60000);
        return localDate.toLocaleString();
    }

    const handleSubmit = async (event, url = "https://hemingmusicapi.azurewebsites.net/Comment") => {
        event.preventDefault()
        const newComment = {
            name: document.getElementById("name").value,
            commentBody: document.getElementById("comment").value
        }
        try {
            await axios.post(url, newComment)
            getComments()
        }
        catch (err) {
            alert(err.message)
        }
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <h3 className="CommentHeader">Leave comment</h3>
            <input className="CommentField" type="text" id="name" placeholder="Your name..."></input>
            <input className="CommentField" type="text" id="comment" placeholder="Your comment..."></input>
            <button className="CommentSubmit" submit-tooltip="Great!">Submit</button>
        </form>
        <div>
            <h1 className="CommentHeader">Comments</h1>
            <ul className="CommentList">{comments.map(comment => <li className="CommentObjects">
                <h5 className="Names">{comment.name}<span className="Comments"> wrote:</span></h5>
                <p className="Comments">{comment.commentBody}</p>
                <p className="Timestamps">{convertUtcToLocalTime(comment.timestamp)}</p>
            </li>)}</ul>
        </div>
        </>
    )
}

export default CommentField