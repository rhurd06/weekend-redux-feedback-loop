import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

function ReviewFeedback(){

    const feedbackReducer = useSelector(store => store.feedbackReducer);
    const history = useHistory();

    function handleSubmit(event){
        event.preventDefault();
        history.push('/');
        console.log('inside review handleSubmit in review');
    }

    return(
        <div>
            <h1>Review Your Feedback</h1>
            <p> Feelings: {feedbackReducer.feeling}</p>
            <p> Content Understanding: {feedbackReducer.understanding}</p>
            <p>Support: {feedbackReducer.support}</p>
            <p>Comments: {feedbackReducer.comments}</p>
            <button onClick={handleSubmit}>Submit Feedback</button>
        </div>
    )
}
export default ReviewFeedback;