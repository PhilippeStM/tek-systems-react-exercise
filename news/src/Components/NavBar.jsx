import React from 'react'

function NavBar() {
    return (
        <nav>
            <h1>TEK News</h1>
            <span>Add your &lt;Link/&gt;'s to the Pages Here in the NavBar</span>
            <ul>
                <li><a href="http://bit.ly/teksysacademy" target="_blank" rel="noreferrer">Sports</a></li>
                <li><a href="http://bit.ly/teksysacademy" target="_blank" rel="noreferrer">Weather</a></li>
                <li><a href="http://bit.ly/teksysacademy" target="_blank" rel="noreferrer">Politics</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;