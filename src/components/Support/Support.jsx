import Header from '../Header/Header';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import {useDispatch} from 'react-redux';

const Support = () => {

    const [numberRank, setNumberRank] = useState('');

    const history = useHistory();
    const dispatch = useDispatch();

    function handleSubmit(event){
        event.preventDefault();
        history.push('/Comments');
        console.log('inside handleSubmit in support');
        dispatch({
            type: 'SUPPORT',
            payload: numberRank
        });
    }
    return(
        <>
        <div>
            <Header />
            <h3>How well do you feel supported today?</h3>
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
export default Support;