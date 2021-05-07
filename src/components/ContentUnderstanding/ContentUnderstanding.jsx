import Header from '../Header/Header';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import {useDispatch} from 'react-redux';

const ContentUnderstanding = () => {

    const [numberRank, setNumberRank] = useState('');

    const history = useHistory();
    const dispatch = useDispatch();

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
        <div>
            <br />
            <input
                required
                placeholder='Rate 1-5'
                value={numberRank}
                onChange = {(event) => setNumberRank(event.target.value)}
            />
            <button onClick={handleSubmit}>Next</button>
        </div>
        </>
    )
}
export default ContentUnderstanding;