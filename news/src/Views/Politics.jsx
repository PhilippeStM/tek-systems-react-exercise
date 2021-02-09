import React, { useState, useEffect } from 'react';
import axios from "axios";
import Article from '../Components/Article';

function Politics() {

    const [politics, setPolitics] = useState([]);
    const [politics2, setPolitics2] = useState([]);
    const [politics3, setPolitics3] = useState([]);

    useEffect(() => {
        axios.get("https://newsapi.org/v2/everything?q=politics&apiKey=ef5e0cfa97984d43b35a896d0e3ad774")
            .then((res) => {
                setPolitics(res.data.articles[0]);
                setPolitics2(res.data.articles[1]);
                setPolitics3(res.data.articles[2]);
                console.log(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <h1>Politics: </h1>
            <Article title={politics.title} url={politics.url} image={politics.urlToImage} section={politics.description}/>
            <Article title={politics2.title} url={politics2.url} image={politics2.urlToImage} section={politics2.description} />
            <Article title={politics3.title} url={politics3.url} image={politics3.urlToImage} section={politics3.description} />
        </div>
    )
}

export default Politics;