import Header from '../Header/Header';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import {useDispatch} from 'react-redux';

import './ContentUnderstanding.css';

const ContentUnderstanding = () => {

    const [numberRank, setNumberRank] = useState('');

    const history = useHistory();
    const dispatch = useDispatch();

    //clickHandler to make the button work and send to next page
    function handleSubmit(event){
        event.preventDefault();
        history.push('/Support');
        console.log('inside handleSubmit in contentUnderstanding');
        dispatch({
            type: 'CONTENT_UNDERSTANDING',
            payload: numberRank
        });
    }
    return(
        <>
        <div>
            <Header />
            <h3>How well are you understanding the content today?</h3>
        </div>
        <br />
        <div className="inputFields">
            <br />
            <input
                className="inputs"
                required
                placeholder='Rate 1-5'
                value={numberRank}
                onChange = {(event) => setNumberRank(event.target.value)}
            />
            <button className="buttonField" onClick={handleSubmit}>Next</button>
        </div>
        </>
    )
}
export default ContentUnderstanding;