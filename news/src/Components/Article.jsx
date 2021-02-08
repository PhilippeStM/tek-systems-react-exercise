import React from 'react'

function Article(props) {

    const { title, image, url, section } = props;

    return (
        <article>
            <header>
                <a href={url}><h2>{title}</h2></a>
            </header>

            <main>
                <section>
                    <p>{section}</p>
                </section>
                <img src={image} alt="news pic here" />
            </main>
        </article>
    )
}

export default Article;