import './message-field.scss';
import bigChuck from './big-chuck.png';
import Spinner from "../spinner/spinner";
import ErrorMessage from "../errorMessage/error-message";

const MessageField = (props: any) => {
    const {isLoading, error, activePhrase} = props;
    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = isLoading ? <Spinner/> : null;
    const content = !(isLoading || errorMessage) ? activePhrase : null;

    return (
        <div className="message-field">
            <img src={bigChuck} alt="Chuck Norris" className="message-field__img"/>
            <div className="message-field__text">
                {errorMessage}
                {spinner}
                {content}
            </div>
        </div>
    )
}

export default MessageField;
