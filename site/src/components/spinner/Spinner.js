import React, { Fragment } from 'react'
import './style.css'

function Spinner(props) {
    return (
        <Fragment>
            <div className="spinner"></div>
            <h2 className="txt-spinner">{props.text}</h2>
        </Fragment>
    )
}

export default Spinner