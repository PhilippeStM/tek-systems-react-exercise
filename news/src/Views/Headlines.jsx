import Article from '../Components/Article';
import React, { useState, useEffect } from 'react';
import axios from "axios";

function Headlines() {

    const [headline, setHeadline] = useState([]);
    const [headline2, setHeadline2] = useState([]);
    const [headline3, setHeadline3] = useState([]);

    useEffect(() => {
        axios.get("https://content.guardianapis.com/search?q=headline&api-key=4ed20bfd-6d6c-4ef9-9e3b-b6c4037d2231")
            .then((res) => {
                setHeadline(res.data.response.results[0]);
                setHeadline2(res.data.response.results[1]);
                setHeadline3(res.data.response.results[2]);
                console.log(res.data.response.results);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <h1>Headlines: <span><p>(click below...)</p></span></h1>
            
            {/* This API did not have any photos to attach, so I created an image hyperlink for the same photos from the articles */}
            
            <Article title={headline.webTitle} url={headline.webUrl} image="https://i.guim.co.uk/img/media/65a34aedd5c3d7a855f573d9f41ae393070e0563/0_70_4394_2636/master/4394.jpg?width=620&quality=85&auto=format&fit=max&s=874070306378be5fd4baab150f29404a" />
            <Article title={headline2.webTitle} url={headline2.webUrl} image="https://i.guim.co.uk/img/media/dc2f41dc9adf19c9d2f3fdb2e4a06504d3b581be/0_0_2560_1536/master/2560.jpg?width=620&quality=85&auto=format&fit=max&s=c3706d075bffc492aa8f08bde7453ec0"/>
            <Article title={headline3.webTitle} url={headline3.webUrl} image="https://i.guim.co.uk/img/media/da4c4ce643919e605a17f82286a1a226352b7413/0_34_2560_1536/master/2560.jpg?width=620&quality=85&auto=format&fit=max&s=01318c393b6e2fecd1f4c9c6c7992ca9"/>
        </div>
    )
}

export default Headlines;