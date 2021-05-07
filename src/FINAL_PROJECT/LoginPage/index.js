import React, {useState, useEffect} from 'react';
import firebase from "../Config/Firebase";
import {useHistory} from "react-router-dom";

const LoginPage = () => {

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    let history = useHistory();

    useEffect(()=>{
    }, [Email, Password]);

    const handleSubmit = () => {
        firebase.auth().signInWithEmailAndPassword(Email, Password)
        .then((res) => history.push("/Dashboard"))
        .catch((error) => console.log("Error", Error));

        history.push("/ListMenu")
    };

    return (
        <div className="container mt-5"><br/>
            <h4 className="text-center fs-2">Sign In With Your Account</h4><br/><br/>
                <div className="form-floating mt-5">
               <input 
                    type="email" 
                    className="form-control" 
                    id="floatingEmail" 
                    placeholder="name@example.com"
                    value={Email} 
                    onChange={(e)=> setEmail(e.target.value)}/>
               <label for="floatingEmail">Input Your Email Address</label>
           </div>
           <div className="form-floating mt-5">
               <input
                    type="password" 
                    className="form-control" 
                    id="floatingPassword" 
                    placeholder="Password"
                    value={Password}
                    onChange={(e)=> setPassword(e.target.value)}/>
               <label for="floatingPassword">Input Your Password</label>
           </div> <br/><br/><br/>
           <button
                type="button" 
                onClick={handleSubmit}
                className="btn btn-primary">
                Sign In
            </button>
        </div>
    )
}

export default LoginPage;
