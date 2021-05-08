import Header from '../Header/Header';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import {useDispatch} from 'react-redux';

const Comments = () => {

    const [comments, setComments] = useState('');

    const history = useHistory();
    const dispatch = useDispatch();

    //clickHandler to make the button work and send to next page
    function handleSubmit(event){
        event.preventDefault();
        history.push('/Review');
        console.log('inside handleSubmit in comments');
        dispatch({
            type: 'COMMENTS',
            payload: comments
        });
    }
    return(
        <>
        <div>
            <Header />
            <h3>Any Comments</h3>
        </div>
        <br />
        <div className="inputFields">
            <br />
            <input
                className="inputs"
                placeholder=''
                value={comments}
                onChange = {(event) => setComments(event.target.value) }
            />
            <button className="buttonField" onClick={handleSubmit}>Next</button>
        </div>
        </>
    )
}
export default Comments;