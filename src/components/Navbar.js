import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <div>
            <Link to="/">Home</Link>
            </div>
            <div>
            <Link to="/About">About</Link>
            </div>
            <div>
            <Link to="/Contact">Contact Us</Link>
            </div>
            <div>
            <Link to="/Services">Services</Link>
            </div>

        </div>
    )
}
