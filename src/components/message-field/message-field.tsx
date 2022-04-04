import './message-field.scss';
import bigChuck from './big-chuck.png';
import {LoadingService} from '../../services/loading-service';
import {MessageFieldProps} from '../../shared/interfases/props-interfaces';

const MessageField = (props: MessageFieldProps) => {
    const {isLoading, error, activePhrase} = props;

    const content = LoadingService.manageContent(isLoading, error, activePhrase);

    return (
        <div className="message-field">
            <img src={bigChuck} alt="Chuck Norris" className="message-field__img"/>
            <div className="message-field__text">
                {content}
            </div>
        </div>
    )
}

export default MessageField;
