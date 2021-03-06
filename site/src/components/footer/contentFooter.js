import React, { Component, Fragment } from 'react';
/** */
import logo from '../../resources/img/logo-footer.svg';
import youtube from '../../resources/img/yout-round.svg';
import pin from '../../resources/img/insta.svg';
import twitter from '../../resources/img/twitter.svg';
import whats from '../../resources/img/whats.svg';
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
                    K. MODAS 2020 © ALL RIGHTS RESERVED
                </div>
            </Fragment>
        )
    }
}

export default ContentFooter