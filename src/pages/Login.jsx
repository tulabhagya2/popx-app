import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = () => {
        if (!email || !password) {
            alert("Please fill all fields");
            return;
        }

        const user = JSON.parse(localStorage.getItem("user"));

        if (!user) {
            alert("No account found. Please register first");
            return;
        }

        navigate("/account");
    };


    return (
        <div className="card">

            <h2>Signin to your <br />PopX account</h2>
            <p className="login-text">Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit,</p>

            <div className="input-group">
                <label>Email address</label>
                <input placeholder="Enter email address" value={email}
                    onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="input-group">
                <label>Password</label>
                <input type="password" placeholder="Enter password" value={password}
                    onChange={(e) => setPassword(e.target.value)} />
            </div>

            <button className="primary login-btn" onClick={handleLogin}>
                Login
            </button>

        </div>
    );
}

export default Login;