import Article from '../Components/Article';
import React, { useState, useEffect } from 'react';
import axios from "axios";

function Headlines() {

    const [headline, setHeadline] = useState([]);


    useEffect(() => {
        axios.get("https://content.guardianapis.com/search?q=headline&api-key=4ed20bfd-6d6c-4ef9-9e3b-b6c4037d2231")
            .then((res) => {
                setHeadline(res.data);
            })
            .catch((err) => console.log(err));
    }, []);


    return (
        <div>
            <h1>Headline News goes here: </h1>
            <p>This should be on the main home page</p>
            <Article />
            <Article />
            <Article />
        </div>
    )
}

export default Headlines;