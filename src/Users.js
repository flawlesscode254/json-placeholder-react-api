import React from 'react'
import './App.css'

function Users(props) {
    return (
        <div>
            <p>{props.title}</p>
            <img className="profile" src={props.src} alt="profile"/>
        </div>
    )
}
export default Users
