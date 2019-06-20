import { combineReducers } from 'redux';
// Reducers

const songsReducers = () => {
    return [
        {title: "CANT SAY", duration: '4:05'},
        {title: "ASTROTHUNDER", duration: '3:34'},
        {title: "Going Bad", duration: '4:00'},
        {title: "X", duration: '3:45'}
    ]
}

const selectSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }
        return selectedSong
    
}

export default combineReducers({
    songs: songsReducers,
    selectedSong: selectSongReducer
})

