import './message-field.scss';
import bigChuck from '../../shared/imgs/big-chuck.png';

const MessageField = (props: any) => {

    return (
        <div className="message-field">
            <img src={bigChuck} alt="Chuck Norris" className="message-field__img"/>
            <div className="message-field__text">
                {props.activePhrase}
            </div>
        </div>
    )
}

export default MessageField;
