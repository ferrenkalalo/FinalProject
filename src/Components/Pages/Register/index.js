import React, {useState} from 'react';
import NavBar from '../../molecules/NavBar';
import firebase from '../../..//config/Firebase';
import {useHistory} from 'react-router-dom';

const Register = () => {

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

            //Redirect ke halaman login
            history.push("/");

        })
        .catch((error) => {
            console.log(error);
            alert('ERROR!! The email is already used in another account!');
            //tampilkan pesan error
        });
    };

    return (
        <div className="container mt-2">
            {/* <NavBar /> */}
            <br/><h4 className="text-center fs-2">Register</h4>
            <p className="form-label mt-4">Nama Lengkap</p>
            <input 
                className="form=control"
                placeholder="Masukan nama lengkap"
                value={FullName} 
                onChange={(e)=> SetFullName(e.target.value)}/>
            <p className="form-label mt-4">Email</p>
            <input 
                className="form=control"
                placeholder="Masukan email"
                value={Email} 
                onChange={(e)=> setEmail(e.target.value)}/> <br/>
            <p className="form-label mt-4">Password</p>
            <input
                className="form=control" 
                placeholder="Minimal 6 karakter!" 
                type="password" 
                value={Password}
                onChange={(e)=> setPassword(e.target.value)}/>
            <br/><br/> <br/>
            <button
                type="button" 
                onClick={OnSubmit}
                className="btn btn-primary">
                Register New User
            </button>
        </div>
    )
}

export default Register;
