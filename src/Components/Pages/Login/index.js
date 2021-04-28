import React, {useState, useEffect} from 'react';
import NavBar from '../../molecules/NavBar';
import firebase from '../../../config/Firebase';
import {useHistory} from 'react-router-dom';

const Login = ({title, angka}) => {
    const [WelcomeText, setWelcomeText ] = useState("Login");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    let history = useHistory();

    useEffect(()=>{
        console.log("Component Did Mount dijalankan");
    }, []);

    useEffect(()=>{
        console.log("Component Did Update");
    }, [WelcomeText, Email, Password]);

    const handleSubmit = () => {
        // setWelcomeText("Selamat datang");
        // const data = {
        //     Email: Email,
        //     Password: Password,
        // };
        // console.log(data);
        firebase.auth().signInWithEmailAndPassword(Email, Password)
        .then((res) => history.push("/Dashboard"))
        .catch((error) => console.log("Error", Error));
    };
    return(
        <div className="container mt-2">
            <NavBar />
            <br/><h3 className="text-center fs-2">{WelcomeText}</h3>
        <div className="container mt-5">
            <h5>{title}</h5>
            <p className="form-label mt-5">Email</p>
            <input 
                className="form=control"
                placeholder="Masukan email"
                value={Email} 
                onChange={(e)=> setEmail(e.target.value)}/>
            <p className="form-label mt-3">Password</p>
            <input
                className="form=control" 
                placeholder="Masukan password" 
                type="password" 
                value={Password}
                onChange={(e)=> setPassword(e.target.value)}/>
            <br/><br/>
            <button
                type="button" 
                onClick={handleSubmit}
                className="btn btn-primary">
                Sign In
            </button>
        </div>
        </div>
    );
};


export default Login;