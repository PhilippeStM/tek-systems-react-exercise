import React, { useState, useEffect } from 'react';
import axios from "axios";
import Article from '../Components/Article';

function Headlines() {

    const [headline, setHeadline] = useState([]);
    const [headline2, setHeadline2] = useState([]);
    const [headline3, setHeadline3] = useState([]);

    useEffect(() => {
        axios.get("https://newsapi.org/v2/everything?q=headlines&apiKey=ef5e0cfa97984d43b35a896d0e3ad774")
            .then((res) => {
                setHeadline(res.data.articles[0]);
                setHeadline2(res.data.articles[1]);
                setHeadline3(res.data.articles[2]);
                console.log(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <h1>Headlines: </h1>            
            <Article title={headline.title} url={headline.url} image={headline.urlToImage} section={headline.description} />
            <Article title={headline2.title} url={headline2.url} image={headline2.urlToImage} section={headline2.description} />
            <Article title={headline3.title} url={headline3.url} image={headline3.urlToImage} section={headline3.description} />
        </div>
    )
}

export default Headlines;