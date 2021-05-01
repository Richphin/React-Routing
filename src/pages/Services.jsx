
import React from 'react'
import { Link } from "react-router-dom";

export default function services() {
    return (
        <div>
            <h2>SERVICES AVAILABLE</h2>
            <p>
                Enjoy three inspiring and educative days of carefully planned and interesting
                services organised for you ranging from entreprenuership ,
                skill aquisition, idea sharing networking and all-round good 
                times.
            </p>
            <div>
                <Link to="/Services/4">Skill Aquisition</Link>
            </div>
            <div>
                <Link to="/Services/6">Idea Sharing</Link>
            </div>
            <div>
                <Link to="/Services/8">All-round Good Times</Link>
            </div>

        </div>
    )
}