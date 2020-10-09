import React from 'react';
import $ from 'jquery';

export function toggleModal(){
    this.setState({
        isOpen: !this.state.isOpen
    });
}

export default toggleModal;