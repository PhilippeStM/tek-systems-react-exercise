import React, { useState, useEffect } from 'react';
import axios from "axios";
import Article from '../Components/Article';

function Sports() {

    const [sports, setSports] = useState([]);
    const [sports2, setSports2] = useState([]);
    const [sports3, setSports3] = useState([]);

    useEffect(() => {
        axios.get("https://newsapi.org/v2/everything?q=sports&apiKey=ef5e0cfa97984d43b35a896d0e3ad774")
            .then((res) => {
                setSports(res.data.articles[0]);
                setSports2(res.data.articles[1]);
                setSports3(res.data.articles[2]);
                console.log(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <h1>Sports: </h1>
            <Article title={sports.title} url={sports.url} image={sports.urlToImage} section={sports.description}/>
            <Article title={sports2.title} url={sports2.url} image={sports2.urlToImage} section={sports2.description} />
            <Article title={sports3.title} url={sports3.url} image={sports3.urlToImage} section={sports3.description} />
        </div>
    )
}

export default Sports;