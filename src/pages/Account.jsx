function Account() {
    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <div className="account-box">
            <h3 className="header">Account Settings</h3>

            <div className="profile">
                <div className="img-wrapper">
                    <img
                        src="https://randomuser.me/api/portraits/women/44.jpg"
                        alt="Profile"
                    />
                    <span className="icon">📷</span>
                </div>

                <div className="details">
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>

                </div>
            </div>

            <div className="desc">
                Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
                Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
            </div>

            <div className="bottom"></div>
        </div>
    );
}

export default Account;