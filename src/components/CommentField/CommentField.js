import React from 'react'
import axios from 'axios'
import "./CommentField.css"
import {useState, useEffect} from 'react'
import { utcToLocalTime } from "../../utilities/DateTimeUtilities"

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

    const removeComment = async (id) => {
        await axios.delete(`https://hemingmusicapi.azurewebsites.net/Comment/${id}`)
            .then(response => {
                alert("comment deleted!")
                console.log(response)
                getComments()
            })
            .catch(error => {
                console.error(error)
            })
    }

    const handleRemoveComment = (id) => {
        let controlValue = document.getElementById("delete-comment").value
        if (controlValue && controlValue === "Arin") {
            removeComment(id)
        }
        else {
            alert("wrong password")    
        }
        setShowForm(false)
    }

    const [showForm, setShowForm] = useState(false)
    const [currentComment, setCurrentComment] = useState('')
    const [password, setPassword] = useState('')

    const removeCommentPasswordForm = (id) => {
        if (showForm) {
            return (
                <div className="DeleteCommentForm">
                    <form>
                        <label>Enter password:</label>
                        <input 
                        type="password" 
                        id="delete-comment" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="off"/>
                        <button className="RemoveButton" onClick={() => handleRemoveComment(id)}>Delete</button>
                    </form>
                </div>
            )
        }
        return <></>
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
            <ul className="CommentList">{comments.map((comment, index) => <li key={index} className="CommentObjects">
                <h5 className="Names">{comment.name}<span className="Comments"> wrote:</span></h5>
                <p className="Comments">{comment.commentBody}</p>
                <p className="Timestamps">{utcToLocalTime(comment.timestamp)}</p>
                <button hidden={showForm} className="RemoveButton" onClick={() => {setShowForm(true); setCurrentComment(comment.id)}}>Remove</button>
            </li>)}</ul>
        </div>
        {removeCommentPasswordForm(currentComment)}
        </>
    )
}

export default CommentField