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
        state = {...state, Feeling: action.payload}
    }   if(action.type === 'CONTENT_UNDERSTANDING'){
        state = {...state, ContentUnderstanding: action.payload }
    }   if(action.type === 'SUPPORT'){
        state = {...state, Support: action.payload}
    }   if(action.type === 'COMMENTS'){
        state = {...state, Comments: action.payload}
    }   if(action.type === 'CLEAR_FEEDBACK_RESULTS'){
        state = { }
    }
    return state;
};

const store=createStore(
    combineReducers({
        feedbackReducer,
    }),
    applyMiddleware(
        logger
    )
);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById('root'));
registerServiceWorker();
