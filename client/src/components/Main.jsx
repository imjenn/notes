import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';
import styles from './Notes.module.css'
import { Paper } from '@material-ui/core';

import dateFormat from 'dateformat';

const Main = (props) => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/notes")
            .then(res => {
                console.log(res.data)
                setNotes(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const removeFromDom = (id) => {
        setNotes(notes.filter(note => note._id !== id));
    }

    return (
        <div>
            <div>
                {notes ? notes.sort((a, b) => b.isImportant - a.isImportant).map((notes, index) => {
                    return (
                        <Paper elevation={3}>
                        <div className={styles.note} key={index}>
                            <h2> 
                                {notes.isImportant ? '!!! ' : null}
                                {notes.title} 
                            </h2> 
                            <hr />
                            <p>{notes.content}</p>
                            <div className={styles.footer}>
                                {dateFormat(notes.createdAt, "dddd, mmmm dS, yyyy")}
                                <Link to={`/note/${notes._id}`}>Edit</Link>
                                <DeleteButton id={notes._id} successCallback={() => removeFromDom(notes._id)} />
                            </div>
                        </div>
                        </Paper>
                    )
                }) : null}
            </div>
        </div>
    )
}

export default Main;