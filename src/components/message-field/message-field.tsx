import './message-field.scss';
import bigChuck from '../../shared/imgs/big-chuck.png'
const MessageField = () => {
    return (
        <div className="message-field">
            <img src={bigChuck} alt="Chuck Norris" className="message-field__img"/>
            <div className="message-field__text">
                The only thing Chuck Norris says on a job interview: “Hi, I’m Chuck Norris and I start tomorrow. Any questions?
            </div>
        </div>
    )
}

export default MessageField
