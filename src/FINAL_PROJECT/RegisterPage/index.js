import React, {useState} from 'react';
import firebase from "../Config/Firebase";
import {useHistory} from "react-router-dom";

const RegisterPage = () => {

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [FullName, SetFullName] = useState("");

    let history = useHistory();

    const OnSubmit = () => {

        const data = {
            Email : Email,
            FullName : FullName
        };

        firebase
        .auth()
        .createUserWithEmailAndPassword(Email, Password)
        .then((userCredential) => {
            console.log(userCredential.user.uid);
            alert('SUCCESS!');

            const userId = userCredential.user.uid
            firebase.database()
            .ref('users/' + userId)
            .set(data);
            SetFullName('');
            setEmail('');
            setPassword('');

            history.push("/Menu")

        })
        .catch((error) => {
            console.log(error);
            alert('ERROR!! The email is already used in another account!');
        });
    };

    return (
        <div className="p-5 bg-info text-dark">
            <br/><h2 className="text-center text-white">Create New Account</h2><br/><br/>
            <div className="form-floating mt-5">
               <input  
                    className="form-control" 
                    id="floatingName" 
                    placeholder="Jane Doe"
                    value={FullName} 
                onChange={(e)=> SetFullName(e.target.value)}/>
               <label for="floatingName">Input Your Full Name</label>
           </div>
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
           </div> <br/><br/> <br/>
            <button
                type="button" 
                onClick={OnSubmit}
                className="btn btn-primary d-grid gap-5 col-4 mx-auto">
                Create New Account
            </button>
        </div>
    )
}

export default RegisterPage;
