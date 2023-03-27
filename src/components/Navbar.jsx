import React from 'React'
import logo from '../assets/logo192.png'

export default function Navbar() {
    return (
        <div className="navbar">
            <h3 className="nav--header">
                <img src={logo} className="nav--header-img" alt="react-logo" />
                ReactFacts
            </h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </div>
    )
};