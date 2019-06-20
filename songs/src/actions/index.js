// Action creator
//returns an action as a plain javascript action
// type is required but payload is optional

export const selectSong = (song) => {
    return {
        type: 'SONG_SELECTED',
        payload: {
            song: song
        }
    }
}

