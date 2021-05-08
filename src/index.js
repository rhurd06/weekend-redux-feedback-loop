import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';

import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

const feedbackReducer = (state = { }, action) => {
        if(action.type === 'FEELING'){
        state = {...state, feeling: action.payload}
    }   if(action.type === 'CONTENT_UNDERSTANDING'){
        state = {...state, understanding: action.payload }
    }   if(action.type === 'SUPPORT'){
        state = {...state, support: action.payload}
    }   if(action.type === 'COMMENTS'){
        state = {...state, comments: action.payload}
    }   return state;
};

//Giant object tha holds all of the info for our application
const store=createStore(
    combineReducers({
        feedbackReducer,
    }),
    applyMiddleware(
        logger
    )
);

//We wrap the App inside the Provider to make Redux available throughout
//the entire application
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById('root'));
registerServiceWorker();
