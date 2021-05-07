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
            alert('Success!');

            //Simpan ke realtime database
            const userId = userCredential.user.uid
            firebase.database()
            .ref('users/' + userId)
            .set(data);
            SetFullName('');
            setEmail('');
            setPassword('');

            history.push("/ListMenu")

        })
        .catch((error) => {
            console.log(error);
            alert('ERROR!! The email is already used in another account!');
            //tampilkan pesan error
        });
    };

    return (
        <div className="container mt-2">
            <br/><h4 className="text-center fs-2">Create New Account</h4><br/><br/>
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
                className="btn btn-primary">
                Create New Account
            </button>
        </div>
    )
}

export default RegisterPage;
