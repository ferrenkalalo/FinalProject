import React from 'react'

function Card({email, fullName, avatar}) {
    return (
        <div className="container">
        <div className="row align-items-start">
            <div className="card" style={{width: '18rem'}}>
            <img src={avatar} className="card-img-top" alt="avatar"/>
            <div className="card-body">
            <p className="card-text">{fullName}</p>
            <p className="card-text">{email}</p>
            </div>
            </div>
        </div>
        </div>
    )

    //test
}

export default Card;
