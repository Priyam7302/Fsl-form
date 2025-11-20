import React from "react";
import logo from "../assets/logo-C3RmKhzb.png"

const Header = () => {
    return (
        <header className="header">
            <div className="header-left">
                <img
                    src={logo}
                    alt="FullStack Learning"
                    className="logo"
                />
            </div>

            <nav className="header-nav">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Blog</a>
                <a href="#">Contact Us</a>
                <button className="login-btn">Login</button>
            </nav>
        </header>
    );
};

export default Header;
