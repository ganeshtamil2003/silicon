
import Navbar from "../components/navbar"; 
import "../assets/style.css"


const Login = () => {
    return (
        <>
            <Navbar />
            <div className="login-container">
                <h2>Login</h2>
                <form action="#" method="post">
                    <input type="text" className="login-input" name="username" placeholder="Username" required />
                    <input type="password" className="login-input" name="password" placeholder="Password" required />
                    <a href="./index.html">
                        <button type="button" className="login-button">Login</button>
                    </a>
                </form>
            </div>
        </>
    );
}

export default Login;
