import Header from '../Header/Header';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import {useDispatch} from 'react-redux';

const Feeling = () => {

    const [numberRank, setNumberRank] = useState('');

    const history = useHistory();
    const dispatch = useDispatch();

    function handleSubmit(event){
        event.preventDefault();
        history.push('/ContentUnderstanding');
        console.log('inside handleSubmit in feeling');
        dispatch({
            type: 'FEELING',
            payload: numberRank
        });
    }
    return(
        <>
        <div>
            <Header />
            <h3>How are you feeling today?</h3>
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
export default Feeling;