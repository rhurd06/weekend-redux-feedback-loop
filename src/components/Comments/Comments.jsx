import Header from '../Header/Header';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import {useDispatch} from 'react-redux';

const Comments = () => {

    const [comments, setComments] = useState('');

    const history = useHistory();
    const dispatch = useDispatch();

    function handleSubmit(event){
        event.preventDefault();
        history.push('/Review');
        console.log('inside handleSubmit in feeling');
        dispatch({
            type: 'COMMENTS',
            payload: {comments: 'comments'}
        });
    }
    return(
        <>
        <div>
            <Header />
            <h3>Any Comments</h3>
        </div>
        <br />
        <div>
            <br />
            <input
                required
                placeholder=''
                value={comments}
                onChange = {(event) => setComments(event.target.value) }
            />
            <button onClick={handleSubmit}>Next</button>
        </div>
        </>
    )
}
export default Comments;