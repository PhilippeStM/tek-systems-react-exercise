import React from 'react'



function Article(props) {
    
    
    const { title, image, section } = props;


    return (
        <article>
            <header>
                <h2>{title}</h2>
                <img src={image} alt="placeholder"/>
            </header>
            <main>
                <section>
                    <p>{section}</p>
                </section>
            </main>
        </article>
    )
}

export default Article;