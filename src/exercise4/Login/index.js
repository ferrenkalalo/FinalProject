import React, {useState} from 'react'
import NavBar from '../Navbar';

const Login = () => {
    const [UserName, setUserName ] = useState("");
    const [Password, setPassword] = useState("");

    const handleSubmit = () =>{
        const data = {
            UserName: UserName,
            Password: Password
        }; console.log(data);
    };

    return (
        <div className="container mt-2">
            <NavBar/>
            <br/><br/>
            <h3 className="text-center fs-2">Login</h3>
            <br/><br/>
            <p className="form-label">User Name</p>
            <input
                className="form-control"
                value={UserName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="please input your user name">
            </input>
            <br/><br/>
            <p className="form-label">Password</p>
            <input
                className="form-control"
                type="password"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="please input your password">
            </input>
            <br/><br/>
            <button
                className="btn btn-outline-info"
                type="button"
                onClick={handleSubmit}>
                Submit
            </button>
        </div>
    )
}

export default Login;
