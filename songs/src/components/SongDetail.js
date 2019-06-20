import React from 'react';
import { connect } from 'react-redux'

const SongDetail = ({ selectedSong }) => {
    console.log(selectedSong)
    if (!selectedSong) {
        return <div>Select a Song</div>
    }
    return ( 
        <div>
            <h3>Details for:</h3>
            <p>Title: {selectedSong.song.title}</p>
            <p>Duration: {selectedSong.song.duration}</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        selectedSong: state.selectedSong
    }
}



export default connect(mapStateToProps)(SongDetail) 