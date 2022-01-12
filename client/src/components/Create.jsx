import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Create = (props) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [isImportant, setIsImportant] = useState(false);

    const[errors, setErrors] = useState([]);
    const [alert, setAlert] = useState(false)
    const history = useHistory();

    const newNote = {
        title: title,
        content,
        isImportant
    }

    // Create note
    const createNote = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/new', newNote)
            .then(res => history.push('/'))
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
                // If errors, set alert to true to display
                setAlert(true);
            })
            // Remove errors once validations are met
            setErrors([]);
            setAlert(false);
    }
    
    return (
        <div>
            <h1>Create a new note</h1>
            {alert && errors.map((err, index) => <p key={index}>{err}</p>)}
            <form onSubmit={createNote}>

                <label for="title">Title: </label>
                <input type="text" id="title" onChange={(e) => setTitle(e.target.value)} value={title}/>
                <br />
                <label for="content">Content: </label>
                <textarea onChange={(e) => setContent(e.target.value)} value={content} rows='7'></textarea>
                <br />
                <input type="checkbox" onClick={(e) => setIsImportant(e.target.checked)} value={isImportant}/>
                <label for="isImportant">Important?</label>

                {/* Disable submit button until validations are met */}
                <input type="submit" /> 
            </form>
        </div>
    )
}

export default Create;