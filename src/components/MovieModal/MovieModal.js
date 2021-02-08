import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import history from '../../history';

class MovieModal extends Component {

    render() {
        return ReactDOM.createPortal(
            <div onClick={() => history.push('/')} className="popup">
                <div onClick={e => e.stopPropagation()} className="popup__content" > Hello</div >
            </div >, document.querySelector('#modal')
        );
    }

}

export default MovieModal;