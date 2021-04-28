import React, {useState} from 'react';
import NavBar from '../Navbar';

const Register = () => {
    const [FullName, setFullName] = useState('');
    const [UserName, setUserName] = useState('');
    const [Email, setEmail] = useState('');
    const [PhoneNumber, setPhoneNumber] = useState('');
    const [Address, setAddress] = useState('');
 
    const handleSubmit = () =>{
         const data = {
             FullName: FullName,
             UserName: UserName,
             Email: Email,
             PhoneNumber: PhoneNumber,
             Address: Address
         };
         console.log(data);
        }

    return (
        <div className="container mt-2">
            <NavBar/>
            <br/><br/>
            <h3 className="text-center fs-2">Register</h3>
            <p className="form-label">Full Name</p>
            <input
                className="form-control"
                value={FullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="please input your full name">
            </input><br/><br/>
            <p className="form-label">User Name</p>
            <input
                className="form-control"
                value={UserName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="please input your username">
            </input><br/><br/>
            <p className="form-label">Email</p>
            <input
                className="form-control"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="please input your email">
            </input><br/><br/>
            <p className="form-label">Phone Number</p>
            <input
                className="form-control"
                value={PhoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="please input your phone number">
            </input><br/><br/>
            <p className="form-label">Address</p>
            <input
                className="form-control"
                value={Address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="please input your address">
            </input><br/><br/>
            <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}>
                Register
            </button>
        </div>
    )
}

export default Register;
