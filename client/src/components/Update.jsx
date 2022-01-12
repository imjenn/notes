import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams, useHistory } from 'react-router-dom';

const Update = (props) => {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [isImportant, setIsImportant] = useState("");
    const [alert, setAlert] = useState(false);
    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/note/${id}`)
            .then(res => {
                console.log(res.data)
                setTitle(res.data.title)
                setContent(res.data.content)
                setIsImportant(res.data.isImportant)
            })
            .catch()
    }, []);

    const updateNote = (e) => {
        console.log(title);
        e.preventDefault();
        axios.put(`http://localhost:8000/api/update/${id}`, {
            title,
            content,
            isImportant
        })
            .then(res => history.push('/'))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Update</h1>
            <form onSubmit={updateNote}>
                <p>
                    <label for="title">Title: </label>
                    <input type="text" id="title" onChange={(e) => setTitle(e.target.value)} value={title} />
                </p>
                <p>
                    <label for="content">Content: </label>
                    <textarea onChange={(e) => setContent(e.target.value)} value={content} rows='10' col='10'></textarea>
                </p>
                <p>
                    <input type="checkbox" onClick={(e) => setIsImportant(e.target.checked)} value={isImportant} checked={isImportant}/>
                    <label for="isImportant">Important?</label>
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}

export default Update;