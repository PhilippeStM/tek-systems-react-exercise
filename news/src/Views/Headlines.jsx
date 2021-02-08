import Article from '../Components/Article';
import React, { useState, useEffect } from 'react';
import axios from "axios";

function Headlines() {

    const [headline, setHeadline] = useState([]);


    useEffect(() => {
        axios.get("https://content.guardianapis.com/search?q=headline&api-key=4ed20bfd-6d6c-4ef9-9e3b-b6c4037d2231")
            .then((res) => {
                setHeadline(res.data.response.results[0]);
                console.log(res.data.response.results[0]);
            })
            .catch((err) => console.log(err));
    }, []);


    return (
        <div>
            <h1>Headlines: </h1>
            <Article title={headline.webTitle} />
            <Article />
            <Article />
        </div>
    )
}

export default Headlines;