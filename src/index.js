import { createStore } from 'redux';

function actionChangeSong(favSong) {
    return {
        type: CHANGE_SONG,
        payload: { favSong }
    }
}

function actionChangeSandwich(kindOfSandwich) {
    return {
        type: CHANGE_SANDWICH,
        payload: { kindOfSandwich }
    }
}

const CHANGE_SONG = 'CHANGE_SONG';
const CHANGE_SANDWICH = 'CHANGE_SANDWICH';


const defaultState = {
    kindOfSandwich: 'vito',
    favSong: 'ocean avenue',
}

function changer(state=defaultState, action) {
    const newState = { ...state };
    switch(action.type) {
        case CHANGE_SANDWICH:
            newState.kindOfSandwich = action.payload.kindOfSandwich;
            break;
        case CHANGE_SONG:
            newState.favSong = action.payload.favSong;
            break;
        default:
            break;
    }
    return newState;
}

const store = createStore(changer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
    console.log('the state is now:');
    console.table(store.getState());
});

store.dispatch(actionChangeSandwich('turkey tom'));
store.dispatch(actionChangeSong('holiday'));     

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
