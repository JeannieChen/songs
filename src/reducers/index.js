import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Every Summertime', duration: '3:33' },
        { title: 'Before', duration: '6:36' },
        { title: 'Lose', duration: '4:34' }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});