import './header.scss'

const Header = (props:any) => {
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
