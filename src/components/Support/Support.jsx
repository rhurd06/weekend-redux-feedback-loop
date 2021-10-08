import Header from '../Header/Header';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import {useDispatch} from 'react-redux';

const Support = () => {

    const [numberRank, setNumberRank] = useState('');

    const history = useHistory();
    const dispatch = useDispatch();
    
    //clickHandler to make the button work and send to next page
    function handleSubmit(event){
        if(numberRank >=1 && numberRank<= 5) {
            dispatch({ 
                type: 'SUPPORT', 
                payload: numberRank
            })
            history.push('/Comments');
        } else{
            alert('This field cannot be left blank, please enter a number.');
        }
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