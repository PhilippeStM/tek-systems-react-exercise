import React, { useState, useEffect } from 'react';
import axios from "axios";
import Article from '../Components/Article';

function Weather() {

    const [weather, setWeather] = useState([]);
    const [weather2, setWeather2] = useState([]);
    const [weather3, setWeather3] = useState([]);

    useEffect(() => {
        axios.get("https://newsapi.org/v2/everything?q=weather&apiKey=ef5e0cfa97984d43b35a896d0e3ad774")
            .then((res) => {
                setWeather(res.data.articles[0]);
                setWeather2(res.data.articles[1]);
                setWeather3(res.data.articles[2]);
                console.log(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <h1>Weather: </h1>
            <Article title={weather.title} url={weather.url} image={weather.urlToImage} section={weather.description}/>
            <Article title={weather2.title} url={weather2.url} image={weather2.urlToImage} section={weather2.description} />
            <Article title={weather3.title} url={weather3.url} image={weather3.urlToImage} section={weather3.description} />
        </div>
    )
}

export default Weather;