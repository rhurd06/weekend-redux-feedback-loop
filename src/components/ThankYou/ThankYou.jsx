import {useHistory} from 'react-router-dom';

import './ThankYou.css';

const ThankYou = () => {

    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        history.push('/');
        console.log('inside review handleSubmit in review');
    }
    
    return(
        <div className="inputFields">
            <h2>Feedback Complete!</h2>
                <h1>Thank You!</h1>
                <button className="buttonField" onClick={handleSubmit}>Leave New Feedback</button>
        </div>
    )
}
export default ThankYou;