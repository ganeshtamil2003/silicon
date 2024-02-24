import logo from '../assets/images/logo.svg' 
import "../assets/style.css"


const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className="logo-container">
                    <img src={logo} alt="logo" />
                </div>
                <div className="nav-links">
                    <ul>
                        <li>Home</li>
                        <li>Courses</li>
                        <li>Login</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar;
