import React, { useState } from 'react';
import getRandomJokes from "../../services/axiosServiceTarea";

// Material UI Components
import Button from '@mui/material/Button';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

const AxiosTarea = () => {

    const [jokes, setJokes] = useState(null);
    const [contLike, setContLike] = useState(0);
    const [contDislike, setContDislike] = useState(0);

    function obtainJokes() {
        getRandomJokes()
            .then((response) => {
                if (response.status === 200) {
                    setJokes(response.data)
                }
                console.log(response);
            })
            .catch((error) => {
                alert(`Se a producido un error ${error} `)
            })
    }

    const likes = () => {
        setContLike(contLike + 1)
    }
    const disLikes = () => {
        setContDislike(contDislike + 1)
    }

    return (
        <div>
            <h1>Jokes Random</h1>
            {jokes != null ?
                (
                    <div>
                        <Button variant="contained" size='small' startIcon={<ThumbUpAltIcon />} onClick={ likes } >
                            Like { contLike }
                        </Button>
                        { " " }
                        {jokes.value}
                        { " " }
                        <Button variant="contained" size='small'  startIcon={<ThumbDownAltIcon />} onClick={ disLikes }>
                            Dislike { contDislike }
                        </Button>
                        <p>Generate a new Jokes</p>
                        <Button variant="contained" size='large' onClick={obtainJokes}>
                            New joke
                        </Button>
                    </div>
                )
                :
                (
                    <div>
                        <p>Generate your first joke</p>
                        <Button variant="contained" size='large' onClick={obtainJokes}>
                            New joke
                        </Button>
                    </div>
                )}
        </div>
    );
}

export default AxiosTarea;
