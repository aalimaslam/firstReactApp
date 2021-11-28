import { Link } from "react-router-dom";

function Nav(props){
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
            <a className="navbar-brand" href="/">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                </li>
                
                </ul>
            </div>
                <label className={`form-check-label text-${props.mode === 'light' ? "dark" : "light"} mx-2`} htmlFor="flexSwitchCheckDefault">Light Mode </label>  
            <div className="form-check form-switch">
                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                <label className={`form-check-label text-${props.mode === 'light' ? "dark" : "light"}`} htmlFor="flexSwitchCheckDefault">Dark Mode</label>
            </div>
            </div>
        </nav> 
    );
}

export default Nav;

//Props = Properties

Nav.defaultProps = {title:"No title yet"}

//Proptypes are used to check if we are passing the props with right data type
//DefaultProp is used to give props the default value
// isRequired is used to have a prop mandatory