import React, { Component, Fragment } from 'react';
/** */
import logo from '../../../ico/logo-footer.svg';
import youtube from '../../../ico/yout-round.svg';
import pin from '../../../ico/insta.svg';
import twitter from '../../../ico/twitter.svg';
import whats from '../../../ico/whats.svg';

import './style.css'

export class ContentFooter extends Component{
    render(){
        return(
            <Fragment>
                <div className="main-footer">
                    <img src={logo} alt={'Imagem ' + logo} className="logo-footer" width="50%"/>

                    <div className="redes">
                        <input type='image' src={youtube}   alt={{}}/>
                        <input type='image' src={pin}       alt={{}}/>
                        <input type='image' src={twitter}   alt={{}}/>
                        <input type='image' src={whats}     alt={{}}/>
                        
                    </div>
                    <section>
                        <h3>FORMAS DE PAGAMENTO</h3>
                    </section>
                    Site developed by Rubens Victor
                </div>
            </Fragment>
        )
    }
}

export default ContentFooter