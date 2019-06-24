import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFilms } from '../actions/index'
import FilmItem from './FilmItem'

class FilmList extends Component {

    componentDidMount() {
        this.props.fetchFilms()
    }

    renderList = () => {
        return this.props.films.map((film) => {
            return <FilmItem key={film.id} film={film} />
        })
    }


    render() {
        return (
            <div>
                {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        films: state.films
    }
}


export default connect(mapStateToProps, { fetchFilms })(FilmList)