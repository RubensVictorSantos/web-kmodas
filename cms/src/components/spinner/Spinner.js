import React from 'react'
import './style.css'

function Spinner(props) {
    return(
        <div>
            <div className="spinner"></div>
            <h2 className="txt-spinner">{props.text}</h2>
        </div>
    )
}

export default Spinner