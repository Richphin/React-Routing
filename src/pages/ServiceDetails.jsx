import React from 'react'

export default function ServiceDetails(props) {
    return (
        <div>
            <h2>SERVICES AVAILABLE: {props.match.params.id}</h2>
            <p>
                Enjoy three inspiring and educative days of carefully planned and interesting
                services organised for you ranging from entreprenuership ,
                skill aquisition, idea sharing networking and all-round good 
                times.
            </p>
        </div>
    )
}
