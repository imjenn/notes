import React from 'react';
import axios from 'axios';
import styles from './Notes.module.css'

const DeleteButton = (props) => {
    const { id, successCallback } = props;

    const deleteNote= (e) => {
        console.log(id)
        if (window.confirm("Are you sure you want to delete this?")) {
        axios.delete(`http://localhost:8000/api/delete/${id}`)
            .then(res => {
                console.log(res.data)
                console.log("Deleted")
                successCallback();
            })
        }
    }

    return (
        <button className={styles.delete}onClick={deleteNote}>Delete</button>
    )
}

export default DeleteButton;