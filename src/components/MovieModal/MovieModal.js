import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import history from '../../history';
import { connect } from 'react-redux';
import { selectedMovie, fetchMovieDetails, removeDetails } from '../../actions/index';

class MovieModal extends Component {

    componentDidMount() {
        this.props.fetchMovieDetails(this.props.id);
        // console.log(this.props.id);

    }

    onCloseHandler = () => {
        history.push('/');
        this.props.selectedMovie(null);
        let obj = {};
        this.props.removeDetails(obj);
    };

    render() {
        return ReactDOM.createPortal(
            <div onClick={this.onCloseHandler} className="popup">
                <div onClick={e => e.stopPropagation()} className="popup__content" >
                    <div className="popup__content--title">{this.props.details.original_title}</div>
                    <div className="popup__content--overview">{this.props.details.overview}</div>
                    <button className="popup__content--button" onClick={this.onCloseHandler}>Close</button>
                </div >
            </ div >, document.querySelector('#modal')
        );
    }

}

const mapStateToProps = (state) => {
    return {
        id: state.movies.selectedMovie,
        details: state.movies.movieDetails
    }
}

export default connect(mapStateToProps, {
    selectedMovie: selectedMovie,
    fetchMovieDetails: fetchMovieDetails,
    removeDetails: removeDetails
})(MovieModal);