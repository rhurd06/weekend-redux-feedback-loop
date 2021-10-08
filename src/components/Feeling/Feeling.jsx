import Header from '../Header/Header';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import {useDispatch} from 'react-redux';

import './Feeling.css';

const Feeling = () => {

    const [numberRank, setNumberRank] = useState('');

    const history = useHistory();
    const dispatch = useDispatch();

    //clickHandler to make the button work and send to next page
    function handleSubmit(event){
        // if(numberRank > 5 || numberRank < 5 || numberRank === '') {
        //     alert(`This field cannot be left blank, please enter a number.`);
        // }
        // event.preventDefault();
        // history.push('/ContentUnderstanding');
        // console.log('inside handleSubmit in feeling');
        // dispatch({
        //     type: 'FEELING',
        //     payload: numberRank
        // });
        if(numberRank >=1 && numberRank<= 5) {
            dispatch({ 
                type: 'FEELING', 
                payload: numberRank
            })
            history.push('/ContentUnderstanding');
        } else{
            alert('This field cannot be left blank, please enter a number.');
        }
    }
    return(
        <>
        <div>
            <Header />
            <h3>How are you feeling today?</h3>
        </div>
        <div className="inputFields">
            <input
                required
                className="inputs"
                placeholder='Rate 1-5'
                value={numberRank}
                onChange = {(event) => setNumberRank(event.target.value)}
            />
            <button className="buttonField" onClick={handleSubmit}>Next</button>
        </div>
        </>
    )
}
export default Feeling;