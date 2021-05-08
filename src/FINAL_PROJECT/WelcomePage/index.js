import React from 'react';
import {useHistory} from "react-router-dom";

const WelcomePage = () => {

    let history = useHistory();

    const GoToLogin = () => {
        history.push("/LoginPage");
    }

    const GoToRegister = () => {
        history.push("/RegisterPage");
    }

    return (
        <div >
            <div className="p-5 mb-9 bg-info text-white">
                <br/><br/><br/><h1 className="text-center fw-bold">Hai, Welcome To</h1><br/>
                <h1 className="text-center fw-bold">EXO PLANET</h1><br/><br/><br/>
                <div className="card">
                    <div className="card-body">
                        <div className="card-text text-center text-dark ">
                        <h3 className="fw-lighter">This website is a place where you can buy EXO concert ticket</h3>
                        </div>
                    </div>
                </div> <br/><br/>
                <div className="d-grid gap-5 col-6 mx-auto">
                    <button 
                        className="btn btn-primary"
                        onClick={GoToLogin}>
                        Sign In
                    </button>
                    <button 
                        className="btn btn-primary"
                        onClick={GoToRegister}>
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    )
}

export default WelcomePage;
