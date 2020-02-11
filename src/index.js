// Creating reducers
// Write reducer functions that expect to receive the state objects and actions you created in the previous exercise.
//  Make sure to use your action constants.

// Movies
// Favorite song
// Burritos
// Coffee
// Lunch


// {
//     numberOfMovies: 1
// }
    
// {
//     favSong: 'Song Name'
// }
        
// {
//     burritosEaten: 9000
// }
    
// {
//     coffeesDrank: 3
// }
        
// {
//     kindOfSandwich: 'italian'
// }

// function actionAddMovie() {
//     return {
//         type: ADD_MOVIE
//     }
// }
import { createStore } from 'redux';

function actionChangeSong(favSong) {
    return {
        type: CHANGE_SONG,
        favSong
    }
}

function actionChangeSandwich(kindOfSandwich) {
    return {
        type: CHANGE_SANDWICH,
        kindOfSandwich
    }
}

const addMovie = 'ADD_MOVIE';
const CHANGE_SONG = 'CHANGE_SONG';
const ADD_BURRITO = 'ADD_BURRITO';
const ADD_COFFEE = 'ADD_COFFEE';
const CHANGE_SANDWICH = 'CHANGE_SANDWICH';


const sandwichState = {
    kindOfSandwich: 'vito'
}

const songState = {
    favSong: 'ocean avenue'
}

function changer(state, action) {
    const newState = { ...state };
    switch(action.type) {
        case CHANGE_SANDWICH:
            newState.kindOfSandwich = action.kindOfSandwich;
            break;
        case CHANGE_SONG:
            newState.favSong = action.favSong;
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

// store.dispatch(actionChangeSandwich('turkey tom'));
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
