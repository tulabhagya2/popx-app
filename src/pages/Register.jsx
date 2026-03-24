import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        password: "",
        company: "",
        agency: "yes"
    });

    const handleSubmit = () => {
        if (!form.name || !form.email || !form.password) {
            alert("Please fill required fields");
            return;
        }

        localStorage.setItem("user", JSON.stringify(form));
        navigate("/account");
    };

    return (
        <div className="card space-between">

            <div>
                <h2>Create your <br />PopX account</h2>

                <div className="input-group">
                    <input
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                    <label>Full Name<span className="required">*</span></label>
                </div>

                <div className="input-group">
                    <input
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                    <label>Phone Number<span className="required">*</span></label>
                </div>

                <div className="input-group">
                    <input
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                    <label>Email Address<span className="required">*</span></label>
                </div>

                <div className="input-group">
                    <input
                        type="password"
                        value={form.password}
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                    />
                    <label>Password<span className="required">*</span></label>
                </div>

                <div className="input-group">
                    <input
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                    />
                    <label>Company name</label>
                </div>

                <p style={{ marginTop: "15px" }}>Are you an Agency? *</p>


                <div className="radio-group">
                    <label>
                        <input
                            type="radio"
                            name="agency"
                            checked={form.agency === "yes"}
                            onChange={() => setForm({ ...form, agency: "yes" })}
                        />
                        Yes
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="agency"
                            checked={form.agency === "no"}
                            onChange={() => setForm({ ...form, agency: "no" })}
                        />
                        No
                    </label>
                </div>

            </div>

            <button className="primary" onClick={handleSubmit}>
                Create Account
            </button>

        </div>
    );
}

export default Register;