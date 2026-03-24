import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/account");
    };

    return (
        <div className="card">

            <h2>Signin to your <br />PopX account</h2>
            <p className="login-text">Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit,</p>

            <div className="input-group">
                <label>Email address</label>
                <input placeholder="Enter email address" />
            </div>

            <div className="input-group">
                <label>Password</label>
                <input type="password" placeholder="Enter password" />
            </div>

            <button className="primary login-btn" onClick={handleLogin}>
                Login
            </button>

        </div>
    );
}

export default Login;