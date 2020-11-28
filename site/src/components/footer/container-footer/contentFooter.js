import React, { Component, Fragment } from 'react';
/** */
import logo from '../../../ico/logo.svg';
import youtube from '../../../ico/yout.svg';
import pin from '../../../ico/insta.svg';
import twitter from '../../../ico/twitter.svg';
// import youtube from '../../../ico/yout.png';

import './style.css'

export class ContentFooter extends Component{
    render(){
        return(
            <Fragment>
                <div className="main-footer">
                    <img src={logo} alt={'Imagem ' + logo} className="" width="50%"/>
                    {/* <ul>
                        <li>
                            <h5>Contato:</h5>
                        </li>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                        <li>Youtube</li>
                        
                    </ul>
                    <ul>
                        <li>
                            <h5>Contato:</h5>
                        </li>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                        <li>Youtube</li>
                        
                    </ul>
                    <ul>
                        <li>
                            <h5>Contato:</h5>
                        </li>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                        <li>Youtube</li>
                        
                    </ul>
                    <ul>
                        <li>
                            <h5>Contato:</h5>
                        </li>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                        <li>Youtube</li>
                        
                    </ul>
                    <ul>
                        <li>
                            <h5>Contato:</h5>
                        </li>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                        <li>Youtube</li>
                        
                    </ul> */}
                    <div className="redes">
                        <img src={youtube} alt={{}} width="64px" height="64px"></img>
                        <img src={pin}     alt={{}} width="64px" height="64px"></img>
                        <img src={twitter} alt={{}} width="64px" height="64px"></img>
                        
                    </div>
                    <selection>
                        <h3>FORMAS DE PAGAMENTO</h3>
                    </selection>
                    Site developed by Rubens Victor
                </div>
            </Fragment>
        )
    }
}

export default ContentFooter