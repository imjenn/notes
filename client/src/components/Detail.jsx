import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

const OneNote = (props) => {
    const [note, setNote] = useState({})
    const { id } = useParams();
    const histroy = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/note/${id}`)
            .then(res => setNote(res.data))
            .catch(err => console.log(err))   
    }, []);

    return (
        <div>
            {note.title}
            <br />
            {note.content}
        </div>
    )
}

export default OneNote;