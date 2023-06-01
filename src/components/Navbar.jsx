import React from 'react'
import logo from '../assets/logo192.png'

export default function Navbar(props) {
    console.log(props);
    return (
        <nav className={props.darkMode ? "dark" : ""}>
            <h3 className="nav--header">
                <img src={logo} className="nav--header-img" alt="react-logo" />
                ReactFacts
            </h3>
            {/* <h4 className="nav--title">React Course - Project 1</h4> */}
            <div className="toggler">
                <p className="toggler--light">Light</p>
                <div className="toggler--slider" onClick={props.toggleDarkMode}>
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    )
};