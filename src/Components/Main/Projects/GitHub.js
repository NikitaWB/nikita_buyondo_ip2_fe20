import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';

function GitHub() {
    return (
        <div className="github-container">
            <h2>Visit my GitHub</h2>
            <br></br>
            <a href="https://github.com/NikitaWB" className="github social" aria-label="github-link" target="_blank" rel="noopener noreferrer">
                <GitHubIcon style={{ fontSize: 40 }} />
            </a>
        </div>
    )
}

export default GitHub
