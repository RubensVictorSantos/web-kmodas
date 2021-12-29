import React from 'react'
import { Link } from 'react-router-dom'
/** */
import './style.css'

export const LeftMenu = (props) => {
    return (
        <ul className="lf-menu">
            {
                props.url.map(url =>
                    <li className="item-lf-menu" key={url.key}><Link to={url.path}>{url.title}</Link><span />
                    </li>
                )
            }
        </ul>
    )
}

export default LeftMenu;