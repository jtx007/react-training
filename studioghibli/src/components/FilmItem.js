import React from 'react';

const FilmItem = ({ film }) => {
    console.log(film)
    return (
            <div className="ui card">
                <div className="header">{film.title}</div>
                <div className="content">
                    <div className="ui sub header">
                        Year: {film.release_date}
                    </div>
                    <div className="ui sub header">
                        Director: {film.director}
                    </div>
                    <div className="ui sub header">
                        Producer: {film.producer}
                    </div>
                    <br />
                    <div className="content">
                        <div className="summary">
                            {film.description}
                        </div>
                    </div>
                </div>

            </div>
    )
}

export default FilmItem