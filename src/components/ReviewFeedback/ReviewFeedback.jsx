import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

import Header from '../Header/Header';
import './ReviewFeedback.css';

function ReviewFeedback(){

    const feedbackReducer = useSelector(store => store.feedbackReducer);
    const history = useHistory();

    //clickHandler to make the button work and send to next page
    function handleSubmit(event){
        event.preventDefault();
        history.push('/ThankYou');
        console.log('inside review handleSubmit in review');
    }

    return(
        <div className="container">
            <Header />
            <h2>Review Your Feedback</h2>
            <p> Feelings: {feedbackReducer.feeling}</p>
            <p> Content Understanding: {feedbackReducer.understanding}</p>
            <p>Support: {feedbackReducer.support}</p>
            <p>Comments: {feedbackReducer.comments}</p>
            <button className="buttonField" onClick={handleSubmit}>Submit Feedback</button>
        </div>
    )
}
export default ReviewFeedback;