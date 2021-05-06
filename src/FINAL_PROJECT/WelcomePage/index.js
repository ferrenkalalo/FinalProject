import React from 'react'

const WelcomePage = () => {
    return (
        <div >
            <div className="p-5 mb-9 bg-info text-white">
                <br/><br/><br/><h1 className="text-center fw-bold">Hai, Welcome To ....</h1><br/><br/><br/>
                <div className="card">
                    <div className="card-body">
                        <div className="card-text text-center text-dark ">
                        <h3 className="fw-light">This website is a place where you can buy concert ticket</h3>
                        <h5 className="fw-lighter">But you need an account to continue</h5>
                        </div>
                    </div>
                </div> <br/><br/><br/><br/>
                <div className="d-grid gap-5 col-6 mx-auto">
                    <button className="btn btn-primary">Sign In</button>
                    <button className="btn btn-primary">Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default WelcomePage;
