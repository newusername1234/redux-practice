import { createStore, combineReducers } from 'redux';

function actionChangeDessert(kindOfDessert) {
    return {
        type: CHANGE_DESSERT,
        payload: { kindOfDessert }
    }
}

function actionChangeSandwich(kindOfSandwich) {
    return {
        type: CHANGE_SANDWICH,
        payload: { kindOfSandwich }
    }
}

function actionCoffeeCount() {
    return {
        type: INCREMENT_COFFEE_COUNT
    }
}

const CHANGE_DESSERT = 'CHANGE_DESSERT';
const CHANGE_SANDWICH = 'CHANGE_SANDWICH';
const INCREMENT_COFFEE_COUNT = 'INCREMENT_COFFEE_COUNT';


const defaultDessertState = {
    kindOfDessert: 'cake'
};

const defaultLunchState = {
    kindOfSandwich: 'vito'
};

const defaultCoffeeState = {
    coffeeCount: 0
};


function dessert(state=defaultDessertState, action) {
    const newState = { ...state };
    switch(action.type) {
        case CHANGE_DESSERT:
            newState.kindOfDessert = action.payload.kindOfDessert;
            break;
        default:
            break;
    }
    return newState;
}

function sandwich(state=defaultLunchState, action) {
    const newState = { ...state };
    switch(action.type) {
        case CHANGE_SANDWICH:
            newState.kindOfSandwich = action.payload.kindOfSandwich;
            break;
        default:
            break;
    }
    return newState;
}

function coffee(state=defaultCoffeeState, action) {
    const newState = { ...state };
    switch(action.type) {
        case INCREMENT_COFFEE_COUNT:
            newState.coffeeCount = state.coffeeCount + 1;
            break;
        default:
            break;
    }
    return newState;
}

const rootReducer = combineReducers({
    // part of tree: reducer function
    sandwich,
    dessert,
    coffee
});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
window.store = store;

store.subscribe(() => {
    console.log('the state is now:');
    console.table(store.getState());
});

store.dispatch(actionChangeSandwich('blah'));
store.dispatch(actionChangeDessert('blurr'));
store.dispatch(actionCoffeeCount());
store.dispatch(actionCoffeeCount());

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
