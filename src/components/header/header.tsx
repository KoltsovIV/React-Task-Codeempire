import './header.scss'
import {HeaderProps} from '../../shared/interfases/props-interfaces';

const Header = (props:HeaderProps) => {
    return (
        <>
            <header className="header">
                <div className="wrapper">
                    <img src={props.logo} alt="logo"/>
                    <p>Chuck Norris</p>
                </div>

            </header>
        </>
    )
}

export default Header
