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
        .then((res) => history.push("/ListMenu"))
        .catch((error) => alert("Your email or password is incorrect", Error));
    };

    return (
        <div className="p-5 bg-info text-dark"><br/><br/>
            <h2 className="text-center text-white">Sign In With Your Account</h2><br/><br/>
                <div className="form-floating mt-5">
               <input 
                    type="email" 
                    className="form-control" 
                    id="floatingEmail" 
                    placeholder="name@example.com"
                    value={Email} 
                    onChange={(e)=> setEmail(e.target.value)}/>
               <label for="floatingEmail">Input Your Email Address</label>
           </div><br/>
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
                className="btn btn-primary d-grid gap-5 col-4 mx-auto">
                Sign In
            </button><br/><br/>
           
        </div>
    )
}

export default LoginPage;
